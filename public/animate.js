function animateIt() {
  $( "div" ).slideToggle( "slow", animateIt );
}

function clickIt() { 
  $("img").click(function() {

    setTimeout(function() {  
      $('img').fadeOut('fast');  
    }, 1000);

    });
}

function clickSpan() {
  $('span').click(function() {
    setTimeout(function() {
      $('img').fadeIn('fast');
    }, 1000);
  })
}

$(function() {

  clickIt();
  clickSpan();
  animateIt();

});

