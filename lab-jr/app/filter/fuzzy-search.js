'use strict';

module.exports = function(){
  return function(galleries, str){
    if(!str) return galleries;

    let pattern = `.*${str.toUpperCase().split('').join('.*')}.*`;
    let regExp = new RegExp(pattern);

    let filteredGalleries = galleries.filter(gallery => {
      return regExp.test(gallery.name.toUpperCase());
    });

    return filteredGalleries;
  };
};
