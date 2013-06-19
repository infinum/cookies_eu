# CookiesEu

TODO: Write a gem description

## Installation

Add this line to your application's Gemfile:

    gem 'cookies_eu'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install cookies_eu

## Usage

In application.js add

    //= require cookies_eu

In application.css add

    // = require cookies_eu

In your view add

    = render 'cookies_eu/cookies_eu'

You can add a link parameter to link to your cookies explanation page (you have to create the page and controller for this)

    = render 'cookies_eu/cookies_eu', link: '/cookies'


If you whish to customize the syle of the div the classes are:

    .cookies_eu           // main div
    .cookies_eu_ok        // button
    .cookies_eu_link      // link

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
