//= require jquery
//= require jquery.cookie

$(document).ready( function(){
  $('.cookies_eu_ok').click(function(e){
    e.preventDefault();
    $.cookie('consented', 'true');
    $(this).parent().remove();
  });
});