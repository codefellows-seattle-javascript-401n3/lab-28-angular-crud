'use strict';

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
      this.$window.setItem('token', 'testy toking');

      this.authService.getToken()
      .then(token => {
        expect(token).toEqual('testy toking');
      });

      this.$window.localStorage.removeItem('token');
      this.$rootScope.$apply();
    });

    it('should return "token not found"', () => {
      this.authService.getToken()
      .catch(err => {
        expect(err).toEqual(new Error('token not found'));
      });

      this.$rootScope.$apply();
    });
  });
});
