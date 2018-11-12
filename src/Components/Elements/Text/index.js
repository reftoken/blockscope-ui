import styled from 'styled-components';
import colors from '../../constants/colors';

const Text = styled.p`
  color: ${props => (props.error ? colors.error : colors.primary)};
  text-align: ${props => (props.center ? 'center' : 'left')};
  margin: ${props => (props.margin ? props.margin : 0)}px;
  font-size: ${props => (props.size ? props.size : 'medium')}
    ${props =>
      props.status &&
      `
      display: inline-block;
      margin-left: 10px;
      color: #889;
  `};
`;

export default Text;
