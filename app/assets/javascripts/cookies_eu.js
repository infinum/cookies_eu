//= require jquery
//= require jquery.cookie

$('.cookies_eu_ok').click(function(e){
  e.preventDefault();
  $.cookie('consented', 'true');
  $(this).parent().remove();
});