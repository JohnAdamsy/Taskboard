/**
 * Configuration for Grunt to compile LESS files to CSS.
 *
 * @see https://github.com/gruntjs/grunt-contrib-less
 *
 * @param grunt
 */
"use strict";

module.exports = function(grunt) {
    grunt.config.set("less", {
        dev: {
            files: [
                {
                    expand: true,
                    cwd: "assets/styles/",
                    src: ["*.less"],
                    dest: ".tmp/public/styles/",
                    ext: ".css"
                }
            ]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
};