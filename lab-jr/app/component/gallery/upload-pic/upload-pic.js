'use strict';

module.exports = {
  template: require('./upload-pic.html'),
  controller: ['$log', 'photoService', UploadPicController],
  controllerAs: 'uploadPicCtrl',
  bindings: {
    gallery: '<'
  }
};

function UploadPicController($log, photoService)
