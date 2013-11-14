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

$(function() {

  clickIt();
  animateIt();

});

