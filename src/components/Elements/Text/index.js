import styled from 'styled-components';
import defaultTheme from '../../../constants/defaultTheme';

const Text = styled.p`
  color: ${props => (props.error ? props.theme.error : props.theme.primary)};
  text-align: ${props => (props.center ? 'center' : 'left')};
  margin: 0px;
  font-size: ${props => (props.size ? props.size : 'medium')}
    ${props =>
      props.status &&
      `
      display: inline-block;
      margin-left: 10px;
      color: ${props.theme.black54};
  `};
`;

Text.defaultProps = defaultTheme;

export default Text;
