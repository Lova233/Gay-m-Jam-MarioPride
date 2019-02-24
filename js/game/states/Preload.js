GameJam.Preload = {
    preload: function() {
        this.ready = false;

        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.splash.anchor.setTo(0.5);
        this.splash.scale.setTo(1)
        this.load.image('background', 'assets/images/background.png');
        this.load.image('dark', 'assets/images/dark.png');
        this.load.spritesheet('mario', 'assets/images/mario.png', 454, 865, 10);
        this.load.spritesheet('browser', 'assets/images/browser.png', 1260, 1030, 2);
        this.load.spritesheet('monster', 'assets/images/monster.png', 220, 226, 2);
        this.load.spritesheet('pianta', 'assets/images/pianta.png', 220, 226, 2);
        this.load.spritesheet('fly', 'assets/images/fly.png', 209, 281, 2);

        this.load.image('square', 'assets/images/square.png');
         this.load.image('ground', 'assets/images/ground.png');
         this.load.image('grass', 'assets/images/grass.png');
         this.load.image('block', 'assets/images/block.png');
         this.load.tilemap('level', 'assets/levels/level.json', null, Phaser.Tilemap.TILED_JSON);


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