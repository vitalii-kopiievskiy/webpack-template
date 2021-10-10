let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    plugins: [],
    module: {
        rules: []
    },
}