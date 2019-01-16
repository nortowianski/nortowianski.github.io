Dr.Preloader = function(game) {
    this.game = game;
};

Dr.Preloader.prototype = {

    preload: function() {

        //level images
        this.game.load.spritesheet("level_img1", 'asset/Puzzle_Thumbnail.png', 200, 200);

        // //Help button
        // this.game.load.spritesheet("help_btn", "asset/help.png", 160, 100);
        // //play btn
        // this.game.load.image('btn_play', 'asset/title/play1.png');
        // //info btn
        // this.game.load.image('info_btn', 'asset/info_btn.png');
        // //button
        // //this.game.load.image('menu_btn', 'asset/menu_btn.png');

        // //Play pause button
        // this.game.load.spritesheet("play_pause", "asset/pandp.png", 120, 80);
        // //sound btn
        // this.game.load.spritesheet('sound', 'asset/sound.png', 140, 90)
        // //music btn
        // this.game.load.spritesheet('music', 'asset/music.png', 140, 90)
        // //home btn
        // this.game.load.image('home_btn', 'asset/home_btn.png')
        // //back image
        // this.game.load.image('back_btn', 'asset/back_btn.png')
        // //end image
        // this.game.load.image('end_btn', 'asset/end_btn.png')

        // this.game.load.image('level_backgr', 'asset/level_backgr.jpg');

        //game background image
        this.game.load.image("game_background", 'asset/game_backgr.jpg');

        // //game information image
        // this.game.load.image("info_backgr", 'asset/info_backgr.jpg');

        // this.game.load.audio('sfx_button', ['asset/audio/button.mp3', 'asset/audio/button.wav']);

        // this.game.load.audio('bgm_main', ['asset/audio/bgmm.mp3', 'asset/audio/bgmm.ogg']);

        // this.game.load.audio('sfx_step', ['asset/audio/step.mp3', 'asset/audio/step.wav']);
        // this.game.load.audio('sfx_explosion', ['asset/audio/step.mp3', 'asset/audio/explosion.wav']);
        // //level select
        // this.game.load.spritesheet("levels", "asset/levels66.png", 100, 100);
        // this.game.load.spritesheet("level_arrows", "asset/game/level_arrows.png",
        //                            55, 110);
        // //this.game.load.image('btn_home', 'asset/title/home_btn.png');

        this.preloadBar = this.add.sprite(this.game.world.width * 0.5 - 217, this.game.world.height * 0.5, 'sprite_loading');
        //this.preloadBar.anchor.setTo(0, 0);
        this.load.setPreloadSprite(this.preloadBar);
        //  Load the Google WebFont Loader script
        this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },

    create: function() {
        console.log('Preloader finished, lets go to the Title automatically');

        this.game.state.start('title');
    }
}
