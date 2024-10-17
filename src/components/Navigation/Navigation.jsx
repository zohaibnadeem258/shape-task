import { Box, Button } from '@mui/material';
import './Navigation.scss'

const Navigation = ({ currentQuestionIndex, totalQuestions, onNext, onPrevious, onSubmit, isNextDisabled }) => {
  
  // Next question on pressing enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isNextDisabled) {
      onNext()
    }
  };

  return (
    <Box className='navigation' mt={4}>
      {currentQuestionIndex !== 0 && 
        <Button
          variant="outlined"
          onClick={onPrevious}
          sx={{ mr: 2 }}
          className='back-button'
        >
          Back
        </Button>
      }

      {currentQuestionIndex < totalQuestions - 1 ? (
        <>
          <Button 
            variant="contained"
            onClick={onNext}
            className='next-button'
            onKeyDown={handleKeyDown}
            disabled={currentQuestionIndex === 1 ? isNextDisabled : false}
          >
            OK
          </Button>
          <span className='text'>or press Enter</span>
        </>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          sx={{ ml: 'auto' }}
          className='next-button'
        >
          Submit
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
