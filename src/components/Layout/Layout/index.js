import styled from 'styled-components';
import defaultTheme from '../../../constants/defaultTheme';

const Layout = styled.div`
  ${props =>
    props.sidebar
      ? `
    background: ${props => props.theme.background};
    min-height: 100vh;
    flex-direction: row;
    flex: auto;
    display: flex;
    `
      : `
    background: ${props => props.theme.background};
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: auto;
    overflow-x: hidden;
      `};
`;

Layout.defaultProps = defaultTheme;
export default Layout;
