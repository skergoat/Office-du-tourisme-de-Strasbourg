<?php
/**
* The template part for displaying a message that posts cannot be found
*
* @package ThemeHunk
* @subpackage Oneline Lite
* @since Oneline Lite 1.0
*/
?>
<div class="no-results not-found">
	<div class="page-nothing">
		<h1><?php _e( 'Désolé, il n\'y a rien !', 'oneline-lite' ); ?></h1>
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
		<p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'oneline-lite' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
		<?php elseif ( is_search() ) : ?>
		<p class="message"><?php _e( 'Mais en persévérant vous finirez bien par trouver votre bonheur', 'oneline-lite' ); ?><img src ="https://skergoat.com/wordpress/wp-content/uploads/2019/11/cligne-min.png" /></p>
		<!-- supprimer la search form -->
		<?php endif; ?>
	</div>
	<!-- .page-content -->
	</div><!-- .no-results -->