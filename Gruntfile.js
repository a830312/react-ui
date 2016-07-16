var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var bump = function() {
  return {
    options: {
      files: ['package.json'],
      commit: false,
      push: false,
      createTag: false
    }
  }
}

module.exports = function(grunt) {
  
  var webpackBuildCfg = {
    build: webpackConfig
  };

  grunt.initConfig({
    bump: bump(),
    webpack: webpackBuildCfg
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-bump');
  grunt.registerTask('default', ['webpack:build']);
  grunt.registerTask('release', ['bump', 'build']);
};
