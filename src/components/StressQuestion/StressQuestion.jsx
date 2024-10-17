import React, { useState } from 'react'
import { Box, Typography } from '@mui/material';
import './StressQuestion.scss'

const StressQuestion = ({ question, onAnswerChange, answer }) => {

  const [text, setText] = useState('')

  const handleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 250) {
      setText(inputText)
      onAnswerChange(question.id, e.target.value);
    }
  };

  return (
    <Box>
      <Typography variant='h5' className='sub-text'>Please enter up to 250 characters below</Typography>
      <textarea 
        value={text}
        onChange={handleChange}
      />
    </Box>
  )
}

export default StressQuestion