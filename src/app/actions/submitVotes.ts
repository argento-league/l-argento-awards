"use server";

import { ternas } from "@/data/ternas";
import { getVoterByCode, submitVotesSupabase, updateVoter } from "@/lib/supabase";

export type VoteSubmission = {
  category: number;
  selection:
    | CodeVoteSelection
    | PlayerVoteSelection
    | StreamerVoteSelection
    | null;
};

type CodeVoteSelection = {
  value: string;
};

type PlayerVoteSelection = {
  id: number;
  name: string;
  team?: string;
};

type StreamerVoteSelection = {
  id: number;
  name: string;
  channel?: string;
};

type SupabaseVote = {
  terna_id: number;
  value: string;
  voter_id: number;
};

const isCodeSelection = (
  selection: CodeVoteSelection | PlayerVoteSelection | StreamerVoteSelection
): selection is CodeVoteSelection => {
  return "value" in selection;
};

const isPlayerOrStreamerSelection = (
  selection: CodeVoteSelection | PlayerVoteSelection | StreamerVoteSelection
): selection is PlayerVoteSelection | StreamerVoteSelection => {
  return "id" in selection;
};

function mapVotesToSupabase(
  votes: VoteSubmission[],
  voter_id: number
): SupabaseVote[] {
  return votes
    .filter((vote) => {
      const terna = ternas.find((t) => t.id === vote.category);
      return (
        terna?.type !== "code" && vote.selection && "name" in vote.selection
      );
    })
    .map((vote) => ({
      terna_id: vote.category,
      value: (vote.selection as PlayerVoteSelection | StreamerVoteSelection)
        .name,
      voter_id: voter_id,
    }));
}

export async function submitVotes(votes: VoteSubmission[]) {
  try {
    // Validate that all required categories have been voted
    let voter_id = 1;

    if (votes.length === 0) {
      throw new Error("No votes submitted");
    }

    // Validate each vote
    for (const vote of votes) {
      if (!vote.selection) {
        throw new Error(`No selection made for category: ${vote.category}`);
      }

      // Validate that the selection exists in our data
      const category = ternas.find((terna) => terna.id === vote.category);
      if (!category) {
        throw new Error(`Invalid category: ${vote.category}`);
      }
      if (category.type === "code") {
        if (!isCodeSelection(vote.selection) || !vote.selection.value) {
          throw new Error(`No value provided for code: ${vote.category}`);
        }
        const { id } = await getVoterByCode(vote.selection.value.toLowerCase());
        voter_id = id;
      } else {
        if (!isPlayerOrStreamerSelection(vote.selection)) {
          throw new Error(`Invalid selection for category: ${vote.category}`);
        }
        const playerOrStreamerSelection = vote.selection;
        if (
          !category.options.find(
            (option) => option.id === playerOrStreamerSelection.id
          )
        ) {
          throw new Error(`Invalid selection for category: ${vote.category}`);
        }
      }
    }

    // Map votes to Supabase format
    const supabaseVotes = mapVotesToSupabase(votes, voter_id);
    await submitVotesSupabase(supabaseVotes);
    await updateVoter(voter_id, true);
    console.log("Mapped votes for Supabase:", supabaseVotes);

    return {
      success: true,
      message: "Votes submitted successfully",
    };
  } catch (error) {
    console.error("Error submitting votes:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "An error occurred while submitting votes",
    };
  }
}
