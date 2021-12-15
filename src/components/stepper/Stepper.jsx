import { Box, Button, Step, StepButton, Stepper, Typography } from '@mui/material';
import * as React from 'react';



export const StepperComponent = ({data}) => {
    const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return data.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };


  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {data.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label.name}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {
                data.map((element,i) => i === activeStep && element.contenido  )
            }
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Anterior
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button 
              variant="contained"
               sx={{ mr: 1 }}
                onClick={()=> setActiveStep(activeStep + 1)}
                disabled={(activeStep) === (data.length -1)}
               >
                Siguiente
              </Button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
