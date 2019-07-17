export default [
    {
        input: 'src/uniqueID.js',
        output: [
            {
                format: 'esm',
                file: 'dist/uniqueID.js'
            },
            {
                format: 'cjs',
                file: 'dist/uniqueID.common.js'
            }
        ],
        // plugins: [resolve(), typescript(), commonjs()],
        watch: {
            include: 'src/**'
        }
    }
    // {
    //     input: 'dist/scroll.js',
    //     output: {
    //         format: 'esm',
    //         file: 'dist/scroll.min.js'
    //     },
    //     plugins: [
    //         terser({
    //             compress: true,
    //             mangle: true
    //         })
    //     ]
    // }
];