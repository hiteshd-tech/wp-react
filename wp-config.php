<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'FS_METHOD', 'direct');
define( 'DB_NAME', 'wp-react' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Gw`#*CYTQkaodqI>%)g^#bYJP(|JW~b^ 2,+DMvnk.-6LrV,I.S|E$LzoN~+ky=6' );
define( 'SECURE_AUTH_KEY',  '_G]3zGcQ$?$e9@O-($:/vfPDV@%o&Y{M s KsVl<)Xo[ Jh#+-RRUe5y(?-YnnE:' );
define( 'LOGGED_IN_KEY',    'J,84G+n#x@n-=>]5M<dU&h%vS/Xlz7R;/A{AL~:CKUe;!JD2ESNsC&L|):_&wfr)' );
define( 'NONCE_KEY',        '?Y,@xtqgIzdp([%K!CS6;TNXec>aEipZL53<jE*^o?X>%JDF3@K(M# UaT*}TctD' );
define( 'AUTH_SALT',        'C%cxDnp_s{=AJ`UgjFsDb&L&ZU`4/eJ?f)#<yDFE {-__]t=7v !RqnGK6>Ujd#X' );
define( 'SECURE_AUTH_SALT', '/B8JO+2MJcF|S:yP)V~u*v^L2|Fy6/^;sL3?L+kR|,>{u;>{GFoSjrOC4=x5r(9F' );
define( 'LOGGED_IN_SALT',   'zq-x2z?;^h@N+rl!5oDBh*GHv4XLs_)/&Dc?(`OqFv_=0ZSvDYMwQCGc0|Y/H5G+' );
define( 'NONCE_SALT',       'KtnDS}8!kKzx$#`SGq#c(;cLS>NR@z,Vy2:2]kUzQR:Y2uIjA6q8:j)aA4)=]ulN' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wpreact_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );
define( 'WP_DEBUG_LOG', false );
define( 'WP_DEBUG_DISPLAY', false );	

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
