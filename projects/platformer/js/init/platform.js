(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 3, 2);

        // example:
        platform.create(70, 640, .2, .2);
        platform.create(200, 600, .2, .2);
        platform.create(300, 560, .2, .2);
        platform.create(400, 520, .2, .2);
        platform.create(500, 480, .754, .2);
        
        platform.create(395, 420, .2, .2);
        platform.create(60, 360, .7, .2);
        platform.create(295, 360, .2, .2);
        
        platform.create(480, 280, .5, .2)
        platform.create(295, 360, .2, .2);
        platform.create(295, 360, .2, .2);
        platform.create(500, 100, .38, .2);
        platform.create(280, 200, .37, .2);
        
        platform.create(450, 150, .2, .2)
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);