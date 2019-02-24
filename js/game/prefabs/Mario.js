Mario = function(game,x,y,key,frame) {

    Phaser.Sprite.call(this, game, x, y, key, frame);
    game.add.existing(this);
    this.scale.setTo(0.12);
    this.animations.add("run",[1,2,3,0]);
    this.animations.add("jump",[4,4,0]);
    game.physics.enable([ this ], Phaser.Physics.ARCADE);

    this.body.collideWorldBounds = true;

    this.isForward = true;
    
    this.moveLeft = function(){
        if(this.isForward) {
            this.isForward = false;
            this.scale.x *=-1;
        }

        this.body.velocity.x = -200;
        if(this.body.blocked.down) this.animations.play("run",10,false);
    }
    this.moveRight = function(){
        if(!this.isForward) {
            this.isForward = true;
            this.scale.x *=-1;
        }
        this.body.velocity.x = +200;
        if(this.body.blocked.down) this.animations.play("run",10,false);
    }
    this.jump = function(){
        console.log(this.body)
        if(this.body.blocked.down || this.body.touching.down){
            this.animations.play("jump",3,false);
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

