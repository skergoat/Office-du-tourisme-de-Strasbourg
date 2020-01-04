<?php
/**
* The template for displaying 404 pages (Not Found)
*
* @package ThemeHunk
* @subpackage Oneline Lite
* @since Oneline Lite 1.0
*/
get_header();
$layout = oneline_lite_get_layout(); ?>
<div class="page-title page_404 <?php echo svg_active();?>">
<?php echo oneline_lite_page_svg_top_enable(); ?>
<div class="demo-image">
	<div class="overlay-demo"></div>
	<div class="full-fs-caption">
		<div class="caption-container">
			<div >
				<h2>Erreur 404<img src="https://skergoat.com/wordpress/wp-content/uploads/2019/11/404.png" alt="icone peur"/></h2>
			</div>
		</div>
	</div>
</div>
<?php echo oneline_lite_page_svg_bottom_enable(); ?>
<?php echo oneline_lite_page_svg_top_enable(); ?>
</div>
<div id="page" class="clearfix <?php echo $layout; ?> <?php echo svg_active();?>">
<div class="content-wrapper">
<!-- Content Start -->
<div class="content">
<div class="page-content blog-content">
	<h1>
	<?php _e( 'Désolé il n\'y a rien !', 'oneline-lite' ); ?>
	</h1>
	<!-- <div style="display:none;"><?php get_search_form(); ?></div> -->
	<!-- <p class="clin_doeil"><?php _e( 'Peut-être faut-il entrer une autre rêquete ?', 'oneline-lite' ); ?><img src ="http://skergoat.com/wordpress/wp-content/uploads/2018/07/cligne.png" alt="smiley clin d'oeil"/></p>
	<p class="sorry"><img src="http://skergoat.com/wordpress/wp-content/uploads/2018/07/contentnone.png" alt="sorry"/></p> -->
</div>
</div>
</div>
<?php if ( $layout != 'no-sidebar' ) { ?>
<div class="sidebar-wrapper">
<?php get_sidebar(); ?>
</div>
<?php } ?>
</div><!-- Content End -->
<?php get_footer(); ?>