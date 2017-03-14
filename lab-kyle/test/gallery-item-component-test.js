/* global expect angular*/

'use strict'

describe('Gallery Item Component', function() {

  beforeEach(() => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope
      this.$componentController = $componentController
      this.$httpBackend - $httpBackend
      this.authService = authService
    })
  })

  it('should have proper bindings', () => {
    let mockBindings = {
      gallery: {
        name: 'test name',
        desc: 'test desc'
      }
    }

    let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings)
    expect(galleryItemCtrl.gallery.name).toEqual(mockBindings.gallery.name)
    expect(galleryItemCtrl.gallery.desc).toEqual(mockBindings.gallery.desc)

    this.$rootScope.$apply()
  })

  describe('galleryItemController.deleteGallery()', () => {
    it('should delete a gallery', () => {
      let url = 'http://localhost:3000/api/gallery/test'
      let headers = {
        Accept: 'application/json',
        Authorization: 'Bearer test token',
        'Content-Type': 'application/json'
      }
      let mockBindings = {
        gallery: {
          _id: 'test',
          name: 'test name',
          desc: 'test desc',
          pics: []
        }
      }
    })
  })
})
