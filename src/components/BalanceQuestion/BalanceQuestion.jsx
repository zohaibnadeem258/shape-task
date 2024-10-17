import React, { useState } from 'react'
import { Box, Button } from '@mui/material';
import './BalanceQuestion.scss'

const BalanceQuestion = ({ question, onAnswerChange, answer }) => {

  const handleChange = (value) => {
    onAnswerChange(question.id, value);
  };

  return (
    <Box mt={2} >
      {question.options.map((option, index) => {
        const key = Object.keys(option)[0];
        const value = option[key];
        return (
          <Button 
            className='balance-option'
            key={index}
            onClick={() => handleChange(value)}
            sx={{
              '&:focus': {
                backgroundColor: '#fff !important',
              }
            }}
          >
            <span className='letter'>{key}</span>
            {value}
          </Button>
        )
      })}
    </Box>
  )
}

export default BalanceQuestion