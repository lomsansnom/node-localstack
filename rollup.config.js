// Rollup plugins
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  external: ['aws-sdk'],
  output: {
    file: 'dist/node-localstack.js',
    format: 'umd',
    name: 'node-localstack',
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
