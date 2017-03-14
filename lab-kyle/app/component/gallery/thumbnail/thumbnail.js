'use strict'

require('./_thumbnail.scss')

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'imageService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    images: '<',
    gallery: '<'
  }
}

function ThumbnailController($log, imageService) {
  $log.debug('ThumbnailController')

  this.showAll = false;

  this.deletePic = function() {
    $log.debug('ThumbnailController.deletePic')
  }
}
