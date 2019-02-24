GameJam.Preload = {
    preload: function() {
        this.ready = false;

        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.splash.anchor.setTo(0.5);
        this.splash.scale.setTo(1)
        this.load.image('background', 'assets/images/background.png');
        this.load.image('dark', 'assets/images/dark.png');
        this.load.spritesheet('mario', 'assets/images/mario.png', 454, 865, 5);
        this.load.image('square', 'assets/images/square.png');
         this.load.image('ground', 'assets/images/ground.png');



        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);


        this.load.onLoadComplete.add(this.onLoadComplete, this);
    },
    create: function() {
        // this.preloadBar.cropEnabled = false;
    },
    update: function() {
        if (this.ready === true) {
            this.state.start('Game');
        }
    },
    onLoadComplete: function() {
        this.ready = true;
    }
};