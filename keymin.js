//require('../../lib/keyboard.polyfill');

/*
In this demo we create a component which responds to key presses
in the simplest way possible.
*/
const MAX_DELTA = 0.2,
    PROXY_FLAG = '__keyboard-controls-proxy';

let carla1 = document.querySelector('#carla1');

const KeyboardEvent = window.KeyboardEvent;
console.log("in keymin.js")
/**
 * Keyboard Controls component.
 *
 * Stripped-down version of: https://github.com/donmccurdy/aframe-keyboard-controls
 *
 * Bind keyboard events to components, or control your entities with the WASD keys.
 *
 * Why use KeyboardEvent.code? "This is set to a string representing the key that was pressed to
 * generate the KeyboardEvent, without taking the current keyboard layout (e.g., QWERTY vs.
 * Dvorak), locale (e.g., English vs. French), or any modifier keys into account. This is useful
 * when you care about which physical key was pressed, rather thanwhich character it corresponds
 * to. For example, if you’re a writing a game, you might want a certain set of keys to move the
 * player in different directions, and that mapping should ideally be independent of keyboard
 * layout. See: https://developers.google.com/web/updates/2016/04/keyboardevent-keys-codes
 *
 * @namespace wasd-controls
 * keys the entity moves and if you release it will stop. Easing simulates friction.
 * to the entity when pressing the keys.
 * @param {bool} [enabled=true] - To completely enable or disable the controls
 */
AFRAME.registerComponent('keymin', {
  schema: {
    enabled:           { default: true },
    debug:             { default: false }
  },

  init: function () {
    carla1 = document.querySelector('#carla1');
    console.log("in init for keymin2")
    console.log('carla1='+carla1)
    this.localKeys = {};
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
    console.log(event.code=='KeyL')
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
        carla1.setAttribute("animation-mixer",{"clip":"bow"})
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
