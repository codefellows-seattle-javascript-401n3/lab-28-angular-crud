'use strict';

describe('Auth Service', function(){

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(( $rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('authService.logout()', () => {
    it('should remove a token from localstorage', () => {
      this.$window.localStorage.setItem('token', 'testertoken');

      this.authService.logout()
      .then(() => {
        expect(this.$window.localStorage.token).toEqual(undefined);
      });

      this.$rootScope.$apply();
    });
  });


  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      })
      .catch( err => {
        expect(err).toEqual(null);
      });

      this.$rootScope.$apply();
    });
  });





});
