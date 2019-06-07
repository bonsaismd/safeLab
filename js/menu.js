var menuState;
var somMenu=null;
menuState = {
    create: function () {

        if(audio && somMenu === null){
            somMenu = game.add.audio('menuSom');
            somMenu.loopFull(1);
        }
        if(!audio && somMenu === null){
            somMenu = game.add.audio('menuSom');
            somMenu.loopFull(0);
        }

        game.add.image(0, 0, 'bgMenu');
        botoesSom=game.add.sound('efeitos1');
        if(audio){
            botoesSom.volume=2;
        } else{
            botoesSom.volume=0;
        }
        
        console.log(somMenu.volume);
        var botaoJogar=game.add.button(game.world.centerX - (168.3/2),250,'menuJogar', this.irJogar, this, 1, 0);
        var botaoOpcoes=game.add.button(game.world.centerX - (185.5/2),340,'menuOpcoes', this.irJogar2, this,  1, 0);
        var botaoCreditos=game.add.button(game.world.centerX - 100,430,'menuCreditos', this.irJogar3, this,  1, 0);

/*
            game.state.start('misturas');
            game.state.start('minigame2');
            game.state.start('customize');

*/

    },
    irJogar: function () {
        
        botoesSom.play();
        somMenu.destroy();
        somMenu=null;
        game.state.start('laboratorio');
    },
    irJogar2: function () {
        botoesSom.play();
        game.state.start('opcoes');
    },
    irJogar3: function () {
        botoesSom.play();
        game.state.start('creditos');
    }
};