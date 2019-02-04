import styled from 'styled-components';

const Wrapper = styled.div`
  height: ${props => (props.height ? props.height : 'auto')};
  max-width: ${props => (props.width ? props.width : 'none')};
  top: ${props => (props.top ? props.top : 'auto')};
  left: ${props => (props.left ? props.left : 'auto')};
  position: ${props => (props.pos ? props.pos : 'static')};
  float: ${props => (props.float ? props.float : 'none')};
  margin: ${props => (props.margin ? props.margin : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
  overflow-x: ${props => (props.scrollablex ? 'auto' : 'visible')};
`;

export default Wrapper;
