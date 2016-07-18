(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$( document ).scroll(function(){
		$height = ($( ".nav-bar-scroll" ).height()*100)/$( document ).height(); //$( document ).scrollTop();
		if($( document ).scrollTop() > 380){
			$( ".nav-bar-scroll" ).css({'position': 'fixed', 'top': '0'});
		}else{
			$( ".nav-bar-scroll" ).css({'position': 'relative'});
		}
	});
	
	$( document ).scroll(function(){
		$height = ($( ".nav-bar-profile" ).height()*100)/$( document ).height(); //$( document ).scrollTop();
			console.log($( document ).scrollTop());
		if($( document ).scrollTop() > 0){
			$( ".nav-bar-profile" ).css({'position': 'fixed', 'top': '0'});
		}else{
			$( ".nav-bar-profile" ).css({'position': 'relative'});
		}
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space