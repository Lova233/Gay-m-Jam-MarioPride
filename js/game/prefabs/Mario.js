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

        this.x-=10;
        this.animations.play("run",10,false);
    }
    this.moveRight = function(){
        if(!this.isForward) {
            this.isForward = true;
            this.scale.x *=-1;
        }
        this.x+=10;
        this.animations.play("run",10,false);
    }
    this.jump = function(){
        console.log(this.body)
        if(this.body.blocked.down){
            this.animations.play("jump",3,false);
            this.body.velocity.y = -800;
        }
    }
    // this.update = function(){
    //     if(this.body.blocked.down){
    //         this.animations.stop("jump",true);

    //     }
    // }
    this.shoot = function(){}
    this.die = function(){}
}
Mario.prototype = Object.create(Phaser.Sprite.prototype);
Mario.prototype.constructor = Mario;

