GameJam.Game = function() {}
GameJam.Game = {

    create: function() {

        this.background = game.add.tileSprite(0 , game.height-300, game.width, 300, 'background');
        this.background.autoScroll(-100, 0);
        // this.background.scale.setTo(1,0.7);
        this.ground = game.add.tileSprite(0, game.height - 8, game.width, 8, 'ground');
        this.ground.autoScroll(-0, 0);
        // this.background.tint = Math.random()*0xffffff;
        this.mario = new Mario(this.game,400,100,"mario");
        this.gameActions = new GameAction(game,this.mario);
        this.boxFactory = new BoxFactory(game);
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
        this.browser = new Browser(game);
    },

    update: function(){
        game.physics.arcade.collide(this.mario, this.boxFactory.boxes);  
        game.physics.arcade.collide(this.boxFactory.monsters, this.boxFactory.boxes);  
        game.physics.arcade.overlap(this.browser, this.boxFactory.monsters,(browser,monster)=>{
            monster.body.velocity.y=-1000;monster.body.velocity.x=-500;
        });  
        game.physics.arcade.overlap(this.browser, this.boxFactory.boxes,(browser,boxes)=>{
            boxes.body.velocity.y=-1000;boxes.body.velocity.x=-1500;
        });  
        game.physics.arcade.collide(this.mario, this.boxFactory.monsters,(mario,monster)=>{
            if(monster.y-mario.y>90) monster.kill()
             else mario.kill();
            });  
            game.physics.arcade.collide(this.mario, this.boxFactory.piantas,(mario,monster)=>{
                mario.kill();
                });  

        this.boxFactory.boxes.children.forEach(box=>{
            if(box.x<this.browser.x) box.destroy();
        })    
        this.controller.listen();
        
        this.boxFactory.startFactory();
    },
    render: function(){
     
    }

}