module.exports = {
  plugins: [
    require('autoprefixer')('> 5%'),
    require('cssnano')({
      preset: 'default'
    })
  ]
};
