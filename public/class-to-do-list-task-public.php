<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       some uri
 * @since      1.0.0
 *
 * @package    To_Do_List_Task
 * @subpackage To_Do_List_Task/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    To_Do_List_Task
 * @subpackage To_Do_List_Task/public
 * @author     Bartłomiej Wilczek <some@mail.com>
 */
class To_Do_List_Task_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in To_Do_List_Task_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The To_Do_List_Task_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __DIR__) . 'dist/public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in To_Do_List_Task_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The To_Do_List_Task_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __DIR__) . 'dist/public.css', array(), $this->version, 'all' );
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __DIR__ ) . 'dist/public.js', array( 'jquery' ), $this->version, false );

	 	wp_localize_script( $this->plugin_name, 'MyAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );

	}
	public function register_shortcodes() {
		add_shortcode( 'taskForm', array( $this, 'taskForm') );
	  }

	  public function taskForm(){
		ob_start();	
		  ?>
		<form id="task-form" action="#" method="post" data-url="<?php echo admin_url('admin-ajax.php'); ?>">

		<div class="field-container">
			<input type="text" class="field-input" placeholder="Your Task" id="task" name="task" required>
		</div>
		<div class="field-container">
			<div>
				<button type="stubmit" class="">Submit</button>
			</div>
			<small class="field-msg js-form-submission">Submission in process, please wait&hellip;</small>
			<small class="field-msg success js-form-success">Task Successfully submitted!</small>
			<small class="field-msg error js-form-error">There was a problem</small>
		</div>
	
		<input type="hidden" name="action" value="submit_task">
		<input type="hidden" name="nonce" value="<?php echo wp_create_nonce("task-nonce") ?>">
	
	</form>
	<div class="to-do-list-post-area"><ul></ul></div>
<?php

	return ob_get_clean();
	}

	public function submit_task()
	{
		if (! DOING_AJAX || ! check_ajax_referer('task-nonce', 'nonce') ) {
			return $this->return_json('error');
		}

		$task = sanitize_text_field($_POST['task']);

		$data = array('done' => 0,);

		$args = array(
			'post_title' => 'To do -  ' . $task,
			'post_author' => 1,
			'post_status' => 'publish',
			'post_type' => 'task',
			'meta_input' => array(
				'_todolist_task_key' => $data
			)
		);

		$postID = wp_insert_post($args);

		if ($postID) {
			return $this->return_json('success');
		}

		return $this->return_json('error');
	}

	public function return_json($status)
	{
		$return = array(
			'status' => $status
		);
		wp_send_json($return);

		wp_die();
	}

function my_delete_post(){
 
    $permission = check_ajax_referer( 'my_delete_post_nonce', 'nonce', false );
    if( $permission == false ) {
        echo 'error';
    }
    else {
        wp_delete_post( $_REQUEST['id'] );
        echo 'success';
    }
    die();
 
}

function my_update_post(){
 
    $permission = check_ajax_referer( 'my_update_post_nonce', 'nonce', false );
    if( $permission == false ) {
        echo 'error';
    }
    else {
		$post_id = $_REQUEST['id'] ;
		 $meta = get_post_meta($post_id);
		//  var_dump($meta);
		 $data = array(
		
			'done' => isset($_POST['todolist_task_done']) ? 0 : 1
		
		);
		update_post_meta( $post_id, '_todolist_task_key', $data );
		// echo "------------";
		// var_dump($meta);
        echo 'success';

	
	}
      die();
 
}

	function get_ajax_posts() {
		$args = array(
			'post_type' => array('task'),
			'post_status' => array('publish'),
			'posts_per_page' => 40,
			'nopaging' => true,
			'order' => 'DESC',
			'orderby' => 'date'
		);
	
		// The Query
		$ajaxposts = new WP_Query( $args );
	
		$response = ''; ?>

		<?php 
		// The Query
		if ( $ajaxposts->have_posts() ) {
			while ( $ajaxposts->have_posts() ) {
				$ajaxposts->the_post(); ?>
				<?php 		
				 $data = array(
		
					'done' => isset($_POST['todolist_task_done']) ? 0 : 1
				
				);
			 $meta = get_post_meta( get_the_ID(), '_todolist_task_key', $data ) ;

 ?>
			<li class="single-task <?php if($meta['done'] == 1){echo 'done';} ?>">
			

    	<h6><?php the_title(); ?></h6>

		<?php $nonce = wp_create_nonce('my_delete_post_nonce') ?>
		<?php $updateNonce = wp_create_nonce('my_update_post_nonce') ?>
		<div class="single-task__icons">
			<a class="updateBtn" href="<?php echo admin_url( 'admin-ajax.php?action=my_update_post&id=' . get_the_ID() . '&nonce=' . $updateNonce ) ?>" data-id="<?php the_ID() ?>" data-nonce-update="<?php echo $updateNonce ?>"><i class="fa fa-square-o" aria-hidden="true"></i></a>
			<a class="removeBtn" href="<?php echo admin_url( 'admin-ajax.php?action=my_delete_post&id=' . get_the_ID() . '&nonce=' . $nonce ) ?>" data-id="<?php the_ID() ?>" data-nonce="<?php echo $nonce ?>"><i class="fa fa-trash" aria-hidden="true"></i></a>
		</div>		
        
			</li>			<?php
			}
		} else {
			$response .= get_template_part('none');
		}
	
		echo $response;
	
		exit; 
	}



}
