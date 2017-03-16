'use strict'

module.exports = ['$translateProvider', translateConfig]

function translateConfig($translateProvider) {

  $translateProvider.translations('en', {
    TITLE: 'ENGLISH NG-AUTH',
    CREATE: 'Create a new Gallery',
    LOGOUT: 'LOGOUT',
    CREATE_GALLERY: 'create gallery',
    NAME: 'name',
    DESC: 'description'
  })

  $translateProvider.translations('de', {
    TITLE: 'GERMAN NG-AUTH',
    CREATE: 'Eine neue Galerie erstellen',
    LOGOUT: 'AUSLOGGEN',
    CREATE_GALLERY: 'galerie erstellen',
    NAME: 'name',
    DESC: 'beschreibung'
  })

  $translateProvider.translations('jp', {
    TITLE: 'JAPANESE NG-AUTH',
    CREATE: '新しいギャラリーを作成する',
    LOGOUT: 'ログアウト',
    CREATE_GALLERY: 'ギャラリーを作成する',
    NAME: '名',
    DESC: '説明'
  })

  $translateProvider.preferredLanguage('en')
}
