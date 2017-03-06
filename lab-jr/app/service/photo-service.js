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
      galleryId.pics.unshift(res.data);
      console.log(res.data, ' = res.data');
      return res.data;
    })
    .catch( err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
