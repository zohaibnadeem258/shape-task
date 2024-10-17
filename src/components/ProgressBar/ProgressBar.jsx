import { Box, LinearProgress } from '@mui/material';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
      <Box width="100%" mt={1}>
        <LinearProgress 
          variant="determinate"
          value={progress}
          sx={{
            backgroundColor: '#d4d1d7',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#4e3c4c',
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default ProgressBar;
