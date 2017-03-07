'use strict';

module.exports = {
  template: require('./photos-in-partial.html'),
  controller: ['$log', 'photoService', PhotosInPartialController],
  controllerAs: 'photosInPartialCtrl',
  bindings: {
    pic: '<'
  }
};

function PhotosInPartialController($log, photoService){
  $log.debug('ThumbnailController loaded');

  this.deletePic = function(){
    $log.debug('thumbnailCtrl.deletePic()');

    photoService.deletePic(this.gallery, this.pic);
    //write function inside photoService to delete a photo
  };
}
