// StyledPagination.js
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

const StyledPagination = styled(Pagination)({
  '& .Mui-selected': {
    backgroundColor: '#6161FF', // Change this to your desired color
    color: '#ffffff', // Change this to your desired text color
  },
});

export default StyledPagination;
