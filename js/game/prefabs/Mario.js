Mario = function(game,x,y,key,frame) {

    Phaser.Sprite.call(this, game, x, y, key, frame);
    game.add.existing(this);
    this.scale.setTo(0.12);
    this.animations.add("run",[1,2,3,0]);
    this.animations.add("runBack",[6,7,8,5]);
    this.animations.add("jump",[4,4,0]);
    this.animations.add("jumpBack",[9,9,5]);
    game.physics.enable([ this ], Phaser.Physics.ARCADE);

    this.body.collideWorldBounds = true;

    this.isForward = true;
    
    this.moveLeft = function(){
        if(this.isForward) {
            this.isForward = false;
        }

        this.body.velocity.x = -200;
        if(this.body.blocked.down) this.animations.play("runBack",10,false);
    }
    this.moveRight = function(){
        if(!this.isForward) {
            this.isForward = true;
        }
        this.body.velocity.x = +200;
        if(this.body.blocked.down) this.animations.play("run",10,false);
    }
    this.jump = function(){
        if(this.body.blocked.down || this.body.touching.down || this.body.velocity.y==0){
           
           if(this.isForward) this.animations.play("jump",3,false);
            else this.animations.play("jumpBack",3,false);
            this.body.velocity.y = -800;
        }
    }
    this.update = function(){
        let leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        let rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        if(!leftKey.isDown && !rightKey.isDown) 
            this.body.velocity.x = 0;
    }
    this.shoot = function(){}
    this.die = function(){}
}
Mario.prototype = Object.create(Phaser.Sprite.prototype);
Mario.prototype.constructor = Mario;

