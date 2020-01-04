<?php
/**
* The template for displaying the footer
*
* @package ThemeHunk
* @subpackage Oneline lite
* @since Oneline Lite 1.0
*/
?>

<div class="foot-copyright">
<?php echo oneline_lite_svg_enable(); ?>
	<div class="container" id="container_container_footer">
		<div class="footer_container" id="footer_container_first">
			<div>
				<img src="https://skergoat.com/wordpress/wp-content/uploads/2019/09/logo_footer.jpg" alt="logo ville de strasbourg"/>
			</div>
			<div>
				<p>L'Office du Tourisme de Strasbourg est un organisme public destiné au renseignement sur les horaires, tarifs et lieux des événements ainsi qu'à la réservation de billets </p>
			</div>
			<div></div>
		</div>
		<div class="footer_container">
			<div class="footer_div" id="footer_div_address">
				<div >
					<h3>Office du Tourisme</h3>
					<p>17 place de la Cathédrale</p>
					<p>67082 STRASBOURG CEDEX</p>
				</div>
				<ul class="footer_div" id="div_social">
					<li><a href="https://www.facebook.com/StrasbourgTourisme/" target="_blank"><i class="fab fa-facebook-f" id="facebook"></i></a></li>
					<li><a href="https://twitter.com/stras_tourisme?lang=fr" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
					<li><a href="https://www.pinterest.fr/StrasTourisme/" target="_blank"><i class="fab fa-pinterest-square"></i></a></li>
					<li><a href="https://www.instagram.com/strasbourgtourisme/?hl=fr" target="_blank"><i class="fab fa-instagram"></i></a></li>
				</ul>
			</div>
			<div class="footer_div" id="footer_div_2">
				<h3>Horaires d'ouverture</h3>
				<p>Bureau d'accueil</p>
				<p>Tous les jours de 9h à 18h</p>
				<div id="footer_button"><a href="http://www.otstrasbourg.fr/fr/boutique-office-de-tourisme.html" target="_blank">La boutique</a></div>
			</div>
			<div id="footer_div_3" class="footer_div">
				<div id="footer_div_3_1">
					<a href="https://www.entreprises.gouv.fr/qualite-tourisme" target="_blank"><img src="https://skergoat.com/wordpress/wp-content/uploads/2019/09/foot_3.jpg" alt="logo tourisme" /></a>
					<a href="https://www.offices-de-tourisme-de-france.org/" target="_blank"><img src="https://skergoat.com/wordpress/wp-content/uploads/2019/09/foot_2.jpg" alt="logo tourisme" /></a>
					<a href="http://www.vpah.culture.fr/" target="_blank"><img src="https://skergoat.com/wordpress/wp-content/uploads/2019/09/foot_1.jpg" alt="logo tourisme" /></a>
				</div>
			</div>
		</div>
		<div id="container_mentions_social">
			
			<ul>
				<li><a href="https://skergoat.com/wordpress/liens-utiles/" target="_blank">Liens utiles</a></li>
				<li><a href="https://skergoat.com/wordpress/mentions-legales/" target="_blank">Mentions légales</a></li>
				<li><a href="https://skergoat.com/wordpress/sitemap_index.xml" target="_blank">Sitemap xml</a></li>
				<li><a href="https://skergoat.com/wordpress/sitemap" target="_blank">Sitemap html</a></li>
			</ul>

			<div id="powered">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" target="_blank"><?php bloginfo( 'name' ); ?></a>
				<a href="<?php echo esc_url( __( 'https://skergoat.com', 'oneline-lite' ) ); ?>" target="_blank"><?php printf( __('Powered by %s', 'oneline-lite' ), 'Stephane Kergoat' ); ?></a>
			</diV>

		</div>
	</div>

</div>
<?php wp_footer(); ?>
</body>
</html>