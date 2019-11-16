import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default {
  input: './src/index.ts',
  plugins: [
    typescript({ useTsconfigDeclarationDir: true, tsconfig: 'tsconfig.json' }),
    babel({
      extensions: ['.ts'],
      exclude: ['dist/**', 'node_modules/**'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['> 2.00%', 'not dead', 'not ie <= 11'],
            },
          },
        ],
      ],
    }),
    minify(),
  ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
}
