'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope', 'galleryService', HomeController];

function HomeController($log, $rootScope, galleryService) {
  $log.debug('HomeController');

  this.galleries = [];

  this.getGalleries = function(){
    galleryService.getGalleries()
    .then( galleries => {
      this.galleries = galleries;
    });
  };

  this.getGalleries();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.getGalleries();
  });

}
