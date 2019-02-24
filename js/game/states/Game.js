GameJam.Game = function() {}
GameJam.Game = {

    create: function() {
   

        this.background = game.add.tileSprite(0 , game.height-300, game.width, 300, 'background');
        this.background.autoScroll(-100, 0);
        // this.background.scale.setTo(1,0.7);
        this.ground = game.add.tileSprite(0, game.height - 8, game.width, 8, 'ground');
        this.ground.autoScroll(-0, 0);
        // this.background.tint = Math.random()*0xffffff;
        this.mario = new Mario(this.game,200,200,"mario");
        this.gameActions = new GameAction(game,this.mario);
        this.boxFactory = new BoxFactory(game);
        this.boxFactory.addBox(200,200);
        game.physics.enable([ this.ground, this.mario ], Phaser.Physics.ARCADE);
    
        game.physics.arcade.gravity.y = 2000;
        this.ground.body.collideWorldBounds = true;
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;
        game.camera.follow(this.mario);

        this.moveLeft = new Command(
            game,this.gameActions,Phaser.Keyboard.LEFT,this.gameActions.get().MARIO_MOVE_LEFT
        )
        
        this.moveRight = new Command(
            game,this.gameActions,Phaser.Keyboard.RIGHT,this.gameActions.get().MARIO_MOVE_RIGHT
        ) 
        
        this.jump = new Command(
            game,this.gameActions,Phaser.Keyboard.UP,this.gameActions.get().MARIO_JUMP
        )   

        this.controller = new Controller(game);
        this.controller.addCommand(this.moveLeft);
        this.controller.addCommand(this.moveRight);
        this.controller.addCommand(this.jump);
    },

    update: function(){
        this.controller.listen();
        
        // game.physics.arcade.collide(this.mario, this.ground);  
        // this.boxFactory.startFactory();
    },
}