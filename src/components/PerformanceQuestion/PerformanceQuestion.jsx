import React from 'react'
import { Box, Button, Grid2 as Grid } from '@mui/material';
import './PerformanceQuestion.scss'

const PerformanceQuestion = ({ question, onAnswerChange, answer }) => {

  const handleClick = (option) => {
    onAnswerChange(question.id, option);
  };

  return (
    <Box mt={2}>
      <Grid container spacing={5} justifyContent='center'>
        {question.options.map((option, index) => (
          <Grid item key={index} lg={4}>
            <Button
              onClick={() => handleClick(option)}
              className='option-button'
              sx={{
                '&:focus': {
                  backgroundColor: '#fff !important',
                }
              }}
            >
              {option}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PerformanceQuestion