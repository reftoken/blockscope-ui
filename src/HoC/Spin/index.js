import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const animation = css`
  ${spin} 1s linear infinite
`;

const Spin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${props => props.animate && animation};
`;

export default Spin;
