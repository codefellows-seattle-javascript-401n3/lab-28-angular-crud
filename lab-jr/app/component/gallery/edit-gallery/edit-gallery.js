'use strict';

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<'
  }
};

function EditGalleryController($log, galleryService){
  this.$onInit = () => {

    $log.debug('EditGalleryController');
    console.log(this.gallery._id, ' = this.gallery._id');

    this.updateGallery = function(){
      galleryService.updateGallery(this.gallery._id, this.gallery);
      //find a way to update the model through the controller-shared galleryService method (.updateGallery grabs values from the input fields)
    };
  };
}
