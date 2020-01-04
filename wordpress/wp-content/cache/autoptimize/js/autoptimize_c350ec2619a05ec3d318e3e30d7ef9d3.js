$(function(){$('#pull').click(function(){if(!$('.mobile-menu-wrapper').hasClass('ombre')){$('.mobile-menu-wrapper').addClass('ombre');}
else{function sansOmbres(){$('.mobile-menu-wrapper').removeClass('ombre');}
setTimeout(sansOmbres,450);}});$(window).resize(function(){if($('#ma_nav').hasClass('disparait')){$('#ma_nav').removeClass('disparait');$('#ma_nav').animate({'top':'-=80px'},{queue:false}).animate({'opacity':'1'},{duration:1100,queue:false});$('#ma_search_form').animate({'opacity':'0'},{duration:400,queue:false}).animate({'top':'-=35px'},{queue:false});}
if($('#bouton_loupe_2').hasClass('disparait')){$('#bouton_loupe_2').removeClass('disparait');$('#bouton_loupe_2').animate({'top':'-=80px'},{queue:false}).animate({'opacity':'1'},{duration:1100,queue:false});$('#ma_search_form_2').animate({'opacity':'0'},{duration:400,queue:false}).animate({'top':'-=35px'},{queue:false});}});$('#ma_search_form').css('opacity','0');$('#bouton_loupe').click(function(){$('#ma_nav').addClass('disparait');$('#ma_nav').animate({'opacity':'0'},{duration:200,queue:false}).animate({'top':'+=80px'},{queue:false});$('#ma_search_form').animate({'opacity':'1'},{duration:400,queue:false}).animate({'top':'+=35px'},{queue:false});});$('.bouton_retour').click(function(){$('#ma_nav').removeClass('disparait');$('#ma_nav').animate({'top':'-=80px'},{queue:false}).animate({'opacity':'1'},{duration:1100,queue:false});$('#ma_search_form').animate({'opacity':'0'},{duration:400,queue:false}).animate({'top':'-=35px'},{queue:false});});$('#ma_search_form_2').css('opacity','0');$('#bouton_loupe_2').css('position','relative');$('#bouton_loupe_2').click(function(){$('#bouton_loupe_2').addClass('disparait');$('#bouton_loupe_2').animate({'opacity':'0'},{duration:200,queue:false}).animate({'top':'+=80px'},{queue:false});$('#ma_search_form_2').animate({'opacity':'1'},{duration:400,queue:false}).animate({'top':'+=35px'},{queue:false});});$('.bouton_retour_2').click(function(){$('#bouton_loupe_2').removeClass('disparait');$('#bouton_loupe_2').animate({'top':'-=80px'},{queue:false}).animate({'opacity':'1'},{duration:1100,queue:false});$('#ma_search_form_2').animate({'opacity':'0'},{duration:400,queue:false}).animate({'top':'-=35px'},{queue:false});});if($(document).scrollTop()>=100){$('#logo img').addClass('sans');$('.header.smaller').css('box-shadow','0px 0px 8px 2px #000000');}
$(document).on("scroll",function(){if($(document).scrollTop()>=100){$('#logo img').removeClass('sans');$('#logo img').addClass('avec');}
else{$('#logo img').removeClass('avec');$('#logo img').addClass('sans');}});$("#slider-div").append('<div id="div_logo_bis" style="z-index:3;"><img src="https://skergoat.com/wordpress/wp-content/uploads/2019/09/Logo2.jpg" alt="logo bis" id="logo_bis" /></div>');$('.page-title .demo-image h2.title, .demo-image .archive-title h2').text('Actualités');$('.pagination').removeClass('navigation');});
/*!
 * classie v1.0.0
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
(function(window){'use strict';function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)");}
var hasClass,addClass,removeClass;if('classList'in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c);};addClass=function(elem,c){elem.classList.add(c);};removeClass=function(elem,c){elem.classList.remove(c);};}
else{hasClass=function(elem,c){return classReg(c).test(elem.className);};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+' '+c;}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c),' ');};}
function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c);}
var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==='function'&&define.amd){define(classie);}else{window.classie=classie;}})(window);