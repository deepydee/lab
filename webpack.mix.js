let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
   'resources/assets/admin/bower_components/bootstrap/dist/css/bootstrap.min.css',
   'resources/assets/admin/bower_components/font-awesome/css/font-awesome.min.css',
   'resources/assets/admin/bower_components/Ionicons/css/ionicons.min.css',
   'resources/assets/admin/css/AdminLTE.min.css',
   'resources/assets/admin/css/skins/_all-skins.min.css',
], 'public/assets/admin/css/admin.css');

mix.scripts([
   'resources/assets/admin/bower_components/jquery/dist/jquery.min.js',
   'resources/assets/admin/bower_components/bootstrap/dist/js/bootstrap.min.js',
   'resources/assets/admin/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
   'resources/assets/admin/bower_components/fastclick/lib/fastclick.js',
   'resources/assets/admin/js/adminlte.min.js',
   'resources/assets/admin/js/dist/js/demo.js',
], 'public/assets/admin/js/admin.js');

mix.copyDirectory('resources/assets/admin/bower_components/font-awesome/fonts',
                  'public/assets/admin/fonts');

mix.copyDirectory('resources/assets/admin/img',
                  'public/assets/admin/img');
