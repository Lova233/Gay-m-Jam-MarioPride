GameAction = function(game,mario) {
    this.game = game;
    this.mario = mario;
    const actions = {
        CREATE_MARIO:"[MARIO] CREATE NEW MARIO",
        MARIO_MOVE_LEFT: "[MARIO] MOVE LEFT",
        MARIO_MOVE_RIGHT: "[MARIO] MOVE RIGHT",
        MARIO_JUMP: "[MARIO] JUMP",
        MARIO_SHOOT: "[MARIO] SHOOT",


  
    }


    this.get = function() {
        return actions;
    }

    this.dispatch = function(action) {
        switch (action) {
            case actions.MARIO_JUMP: this.mario.jump();
                                    break;
            case actions.MARIO_MOVE_LEFT: this.mario.moveLeft();
                                    break;
            case actions.MARIO_MOVE_RIGHT: this.mario.moveRight();
                                    break;

     

        }
    }


}
GameAction.prototype = Object.create(Phaser.Sprite.prototype);
GameAction.prototype.ructor = GameAction;