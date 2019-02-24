BoxFactory = function(game) {

    this.boxes = game.add.group();
    this.lastX;
    this.lastY;
    this.addBox= function(x,y){
        let box = game.add.sprite(x, y, 'square');
        box.scale.setTo(0.2);
        game.physics.arcade.enable([box]);
        box.body.velocity.x = -80;

        box.body.allowGravity = false;
        this.lastX = box.x;
        this.lastY = box.y;
        this.boxes.add(box)
    }

    this.startFactory = function(){

        if(Math.random()*10>8)
            this.addBox(game.width,500);
    }
}
BoxFactory.prototype = Object.create(Phaser.Sprite.prototype);
BoxFactory.prototype.constructor = BoxFactory;
