import React from 'react';
import PropTypes from 'prop-types';
import { UnorderedList, OrderedList } from './List';

const defaultProps = {
  ordered: false
};

const propTypes = {
  ordered: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

const List = ({ ordered, children, ...props }) => {
  if (ordered) {
    return <OrderedList {...props}>{children}</OrderedList>;
  }
  return <UnorderedList {...props}>{children}</UnorderedList>;
};

List.defaultProps = defaultProps;
List.propTypes = propTypes;
export default List;
