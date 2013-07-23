//= require jquery
//= require jquery.cookie
//= require jquery.mobile.custom

$(document).ready( function(){
  $('.cookies-eu-ok').click(function(e){
    e.preventDefault();
    $.cookie('cookie_eu_consented', 'true', { path: '/'});
    $('.cookies-eu').remove();
  });
});