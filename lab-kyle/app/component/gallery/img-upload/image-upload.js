'use strict'

module.exports = {
  template: require('./image-upload.html'),
  controller: ['$log', 'imageService', ImageUploadController],
  controllerAs: 'imageUploadCtrl',
  bindings: {
    gallery: '<',
    upload: '<'
  }
}

function ImageUploadController($log, imageService) {
  $log.debug('imageUploadCtrl')

  this.image = {}

  this.uploadImage = function() {
    $log.log(this.image)
    imageService.uploadImage(this.gallery, this.image)
      .then(() => {
        $log.log('image uploaded')
        this.image.name = null
        this.image.desc = null
        this.image.file = null
        this.upload = false;
      })
  }
}
