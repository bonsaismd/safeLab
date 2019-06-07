var opcoesState;

var audiospr='audio1';
var botaoSom;
opcoesState = {

    create: function () {
        game.add.image(0, 0, 'bgOp');

        botaodeIrc = game.add.button(game.world.centerX - 60, 500,'botaoIr',function(){
            game.state.start('menu');
        },2,1,0);

        botaoSom = game.add.button(game.world.centerX - 60, 250, audiospr, function(){
            audio = !audio;
        },this, 1,0);
    },

    update: function(){
        if(!audio){
            somMenu.volume=0;
        }else{
            somMenu.volume=1;
        }

        if(audio){
            botaoSom.loadTexture('audio2');
        }else{
            botaoSom.loadTexture('audio1');
        }


    }
};