'use strict'

module.exports = ['$log', '$q', 'Upload', 'authService', imageService]

function imageService($log, $q, Upload, authService) {
  $log.debug('imageService')

  let service = {}

  service.uploadImage = function(galleryData, imageData) {
    $log.debug('imageService.uploadImage()')

    return authService.getToken()
      .then( token => {
        let url = `${__API_URL__}/api/gallery/${galleryData._id}/pic`
        let headers = {
          Authorizaiton: `Bearer ${token}`,
          Accept: 'application/json'
        }
        let method = 'POST'
        let data = {
          name: imageData.name,
          desc: imageData.desc,
          file: imageData.file
        }

        return Upload.upload({url, headers, method, data})
      })
      .then( res => {
        galleryData.pics.unshift(res.data)
        return res.data
      })
      .catch( err => {
        $log.error(err.message)
        return $q.reject(err)
      })
  }
}
