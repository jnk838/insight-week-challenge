# PwC Insight Week Challenge Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/5dd767df-b306-4a22-8d46-2b1bbba4ee5f/deploy-status)](https://app.netlify.com/sites/insight-week-challenge/deploys)

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

| Challenge Difficulty | Number |
|----------------------|--------|
| Easy                 | 1      |
| Medium               | 2      |
| Hard                 | 3      |

To allow participants to check their solutions, add a unique identifying name
for you challenge to the information at the top of the file for your challenge.
It should look like this: `challenge: CHALLENGE_NAME`. Make sure to pass this
along to me (Jacob) along with the answer so it can be added to the backend
code. If you want to explain the format of your challenge, add this line to the
same area as the challenge identifier: `explanation: ...`.

If you want to add a hint to your challenge, just add the following to the info
at the top of the file: `hint: Your hint goes here`.