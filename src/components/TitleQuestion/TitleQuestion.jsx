import { FormControl, MenuItem, Select } from '@mui/material';
import './TitleQuestion.scss'

const TitleQuestion = ({ question, onAnswerChange, answer }) => {

  const handleChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: '100%' }}>
      <Select
        value={answer || ''}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Select</em>;
          }
          return selected
        }}
        className='dropdown'
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: 'rgb(146 125 142)',
              borderBottomRightRadius: '20px',
              borderBottomLeftRadius: '20px',
            }
          },
        }}
      >
        {question.options.map((option, index) => (
          <MenuItem 
            value={option}
            key={index}
            className='option'
            sx={{
              color: '#fff',
              '&:hover, &:focus': {
                backgroundColor: '#fff !important',
                color: 'rgb(146 125 142)'
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default TitleQuestion