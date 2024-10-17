import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import './Questions.scss'
import TitleQuestion from '../TitleQuestion/TitleQuestion';
import BirthQuestion from '../BirthQuestion/BirthQuestion';
import PerformanceQuestion from '../PerformanceQuestion/PerformanceQuestion';
import StressQuestion from '../StressQuestion/StressQuestion';
import BalanceQuestion from '../BalanceQuestion/BalanceQuestion';
import { AiOutlineInfoCircle } from "react-icons/ai";

const Questions = ({ question, onAnswerChange, onValidationChange, answer }) => {

  return (
    <Box className='question' mb={10}>
      <Box className='title-container'>
        <span className='question-number'>{question.id}</span>
        <Typography variant="h5" className='title' gutterBottom>
          {question.question}&nbsp;
          {question.info !== 'NA' &&
            <Tooltip title={question.info} placement="right">
              <IconButton className='tooltip'>
                <AiOutlineInfoCircle />
              </IconButton>
            </Tooltip>
          }
        </Typography>
      </Box>
      {question.subQuestion && 
        <Box className='title-container'>
          <span className='question-number'>{question.subQuestionNumber}</span>
          <Typography variant="h5" className='title' gutterBottom>{question.subQuestion}</Typography>
        </Box>
      }

      {question.id === 1 &&
        <TitleQuestion 
          question={question}
          onAnswerChange={onAnswerChange}
          answer={answer}
        />
      }
      {question.id === 2 && 
        <BirthQuestion 
          question={question}
          onAnswerChange={onAnswerChange}
          onValidationChange={onValidationChange}
        />
      }
      {question.id === 3 && 
        <PerformanceQuestion 
          question={question}
          onAnswerChange={onAnswerChange}
          answer={answer}
        />
      }
      {question.id === 4 &&
        <StressQuestion 
          question={question}
          onAnswerChange={onAnswerChange}
          answer={answer}
        />
      }
      {question.id === 5 &&
        <BalanceQuestion 
          question={question}
          onAnswerChange={onAnswerChange}
          answer={answer}
        />
      }
    </Box>
  );
};

export default Questions;
