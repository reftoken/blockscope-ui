import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Spinner,
  MobileMenu,
  List,
  Image,
  Text,
  Title,
  Spin,
  FlexBox,
  Wrapper,
  Layout,
  Modal
} from '../src';
import demoImage from '../static/demo.jpg';

storiesOf('Spinner', module)
  .add('Default', () => <Spinner />)
  .add('With text', () => <Spinner>Loading</Spinner>);

storiesOf('MobileMenu', module).add('Default', () => <MobileMenu />);
storiesOf('List', module).add('Defaul', () => (
  <div>
    <List>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </List>
  </div>
));

storiesOf('Image', module).add('Default', () => <Image src={demoImage} />);

storiesOf('Text', module).add('Default', () => <Text>Hello World!</Text>);

storiesOf('Title', module).add('Default', () => <Title>Hello World!</Title>);

storiesOf('Spin', module).add('Default', () => (
  <Spin>
    <Image src={demoImage} />
  </Spin>
));

storiesOf('FlexBox', module).add('Default', () => (
  <FlexBox>
    <Image src={demoImage} />
  </FlexBox>
));

storiesOf('Wrapper', module).add('Default', () => (
  <Wrapper>
    <Image src={demoImage} />
  </Wrapper>
));

storiesOf('Layout', module).add('Default', () => (
  <Layout>
    <Image src={demoImage} />
  </Layout>
));

storiesOf('Modal', module).add('Default', () => (
  <Modal>
    <Image src={demoImage} />
  </Modal>
));
