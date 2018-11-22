import React from 'react';
import { PropTypes } from 'prop-types';
import Text from '../../Elements/Text';
import Modal from '../../Layout/Modal';
import IconModal from './IconModal';

const propTypes = {
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  icon: PropTypes.node
};

const CountModal = ({ count, text, color, icon }) => (
  <Modal>
    <IconModal color={color} noBorder>
      {icon} {count}
    </IconModal>{' '}
    <Text center margin="10px 0 0 0">
      {text}
    </Text>
  </Modal>
);

CountModal.propTypes = propTypes;

export default CountModal;
