[![Netlify Status](https://api.netlify.com/api/v1/badges/f6150418-9878-412b-8ea6-9c9d9be761a2/deploy-status)](https://app.netlify.com/sites/wizardly-sammet-ea42d6/deploys)

### Under the hood:

- The site is built with React / Gatsby.
- It's hosted on Netlify which watches my master branch on GitHub for changes. When I push to master, Netlify automatically runs the Gatsby build process and deploys the latest version of the site! Super cool!
- I'm using CSS Grid which allows me to easily shuffle/reorder content from desktop to mobile layouts.
- `Box-shadow` hover transitions are accomplished with performance in mind. Rather than animating `box-shadow` on hover _(taxing on frame-rate)_, `box shadow` has been applied to a pseudo element which uses the much more performant `opacity` property to create the illusion of an animating `box-shadow`.
