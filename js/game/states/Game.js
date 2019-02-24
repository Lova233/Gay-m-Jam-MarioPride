GameJam.Game = function() {}
GameJam.Game = {

    create: function() {
        this.startTime= game.time.now;
        this.duration = 10000;
        this.background = game.add.tileSprite(0 , game.height-300, game.width, 300, 'background');
        this.background.autoScroll(-100, 0);
        // this.background.scale.setTo(1,0.7);
        this.ground = game.add.tileSprite(0, game.height - 8, game.width, 8, 'ground');
        this.ground.autoScroll(-0, 0);
        // this.background.tint = Math.random()*0xffffff;
        this.mario = new Mario(this.game,550,100,"mario");
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
        this.notEnter = false;

        this.controller = new Controller(game);
        this.controller.addCommand(this.moveLeft);
        this.controller.addCommand(this.moveRight);
        this.controller.addCommand(this.jump);
        this.browser = new Browser(game);
        this.fly =  game.add.sprite(game.width+200, 50, 'fly');
    
        this.fly.scale.setTo(0.4);
        this.fly.animations.add("move");
        this.fly.animations.play("move",5,true);
        game.physics.arcade.enable([this.fly]);
        this.fly.immovable = false;
        this.fly.body.allowGravity = false;
        game.add.tween(this.fly).from( { x: -1200 }, 12000, Phaser.Easing.Bounce.Out, true);
        this.audios = {
            hitAudio: game.add.audio('enemyHit'),
            jump: game.add.audio('jump'),
            gameOver: game.add.audio('gameover'),
            soundtrack:game.add.audio('soundtrack')
        
        }
        this.audios.soundtrack.play();

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
        game.physics.arcade.overlap(this.mario, this.browser,(mario,browser)=>{
        this.gameOver();
        });  
        game.physics.arcade.overlap(this.browser, this.boxFactory.piantas,(browser,piantas)=>{
            piantas.body.velocity.y=-1000;piantas.body.velocity.x=-1500;
        });  
        game.physics.arcade.collide(this.mario, this.boxFactory.monsters,(mario,monster)=>{
            if(monster.y-mario.y>90) {monster.kill(); this.audios.hitAudio.play();}
             else this.gameOver()
            });  
            game.physics.arcade.collide(this.mario, this.boxFactory.piantas,(mario,monster)=>{
                this.gameOver()
                });  
                game.physics.arcade.overlap(this.mario, this.boxFactory.flag,(mario,flag)=>{
                    this.state.start('Won');

                });        
        this.boxFactory.boxes.children.forEach(box=>{
            if(box.x<this.browser.x) box.destroy();
        })    
        this.controller.listen();
        
        this.boxFactory.startFactory();
        if(game.time.now> this.startTime+this.duration){
            this.boxFactory.stopTheHell();
         } 
         if(!this.notEnter){
                if(!this.hasFumetto && game.time.now >this.startTime+9000){
                    this.fumetto = game.add.sprite(900,50,"fumetto")
                    this.fumetto.scale.setTo(0.4);
                    this.hasFumetto = true;
                } else if(this.hasFumetto && game.time.now >this.startTime+14000) {
                    this.fumetto.destroy();
                    this.notEnter = true;
                }
        }
    },
    gameOver: function(){
        this.audios.gameOver.play();
        this.mario.kill();
        this.game.stage.backgroundColor = '#0000';

        this.background = game.add.tileSprite(0 , 0, game.width, game.height, 'gameOver');

    }

}