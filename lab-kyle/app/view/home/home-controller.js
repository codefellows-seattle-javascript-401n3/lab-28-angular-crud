'use strict'

require('./_home.scss')

module.exports = ['$log', '$rootScope', 'authService', 'galleryService', HomeController]

function HomeController($log, $rootScope, authService, galleryService) {
  $log.debug('HomeController')

  this.fetchGalleries = function() {
    galleryService.fetchGalleries()
      .then( res => {
        this.galleries = res
      })
  }

  this.fetchGalleries()

  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchGalleries();
  })
}
