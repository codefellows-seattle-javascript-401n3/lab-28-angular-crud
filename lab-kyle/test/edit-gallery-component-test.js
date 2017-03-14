/* global angular expect */

'use strict'

describe('Edit Gallery Component', function() {

  beforeEach(() => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService, galleryService) => {
      this.$rootScope = $rootScope
      this.$componentController = $componentController
      this.$httpBackend = $httpBackend
      this.authService = authService
      this.galleryService = galleryService
    })
  })

  it('should have proper bindings', () => {
    let mockBindings = {
      gallery: {
        name: 'test name',
        desc: 'test desc'
      },
      update: true
    }

    let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings)
    expect(editGalleryCtrl.gallery).toBeDefined()
    expect(editGalleryCtrl.gallery.name).toEqual(mockBindings.gallery.name)
    expect(editGalleryCtrl.gallery.desc).toEqual(mockBindings.gallery.desc)
    expect(editGalleryCtrl.update).toBeDefined()
    expect(editGalleryCtrl.update).toEqual(true)

    this.$rootScope.$apply()
  })

  describe('EditGalleryController.updateGallery()', () => {
    it('should update an existing gallery', () => {
      let url = 'http://localhost:3000/api/gallery/test'
      let headers = {
        Accept: 'application/json',
        Authorization: 'Bearer test token',
        'Content-Type': 'application/json;charset=utf-8'
      }
      let galleryData = {
        _id: 'test',
        name: 'name update',
        desc: 'desc update'
      }

      this.$httpBackend.expectPUT(url, galleryData, headers).respond(200)

      let mockBindings = {
        gallery: {
          _id: 'test',
          name: 'name update',
          desc: 'desc update'
        },
        update: true
      }

      let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings)
      editGalleryCtrl.updateGallery()

      this.$httpBackend.flush()
      this.$rootScope.$apply()
    })
  })

  describe('i dont know what im doing', () => {
    it('should do stuff', () => {
      let mockBindings = {
        gallery: {
          _id: 'test',
          name: 'name update',
          desc: 'desc update'
        },
        update: true
      }

      let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings)

      spyOn(editGalleryCtrl, 'updateGallery')
      editGalleryCtrl.updateGallery()
      expect(editGalleryCtrl.updateGallery).toHaveBeenCalled()
    })
  })
})
