$("#slider-range").slider({
  range: true,
  min: 0,
  max: 3500,
  step: 50,
  slide: function( event, ui ) {
    $( "#min-price").html(ui.values[ 0 ]);

    console.log(ui.values[0])

    suffix = '';
    if (ui.values[ 1 ] == $( "#max-price").data('max') ){
      suffix = ' +';
    }
    $( "#max-price").html(ui.values[ 1 ] + suffix);
  }
})
