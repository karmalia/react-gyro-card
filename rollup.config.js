import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
const packageJson = require("./package.json");
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist/types",
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      postcss(),
    ],
  },
  {
    input: "dist/cjs/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
