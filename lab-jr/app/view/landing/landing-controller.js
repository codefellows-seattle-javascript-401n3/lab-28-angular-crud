'use strict';

// require('./_landing.scss');

//why export rootscope if we're not using it in the factory?
module.exports = ['$log', '$location', LandingController];

function LandingController($log, $location) {
  let url = $location.url();
  this.showSignup = url === '/join#signup' || url === '/join';
}
