// this is a simple component to navigation to another page when two object collide
//  call it as follow="target:#avbox; url:xxxx.html"

AFRAME.registerComponent("touch", {
  schema: {
    target: { type: "selector" }, // entity to follow
    url: { type: "string" }, // url to go to when target is hit
  },

  init: function () {
    // here we just initialize the directionVec3 variable
    this.directionVec3 = new THREE.Vector3();
    console.log("initializing the follow component");
    this.avatar = document.querySelector("#avatar");
    console.dir(this.avatar);
    this.collisionHandler = (e) => {
      console.log("just collided with something");
      console.dir(e.detail);
      component.otherBody = e.detail.body;
      document.alert("collided");
    };
    this.el.addEventListener("collide", this.collisionHandler);
  },

  tick: function (time, timeDelta) {
    var directionVec3 = this.directionVec3;

    // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
    var targetPosition = this.data.target.object3D.position; // avatar's location
    var currentPosition = this.el.object3D.position; // the following objects location

    // Subtract the vectors to get the direction the entity should head in.
    directionVec3.copy(targetPosition).sub(currentPosition);

    // Calculate the distance.
    var distance = directionVec3.length();

    // If the target is close, then end the game!
    if (distance < 1 && this.data.url) {
      window.location.href = this.data.url;
    } else if (distance > this.data.dist) {
      return;
    }
  },
});
