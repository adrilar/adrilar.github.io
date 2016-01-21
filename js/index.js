$( document ).ready(function() {

  var loadin_signature = 500;
  var loadin_links_work = 700;
  var loadin_links_contact = 900;
  var loadin_links_about = 1100;

  var swingtimes_screens = 300;
  var swingtimes_big = 400;
  var loadout = 900;

  var slidewidth_bigscreens = $(window).width() - 205;

  // load in
    // animations
    $( '.bottomrow' ).animate(
      { "height" : "-=2000px" }, loadin_signature, "swing" );

    $( '.links_work' ).animate(
      { "left" : "-=100%" }, loadin_links_work, "swing" );

    $( '.links_contact' ).animate(
      { "top" : "-=100%" }, loadin_links_contact, "swing" );

    $( '.links_about' ).animate(
      { "left" : "+=100%" }, loadin_links_about, "swing" );

  // work
  $( '.links_work a' ).mouseover(function() {
    $( '.screens_work' ).animate(
      { "left" : "-=150%" }, swingtimes_screens, "swing" );
  });

  $( '.links_work a' ).mouseout(function() {
    $( '.screens_work' ).animate(
      { "left" : "+=150%" }, swingtimes_screens, "swing" );
  });

  // click
  $( '.links_work a' ).click(function(e) {
    // delay
    e.preventDefault();

    setTimeout(function() {
      window.location.href = "work.html";
    }, loadout);

    // animations
    $( '.bigscreens_work' ).animate(
      { "left" : "+=" + slidewidth_bigscreens }, swingtimes_big, "swing" );
  });



  // contact
  $( '.links_contact a' ).mouseover(function() {
    $( '.screens_contact' ).animate(
      { "top" : "-=150%" }, swingtimes_screens, "swing" );
  });

  $( '.links_contact a' ).mouseout(function() {
    $( '.screens_contact' ).animate(
      { "top" : "+=150%" }, swingtimes_screens, "swing" );
  });

  // click
  $( '.links_contact a' ).click(function(e) {
    // delay
    e.preventDefault();

    setTimeout(function() {
      window.location.href = "contact.html";
    }, loadout);

    // animations
    $( '.bigscreens_contact' ).animate(
      { "top" : "+=91%" }, swingtimes_big, "swing" );
  });



  // about
  $( '.links_about a' ).mouseover(function() {
    $( '.screens_about' ).animate(
			{ "left" : "+=170%" }, swingtimes_screens, "swing" );
  });

  $( '.links_about a' ).mouseout(function() {
    $( '.screens_about' ).animate(
			{ "left" : "-=170%" }, swingtimes_screens, "swing" );
  });

  // click
  $( '.links_about a' ).click(function(e) {
    // delay
    e.preventDefault();

    setTimeout(function() {
      window.location.href = "about.html";
    }, loadout);

    // animations
    $( '.bigscreens_about' ).animate(
      { "left" : "-=" + slidewidth_bigscreens }, swingtimes_big, "swing" );

    //$( '.gridtop' ).animate(
      //{ "left" : "-=100%" }, swingtimes_big, "swing" );
  });

});
