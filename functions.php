<?php

function addTheJsOfTheChildTheme() {
  wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/scripts.js', array( 'jquery' ));
}

function addTheCssOfTheChildTheme() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

add_action('wp_enqueue_scripts', 'addTheJsOfTheChildTheme');
add_action('wp_enqueue_scripts', 'addTheCssOfTheChildTheme');

?>
