'use strict';

describe('edit-gallery-component', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $componentController, $httpBackend, authService) => {

      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });

    this.testToken = 'testToken';
    this.$window.localStorage.setItem('token', this.testToken);

  });

  afterEach(() => {
    this.$window.localStorage.removeItem('token');
  });

  describe('editGallery.updateGallery()', () => {
    it('should use updateGallery to update Gallery object', () => {
      let url = 'http://localhost:3000/api/gallery/12345';

      let updatedGallery = {
        _id: '12345',
        name: 'updated name',
        desc: 'updated desc'
      };

      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${this.testToken}`
      };

      this.$httpBackend.expectPUT(url, updatedGallery, headers).respond(200);

      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'updated name',
          desc: 'updated desc'
        }
      };


      let editGalleryCtrl = this.$componentController('galleryService', null, mockBindings);
      console.log('$componentController for editGallery:', editGalleryCtrl.updateGallery);
      editGalleryCtrl.gallery.name = 'updated name';
      editGalleryCtrl.gallery.desc = 'updated desc';
      editGalleryCtrl.updateGallery();

      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});
