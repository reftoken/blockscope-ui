import styled from 'styled-components';
import defaultTheme from '../../../constants/defaultTheme';

const FormError = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${props => props.theme.error};
`;

FormError.defaultProps = defaultTheme;

export default FormError;
