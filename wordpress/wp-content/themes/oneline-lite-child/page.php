<?php
/**
* The template for displaying all pages
*
* This is the template that displays all pages by default.
* Please note that this is the WordPress construct of pages and that
* other 'pages' on your WordPress site will use a different template.
*
* @package ThemeHunk
* @subpackage Oneline Lite
* @since Oneline Lite 1.0
*/
get_header(); ?>
<?php $layout = oneline_lite_get_layout(); 
$oneline_plx = get_theme_mod('parallax_opt');
if($oneline_plx =='' || $oneline_plx =='0'){  
$prlx_class = 'parallax-lite';
$prlx_data_center = 'background-position: 50% 0px';
$prlx_top_bottom = 'background-position: 50% -100px;';
}else{
$prlx_class = ''; 
$prlx_data_center = '';
$prlx_top_bottom =''; 
}  ?>
<div class="page-title <?php echo svg_active();?> <?php echo $prlx_class;?>">
<?php echo oneline_lite_page_svg_top_enable(); ?>
<div data-center="<?php echo $prlx_data_center;?>" data-top-bottom="<?php echo $prlx_top_bottom;?>" class="demo-image" style="background-image:url('<?php echo esc_url(oneline_lite_page_thumb()); ?>')">
	<div class="overlay-demo"></div>
	<div class="full-fs-caption">
		<div class="caption-container">
			
	    <h3 class="title overtext" id="h3_coloured"><?php the_title() ; ?></h3>
	      
		</div>
	</div>
</div>
<?php echo oneline_lite_page_svg_bottom_enable(); ?>
<?php echo oneline_lite_page_svg_top_enable(); ?>
</div>
<div id="page" class="clearfix  <?php echo $layout; ?> <?php echo svg_active();?>">
<div class="content-wrapper">
<div class="content">
<div class="page-content">
	<div class="page-description">

		<!-- page plus d'infos -->

			<?php if(is_page(12)){ 

				$catquery = new WP_Query( 'cat=14&posts_per_page=6' ); ?>

				<div class="container-fluid">
					<div class="row_infos row">
						<h2 class="content-type">Les Ballades</h2>
						<div class="post-list">
						<?php while($catquery->have_posts()) : $catquery->the_post(); ?>

				            <figure class="post-content row_content">
				              <?php
				              if ((function_exists('has_post_thumbnail')) && (has_post_thumbnail())) { ?>
				              <a href="<?php the_permalink(); ?>"> <?php the_post_thumbnail('oneline-lite-custom-blog'); ?></a>
				              <?php  } ?>
				              <div class="date"><span class="day"><?php echo get_the_date( 'd' ); ?></span><span class="month"><?php echo get_the_date( 'M' ); ?></span></div><i class="<?php echo oneline_lite_postformate();  ?>"></i>
				              <figcaption>
				              <a href="<?php the_permalink(); ?>"><h3><?php the_title(); ?></h3></a>
				              <?php echo oneline_lite_get_th_custom_excerpt(); ?>
				              </figcaption>
				            </figure>
         
						<?php endwhile; ?> 
						 </div>
					</div>
				</div>

				<?php wp_reset_postdata(); ?>

				<?php $catquery = new WP_Query( 'cat=15&posts_per_page=6' ); ?>

				<div class="container-fluid">
					<div class="row_infos row">
						<h2 class="content-type">Les musées</h2>
						<div class="post-list">
						<?php while($catquery->have_posts()) : $catquery->the_post(); ?>

				            <figure class="post-content row_content">
				              <?php
				              if ((function_exists('has_post_thumbnail')) && (has_post_thumbnail())) { ?>
				              <a href="<?php the_permalink(); ?>"> <?php the_post_thumbnail('oneline-lite-custom-blog'); ?></a>
				              <?php  } ?>
				              <div class="date"><span class="day"><?php echo get_the_date( 'd' ); ?></span><span class="month"><?php echo get_the_date( 'M' ); ?></span></div><i class="<?php echo oneline_lite_postformate();  ?>"></i>
				              <figcaption>
				              <a href="<?php the_permalink(); ?>"><h3><?php the_title(); ?></h3></a>
				              <?php echo oneline_lite_get_th_custom_excerpt(); ?>
				              </figcaption>
				            </figure>
         
						<?php endwhile; ?> 
						 </div>
					</div>
				</div>

				<?php wp_reset_postdata(); ?>
				
        	<?php } else {

		if (have_posts()) : while (have_posts()) : the_post();?>
		<?php the_content(); ?>
		<div class="multipage-links">
			<?php
				wp_link_pages( array(
							'before'      => '<span class="meta-nav">' . __( 'Pages:', 'oneline-lite' ) . '</span>',
							'after'       => '',
							'link_before' => '<span class="active">',
							'link_after'  => '</span>',
						) );
			?>
		</div>
		<?php
		// If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || get_comments_number() ) {
		comments_template();
		}
			endwhile;
			endif;
		} ?>
	</div>
</div>
</div>
</div>
<?php if ( $layout != 'no-sidebar' ) { ?>
<div class="sidebar-wrapper">
<?php get_sidebar(); ?>
</div>
<?php } ?>
</div> <!--page class end -->
<div class="clear"></div>
<?php get_footer(); ?>