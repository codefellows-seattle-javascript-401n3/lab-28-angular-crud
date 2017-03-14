/* global expect angular*/

'use strict'

describe('Auth Service', function() {

  beforeEach(() => {
    angular.mock.module('cfgram')
    angular.mock.inject(( authService, $rootScope, $window, $httpBackend) => {
      this.authService = authService
      this.$window = $window
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
    })
  })

  describe('authService.logout()', () => {
    it('should clear local storage', () => {
      this.$window.localStorage.setItem('token', 'token')

      this.authService.logout()
      .then(() => {
        let result = this.$window.localStorage.getItem('token')
        expect(result).toEqual(null)
      })

      this.$rootScope.$apply()
    })
  })

  // describe('authService.signup()', () => {
  //   it('should signup a new user', () => {
  //     let url = 'http://localhost:3000/api/signup'
  //     let headers = {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //     let user = {
  //       username: 'testUser',
  //       email: 'test@email.com',
  //       password: 'testPassword'
  //     }
  //
  //     this.$httpBackend.expectPOST(url, user, headers).respond(200)
  //     this.authService.signup(user)
  //     this.$httpBackend.flush()
  //     this.$rootScope.$apply()
  //   })
  // })

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null
      this.$window.localStorage.setItem('token', 'test token')

      this.authService.getToken()
        .then( token => expect(token).toEqual('test token'))
        .catch( err => expect(err).toEqual(null))

      this.$rootScope.$apply()
    })
  })
})
