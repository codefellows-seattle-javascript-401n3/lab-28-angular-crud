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
  this.$window.localStorage.removeItem('token');
});
