import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 200px;

  @media screen and (max-width: 992px) {
    right: 10px;
    left: auto;
  }
`;

export default Wrapper;
