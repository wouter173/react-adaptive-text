import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
  input: 'src/AdaptiveText.js',
  output: {
    file: 'dist/AdaptiveText.js',
    format: 'cjs',
  },
  external: ['react'],
  plugins: [
    getBabelOutputPlugin({
      presets: ['@babel/preset-env', '@babel/preset-react', 'minify']
    }),
    babel({
      babelHelpers: 'bundled'
    }),
  ],
};