import styled from 'styled-components';
import FlatPagination from 'material-ui-flat-pagination';

/* stylelint-disable selector-combinator-blacklist */
const Pagination = styled(FlatPagination)`
  margin-left: 30px;
  text-align: center;
  > button:first-child {
    float: left;
  }
  > button:last-child {
    float: right;
  }
`;

export default Pagination;
