'use strict';

module.exports = {
  template: require('./gallery-partial.html'),
  controller: ['$log', 'galleryService', GalleryPartialController],
  controllerAs: 'galleryPartialCtrl',
  bindings: {
    gallery: '<'
  }
};

function GalleryPartialController($log, galleryService){
  $log.debug('init galleryPartialCtrl');
  console.log(this.gallery, ' => this.gallery will be passed in as an element');

  this.deleteGallery = function(){
    console.log(this.gallery, ' = this.gallery', this.gallery._id, ' = this.gallery._id');
    galleryService.deleteGallery(this.gallery._id);
  };
}
