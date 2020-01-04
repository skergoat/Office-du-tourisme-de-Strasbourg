<?php
if(!oneline_lite_checkbox_filter('testimonial','section_on_off')) :
if( shortcode_exists( 'themehunk-customizer-oneline-lite' ) ) {
$heading = get_theme_mod('our_testm_heading','');
$subheading = get_theme_mod('our_testm_subheading','');
?>
<div id="section_container_diagonale">
	<a href="https://skergoat.com/wordpress/activites-du-mois/" id="lien_div_diagonale">
	<div class="container" id="container_div_diagonale">
       <h2 class="main-heading wow fadeInRight" data-wow-delay="0s">Inscrivez vous aux activités du mois</h2>
       <p class="sub-heading wow fadeInLeft" data-wow-delay="0s">Profitez du meilleur de Strasbourg et de sa région</p>
	</div>
	<div id="filtre_div_diagonale"></div>
	<div id="section_div_diagonale" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -100px;"></div>
	</a>
</div>

<div class="clearfix"></div>
<?php } ?>
<?php endif ;?>