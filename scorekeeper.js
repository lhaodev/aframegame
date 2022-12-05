console.log("loading powerup.js");

AFRAME.registerComponent("scorekeeper", {
  schema: {
    target: { type: "selector", default: "#hud" },
    timeleft: { type: "number", default: 20 },
    winscore: { type: "number", default: 50 },
  },

  init: function () {
    const component = this;
    console.log(this.data.timeleft);
    this.health = 5;
    this.score = 0;
    let z = new Date();
    this.startTime = z.getTime();
    this.gameLength = this.data.timeleft; // time you have left to play (in seconds)
    this.gameOver = false;

    this.avatar = document.querySelector("#avbox");
    this.collisionHandler = (e) => {
      console.log("just collided with something");
      component.otherBody = e.detail.body;
    };
    this.el.addEventListener("collide", this.collisionHandler);
  },

  tick: function (uptime, delta) {
    let z = new Date();
    let t = (z.getTime() - this.startTime) / 1000;
    let timeLeft = this.gameLength - t;

    const otherBody = this.otherBody;
    this.otherBody = null;
    if (this.avatar) {
      let pos = this.avatar.object3D.position;
      let wall = 40;
      if (pos.x > wall) pos.x = wall;
      if (pos.x < -wall) pos.x = -wall;
      if (pos.z > wall) pos.z = wall;
      if (pos.z < -wall) pos.z = -wall;
      //pos.set(position)
    }

    hud.setAttribute("health", this.health);
    hud.setAttribute("score", this.score);
    hud.setAttribute(
      "text",
      "value",
      "Score:" + this.score + "  Health:" + this.health + " Time: " + Math.round(timeLeft)
    );

    if (timeLeft < 0) {
      this.gameOver = true;
      hud.setAttribute("text", "value", "TIMESUP!  YOU LOSE!! GAME OVER!");
    }

    if (otherBody) {
      //console.log('in the tick function')
      //console.dir(otherBody)
      const hud = this.data.target;

      let elt = otherBody.el;
      const eltHealth = parseInt(elt.getAttribute("health"));
      const eltScore = parseInt(elt.getAttribute("score"));
      const eltTime = parseInt(elt.getAttribute("time"));

      if (eltHealth) {
        this.health += eltHealth;
      }

      if (eltScore) {
        this.score += eltScore;
      }

      if (eltTime) {
        //console.log("updating the time!")
        this.gameLength += eltTime;
      }
      //console.log(this.startTime)

      if (eltHealth || eltScore || eltTime) {
        //console.log('removing elt from scene')
        //console.dir(elt)
        //console.log('parent is ')
        //console.dir(elt.parentNode)
        otherBody.el.removeAttribute("dynamic-body");
        elt.parentNode.removeChild(elt);
      }
    }

    if (this.health < 0) {
      hud.setAttribute("text", "value", "YOU LOSE!! GAME OVER!");
      this.gameOver = true;
    }
    if (this.score > 20) {
      hud.setAttribute("text", "value", "YOU WIN!!");
      this.gameOver = true;
    }
    if (this.gameOver) {
      hud.setAttribute("text", "value", "Moving to new Game\n Please Wait");
      this.el.object3D.position.y = 10; // move the avatar above the board!
      window.location.href = "/huijieliu.html";
    }
  },
});
