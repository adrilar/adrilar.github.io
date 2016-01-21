$( document ).ready(function() {

  var swingtimes_content_in = 300;
  var swingtimes_back_out = 300;
  var loadout = 900;

  // load in
    // animations
    $( '.work_content' ).animate(
      { "left" : "+=100%" }, swingtimes_content_in, "swing" );

  // tooltips
  $(document).bind( 'mousemove', function(e){
		$( '.tooltips_work_return' ).css({
		   left:  e.pageX + 30,
		   top:   e.pageY - 27,
		});
	});

	$( '.work_return' ).hover(
		function(){$( '.tooltips_work_return' ).css( 'display', 'block' )},
		function(){$( '.tooltips_work_return' ).css( 'display', 'none' )}
	);

  // load out
  $( '.work_return' ).click(function(e) {
    // delay
    e.preventDefault();

    setTimeout(function() {
      window.location.href = "index_test1.html";
    }, loadout);

    // animations
    $( '.work_back' ).animate(
      { "left" : "-=100%" }, swingtimes_back_out, "swing" );
  });

});
