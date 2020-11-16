
// this is a simple component to get a static object to follow another object, usually the avatar
//  call it as follow="target:#avbox; speed:1"

AFRAME.registerComponent('placerandom', {
  schema: {
    lo: {type: 'number'},
    hi: {type: 'number'}
  },

  
  
  init: function () {
    // here we just initialize the directionVec3 variable
    console.log("initializing")
    var lo = this.data.lo
    var range = this.data.hi -lo
    var x = Math.random()*range-lo
    var z = Math.random()*range-lo
    console.log('lo='+lo)
    console.log('range='+range)

    this.el.object3D.position.set(x,1.0,z)
  },
  
  
  

  tick: function (time, timeDelta) {
    
  }
});
