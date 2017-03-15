'use strict';

describe('edit-gallery-component', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $componentController, $httpBackend, authService, galleryService) => {

      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
      this.galleryService = galleryService;
    });

    this.testToken = 'testToken';
    this.$window.localStorage.setItem('token', this.testToken);

  });

  afterEach(() => {
    this.$window.localStorage.removeItem('token');
  });

  describe('editGallery.updateGallery()', () => {
    let url = 'http://localhost:3000/api/gallery/12345';

    let updatedGallery = {
      _id: '12345',
      name: 'updated name',
      desc: 'updated desc'
    };

    let headers = {
      'Authorization': `Bearer ${this.testToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8'
    };

    this.galleryService.updateGallery();
    this.$httpBackend.expectPUT(url, updatedGallery, headers).respond(200);
  });
});
