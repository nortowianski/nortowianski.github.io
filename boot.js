var Dr = {

    convertTime: function(time_in_ms) {
        //Time elapsed in seconds
        var time_in_s = Math.abs(time_in_ms / 1000)

        //Convert seconds into minutes and seconds
        var minutes = Math.floor(time_in_s / 60);
        var seconds = Math.floor(time_in_s) - (60 * minutes);
        var milisec = Math.floor( Math.floor(Math.abs(time_in_ms / 10) - minutes * 6000) - seconds * 100)

        //Display minutes, seconds and milisecs add a 0 to the start if less than 10
        var result = (minutes < 10) ? "0" + minutes : minutes;
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds;
        result += (milisec < 10) ? ".0" + milisec : "." + milisec

        return result
    }

};

Dr.Boot = function(game) {
    this.game = game;

    this.game.global = {
        thumbRows: 5,
        // number of thumbnail cololumns
        thumbCols: 3,
        // width of a thumbnail, in pixels
        thumbWidth: 100,
        // height of a thumbnail, in pixels
        thumbHeight: 100,
        // space among thumbnails, in pixels
        thumbSpacing: 25,
        // array with finished levels and stars collected.
        // 0 = playable yet unfinished level
        // 1, 2, 3 = level finished with 1, 2, 3 stars
        // 4 = locked
        starsArray: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        timesArray:  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // level currently playing
        level: 1,
        //name of image for the selected level
        level_img: "",

        level_sound: false,
        level_music: true
    }
};

Dr.Boot.prototype = {

    preload: function() {
        this.game.load.image('sprite_loading', 'asset/loading1.png');
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //resize your window to see the stage resize too
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.setShowAll();
        this.game.scale.refresh();
    },

    create: function() {
        console.log('Boot finished, lets go to the preloader automatically');

        this.game.state.start('preloader');
    }
}

WebFontConfig = {
    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() {
        //Dr.game.time.events.add(Phaser.Timer.SECOND, createText, this);
    },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    // google: {
    //     families: ['Revalia', 'Aller']
    // },

    // custom: {
    // //array of family names, the ones written within the stylesheet.css coming
    // //in the fontSquirrel's webfont kit
    // families: ['Ailerons'],
    // //local path to stylesheet.css
    // urls: ["fonts/stylesheet.css"]
    // }
};
