var apiKey = 'f04da24a7182461755747ddfd02d8bab';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val('');
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text('The humidity in ' + city + ' is ' + response.main.humidity + '%');
    });
  });
});
