var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'bouncingbettty',x:3200,y:465},
                {type: 'enemy',x:10000,y:420},
                {type: 'sawblade',x:2900,y:375},
                {type: 'sawblade',x:1400,y:groundY},
                {type: 'sawblade',x:2200,y:groundY}
                
                
            ]
        };
     
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        
     function createObstacle(radius,damage) {
        var gameItem = createGameItem('obstacle',radius);
        gameItem.velocityX = -2;

        gameItem.onPlayerCollision = function() {
          changeIntegrity(-damage);
      };
        return gameItem;
  }
        var reward = game.createGameItem('reward',20);
        var lilBroomstick = draw.bitmap('img/lil-broomstick.png');
        lilBroomstick.x=-75;
        lilBroomstick.y=-75;
        reward.addChild(lilBroomstick);
        reward.x = 500;
        reward.y = 385;
        
        reward.velocityX = -.17;
        reward.velocityY = 0
        reward.rotationalVelocity = 0;
        
        game.addGameItem(reward);
        
        reward.onPlayerCollision = function() {
            console.log('Halle has gained ultimate clout');
            game.increaseScore(1000);
            reward.fadeOut();
        }
        
        function createEnemy(x,y) {
            
         var enemy =  game.createGameItem('enemy',25);
         var BEmoji = draw.bitmap('img/B-emoji.png');
         BEmoji.x = -25;
         BEmoji.y = -25;
         enemy.addChild(BEmoji);
         enemy.x = y;
         enemy.y = x;
         game.addGameItem(enemy);
            
         enemy.velocityX = -4;
         enemy.velocityY = 0;
         enemy.rotationalVelocity = 0;
        
         enemy.onPlayerCollision = function() {
            console.log('The enemy has hit Halle'); 
            game.changeIntegrity(-50);
            game.increaseScore(-50);
            enemy.fadeOut();
         };
        enemy.onProjectileCollision = function() {
            console.log('Halle has hit the enemy ');
            game.increaseScore(100);
            game.changeIntegrity(+10);
            enemy.shrink();
        }
       
        };
            createEnemy(420,800);
            createEnemy(420,2000);
            createEnemy(420,3000);
            
            createEnemy(420,4000);
            createEnemy(420,5000);
            createEnemy(420,6000);
            
            createEnemy(420,7000);
            createEnemy(420,8000);
            createEnemy(420,9000);
            
    
            
       // for (int i = 0; i < collection.length; i++) {
  //   type array_element = collection.get(index);
   //     }
   
   // for (var i=0; i < levelData.gameItems.length;++i){
     //      levelData.gameItems[i].x
     //      levelData.gameItems[i].y
      //      createSawBlade(levelData.gameItems[i].x,levelData.gameItems[i].y);
      //  }
   
       for (var i=2; i < levelData.gameItems.length;++i){
           levelData.gameItems[i].x
           levelData.gameItems[i].y
            createSawBlade(levelData.gameItems[i].x,levelData.gameItems[i].y);
            createBouncingBetty(levelData.gameItems[0].x,levelData.gameItems[0].y);
            createEnemy(levelData.gameItems[1].x,levelData.gameItems[1].y);
        }
        
        function createBouncingBetty(x,y) {
        var hitZoneSize = 10;
        var damageFromObstacle = 50;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        var obstacleImage = draw.bitmap('img/bouncing-betty.png');
          obstacleImage.x = -10;
          obstacleImage.y = -10;
            
          myObstacle.x = x;
          myObstacle.y = y;
          
         game.addGameItem(myObstacle);
         myObstacle.addChild(obstacleImage);
        }
        
        createBouncingBetty(3000,465);
            
        
      //  var hitZoneSize = 25;
       // var damageFromObstacle = 10;
      //  var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
      //    myObstacle.x = 400;
      //   myObstacle.y = 400;
      //  var obstacleImage = draw.bitmap('img/sawblade.png');
       //     obstacleImage.x = -25;
       //     obstacleImage.y = -25;
       //  game.addGameItem(myObstacle);
      //  myObstacle.addChild(obstacleImage);
        
        function createSawBlade(x,y) {
            
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
          obstacleImage.x = -25;
          obstacleImage.y = -25;
            
          myObstacle.x = x;
          myObstacle.y = y;
          
         game.addGameItem(myObstacle);
         myObstacle.addChild(obstacleImage);
        }
        createSawBlade(800,465);
        createSawBlade(1000,375);
        createSawBlade(1200,465);
        
        createSawBlade(1600,375);
        createSawBlade(1800,465);
        createSawBlade(2000,370);

        createSawBlade(2400,465);
        createSawBlade(2600,375);
        createSawBlade(2800,465);        
        
    }

   };

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}