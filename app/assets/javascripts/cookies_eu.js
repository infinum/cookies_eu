//= require js.cookie
'use strict';

var cookiesEu = {
  init: function() {
    var cookiesEuOKButton = document.querySelector('.js-cookies-eu-ok');

    if (cookiesEuOKButton) {
      this.addListener(cookiesEuOKButton);
    }
  },

  addListener: function(target) {
    // Support for IE < 9
    if (target.attachEvent) {
      target.attachEvent('onclick', this.setCookie);
    } else {
      target.addEventListener('click', this.setCookie, false);
    }
  },

  setCookie: function() {
    Cookies.set('cookie_eu_consented', true, { path: '/', expires: 365 });

    var container = document.querySelector('.js-cookies-eu');
    container.parentNode.removeChild(container);
  }
};

(function() {
  var isCalled = false;

  function isReady() {
    if (isCalled) return;
    isCalled = true;

    cookiesEu.init();
  }

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', isReady, false);
  }

  // Old browsers IE < 9
  if (window.addEventListener) {
    window.addEventListener('load', isReady, false);
  } else if (window.attachEvent) {
    window.attachEvent('onload', isReady);
  }
})();
