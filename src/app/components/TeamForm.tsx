"use client";

import {
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Autocomplete,
  Checkbox,
  Box,
} from "@mui/material";
import { Streamer, Player, Team, Code, Terna, Video, Option, Image } from "@/types";

type FormProps = {
  terna: Terna;
  selectedOption?: Team | Player | Streamer | Code | null;
  onSelectionChange: (selection: Team | Player | Streamer | Code | null) => void;
};

type SmallFormProps = {
  options: Team[] | Player[] | Streamer[] | Option[] |  Video[] | Image[];
  selectedOption?: Team | Player | Streamer | Option | Video | Image | null;
  onSelectionChange: (selection: Team | Player | Streamer | Option | Video | Image | null) => void;
};

type CodeFormProps = {
  selectedOption?: Code | null;
  onSelectionChange: (selection: Code | null) => void;
};

type VideoFormProps = {
  options: Video[];
  selectedOption?: Video | null;
  onSelectionChange: (selection: Video | null) => void;
};

type ImageFormProps = {
  options: Team[];
  selectedOption?: Team | null;
  onSelectionChange: (selection: Team | null) => void;
};

const isCode = (object: unknown): object is Code => {
  return (
    typeof object === 'object' &&
    object !== null &&
    'value' in object
  );
};

const ImageForm = ({ options, selectedOption, onSelectionChange }: ImageFormProps) => {
  return (
    <Container>
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 2,
        justifyContent: 'center'
      }}>
        {options.map((image) => (
          <Box 
            key={image.id} 
            sx={{ 
              width: '100%',
              maxWidth: '340px',
              flex: {
                xs: '1 1 100%',
                sm: '1 1 300px'
              },
              display: 'flex',
              flexDirection: 'column',
              height: '380px',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius: 1,
              overflow: 'hidden'
            }}
          >
            <Box sx={{ 
              flex: 1,
              position: 'relative',
              paddingBottom: '100%',
              overflow: 'hidden'
            }}>
              <img 
                src={image.logo} 
                alt={image.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '8px'
                }}
              />
            </Box>
            <Box sx={{ 
              p: 1,
              borderTop: '1px solid rgba(0, 0, 0, 0.12)',
              backgroundColor: 'background.paper'
            }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedOption?.id === image.id}
                    onChange={(e) => {
                      onSelectionChange(e.target.checked ? image : null);
                    }}
                  />
                }
                label={image.name}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
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

  if (terna.type === "video") {
    return (
      <VideoForm
        options={terna.options as Video[]}
        selectedOption={selectedOption as Video | null}
        onSelectionChange={onSelectionChange as (selection: Video | null) => void}
      />
    );
  }

  if (terna.type === "image") {
    return (
      <ImageForm
        options={terna.options as Team[]}
        selectedOption={selectedOption as Team | null}
        onSelectionChange={onSelectionChange as (selection: Team | null) => void}
      />
    );
  }

  if (terna.options.length > 10) {
    return (
      <BigTeamForm 
        selectedOption={selectedOption as Team | Player | Streamer | Option |  Video | Image | null} 
        options={terna.options} 
        onSelectionChange={onSelectionChange as (selection: Team | Player | Streamer | Option |  Video | Image | null) => void}
      />
    );
  }

  return (
    <SmallTeamForm 
      selectedOption={selectedOption as Team | Player | Streamer | Option | null} 
      options={terna.options} 
      onSelectionChange={onSelectionChange as (selection: Team | Player | Streamer | Option | Code | Video | Image | null) => void}
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

export const VideoForm = ({ options, selectedOption, onSelectionChange }: VideoFormProps) => {
  const getEmbedUrl = (url: string) => {
    // Convert YouTube URL to embed URL
    const videoId = url.split('https://youtu.be/')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  return (
    <Container>
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 2,
        justifyContent: 'center'
      }}>
        {options.map((video) => (
          <Box 
            key={video.id} 
            sx={{ 
              width: '100%',
              maxWidth: '340px',
              flex: {
                xs: '1 1 100%',
                sm: '1 1 300px'
              },
              display: 'flex',
              flexDirection: 'column',
              height: '380px',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius: 1,
              overflow: 'hidden'
            }}
          >
            <Box sx={{ 
              flex: 1,
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio for videos
              overflow: 'hidden'
            }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                src={getEmbedUrl(video.url)}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
            <Box sx={{ 
              p: 1,
              borderTop: '1px solid rgba(0, 0, 0, 0.12)',
              backgroundColor: 'background.paper'
            }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedOption?.id === video.id}
                    onChange={(e) => {
                      onSelectionChange(e.target.checked ? video : null);
                    }}
                  />
                }
                label={video.name}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
