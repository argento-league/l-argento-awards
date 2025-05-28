import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
) 

const getTernas = async () => {
  const { data, error } = await supabase.from('Terna').select('*')
  if (error) {
    console.error(error)
  }
  return data
}

interface submitVotesProps {
  terna_id: number;
  value: string;
  voter_id: number
}

export const submitVotesSupabase = async (votes: submitVotesProps[]) => {
  const { data, error } = await supabase.from('Vote').insert(votes)
  if (error) {
    console.log("Error submitting votes:", error);
    console.error(error)
  }
  console.log("Votes submitted:", data);
  return data
}

export const getVoterByCode = async (code: string) => {
  const { data, error } = await supabase
    .from('Voter')
    .select('*')
    .eq('code', code)
    .eq('voted', false)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      throw new Error(`Participante con codigo ${code} no encontrado o ya ha votado`);
    }
    throw new Error(`Error fetching voter: ${error.message}`);
  }

  return data;
}

export const updateVoter = async (voter_id: number, voted: boolean) => {
  const { data, error } = await supabase.from('Voter').update({ voted: voted }).eq('id', voter_id)
  if (error) {
    console.error(error)
  }
  return data
}

export default getTernas