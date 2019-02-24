BoxFactory = function(game) {

    this.boxes = game.add.group();
    this.monsters = game.add.group();
    this.piantas = game.add.group();

    this.lastX;
    this.lastY;
    this.lastBoxTime = game.time.now;
    this.boxRecall = 2800;
    this.lastPlantTime = game.time.now;
    this.plantRecall = 2000;
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
     for(let i =0;i<numberOfBox;i++){   
        this.addBox(game.width+i*50,500-i*100);
        let lengthOfRow = Math.floor(Math.random()*5);
         for(let a =0;a<lengthOfRow;a++){
             
            this.addBox(game.width+i*50+a*50,500-i*100);
            if(a>1){
                this.addMonster(game.width+i*50+a*50,500-i*100-40)
            }
        } 
     }
     this.lastBoxTime = game.time.now;
     } else if(game.time.now>this.lastPlantTime+this.plantRecall) {
        this.addPianta(game.width,game.height-76)
        this.lastPlantTime = game.time.now;
     }
    }
    this.addPianta = function(x,y){
        let pianta = game.add.sprite(x, y, 'pianta');
        pianta.scale.setTo(0.3);
        pianta.animations.add("move");
        pianta.animations.play("move",5,true);

        game.physics.arcade.enable([pianta]);
        pianta.immovable = false;
        pianta.body.allowGravity = false;
        pianta.body.velocity.x=-130;

        this.piantas.add(pianta);
    }
    this.addMonster = function(x,y){
        let monster = game.add.sprite(x, y, 'monster');
        monster.scale.setTo(0.2);
        monster.animations.add("move");
        monster.animations.play("move",5,true);

        game.physics.arcade.enable([monster]);
        monster.immovable = false;
        monster.body.allowGravity = false;
        monster.body.velocity.x=-130;

        this.monsters.add(monster);
    }
  
}
BoxFactory.prototype = Object.create(Phaser.Sprite.prototype);
BoxFactory.prototype.constructor = BoxFactory;

