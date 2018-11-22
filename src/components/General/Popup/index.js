import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../../Elements';
import Dimmer from './Dimmer';
import Wrapper from './Wrapper';
import IconWrapper from './IconWrapper';
import { CloseIcon } from '../../Icons';

const defaultProps = {
  title: ''
};

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

const Popup = ({ title, children, onClose }) => (
  <Dimmer
    onClick={event => {
      if (event.currentTarget !== event.target) {
        return;
      }
      onClose(event);
    }}
  >
    <Wrapper>
      <div>
        <Title style={{ opacity: 0.4, margin: 0 }} center heading="2">
          {title}
        </Title>
        <IconWrapper>
          <CloseIcon onClick={event => onClose(event)} />
        </IconWrapper>
      </div>
      {children}
      <div />
    </Wrapper>
  </Dimmer>
);

Popup.defaultProps = defaultProps;
Popup.propTypes = propTypes;

export default Popup;
