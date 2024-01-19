AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" }
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    
    /*uncomment the right car position
    const position = { x: 0, y: 50, z: 80 };
    const position = { x: 0, y: 50 };
    
    const position = { x= 0, y=50, z= 80 };
    */
    
    
    /*uncomment the right car rotation

    const rotation = { x: 0, y: -100, z: 0 };
    const rotation = { x: 0, y: -100 };
    const rotation = { x= 0, y= -100, z=0 };
    */

    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});
