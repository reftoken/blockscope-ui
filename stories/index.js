import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('MobileMenu', module)
  .add('Default', () => <MobileMenu />)
  .add('With props', () => <MobileMenu collapsed />);
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

storiesOf('Text', module)
  .add('Default', () => <Text>Hello World!</Text>)
  .add('With props', () => (
    <div>
      <p>With error prop:</p>
      <Text error>Hello World!</Text>
      <p>With status prop:</p>
      <Text status>Hello World!</Text>
    </div>
  ));

storiesOf('Title', module).add('Default', () => <Title>Hello World!</Title>);

storiesOf('Spin', module).add('Default', () => (
  <Spin animate>
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
