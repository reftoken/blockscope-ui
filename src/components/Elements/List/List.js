import styled, { css } from 'styled-components';

const baseStyles = css`
  padding: 0;
  list-style-position: inside;
`;

export const UnorderedList = styled.ul`
  ${baseStyles}
`;
export const OrderedList = styled.ol`
  ${baseStyles}
`;
