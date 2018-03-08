
PlayState = {};

// load game assets here
PlayState.preload = function () {
    this.game.load.image('background', 'images/background.png');
    this.game.load.image('moon', 'images/moon.png');
    
};

// create game entities and set up world here
PlayState.create = function () {
    let bg = this.game.add.image(0, 0, 'background');
    let moon = this.game.add.image(0, 0, 'moon');
    bg.height = this.game.height; 
    bg.width = this.game.width;
    moon.height = this.game.height; 
    moon.width = this.game.width;
    
};

// =============================================================================
// entry point
// =============================================================================

window.onload = function () {
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
    game.state.add('play', PlayState);
    game.state.start('play');
};