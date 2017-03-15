'use strict';

describe('galleryService', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, galleryService, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.galleryService = galleryService;
      this.authService = authService;
    });

    this.testToken = 'testToken';
    this.$window.localStorage.setItem('token', this.testToken);
  });
  //remove token
  afterEach(() => {
    this.$window.localStorage.removeItem('token');
  });
  describe('galleryService.createGallery()', () => {
    it('should create a new gallery', () =>{
      let galleryData = {
        name: 'example gallery',
        desc: 'example description'
      };

      let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.testToken}`
      };

      this.$httpBackend.expectPOST('http://localhost:3000/api/gallery', galleryData, headers).respond(200, {
        _id: '1234',
        username: 'jrtest',
        name: galleryData.name,
        desc: galleryData.desc,
        pics: []
      });

      this.galleryService.createGallery(galleryData);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});
