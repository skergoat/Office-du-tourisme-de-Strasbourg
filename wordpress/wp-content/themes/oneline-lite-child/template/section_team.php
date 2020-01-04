<!-- TEAM SECTION START -->
<?php 
if(!oneline_lite_checkbox_filter('team','section_on_off')) :
if( shortcode_exists( 'themehunk-customizer-oneline-lite' ) ) {
    $heading = get_theme_mod('team_heading','');
    $subheading = get_theme_mod('team_subheading','');
?>
<div class="team-wrapper">
<?php
//echo oneline_lite_svg_enable();
?>
<section id="team" class="<?php echo svg_active();?>" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -100px;">
    <div class="container">
        <div class="page-post">
        <?php if($heading!=''){ ?>
            <h2 class="main-heading wow fadeInLeft" data-wow-delay="0s"><?php echo esc_html($heading); ?></h2>
            <?php } else { ?>
            <h2 class="main-heading wow fadeInLeft" data-wow-delay="0s"><?php echo do_shortcode("[themehunk-customizer-oneline-lite did='222']"); ?></h2>
            <?php } ?>
            <?php if($subheading!=''){ ?>
            <p class="sub-heading wow fadeInLeft" data-wow-delay="0s"><?php echo esc_html($subheading); ?></p>
            <?php } else { ?>
            <p class="sub-heading wow fadeInLeft" data-wow-delay="0s"><?php echo do_shortcode("[themehunk-customizer-oneline-lite did='6']"); ?> </p>
        <?php } ?>
            <?php $catquery = new WP_Query( 'cat=8&posts_per_page=4' ); ?>

              <!--   <div class="container-fluid" id="container_plus_info">
                    <div id="row_infos" class="row"> -->
                         <div class="post-block home_post_block">
                        <?php while($catquery->have_posts()) : $catquery->the_post(); ?>

                            <figure class="post-content home_content">
                              <?php
                              if ((function_exists('has_post_thumbnail')) && (has_post_thumbnail())) { ?>
                              <a href="<?php the_permalink(); ?>"> <?php the_post_thumbnail('oneline-lite-custom-blog'); ?></a>
                              <?php  } ?>
                              <div class="date"><span class="day"><?php echo get_the_date( 'd' ); ?></span><span class="month"><?php echo get_the_date( 'M' ); ?></span></div><i class="<?php echo oneline_lite_postformate();  ?>"></i>
                              <figcaption class="ma_caption">
                              <a href="<?php the_permalink(); ?>"><h3><?php the_title(); ?></h3></a>
                              <?php echo oneline_lite_get_th_custom_excerpt(); ?>
                              </figcaption>
                            </figure>
         
                        <?php endwhile; ?> 
                         </div>
                   <!--  </div>
                </div> -->

                <?php wp_reset_postdata(); ?>
        </div>
    </div>
</section>
</div>
<div class="clearfix"></div>
<?php } ?>
<?php endif ;?>