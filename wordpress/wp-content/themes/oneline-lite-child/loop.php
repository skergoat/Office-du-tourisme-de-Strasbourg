

<?php // nouvelles boucles Wordpress 

if(is_home()){	// Et si boucle dans boucle en rappelant a chaque fois la sous-categorie pour affichage 

	$catquery = new WP_Query( 'cat=11&posts_per_page=6' ); ?>

	<div class="container-fluid">
		<div class="row_infos row">
			<h2 class="content-type">Boire et Manger</h2>
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

	<?php $catquery = new WP_Query( 'cat=12&posts_per_page=6' ); ?>

	<div class="container-fluid">
		<div class="row_infos row">
			<h2 class="content-type">Les Sorties</h2>
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

	<?php $catquery = new WP_Query( 'cat=13&posts_per_page=6' ); ?>

	<div class="container-fluid">
		<div class="row_infos row">
			<h2 class="content-type">Les Evénements</h2>
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

<?php } else { // ancienne boucle pour la page d'archives   ?>

<div class="post-list">


<?php if (have_posts()) : while (have_posts()) : the_post(); //Start the Loop ?>
<!--Start post-->
			
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
         		
<?php endwhile;

oneline_lite_pagination();
else: ?>
</div>	
<div class="post">
	<p>
		<?php _e('sorry no post matched your criteria!', 'oneline-lite'); ?>
	</p>
</div>
<?php endif; ?>

<?php } ?>

<div class="clear"></div>
<!--End post-->
<div class="post-bottom-strip">
	<div class="post-social-icon">
		<div class="post-social-meta">
		<?php 
              if( shortcode_exists( 'themehunk-customizer-social' ) ) {
                echo do_shortcode("[themehunk-customizer-social]");
               } ?>
		</div>
	</div>
</div>