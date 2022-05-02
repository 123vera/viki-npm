import typescript from "rollup-plugin-typescript";
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: 'index.ts',
    plugins: [
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript"),
            // compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" }
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    output: [{
        file: 'bundle.js',
        format: 'cjs',
    },
        // {
        //     file: pkg.main,
        //     format: 'esm'
        // }
    ],
}