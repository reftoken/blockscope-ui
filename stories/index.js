import React from 'react';
import StepLabel from '@material-ui/core/StepLabel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { storiesOf } from '@storybook/react';
import {
  Spinner,
  CloseIcon,
  MobileMenu,
  Popup,
  List,
  Image,
  DatePickerField,
  Stepper,
  Step,
  FormField,
  SelectField,
  CardActions,
  CardText,
  Pagination,
  InfoDialog,
  Text,
  SearchBar,
  Title,
  Spin,
  FlexBox,
  Card,
  CountModal,
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
    <p>With ordered prop</p>
    <List ordered>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </List>
  </div>
));

storiesOf('SelectField', module).add('Default', () => (
  <SelectField meta={{}} />
));

storiesOf('InfoDialog', module).add('Default', () => <InfoDialog />);

storiesOf('Pagination', module).add('Default', () => <Pagination />);

storiesOf('Stepper', module).add('Default', () => (
  <Stepper>
    <Step>
      <StepLabel>Hello world</StepLabel>
    </Step>
  </Stepper>
));

storiesOf('SearchBar', module).add('Default', () => <SearchBar />);

storiesOf('DatePickerField', module).add('Default', () => (
  <MuiThemeProvider>
    <DatePickerField />
  </MuiThemeProvider>
));

storiesOf('CountModal', module).add('Default', () => (
  <CountModal text="hello world" count="1" icon={<CloseIcon />} />
));

storiesOf('Image', module).add('Default', () => <Image src={demoImage} />);

storiesOf('FormField', module).add('Default', () => <FormField meta={{}} />);

storiesOf('Card', module).add('Default', () => (
  <Card>
    <CardActions>
      <CardText>Hello</CardText>
    </CardActions>
  </Card>
));

storiesOf('Popup', module).add('Default', () => <Popup>Hell world</Popup>);

storiesOf('Icons', module).add('Default', () => <CloseIcon fill="black" />);

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

storiesOf('Title', module).add('Default', () => (
  <div>
    <Title heading="1">Hello World!</Title>
    <Title heading="2">Hello World!</Title>
    <Title heading="3">Hello World!</Title>
    <Title heading="4">Hello World!</Title>
    <Title heading="5">Hello World!</Title>
    <Title heading="6">Hello World!</Title>
    <Title capitalize>capitalize</Title>
    <Title center>center</Title>
  </div>
));

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
