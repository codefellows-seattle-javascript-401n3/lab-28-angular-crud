module.exports = function() {
  return function(galleries, string='') {
    let regPat = genReg(string)

    function genReg(string) {
      let pattern = `.*${string.split('').join('.*')}.*`
      return new RegExp(pattern, 'i')
    }

    return galleries.filter(gallery => regPat.test(gallery.name))
  }
}
