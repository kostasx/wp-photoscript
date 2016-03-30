<?php
/*
Plugin Name: WP PhotoScript
Plugin URI: https://github.com/kostasx/wp-autolevels.js
Description: Image manipulation using JavaScript
Author: KostasX / PlethoraThemes
Version: 0.1.0
Author URI: https://github.com/kostasx/
*/

function enqueuePhotoScript(){
     
  wp_register_script( 'auto-level-js', plugins_url( '/js/wp-photoscript.js', __FILE__ ) );
  wp_enqueue_script( 'auto-level-js' );

}
add_action( 'wp_enqueue_scripts', 'enqueuePhotoScript' );
