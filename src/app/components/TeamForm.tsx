"use client";

import {
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Autocomplete,
} from "@mui/material";
import { Streamer, Player, Team, Code, Terna } from "@/types";

type FormProps = {
  terna: Terna;
  selectedOption?: Team | Player | Streamer | Code | null;
  onSelectionChange: (selection: Team | Player | Streamer | Code | null) => void;
};

type SmallFormProps = {
  options: Team[] | Player[] | Streamer[];
  selectedOption?: Team | Player | Streamer | null;
  onSelectionChange: (selection: Team | Player | Streamer | null) => void;
};

type CodeFormProps = {
  selectedOption?: Code | null;
  onSelectionChange: (selection: Code | null) => void;
};

const isCode = (object: unknown): object is Code => {
  return (
    typeof object === 'object' &&
    object !== null &&
    'value' in object
  );
};

export const TeamForm = ({ terna, selectedOption, onSelectionChange }: FormProps) => {
  // Handle code form type
  if (terna.type === "code") {
    return (
      <CodeForm 
        selectedOption={isCode(selectedOption) ? selectedOption : null}
        onSelectionChange={onSelectionChange as (selection: Code | null) => void}
      />
    );
  }

  if (terna.options.length > 10) {
    return (
      <BigTeamForm 
        selectedOption={selectedOption as Team | Player | Streamer | null} 
        options={terna.options} 
        onSelectionChange={onSelectionChange as (selection: Team | Player | Streamer | null) => void}
      />
    );
  }

  return (
    <SmallTeamForm 
      selectedOption={selectedOption as Team | Player | Streamer | null} 
      options={terna.options} 
      onSelectionChange={onSelectionChange as (selection: Team | Player | Streamer | null) => void}
    />
  );
};

export const CodeForm = ({ selectedOption, onSelectionChange }: CodeFormProps) => {
  return (
    <Container>
      
      <TextField
        label="Codigo de votacion"
        value={selectedOption?.value || ''}
        onChange={(e) => {
          onSelectionChange({ value: e.target.value } as Code);
        }}
        fullWidth
      />
    </Container>
  );
};

export const SmallTeamForm = ({ options, selectedOption, onSelectionChange }: SmallFormProps) => {
  return (
    <Container>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={selectedOption?.id?.toString() || ''}
        onChange={(e) => {
          const newValue = options.find((option) => option.id === Number(e.target.value)) || null;
          onSelectionChange(newValue);
        }}
      >
        {options.map((option) => (
          <FormControlLabel 
            key={option.id}
            value={option.id.toString()}
            control={<Radio />} 
            label={
              'team' in option 
                ? `${option.name} - ${option.team}`
                : option.name
            } 
          />
        ))}
      </RadioGroup>
    </Container>
  );
};

export const BigTeamForm = ({ options, selectedOption, onSelectionChange }: SmallFormProps) => {
  return (
    <Container>
      <Autocomplete
        value={selectedOption}
        onChange={(_, newValue) => {
          onSelectionChange(newValue);
        }}
        options={options}
        getOptionLabel={(option) => 
          'team' in option 
            ? `${option.name} - ${option.team}`
            : option.name
        }
        renderInput={(params) => <TextField {...params} />}
      />
    </Container>
  );
};
