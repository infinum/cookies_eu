//= require js.cookie
'use strict';

var windowIsTurbolinked = 'Turbolinks' in window;

var cookiesEu = {
  init: function() {
    var cookiesEuOkButtons = document.querySelectorAll('.js-cookies-eu-ok');
    var cookiesEuCustomizeButton = document.querySelector('.js-cookies-eu-customize');

    for (var i = 0; i < cookiesEuOkButtons.length; i++) {
      this.addCookieOkListener(cookiesEuOkButtons[i]);
      // clear turbolinks cache so cookie banner does not reappear
      windowIsTurbolinked && window.Turbolinks.clearCache();
    };

    if (cookiesEuCustomizeButton) {
      this.addCustomizeListener(cookiesEuCustomizeButton);
    }
  },

  addCookieOkListener: function(target) {
    // Support for IE < 9
    if (target.attachEvent) {
      target.attachEvent('onclick', this.handleCookieOk);
    } else {
      target.addEventListener('click', this.handleCookieOk, false);
    }
  },

  addCustomizeListener: function(target) {
    // Support for IE < 9
    if (target.attachEvent) {
      target.attachEvent('onclick', this.showCustomizeContainer);
    } else {
      target.addEventListener('click', this.showCustomizeContainer, false);
    }
  },
  
  showCustomizeContainer: function(e) {
    var customize_container = document.querySelector('.cookies-eu-customize');
    customize_container.style.display = "";
  },

  handleCookieOk: function(e) {
    var isSecure = location.protocol === 'https:';
    var accept_all_cookies = false;
    Cookies.set('cookie_eu_consented', true, { path: '/', expires: 365, secure: isSecure });

    if (e.target.getAttribute('data-cookies-eu-accept-all')) {
      accept_all_cookies = true;
    }
    // find cookie names to set (for customized cookies)
    var cookie_name_prefix = 'cookie_eu_consented_';
    var checkboxes = document.querySelectorAll('.cookies-eu-customize input[type=checkbox]');
    for (var i = 0; i < checkboxes.length; i++) {
      var element = checkboxes[i];
      if (accept_all_cookies || element.checked) {
        if (element.value) {
          var cookie_name = cookie_name_prefix + element.value;
          Cookies.set(cookie_name, true, { path: '/', expires: 365, secure: isSecure });
        }
      }
    };

    var container = document.querySelector('.js-cookies-eu');
    container.parentNode.removeChild(container);

    var customize_container = document.querySelector('.cookies-eu-customize');
    if (customize_container) {
      customize_container.parentNode.removeChild(customize_container);
    }

    document.dispatchEvent(new CustomEvent('cookies-eu-acknowledged'));
  }
};

(function() {
  function eventName(fallback) {
    return windowIsTurbolinked ? 'turbolinks:load' : fallback
  }

  var isCalled = false;

  function isReady() {
    // return early when cookiesEu.init has been called AND Turbolinks is NOT included
    // when Turbolinks is included cookiesEu.init has to be called on every page load
    if (isCalled && !windowIsTurbolinked) {
      return
    }
    isCalled = true;

    cookiesEu.init();
  }

  if (document.addEventListener) {
    return document.addEventListener(eventName('DOMContentLoaded'), isReady, false);
  }

  // Old browsers IE < 9
  if (window.addEventListener) {
    window.addEventListener(eventName('load'), isReady, false);
  } else if (window.attachEvent) {
    window.attachEvent(eventName('onload'), isReady);
  }
})();
