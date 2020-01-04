<div class="srch clearfix">
    <form method="GET" action="<?php echo get_site_url(); ?>" class="ma-form">
    	<div class="container_input">
    	
            <div class="c" style="display:flex;flex-direction:column;">
            	<input autocomplete="off" value="<?php the_search_query(); ?>" name="s" class="q">
            	<div class="help">cliquez sur "entrée" pour lancer la recherche</div>
            </div>
        	
        	<div class="search_button" id="bouton_retour" data-url="close-1"><i class="fas fa-times"></i></div>
        	<div class="search_button" id="bouton_retour_2" data-url="close-2"><i class="fas fa-times"></i></div>
        </div>
    </form>
</div>