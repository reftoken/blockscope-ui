import styled from 'styled-components';
import { spin } from './utils';
import defaultTheme from '../../../constants/defaultTheme';

const colors = defaultTheme.theme;

const Loader = styled.div`
  border: 8px solid ${colors.black90};
  border-radius: 50%;
  border-top: 8px solid ${colors.secondary};
  border-bottom: 8px solid ${colors.secondary};
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 5px;
`;

export default Loader;
