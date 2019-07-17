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
        watch: {
            include: 'src/**'
        }
    }
];