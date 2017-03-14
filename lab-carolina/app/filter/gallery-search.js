'use strict';

module.exports = function() {
  return function(galleries, searchTerm){
    if(!searchTerm) return galleries;
    let fuzzyRegex = fuzzySearch(searchTerm);
    return galleries.filter(gallery => {
      return fuzzyRegex.test(gallery.name.toLowerCase());
    });
  };
};

function fuzzySearch(input){
  if(!input) return /.*/;
  let fuzzyString = '.*' + input.toLowerCase().split('').join('.*') + '.*';
  return new RegExp(fuzzyString);
}
