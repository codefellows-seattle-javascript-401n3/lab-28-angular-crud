'use strict';

module.exports = {
  template: require('./gallery-partial.html'),
  controller: ['$log', GalleryPartialController],
  controllerAs: 'galleryPartialCtrl',
  bindings: {
    gallery: '<'
  }
};

function GalleryPartialController($log){
  $log.debug('init galleryPartialCtrl');
  console.log(this.gallery, ' => this.gallery will be passed in as an element');

}
