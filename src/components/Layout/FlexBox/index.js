import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  align-items: ${props => (props.align ? props.align : 'stretch')};
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  max-width: ${props => (props.width ? props.width : 'none')};
  margin: ${props => (props.margin ? props.margin : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
  height: ${props => (props.height ? props.height : 'auto')};
`;

export default FlexBox;
