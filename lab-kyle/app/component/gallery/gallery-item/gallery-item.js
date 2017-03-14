'use strict'

require('./_gallery-item.scss')

module.exports = {
  template: require('./gallery-item.html'),
  controller : ['$log', 'galleryService', GalleryItemController],
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '='
  }
}

function GalleryItemController($log, galleryService) {
  $log.debug('galleryItemCtrl')

  this.update = false
  this.upload = false

  this.pics = []

  this.deleteGallery = function(){
    galleryService.deleteGallery(this.gallery._id)
      .then(() => {
        $log.log('gallery deleted')
      })
  }
}
