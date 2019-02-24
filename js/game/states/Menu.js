GameJam.Menu = function() {}

GameJam.Menu = {

    create: function() {
        // this.start(1);
        this.game.stage.backgroundColor = '#0000';
        this.num=1;
        this.startTime= game.time.now;
        this.delay =200;

    },
    update: function(){
        if(game.time.now>this.startTime+this.delay){
            this.start(this.num);
            this.startTime = game.time.now; 
        }

    },

    start: function(){
        switch(this.num){
            case 1 :    this.text = game.add.sprite(200, 200, 'firstweek');
                        this.num++;
                        break;
            case 2 :    this.text.kill();
                        this.text=game.add.sprite(150, 200, 'itspride');
                        this.num++;
                        break;
            case 3 :    this.text.kill();
                        this.text= game.add.sprite(200, 200, 'thereis');
                        this.num++;
                        break;
            case 4 :    this.text.kill();
                        this.text=game.add.sprite(200, 200, 'noitsnot');
                         this.num++;
                        break;
            case 5 :    this.text.kill();
                        this.text=game.add.sprite(10, 200, 'timeto');
                        this.num++;
                        break;
            case 6 :    this.text.kill();
                        this.game.stage.backgroundColor = '#fff'
                        this.background = game.add.tileSprite(0 , 0, game.width, game.height, 'menu');
                        this.logo=this.game.add.sprite(450,100,"logo")
                        this.logo.scale.setTo(0.3);
                        this.createButton();
                        break;
            }
         
    },

    play: function(){
        this.state.start('Game');

    },

    createButton: function(){
        let button = game.add.button(600, 350,"start", this.play, this);
        button.anchor.setTo(0.5, 0.5);
        button.width =150;
        button.height = 75;
        this.button = button;
    },

    

}
