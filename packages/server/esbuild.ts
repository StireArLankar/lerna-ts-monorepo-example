import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { build } from 'esbuild';

build({
  entryPoints: ['./src/index.ts'],
  tsconfig: './tsconfig.json',
  bundle: true,
  outfile: '../../build/out.js',
  plugins: [esbuildDecorators()],
  platform: 'node',
})
  .then(res => {
    console.log(res);
    process.exit(0);
  })
  .catch(() => process.exit(1));
