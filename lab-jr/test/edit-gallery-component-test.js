'use strict';

describe('edit-gallery-component', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
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
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${this.testToken}`
      };

      this.$httpBackend.expectPUT(url, {
      _id: '12345',
      name: 'updated name',
      desc: 'updated description'
      }, headers).respond(200);

      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'updated name',
          desc: 'updated description'
        },
      };
      let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
      editGalleryCtrl.gallery.name = 'updated name';
      editGalleryCtrl.gallery.desc = 'updated description';
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
