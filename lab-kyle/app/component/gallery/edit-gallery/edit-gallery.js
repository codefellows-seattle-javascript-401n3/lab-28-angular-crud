'use strict'

require('./_edit-gallery.scss')

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', 'authService', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<',
    update: '<'
  }
}

function EditGalleryController($log, authService, galleryService) {
  $log.debug('EditGalleryController')

  this.gallery = {}

  this.updateGallery = function() {
    galleryService.updateGallery(this.gallery._id, this.gallery)
      .then(gallery => {
        this.update = false
        return gallery
      })
  }
}
