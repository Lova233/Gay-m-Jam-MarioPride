let height = window.innerHeight;
if(height>783) height=783
let width = window.innerWidth
if (width>1366*2) width=1366*2
let game = new Phaser.Game(1200,600 , Phaser.AUTO, '');

game.state.add('Boot', GameJam.Boot);
game.state.add('Preloader', GameJam.Preload);
game.state.add('Game', GameJam.Game);
game.state.add('Menu', GameJam.Menu);
game.state.add('Won', GameJam.Won);


// game.state.add('MainMenu', JustRun.MainMenu);
// game.state.add('GameOver', JustRun.GameOver);


game.state.start('Boot');