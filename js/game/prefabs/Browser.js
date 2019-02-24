Browser = function(game) {

    Phaser.Sprite.call(this, game, 50, 100, "browser");
    game.add.existing(this);
    this.scale.setTo(0.3);
    // this.animations.add("run",[1,2,3,0]);
    // this.animations.add("jump",[4,4,0]);
    game.physics.enable([ this ], Phaser.Physics.ARCADE);

    this.body.collideWorldBounds = true;

   
}
Browser.prototype = Object.create(Phaser.Sprite.prototype);
Browser.prototype.constructor = Browser;

