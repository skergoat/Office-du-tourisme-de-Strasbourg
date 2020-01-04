$(function(){function searchOpen(param1,param2){$(param1).addClass('disparait');$(param1).animate({'opacity':'0'},{duration:200,queue:false}).animate({'top':'+=80px'},{queue:false});$(param2).animate({'opacity':'1'},{duration:400,queue:false}).animate({'top':'+=35px'},{queue:false});}
function searchClose(param1,param2){$(param1).removeClass('disparait');$(param1).animate({'top':'-=80px'},{queue:false}).animate({'opacity':'1'},{duration:1100,queue:false});$(param2).animate({'opacity':'0'},{duration:400,queue:false}).animate({'top':'-=35px'},{queue:false});}
function disptachParam(data){switch(data){case'open-1':case'close-1':var param1='#ma_nav';var param2='#ma_search_form';break;case'open-2':case'close-2':var param1='#bouton_loupe_2';var param2='#ma_search_form_2';break;}
var params=[param1,param2];return params;}
$('#ma_search_form_2').css('opacity','0');$('#ma_search_form').css('opacity','0');$('.search_button').click(function(){var data=$(this).attr('data-url');var params=disptachParam(data);if(data=='open-1'||data=='open-2'){searchOpen(params[0],params[1]);}
else{searchClose(params[0],params[1]);}});$(window).resize(function(){if($('#ma_nav').hasClass('disparait')){var data='close-1';}
if($('#bouton_loupe_2').hasClass('disparait')){var data='close-2';}
var params=disptachParam(data);searchClose(params[0],params[1]);});});