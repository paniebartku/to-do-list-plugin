<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       some uri
 * @since      1.0.0
 *
 * @package    To_Do_List_Task
 * @subpackage To_Do_List_Task/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    To_Do_List_Task
 * @subpackage To_Do_List_Task/includes
 * @author     Bartłomiej Wilczek <some@mail.com>
 */
class To_Do_List_Task_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'to-do-list-task',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
