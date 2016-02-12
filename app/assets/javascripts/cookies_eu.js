//= require jquery.cookie

$(document).ready(function () {
    $('.cookies-eu-ok').click(function (e) {
        e.preventDefault();
        $.cookie('cookie_eu_consented', 'true', {path: '/', expires: 365});
        $('.cookies-eu').remove();
    });
});
