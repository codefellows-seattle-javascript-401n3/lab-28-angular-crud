'use strict';

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  controller: ['$log', 'picService', ThumbnailController],
  bindings: {
    pic: '<',
    gallery: '<',
  },
};

function ThumbnailController($log, picService){
  $log.debug('picService')

  this.deletePic = function(){
    $log.debug('thumbnailCtrl.deletePic()');
    picService.deletePic(this.gallery, this.pic);
  };
}
