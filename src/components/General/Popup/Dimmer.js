import styled from 'styled-components';

const Dimmer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 9999999999999999999999;
  top: 0;
  bottom: 0;
  right: 0;
  left: -250px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default Dimmer;
