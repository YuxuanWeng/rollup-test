import ts from 'rollup-plugin-ts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';


/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: {
    index: './index.ts',
  },
  output: {
    dir: './main',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    ts({
      exclude: /node_modules/
    }),
    json(),
    nodeResolve({ exportConditions: ['node'] }),
    commonjs(),
  ]
};