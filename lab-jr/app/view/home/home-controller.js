'use strict';

// require('./home.scss');

module.exports = ['$log', '$rootScope', 'galleryService', HomeController];

function HomeController($log, $rootScope, galleryService){
  $log.debug('HomeController');

  this.galleries = [];

  this.fetchGalleries = function(){
    //call fetchGalleries off the galleryService which returns a promise of gallery items in an array
    galleryService.fetchGalleries()
    .then( galleries => {
      this.galleries = galleries;
    });
  };

  this.fetchGalleries();

//render the partial whenever user hits the redirects?
  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchGalleries();
  });
}
