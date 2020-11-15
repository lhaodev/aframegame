// this comes from the aframe.io website but I modified it slightly
// to use impulses rather than position changes...

AFRAME.registerComponent('follow', {
  schema: {
    target: {type: 'selector'},
    speed: {type: 'number'}
  },

  init: function () {
    this.directionVec3 = new THREE.Vector3();
    this.counter=0
  },

  tick: function (time, timeDelta) {
    var directionVec3 = this.directionVec3;
    this.counter += 1
    this.show = this.counter%100 == 0
    if (!this.show){
      return
    }

    // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
    var targetPosition = this.data.target.object3D.position;
    var currentPosition = this.el.object3D.position;
    
    window.avatar = this

    // Subtract the vectors to get the direction the entity should head in.
    directionVec3.copy(targetPosition).sub(currentPosition);
    
    // Calculate the distance.
    var distance = directionVec3.length();

    // Scale the direction vector's magnitude down to match the speed.
    var factor = this.data.speed / distance;
   
    window.dv = directionVec3
    directionVec3['x'] *= factor //* (timeDelta/1000)
    directionVec3['y'] *= factor //* (timeDelta/1000)
    directionVec3['z'] *= factor //* (timeDelta/1000)
    //['x', 'y', 'z'].forEach(function (axis) {
    //  directionVec3[axis] *= factor * (timeDelta / 1000);
    //});
    
    if (this.show) {
      console.log('target='+JSON.stringify(targetPosition))
      console.log('current='+JSON.stringify(currentPosition))
      console.log('dirvec1='+JSON.stringify(directionVec3))
      console.log('distance='+distance)
      console.log('factor='+factor)
      console.log('dirvec2='+JSON.stringify(directionVec3))
      console.log('time='+time)
      console.log('timeDelta='+timeDelta)
      console.log('\n\n')
    }
    // here we applhy a push toward the target
    if (this.el.body) {
      //console.log(distance)
      //console.log('pos='+this.el.object3D.position)
      this.el.body.applyImpulse(
         new CANNON.Vec3().copy(directionVec3),
         new CANNON.Vec3().copy(this.el.body.position)//getComputedAttribute('position'))
       )
   }
  }
});
