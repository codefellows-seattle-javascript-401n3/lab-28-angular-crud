'use strict';

// const angular = require('angular');
// require('babel-polyfill');

describe('Auth service', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.authService = authService;
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
    });
  });
  describe('authService.getToken()', () => {
    it('should return a token named testy toking', () => {
      this.$window.localStorage.setItem('token', 'testy toking');

      this.authService.getToken()
      .then(token => {
        expect(token).toEqual('testy toking');
      });

      this.$window.localStorage.removeItem('token');
      this.$rootScope.$apply();
    });

    it('should return "no token found"', () => {
      this.authService.getToken()
      .catch(err => {
        expect(err.message).toEqual('no token found');
      });

      this.$rootScope.$apply();
    });
  });
});
