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
    picService.uploadPic(this.gallery, this.pic)
    .then( () => { //if it's successfully uploaded, null out the fields/prev info added
      this.pic.name = null;
      this.pic.desc = null;
      this.pic.file = null;
    });
  };
}
