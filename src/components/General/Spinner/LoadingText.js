import styled from 'styled-components';
import { spin4 } from './utils';
import defaultTheme from '../../../constants/defaultTheme';

const LoadingText = styled.p`
text-align: center;
margin: 5px 0;
color: ${props => props.theme.secondary};
font-weight: bold;
overflow: hidden;
height: 1.3em;
margin-top: -0.3em;
line-height: 1.5em;
vertical-align: text-bottom;

&::after {
  display: inline-table;
  white-space: pre;
  text-align: left;
  content: '${'\\A.\\A..\\A...'}';
  animation: ${spin4} 2s steps(4) infinite;
}
`;

LoadingText.defaultProps = defaultTheme;
export default LoadingText;
