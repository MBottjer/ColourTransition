var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidthandHeight = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidthandHeight).mousemove(function(event) {

    rgb = [
        Math.floor(event.pageX/w * 255),
        Math.floor(event.pageY/h * 255),
        50
    ];

    $(document.body).css('background','rgb('+rgb.join(',')+')');

}).resize();