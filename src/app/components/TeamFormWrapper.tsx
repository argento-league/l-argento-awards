'use client';

import { Button, Container, Typography, Alert, Snackbar, CircularProgress } from '@mui/material';
import { TeamForm } from './TeamForm';
import {  ternas } from '@/data/ternas';
import { useState } from 'react';
import { submitVotes } from '../actions/submitVotes';
import { Player, Team, Streamer, Code } from '@/types';

const isCode = (object: unknown): object is Code => {
  return typeof object === 'object' && object !== null && 'value' in object;
};

const isPlayer = (object: unknown): object is Player => {
  return typeof object === 'object' && object !== null && 'team' in object;
};

const isStreamer = (object: unknown): object is Streamer => {
  return typeof object === 'object' && object !== null && 'channel' in object;
};

export function TeamFormWrapper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState<(Team | Player | Streamer | Code | null)[]>(Array(ternas.length).fill(null));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleNext = async () => {
    // Validate that a selection has been made for the current step
    if (!selections[currentIndex]) {
      setSnackbar({
        open: true,
        message: 'Por favor selecciona una opción antes de continuar',
        severity: 'error'
      });
      return;
    }

    if(currentIndex < ternas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === ternas.length - 1) {
      // Submit the form
      setIsSubmitting(true);
      try {
        
        const votes = selections.map((selection, index) => ({
          category: ternas[index].id,
          selection: selection ? (
            isCode(selection) ? {
              value: selection.value,
            } : {
              id: selection.id,
              name: selection.name,
              ...(isPlayer(selection) && { team: selection.team }),
              ...(isStreamer(selection) && { channel: selection.channel })
            }
          ) : null
        }));

        console.log('Submitting votes:', votes);
        const result = await submitVotes(votes);
        console.log('Submission result:', result);

        setSnackbar({
          open: true,
          message: result.message,
          severity: result.success ? 'success' : 'error'
        });

        if (result.success) {
          setCurrentIndex(currentIndex + 1);
        }
      } catch (error) {
        console.error('Error submitting votes:', error);
        setSnackbar({
          open: true,
          message: 'An error occurred while submitting votes',
          severity: 'error'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  const handlePrevious = () => {
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const handleSelection = (selection: Team | Player | Streamer | Code | null) => {
    const newSelections = [...selections];
    newSelections[currentIndex] = selection;
    setSelections(newSelections);
  }

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  if (currentIndex === ternas.length) {
    return (
      <Container>
        <Typography variant="h5" component="h5" gutterBottom>
          ¡Gracias por tu votación!
        </Typography>
        <Typography variant="body1" component="div">
          {selections.map((selection, index) => (
            <div key={index}>
              <strong>{ternas[index].name}:</strong> {
                isCode(selection) ? selection.value :
                selection?.name || 'No seleccionado'
              }
            </div>
          ))}
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Typography variant="h5" component="h5" gutterBottom>
        {ternas[currentIndex].name}
      </Typography>
      <TeamForm
        terna={ternas[currentIndex]}
        selectedOption={selections[currentIndex]}
        onSelectionChange={handleSelection}
      />
      <Container style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px" }}>
        <Button
          variant="contained"
          color="primary"
          disabled={currentIndex === 0 || isSubmitting}
          onClick={handlePrevious}
        >
          Anterior
        </Button>
        <Typography variant="h6" component="h6">
          {currentIndex + 1}/{ternas.length}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={handleNext}
        >
          {isSubmitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            currentIndex === ternas.length - 1 ? 'Finalizar' : 'Siguiente'
          )}
        </Button>
      </Container>
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}