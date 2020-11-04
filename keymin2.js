//require('../../lib/keyboard.polyfill');

/*
In this demo we create a component which responds to key presses
in the simplest way possible.
Carla1 and Carla2 are controlled with different keys
Controls carla2 with different keys ...
*/


let carla = document.querySelector('#carla2');


console.log("in keymin2.js")
/**
 * Keyboard Controls component.
 *
 * Stripped-down version of: https://github.com/donmccurdy/aframe-keyboard-controls
 *
 * Bind keyboard events to components, or control your animnations with keys
 *
 * 
 */
AFRAME.registerComponent('keymin2', {
  schema: {
    enabled:           { default: true },
    debug:             { default: false }
  },

  init: function () {
    carla = document.querySelector('#carla2');
    console.log("in init for keymin2")
    console.log('carla='+carla)

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
      if (event.code=='KeyR'){
        console.log("KeyR")
        carla.pause()
        carla.setAttribute("animation-mixer",{"clip":"waving"})
        carla.play()
      }if (event.code=='KeyY'){
        console.log("KeyY")
        carla.pause()
        carla.removeAttribute("animation__rotate")
        carla.play()
      }else if (event.code=='KeyT'){
        console.log("KeyT")
        carla.pause()
        carla.setAttribute("animation-mixer",{"clip":"bowing"})
        carla.play()
      }else if (event.code=='KeyV'){
        console.log("KeyV")
        carla.pause()
        carla.setAttribute("animation__rotate",
          { "property": "rotation",
            "easing": "easeInOutQuad",
            "dir": "alternate",
            "dur": 3000,
            "to": "90 360 0",
            "loop": true
          }
        )
        carla.play()
      }else if (event.code=='KeyG'){
        console.log("KeyG")
        carla.pause()
        carla.setAttribute("animation__rotate",
          { "property": "rotation",
            "easing": "easeInOutQuad",
            "dir": "alternate",
            "dur": 3000,
            "to": "90 0 0",
            "loop": true
          }
        )
        carla.play()
      } else if (event.code=='KeyH'){
        console.log("KeyH")
        carla.pause()
        carla.removeAttribute("animation__rotate")
        carla.play()
      }
      else if (event.code=='KeyB'){
        console.log("KeyB")
        carla.pause()
        carla.removeAttribute("animation-mixer")
        carla.play()
      }
    }
  },

  onKeyUp: function (event) {

  },

  onBlur: function () {

  },


});
