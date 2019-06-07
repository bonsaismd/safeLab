let microState;

var video;
var estadoPedra = false;
microState = {
    create: function () {

        avisoMicro = true;

        if(estadoPedra) video = game.add.video('pedraCerta');
        else video = game.add.video('pedraErrada');

        video.play();
        video.addToWorld();
    },

    update: function () {
        if(!video.playing){
            somLab.destroy();
            somLab = null;
            game.state.start('laboratorio');
        }

    }

};