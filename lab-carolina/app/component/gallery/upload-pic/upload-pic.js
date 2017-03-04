'use strict';

module.exports = {
  template: require('./upload-pic.html'),
  controllerAs: 'uploadPicCtrl',
  controller: ['$log', 'picService', UploadPicController],
  bindings: {
    gallery: '<'
  }
}

function UploadPicController($log, picService){
  $log.debug('uploadPicCtrl');

  this.pic = {};
  this.uploadPic = function(){
    picService.uploadPic(this.gallery, this.pic);
  };
}
