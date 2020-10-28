//require('../../lib/keyboard.polyfill');

/*
In this demo we create a component which responds to key presses
in the simplest way possible.
*/


let carla1 = document.querySelector('#carla1');

const KeyboardEvent = window.KeyboardEvent;
console.log("in keymin.js")
/**
 * Keyboard Controls component.
 *
 * Stripped-down version of: https://github.com/donmccurdy/aframe-keyboard-controls
 *
 * Bind keyboard events to components, or control your animnations with keys
 *
 * 
 */
AFRAME.registerComponent('keymin', {
  schema: {
    enabled:           { default: true },
    debug:             { default: false }
  },

  init: function () {
    carla1 = document.querySelector('#carla1');
    console.log("in init for keymin")
    console.log('carla1='+carla1)

    this.listeners = {
      keydown: this.onKeyDown.bind(this),
      keyup: this.onKeyUp.bind(this),
      blur: this.onBlur.bind(this)
    };
    this.attachEventListeners();
  },

  /*******************************************************************
  * Movement
  */

  /*******************************************************************
  * Events
  */

  play: function () {
    this.attachEventListeners();
  },

  pause: function () {
    this.removeEventListeners();
  },

  remove: function () {
    this.pause();
  },

  attachEventListeners: function () {
    window.addEventListener('keydown', this.listeners.keydown, false);
    window.addEventListener('keyup', this.listeners.keyup, false);
    window.addEventListener('blur', this.listeners.blur, false);
  },

  removeEventListeners: function () {
    window.removeEventListener('keydown', this.listeners.keydown);
    window.removeEventListener('keyup', this.listeners.keyup);
    window.removeEventListener('blur', this.listeners.blur);
  },

  onKeyDown: function (event) {
    console.log(event.code)
    if (AFRAME.utils.shouldCaptureKeyEvent(event)) {
      if (event.code=='KeyJ'){
        console.log("KeyJ")
        carla1.pause()
        carla1.setAttribute("animation-mixer",{"clip":"waving"})
        carla1.removeAttribute("animation__rotate")
        carla1.play()
      }else if (event.code=='KeyK'){
        console.log("KeyK")
        carla1.pause()
        carla1.setAttribute("animation-mixer",{"clip":"bowing"})
        carla1.setAttribute("animation__rotate",
          { "property": "rotation",
            "easing": "easeInOutQuad",
            "dir": "alternate",
            "dur": 3000,
            "to": "90 360 0",
            "loop": true
          }
        )
        carla1.play()
      }else if (event.code=='KeyL'){
        console.log("KeyL")
        carla1.pause()
        carla1.setAttribute("animation__rotate",
          { "property": "rotation",
            "easing": "easeInOutQuad",
            "dir": "alternate",
            "dur": 3000,
            "to": "90 0 0",
            "loop": true
          }
        )
        carla1.play()
      } else if (event.code=='KeyM'){
        console.log("KeyM")
        carla1.pause()
        carla1.removeAttribute("animation__rotate")
        carla1.play()
      }
      else if (event.code=='KeyN'){
        console.log("KeyM")
        carla1.pause()
        carla1.removeAttribute("animation-mixer")
        carla1.play()
      }
    }
  },

  onKeyUp: function (event) {

  },

  onBlur: function () {

  },


});
