'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', picService];

function picService($q, $log, Upload, authService) {
  $log.debug('picservice');

  let service = {};

  service.uploadPic = function(galleryData, picData){
    $log.debug('picService.uploadPic()');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/gallery/${galleryData._id}/pic`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };
      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: picData.name,
          desc: picData.desc,
          file: picData.file,
        },
      });
    })
    .then( res => {
      galleryData.pics.unshift(res.data);
      $log.log('success',res.data);
      return res.data;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.error;
    });
  };

  return service;
}
