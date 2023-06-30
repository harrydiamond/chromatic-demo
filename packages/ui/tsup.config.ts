import { defineConfig } from 'tsup';

export default defineConfig(({ watch }) => ({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: false,
  format: ['esm'],
  clean: !watch,
  minify: !watch,
  dts: true,
}));
