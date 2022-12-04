AFRAME.registerComponent('finish', {
  init: function () {
    // here we just initialize the directionVec3 variable
    this.directionVec3 = new THREE.Vector3();
    this.avatar = document.querySelector("#avatar")
    console.log(this.avatar);
    this.collisionHandler = (e) => {
         console.log('just collided with something')
         console.dir(e.detail)
         component.otherBody = e.detail.body
         document.alert('finished game')

         window.location.reload();
    }
    this.el.addEventListener('collide', this.collisionHandler);
  },
})