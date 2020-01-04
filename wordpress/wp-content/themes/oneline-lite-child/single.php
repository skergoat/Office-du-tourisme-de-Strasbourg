<?php
/**
* The template for displaying all single posts and attachments
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
     <?php if ( in_category('8') ){ // redefinir le titre des articles si categorie "Plus d'infos" ?>
         <a href="http://skergoat.com/wordpress/infos/" class="title_categorie"><h3 class="title overtext" id="h3_coloured"> Plus d'infos</h3></a>
      <?php }else{  ?>
        <a href="http://skergoat.com/wordpress/actualites/" class="title_categorie"><h2 class="title overtext"> <?php the_title(); ?> </h2></a>
     <?php } ?>
    </div>
  </div>
</div>
<?php echo oneline_lite_page_svg_bottom_enable(); ?>
<?php echo oneline_lite_breadcrumb(); ?>
<?php echo oneline_lite_page_svg_top_enable(); ?>
</div>
<div id="page" class="clearfix <?php echo $layout; ?> <?php echo svg_active();?>">
<div class="content-wrapper">
<div class="content">
<div class="single-post-content">
  <h2 class="content_title"> <?php the_title(); ?></h2>
  <div class="single-post">
    <?php if (have_posts()) : while (have_posts()) : the_post();
    get_template_part('content');
        the_tags();
    ?>

   <?php 

    // recuperer id et categorie de l'article  

    $category = get_the_category();
    $mycat = $category[0]->cat_name;
    $mycat2 = get_cat_id($mycat);

    $currentID = get_the_ID(); 

  // afficher les autres articles sauf le courant 

   $catquery = new WP_Query( array('cat' => $mycat2, 'showposts' => '3', 'post__not_in' => array($currentID))); ?>

        <div class="container-fluid">
          <div class="row_infos row">
            <?php if(in_category('9')) { ?>
            <h3 class="content-type">Autres Actualités</h3>
            <?php } else {?>
            <h3 class="content-type">Autres infos</h3>
            <?php } ?>
            <div class="post-list" style="margin-bottom:40px;">

            <?php while($catquery->have_posts()) : $catquery->the_post(); {
    ?>

          <figure class="post-content row_content row_figure">
            <?php
            if ((function_exists('has_post_thumbnail')) && (has_post_thumbnail())) { ?>
            <a href="<?php the_permalink(); ?>"> <?php the_post_thumbnail('oneline-lite-custom-blog'); ?></a>
            <?php  } ?>
            
            <figcaption class="other_articles">
            <a href="<?php the_permalink(); ?>"><h3><?php the_title(); ?></h3></a>
            </figcaption>
          </figure>

    <?php } ?>
         
            <?php endwhile; 

            wp_reset_postdata(); ?>
             
             </div>
          </div>
        </div>
  </div>
    
    <?php 
    // enlever les commentaires sur les pages "plus d'infos"
    if ( in_category('8') ) { }
    else { 
            if ( comments_open() || get_comments_number() ) {
        comments_template();
        }
    }
    
    endwhile; endif;
    ?>

</div> 
</div>
</div>
<?php if ( $layout != 'no-sidebar'){ ?>
<!--- sidebar -->
<div class="sidebar-wrapper">
<?php get_sidebar(); ?>
</div>
<?php } ?>
</div>
<?php get_footer(); ?>