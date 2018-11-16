import { lighten, darken } from 'polished';

class Colors {
  primary = '#001529';
  secondary = '#1890ff';
  success = '#43A047';
  error = '#f44336';
  warning = '#ffc400';
  black = '#000000';
  white = '#ffffff';
  black30 = lighten(0.3, this.black);
  black90 = lighten(0.9, this.black);
  background = '#fcfdff';
  /*gray = '#e0e0e0';
  bluegray = '#607D8B';*/
}

const defaultTheme = {
  theme: new Colors()
};

window.theme = defaultTheme.theme;
window.lighten = lighten;
window.darken = darken;
export default defaultTheme;