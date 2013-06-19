//= require jquery
//= require jquery.cookie

$('body').on('click', '.cookies_eu_ok', function(e){
  e.preventDefault();
  $.cookie('consented', 'true');
  $(this).parent().remove();
});