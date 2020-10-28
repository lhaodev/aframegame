
/**
 * Keyboard Controls component.
 *
 * Stripped-down version of: https://github.com/donmccurdy/aframe-keyboard-controls
 *
 * Bind keyboard events to components, or control your animnations with keys
 *
 * 
 */
AFRAME.registerComponent('demo', {
  schema: {
    enabled:           { default: true },
    debug:             { default: false }
  },

  init: function () {
    // called when component is first added to the entity
    console.log("in init for demo")
    console.log('enabled = '+this.data.enabled)


  },
  
  update: function(olddata){
    //this is called when someone changes the schema values, enabled, debug, etc. 
    console.log('calling update')
    console.log('olddata=')
    console.dir(olddata)
    console.log('newdata=') 
    console.dir(this.data)
  },
  
  remove: function(){
     console.log('removing the component')
   }
  


});
