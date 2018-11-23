import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';

/* stylelint-disable selector-combinator-blacklist */
const CheckboxField = styled(Checkbox)`
  input[type='checkbox'] + div > div {
    transform: translateY(50%);
  }
`;

export default CheckboxField;
