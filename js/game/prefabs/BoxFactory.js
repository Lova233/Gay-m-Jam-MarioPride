BoxFactory = function(game) {

    this.boxes = game.add.group();
    this.lastX;
    this.lastY;
    this.lastBoxTime = game.time.now;
    this.boxRecall = 2800;
    this.addBox= function(x,y){
        let box = game.add.sprite(x, y, 'square');
        box.scale.setTo(0.2);
        game.physics.arcade.enable([box]);
        box.body.velocity.x = -130;
        box.body.immovable = true;
        box.body.allowGravity = false;
        this.lastX = box.x;
        this.lastY = box.y;
        this.boxes.add(box)
    }

    this.startFactory = function(){
     if(game.time.now>this.lastBoxTime+this.boxRecall)   {
        let numberOfBox = Math.floor(Math.random()*4)+1;
    console.log(numberOfBox);
     for(let i =0;i<numberOfBox;i++){   
        this.addBox(game.width+i*50,500-i*100);
        let lengthOfRow = Math.floor(Math.random()*5);
         for(let a =0;a<lengthOfRow;a++){
            this.addBox(game.width+i*50+a*50,500-i*100);

        } 
     }
     this.lastBoxTime = game.time.now;
     }
    }
}
BoxFactory.prototype = Object.create(Phaser.Sprite.prototype);
BoxFactory.prototype.constructor = BoxFactory;
