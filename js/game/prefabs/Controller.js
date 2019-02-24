Controller = function(game) {

    this.game = game;
    this.commands = [];

    this.addCommand = function(command) {
        this.commands.push(command);
    }

    this.listen = function() {
        this.commands.forEach(command => {
            if (command.getKey().isDown) {
                command.execute();
            }
        })
    }
}
Controller.prototype = Object.create(Phaser.Sprite.prototype);
Controller.prototype.constructor = Controller;