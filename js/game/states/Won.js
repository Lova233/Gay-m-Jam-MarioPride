GameJam.Won = function() {}

GameJam.Won = {

    create: function() {
        // this.start(1);
        this.game.stage.backgroundColor = '#0000';
        this.num=1;
        this.startTime= game.time.now;
        this.delay = 3000;

    },
    update: function(){
        if(game.time.now>this.startTime+this.delay){
            this.start(this.num);
            this.startTime = game.time.now; 
        }

    },

    start: function(){
        switch(this.num){
            case 1 :    this.text = game.add.sprite(150, 200, 'thanks');
                        this.num++;
                        break;
            case 2 :    this.text.kill();
                        this.text=game.add.sprite(160, 200, 'rising');
                        this.num++;
                        break;
            case 3 :    this.text.kill();
                        this.text= game.add.sprite(160, 200, 'pride');
                        this.num++;
                        break;
                        default:break;
            }
         
    },


    

}
