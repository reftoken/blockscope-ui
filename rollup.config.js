import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: [
    'polished',
    'react',
    'react-dom',
    'styled-components',
    'prop-types',
    '@material-ui/core',
    '@material-ui/icons',
    'classnames',
    'material-ui-flat-pagination',
    'redux-thunk',
    'redux',
    'react-redux',
    'redux-form',
    'redux-form-material-ui',
    'material-ui'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};
