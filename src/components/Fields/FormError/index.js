import styled from 'styled-components';
import withTheme from '@material-ui/core/styles/withTheme';
import defaultTheme from '../../../constants/defaultTheme';

const FormError = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${props => props.theme.error};
`;

FormError.defaultProps = defaultTheme;

export default withTheme()(FormError);
