'use strict'

require('./_home.scss')

module.exports = ['$log', '$rootScope', '$translate', 'authService', 'galleryService', HomeController]

function HomeController($log, $rootScope, $translate, authService, galleryService) {
  $log.debug('HomeController')

  this.fetchGalleries = function() {
    galleryService.fetchGalleries()
      .then( res => {
        this.galleries = res
      })
  }

  this.fetchGalleries()

  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchGalleries()
  })

  this.changeLanguage = function(langKey) {
    $translate.use(langKey)
  }
}
