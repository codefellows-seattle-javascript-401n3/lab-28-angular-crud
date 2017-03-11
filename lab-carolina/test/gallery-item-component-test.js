'use strict';

describe('testing gallery-item-component', function(){
  beforeEach(() => {
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

    let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
    expect(galleryItemCtrl.gallery.name).toEqual(mockBindings.gallery.name);
    expect(galleryItemCtrl.gallery.desc).toEqual(mockBindings.gallery.desc);

    this.$rootScope.$apply();
  });


  describe('galleryItemCtrl.deleteGallery()', () => {
    it('should make valid DELETE request', () => {
      let mockBindings = {
        gallery: {
          _id: '1234',
        },

        deleteGallery: function(id) {
          expect(id).toEqual('1234');
        },
      };

      let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
      galleryItemCtrl.deleteGallery(galleryItemCtrl.gallery._id);

      this.$rootScope.$apply();
    });
  });
});
