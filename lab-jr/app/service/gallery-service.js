'use strict';

module.exports = ['$q', '$log', '$http', 'authService', galleryService];

function galleryService($q, $log, $http, authService){
  $log.debug('galleryService.createGallery()');

  let service = {};
  service.galleries = [];

  service.createGallery = function(gallery){
    $log.debug('galleryService.createGallery()');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      };

      return $http.post(url, gallery, config);
    })
    .then( res => {
      $log.log('gallery created');
      let gallery = res.data;
      //add element to the beginning of our gallery array
      service.galleries.unshift(gallery);
      return gallery;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };
  service.fetchGalleries = function(){
    $log.debug('getting galleries with galleryService.fetchGalleries');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/gallery`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
//what exactly is happening here?
      return $http.get(url, config);
    })
    //the object that is returned is res.data which is whatever the user has access to/has created once logged in.  in this case, it's a gallery.

    .then( res => {
      $log.log('gallery has been found : ', res.data);
    //why set service.galleries as the res.data? why not pass res.data right along to the user??
      service.galleries = res.data;
      $log.log(service.galleries);
      return service.galleries;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.deleteGallery = function(galleryId){
    $log.debug('galleryService.updateGallery -> deleteGallery - singular');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${galleryId}`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      return $http.delete(url, config);
    })
    .then( () => {
      //update gallery in galleries array on service.
      // service.galleries = service.galleries.filter(function(gallery) {
      //   if(gallery != galleryId) return gallery;
      // }); <-- doesn't work. creates new array, but doesnt modify the EXISTING array. using splice would after iterating through the array would work.
      for(let i = 0; i < service.galleries.length; i++) {
        if(service.galleries[i]._id === galleryId) {
          service.galleries.splice(i,1);
        }
      }
      // service.fetchGalleries();
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });

  };
  service.updateGallery = function(galleryId, updatedGallery){
    $log.debug('galleryService.updateGallery()');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/gallery/${galleryId}`;
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
      return $http.put(url, updatedGallery, config);
    })
    .then(res => {
      for(let i = 0; i < service.galleries.length; i++) {
        if(service.galleries[i]._id === galleryId) {
          service.galleries[i] = res.data;
        }
      }
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
