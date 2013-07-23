//= require jquery
//= require jquery.cookie
//= require jqurey.mobile.custom
//= require jqurey.mobile.custom.structure

$(document).ready( function(){
  $('.cookies-eu-ok').click(function(e){
    e.preventDefault();
    $.cookie('cookie_eu_consented', 'true', { path: '/'});
    $('.cookies-eu').remove();
  });
});