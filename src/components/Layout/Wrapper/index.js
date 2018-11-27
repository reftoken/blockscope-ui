import styled from 'styled-components';

const Wrapper = styled.div`
  top: ${props => (props.top ? props.top : 'auto')};
  left: ${props => (props.left ? props.left : 'auto')};
  position: ${props => (props.pos ? props.pos : 'static')};
  float: ${props => (props.float ? props.float : 'none')};
  margin: 0;
  padding: 0;
  overflow-x: ${props => (props.scrollablex ? 'auto' : 'visible')};
`;

export default Wrapper;
