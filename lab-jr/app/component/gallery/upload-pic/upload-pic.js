'use strict';

module.exports = {
  template: require('./upload-pic.html'),
  controller: ['$log', 'photoService', UploadPicController],
  controllerAs: 'uploadPicCtrl',
  bindings: {
    gallery: '<'
  }
};

function UploadPicController($log, photoService){
  $log.debug('UploadPicController initialized');

  this.pic = {};

  this.uploadPic = function(){
    photoService.uploadGalleryPic(this.gallery, this.pic)
    .then(() => {
      this.pic.name = null;
      this.pic.desc = null;
      this.pic.file = null;
    });
  };
}
