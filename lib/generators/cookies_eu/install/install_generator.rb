module CookiesEu
  module Generators
    class InstallGenerator < Rails::Generators::Base
      def add_javascripts
        append_file 'app/assets/javascripts/application.js', "//= require cookies_eu\n"
      end

      def add_stylesheets
        inject_into_file 'app/assets/stylesheets/application.css', "*= require cookies_eu\n", before: /\*\//, verbose: true
      end
    end
  end
end
