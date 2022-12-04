// this is a simple component used for the start game button
// user can click on the refresh button to start a new game at any time during the game

AFRAME.registerComponent('refresh', {
  init: function() {
    var buttonEl = document.querySelector('#refresh');
    console.log(buttonEl);
    this.startHandler = this.startHandler.bind(this);
    buttonEl.addEventListener('click', this.startHandler);
    document.addEventListener('keydown', this.startHandler);  // first
    document.addEventListener('keypress', this.startHandler); // second
  },
  startHandler: function(evt) {
    console.log("clicked");
    window.location.href("basic.html");
  }
})