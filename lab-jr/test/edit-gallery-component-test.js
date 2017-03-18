'use strict';

describe('edit-gallery-component', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $componentController, $httpBackend, authService, galleryService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
      this.$window = $window;
      this.galleryService = galleryService;
    });
    this.$window.localStorage.setItem('token', 'test token');
  });

  it('should have the mock bindings', () => {
    let mockBindings = {
      gallery: {
        name: 'test gallery name',
        desc: 'test gallery desc'
      }
    };

    let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
    expect(editGalleryCtrl.gallery.name).toBe('test gallery name');
    expect(editGalleryCtrl.gallery.desc).toBe('test gallery desc');

    this.$rootScope.$apply();
  });

  describe('editGallery.updateGallery()', () => {
    it('should use updateGallery to update Gallery object', () => {
      let url = 'http://localhost:3000/api/gallery/12345';
      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPUT(url, {
        _id: '12345',
        name: 'updated name',
        desc: 'updated description'
      }, headers).respond(200);
      this.$httpBackend.expectGET().respond(200);

      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'updated name',
          desc: 'updated description'
        },
      };
      let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
      editGalleryCtrl.$onInit();
      editGalleryCtrl.gallery.name = 'updated name';
      editGalleryCtrl.gallery.desc = 'updated description';
      console.log(editGalleryCtrl.updateGallery);
      console.log(editGalleryCtrl);
      editGalleryCtrl.updateGallery();
      // let updatedGallery = {
      //   _id: '12345',
      //   name: 'updated name',
      //   desc: 'updated desc'
      // };

      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});
