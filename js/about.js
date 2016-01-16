$( document ).ready(function() {

  var swingtimes_content_in = 300;
  var swingtimes_back_out = 300;
  var loadout = 900;

  // load in
    // animations
    $( '.about_content' ).animate(
      { "left" : "-=100%" }, swingtimes_content_in, "swing" );

  // tooltips
  $(document).bind( 'mousemove', function(e){
		$( '.tooltips_about_return' ).css({
		   left:  e.pageX - 53,
		   top:   e.pageY - 27,
		});
	});

	$( '.about_return' ).hover(
		function(){$( '.tooltips_about_return' ).css( 'display', 'block' )},
		function(){$( '.tooltips_about_return' ).css( 'display', 'none' )}
	);

  // load out
  $( '.about_return' ).click(function(e) {
    // delay
    e.preventDefault();

    setTimeout(function() {
      window.location.href = "index_test1.html";
    }, loadout);

    // animations
    $( '.about_back' ).animate(
      { "left" : "+=100%" }, swingtimes_back_out, "swing" );
  });

});
