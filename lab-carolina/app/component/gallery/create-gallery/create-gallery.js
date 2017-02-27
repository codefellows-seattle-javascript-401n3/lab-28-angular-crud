'use strict';

module.exports = {
  template: require('./create-gallery.html'),
  controller: ['$log', 'galleryService', CreateGalleryController],
  controllerAh: 'createGalleryCtrl',
};

function CreateGalleryController($log, galleryService) {
  $log.debug('CreateGalleryController');

  this.createGallery = function() {
    galleryService.createGallery(this.gallery)
    .then( () => {
      this.gallery.name = null;
      this.gallery.desc = null;
    });
  };
}
