var dataModule = (function() {
  var publicAPI = {
    hotelsPromise: $.ajax({
      method: 'GET',
      url: '/api/hotels'
    }),
    restaurantsPromise: $.ajax({
      method: 'GET',
      url: '/api/restaurants'
    }),
    activitiesPromise: $.ajax({
      method: 'GET',
      url: '/api/activities'
    })
  };
  const name = $('[name="name"]');
  const num_stars = $('[name="num_stars"]');
  const amenities = $('[name="amenities"]');

  // $('#newHotel').on('click', function(){
  //   $.ajax({
  //     method: 'POST',
  //     url: '/newhotel',
  //     data: {
  //       name: name.val(),
  //       num_stars: num_stars.val(),
  //       amenities: amenities.val()
  //     }
  //   })
  // })

  return publicAPI;
}());
