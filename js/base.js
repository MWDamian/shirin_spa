/** Global */


nav_expand = true;
/** END OF Global */
$(document).scroll(function(){
	
	if($(document).scrollTop() > 50){
		if(nav_expand == true){	
			nav_expand	 = false;
			 $(".nav_header img").animate({ 
				height: 50,
			 }, 200, 'easeOut');
			 $(".nav_header span").animate({ 
				top: 18,
			 }, 200, 'easeOut');
			 $(".nav_header li").animate({ 
				paddingTop : 0,
				paddingBottom : 0,
			 }, 200, 'easeOut');
		}
	 }
	 if($(document).scrollTop() < 50){	
	 	if(nav_expand == false){	
			 nav_expand	 = true;	 
			 $(".nav_header img").animate({ 
				height: 60,
			 }, 200, 'easeOut');
			 $(".nav_header span").animate({ 
				top: 21,
			 }, 200, 'easeOut');
			 $(".nav_header li").animate({ 
				paddingTop : 10,
				paddingBottom :10,
			 }, 200, 'easeOut');
		}
	 }
})

$(document).ready(function(){
	
	
	
	$('.discounts_photogallery figure').mouseenter(function(){
		$(this).children('.promo_container').animate({
			top: '0px',
		},500,'easeOut')
	})
	$('.discounts_photogallery figure').mouseleave(function(){
		$(this).children('.promo_container').animate({
			top: '135px',
		},500,'easeOut')
	})
	
	
	$('.treatments_gallery li').click(function(){
		$('.treatments_gallery li').css('opacity',1);
		$(this).css('opacity',0.6);
		
		$("html, body").animate({ scrollTop: $(window).scrollTop()+100 });
		
		$('.treatments_subgallery').slideUp('fast');
		$('#'+this.id+'_subgallery').slideToggle('fast','easeOut');
	})
	
	
	$('.treatments_subgallery .items .link').click(function(){
		description = $(this).parent().parent().children('.description');
		footer = $(this).parent().parent().children('footer');
		
		if(description.is(':visible')){
			$(this).children('.arrows').addClass('rotate0').removeClass('rotate90');
			description.slideToggle('fast','easeOut')
			footer.slideToggle('fast','easeOut');
		}else{
			$(this).children('.arrows').addClass('rotate90').removeClass('rotate0');
			description.slideToggle('fast','easeOut')
			footer.slideToggle('fast','easeOut');

		}
	})
	
	
	$('.set_gallery_box').click(function(){
		$('.set_gallery_box').css('opacity',1);
		$(this).css('opacity',0.6);
		
		$('.set_gallery_details').slideUp('fast');
		if($('#'+this.id+'_details').is(':visible')){
			$('#'+this.id+'_details').slideUp('fast','easeOut');
			$("html, body").animate({ scrollTop: $(window).scrollTop()-100 });
			$('.set_gallery_box').css('opacity',1);
		}else{
			$('#'+this.id+'_details').slideToggle('fast','easeOut');
			$("html, body").animate({ scrollTop: $(window).scrollTop()+100 });
		}
	})
	
	
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
});
	
});


var map;
function initialize() {
	//google.maps.visualRefresh = true;
	
	var map_canvas = document.getElementById('gmap');
	var myLatlng = new google.maps.LatLng(51.247823, 22.557966);
	var centerlng = new google.maps.LatLng(51.248914, 22.549876);
	var map_options = {
	  center: centerlng,
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(map_canvas, map_options)
	google.maps.event.trigger(map, 'resize');
	
	var marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  icon: 'images/gmap_icon.png',
	  title: 'Shirin SPA'
  });
}


google.maps.event.addDomListener(window, 'load', initialize);




