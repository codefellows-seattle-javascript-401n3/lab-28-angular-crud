'use strict';

module.exports = function(){
  return function(galleries, limit=Infinity){
    return galleries.sory((a,b) => {
      return b.name < a.name;
    })
    .slice(0, limit);
  };
};
