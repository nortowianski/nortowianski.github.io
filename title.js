Dr.Title = function(game) {
    this.game = game;
    this.logoTitle = null;
    this.playBtn = null;
    this.creditBtn = null;

    this.drBiro = null;
    this.floatingLogo = 0;

    this.music = null;
    this.sfxButton = null;
    this.game.isAudio = false;
    this.pills = null;
    this.randX;
    this.randY;
    this.jumpY;
};

Dr.Title.prototype = {
    create: function() {

        this.game.add.tileSprite(0, 0, 900, 1000, "game_background");
        console.log('Preloade finished, this is title');

        // if (this.music == null) {
        //     this.music = this.game.add.audio('bgm_main');
        // }
        // if (this.sfxButton == null) this.sfxButton = this.game.add.audio('sfx_button');

        // this.playBtn = this.game.add.button(this.game.world.width * 0.5 , this.game.world.height * 0.85, 'btn_play', this.onPlay, this, null, 0);
        // this.playBtn.anchor.setTo(0.5, 1);

        // this.infoBtn = this.game.add.button(this.game.world.width * 0.85 , this.game.world.height * 0.085, 'info_btn', this.onInfo, this, null, 0);
        // this.infoBtn.anchor.setTo(0.5, 0.5);

        // if (this.game.global.sfxButton == null) {
        //     this.game.global.sfxButton = this.game.add.audio('sfx_button')
        // }

        // if (this.game.global.music == null) {
        //     this.game.global.music = this.game.add.audio('bgm_main')
        // }


        // //sound on/off
        // this.pause_sound = this.game.add.button(this.game.world.width * 0.15  ,this.game.world.height * 0.9 , 'sound')

        // if(this.game.global.level_sound == true){
        //    this.pause_sound.frame = 0
        // } else {
        //     this.pause_sound.frame = 1
        //     this.game.sound.mute = true;
        // }

        // this.pause_sound.anchor.setTo(0.5);
        // this.pause_sound.inputEnabled = true;
        // this.pause_sound.events.onInputDown.add(this.onSound, this)

        // //music on/off
        // this.pause_music = this.game.add.button(this.game.world.width * 0.85, this.game.world.height * 0.9, 'music')
        // this.pause_music.frame = 0
        // this.pause_music.anchor.setTo(0.5);
        // this.pause_music.inputEnabled = true;
        // this.pause_music.events.onInputDown.add(this.onMusic, this)


        // if (this.game.global.music.isPlaying == false && this.game.global.level_music == true ) {
        //     this.game.global.music.play('', 0, 1, true)
        // }

        // //info image
        // this.info_image = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "info_backgr");
        // this.info_image.anchor.setTo(0.5);
        // this.info_image.kill()

        // this.game.input.reset()
        // this.game.input.onTap.add(this.singleClick, this);
    },

    update: function() {
    },

}
