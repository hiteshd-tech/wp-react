<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_child', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'hello-elementor','hello-elementor-theme-style','hello-elementor-header-footer' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );

// END ENQUEUE PARENT ACTION


if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
        'page_title' => 'Theme Settings',
        'menu_title' => 'Theme Settings',
        'menu_slug'  => 'theme-settings',
        'capability' => 'edit_posts',
        'redirect'   => false
    ));

}

// Register Custom Menu
register_nav_menus(array(
    'main-menu' => 'Main Menu',
    'footer-menu' => 'Footer Menu',
));


// Custom API - START
add_action('rest_api_init', function () {

    register_rest_route('custom/v1', '/theme-settings', array(
        'methods'  => 'GET',
        'callback' => 'theme_settings_api',
        'permission_callback' => '__return_true'
    ));

});

function theme_settings_api() {

    return array(

        'email'       => get_field('email', 'option'),
        'phone'       => get_field('phone', 'option'),
        'footer_text' => get_field('footer_text', 'option'),
        'address'     => get_field('address', 'option'),
        'facebook'    => get_field('facebook_url', 'option'),
        'twitter'     => get_field('twitter_url', 'option'),
        'instagram'   => get_field('instagram_url', 'option'),
        'fb'          => get_field('facebook', 'option')
    );

}
// Custom API - END
