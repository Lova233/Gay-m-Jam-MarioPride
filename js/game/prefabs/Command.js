Command = function(game, actions, key, action) {

    this.game = game;
    this.key = this.game.input.keyboard.addKey(key);
    this.action = action;
    this.actions = actions;
    this.button;
    this.fn = ()=>this.execute();
    
    this.createButton = function(x,y,width,height,keyFrame) {
        let button = game.add.button(x, y,keyFrame, this.fn, this);
        button.anchor.setTo(0.5, 0.5);
        button.width = width;
        button.height = height;
        this.button = button;

    }

    this.execute = function() {
        this.actions.dispatch(this.action);
    }

    this.getKey = function() {
        return this.key;
    }

    this.setKey = function(key) {
        this.key = key;
    }
}
Command.prototype = Object.create(Phaser.Sprite.prototype);
Command.prototype.constructor = Command;