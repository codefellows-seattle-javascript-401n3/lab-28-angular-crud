'use strict';

describe('testing edit-gallery-component', function() {

  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {

      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  it('should contain proper component bindings', () => {
    let mockBindings = {
      gallery: {
        name: 'testName',
        desc: 'testDesc',
      },
    };

    let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
    expect(editGalleryCtrl.gallery.name).toEqual(mockBindings.gallery.name);
    expect(editGalleryCtrl.gallery.desc).toEqual(mockBindings.gallery.desc);

    this.$rootScope.$apply();
  });


  describe('editGalleryCtrl.updateGallery()', () => {
    it('should make a valid PUT request', () => {
      let url = 'http://localhost:8000/api/gallery/1234';
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPUT(url, {
        _id: '1234',
        name: 'updated',
        desc: 'updated',
      }, headers).respond(200);

      let mockBindings = {
        gallery: {
          _id: '1234',
          name: 'updated',
          desc: 'updated',
        },
      };

      let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
      editGalleryCtrl.gallery.name = 'updated';
      editGalleryCtrl.gallery.desc = 'updated';
      editGalleryCtrl.updateGallery();

      this.$httpBackend.flush();
      this.$rootScope.$apply();

    });
  });
});
