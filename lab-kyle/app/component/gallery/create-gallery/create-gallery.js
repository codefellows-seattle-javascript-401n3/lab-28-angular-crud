'use strict'

module.exports = {
  template: require('./create-gallery.html'),
  controller: ['$log', 'galleryService', CreateGalleryController],
  controllerAs: 'createGalleryCtrl'
}

function CreateGalleryController($log, galleryService) {
  $log.debug('CreateGalleryController')

  this.gallery = {}

  this.createGallery = function() {
    galleryService.createGallery(this.gallery)
      .then( () => {
        this.gallery.name = null
        this.gallery.desc = null
      })
  }

  this.fetchGalleries = function() {
    galleryService.fetchGalleries()
      .then( res => {
        this.galleries = res;
      })
  }

  this.deleteGallery = function(id){
    galleryService.deleteGallery(id)
      .then(res => {
        $log.log('gallery deleted')
        this.galleries = res.filter(function(el) {
          if (el) return el
        })
      })
  }
}
