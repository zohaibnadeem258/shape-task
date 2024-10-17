import { Box, Grid2 as Grid, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './BirthQuestion.scss';

const BirthQuestion = ({ question, onAnswerChange, onValidationChange }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [errors, setErrors] = useState({ 
    day: '',
    month: '',
    year: ''
  });

  // Validation check for empty or invalid entries
  useEffect(() => {
    const isValid = day && month && year && !errors.day && !errors.month && !errors.year;
    onValidationChange(isValid);
  }, [day, month, year, errors, onValidationChange]);

  const handleDayChange = (e) => {
    const value = e.target.value;
    // Validation for day to be between 1 and 31
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 31)) {
      setDay(value);
      onAnswerChange(question.id, { day: value, month, year })
      setErrors({ ...errors, day: '' });
    } else {
      setErrors({ ...errors, day: 'Day must be between 1 and 31' });
    }
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    // Validation for month to be between 1 and 12
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 12)) {
      setMonth(value);
      onAnswerChange(question.id, { day, month: value, year })
      setErrors({ ...errors, month: '' });
    } else {
      setErrors({ ...errors, month: 'Month must be between 1 and 12' });
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4) {
      setYear(value);
      onAnswerChange(question.id, { day, month, year: value })
      if (value.length === 4) {
        // Validation for year to be between 1920 and 2006
        if (parseInt(value) >= 1920 && parseInt(value) <= 2006) {
          setErrors({ ...errors, year: '' });
        } else {
          setErrors({ ...errors, year: 'Year must be between 1920 and 2006' });
        }
      } else {
        setErrors({ ...errors, year: '' });
      }
    }
  };

  return (
    <Box className='input-container'>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{ borderRadius: '20px' }}>
          <TextField
            placeholder='DD'
            value={day}
            onChange={handleDayChange}
            className='input'
            required
            sx={{
              '& input': {
                color: 'white',
              },
            }}
          />
          {errors.day && <p className='error'>{errors.day}</p>}
        </Grid>
        <Grid item xs={4}>
          <TextField
            placeholder='MM'
            value={month}
            onChange={handleMonthChange}
            className='input'
            sx={{
              '& input': {
                color: 'white',
              },
            }}
          />
          {errors.month && <p className='error'>{errors.month}</p>}
        </Grid>
        <Grid item xs={4}>
          <TextField
            placeholder='YYYY'
            value={year}
            onChange={handleYearChange}
            className='input'
            sx={{
              '& input': {
                color: 'white',
              },
            }}
          />
          {errors.year && <p className='error'>{errors.year}</p>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BirthQuestion;
