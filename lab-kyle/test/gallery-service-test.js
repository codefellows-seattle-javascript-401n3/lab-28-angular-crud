/* global angular */

'use strict'

// const angular = require('angular')
// require('angular-mocks')
// require('../app/entry')

describe('Gallery Service', function() {

  beforeEach(() => {
    angular.mock.module('cfgram')
    angular.mock.inject(( galleryService, authService, $rootScope, $window, $httpBackend) => {
      this.galleryService = galleryService
      this.authService = authService
      this.$window = $window
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
    })
  })

  describe('galleryService.createGallery', () => {
    it('should create a new gallery', () => {
      let url = 'http://localhost:3000/api/gallery'
      let galleryData = {
        name: 'testGallery',
        desc: 'testDesc'
      }
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer test token'
      }

      this.$httpBackend.expectPOST(url, galleryData, headers)
        .respond(200, {
          _id: '1234',
          username: 'testuser',
          name: galleryData.name,
          desc: galleryData.desc,
          pics: []
        })

      this.galleryService.createGallery(galleryData)
      this.$httpBackend.flush()
      this.$rootScope.$apply()
    })
  })

  describe('galleryService.deleteGallery()', () => {
    it('should delete a gallery', () => {
      let galleryId = 'testId'
      let url = 'http://localhost:3000/api/gallery/testId'
      let headers = {
        Accept: 'application/json',
        Authorization: 'Bearer test token',
      }

      this.$httpBackend.expectDELETE(url, headers).respond(204)
      this.galleryService.deleteGallery(galleryId)
      this.$httpBackend.flush()
      this.$rootScope.$apply()
    })
  })
})
