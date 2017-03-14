'use strict'

module.exports = {
  template: require('./image-gallery.html'),
  controller: ['$log', 'imageService', ImageGalleryController],
  controllerAs: 'imageGalleryCtrl',
  bindings: {
    images: '<',
    gallery: '<'
  }
}

function ImageGalleryController($log, imageService) {
  $log.debug('ImageGalleryController')

  let service = {}
  this.image

  service.deleteImage = function(id) {
    $log.debug('ImageGalleryController.deleteImage')
    imageService.deleteImage(this.gallery, id)
  }

  return service
}
