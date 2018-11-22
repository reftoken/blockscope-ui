import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';

const backgroundColors = {
  info: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error',
}

const StyledSnackbar = styled(Snackbar)`
  && div {
    background-color: ${props =>
      props.type
        ? props.theme[backgroundColors[props.type]]
        : `${props.theme.secondary}`};
    color: black;
  }
`;

export default StyledSnackbar;
