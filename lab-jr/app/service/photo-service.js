'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', photoService];

function photoService($q, $log, $http, Upload, authService){
  $log.debug('inside photoService for uploads');
  let service = {};

  service.uploadPic = function(galleryId, picProps) {
    $log.debug('photoservice.uploadPic()');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${galleryId._id}/pic`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };
      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: picProps.name,
          desc: picProps.desc,
          file: picProps.file,
        },
      });
    })
    .then(res => {
      console.log(res.data, ' = res.data');
      galleryId.pics.unshift(res.data);
      console.log(res.data, ' = res.data');
      return res.data;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.deletePic = function(gallery, pic){
    $log.debug('inside picService.deletePic()');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${gallery._id}/pic/${pic._id}`;
      let config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      return $http.delete(url, config);
    })
    .then(() => {
      $log.log('deleted a pic!');

      for(let i = 0; i < gallery.pics.length; i++){
        let current = gallery.pics[i];

        if(current._id === pic._id){
          gallery.pics.splice(i, 1);
          break;
        }
      }
    })
    .catch(err => {
      $log.error('not found or couldn\t delete');
      return $q.reject(err);
    });
  };

  return service;
}
