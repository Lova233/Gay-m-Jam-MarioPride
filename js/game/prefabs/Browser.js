Browser = function(game) {

    Phaser.Sprite.call(this, game, 50, 100, "browser");
    game.add.existing(this);
    this.scale.setTo(0.3);
    this.animations.add("run");
    this.animations.play("run",5,true);
    game.physics.enable([ this ], Phaser.Physics.ARCADE);

    this.body.collideWorldBounds = true;

   
}
Browser.prototype = Object.create(Phaser.Sprite.prototype);
Browser.prototype.constructor = Browser;

