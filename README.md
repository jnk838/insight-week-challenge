# PwC Insight Week Challenge Site

## Theme

Colours from PwC branding can be found
[here](https://www.schemecolor.com/pricewaterhousecoopers-pwc-logo.php)

## Running the site locally

First of all, you will need to install Ruby.

Then you can run `gem install bundler`.

Once bundler has been installed, navigate to this directory, and install the
requirements for the site using `bundle install`.

You may also need to run `bundle config set path 'vendor/bundle'`.

Then you can run the site using `bundle exec jekyll serve` and open it by going
to **localhost:4000** in your web browser.

## Adding custom CSS styling

Add a `.scss` file to the `_sass/` directory.

Make sure you add the new file to the `_sass/type-on-strap.scss` file using
`@import ...`.

## Adding challenges

Write up the challenge as a markdown file in the `pages/challenges/` directory.

Then add the details of the challenge to the `_data/challenges.yml` file.

# CTFd Instance

There is currently an instance of *CTFd* running on *35.246.49.218:8000*.

Not sure if this will be the best way to take answers from participants, but
for now we can think about how best to use it.