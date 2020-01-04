$(function(){if($(document).scrollTop()>=100){$('#logo img').addClass('sans');$('.header.smaller').css('box-shadow','0px 0px 8px 2px #000000');}
$(document).on("scroll",function(){if($(document).scrollTop()>=100){$('#logo img').removeClass('sans');$('#logo img').addClass('avec');}
else{$('#logo img').removeClass('avec');$('#logo img').addClass('sans');}});});