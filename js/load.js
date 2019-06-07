var loadState;
loadState = {
    preload: function () {
        var loadingLabel = game.add.text(game.width * 0.5, game.height * 0.5, 'Loading...',
            {font: '30px Courier', fill: '#ffffff'});
        loadingLabel.anchor.setTo(0.5, 0.5);


        //Sons
        game.load.audio('labSom', 'sounds/Level_2_LOOP.wav');
        game.load.audio('menuSom', 'sounds/Title_2_LOOP.wav');
        game.load.audio('minigameSom', 'sounds/som.wav');
        game.load.audio('efeitos1', 'sounds/efeitos1.wav');
        game.load.audio('efeitos2', 'sounds/efeitos2.wav');

        //Opcoes e Creditos
        game.load.image('bgOp', 'img/sprTelas/bgOp.png');
        game.load.image('cdt1', 'img/sprTelas/cdt1.png');
        game.load.image('cdt2', 'img/sprTelas/cdt2.png');
        game.load.spritesheet('audio1', 'img/sprTelas/audio1.png', 53, 104);
        game.load.spritesheet('audio2', 'img/sprTelas/audio2.png', 123, 107);
        game.load.spritesheet('banner1p', 'img/sprTelas/bannerlab.png',65.5, 108);
        game.load.spritesheet('voltar', 'img/sprTelas/voltar.png',129, 32);
        game.load.spritesheet('aviso2p', 'img/sprTelas/aviso2p.png',32, 39);
        game.load.spritesheet('aviso1p', 'img/sprTelas/aviso1p.png',23.5, 12);
        game.load.image('banner1', 'img/sprTelas/banner.png');
        game.load.image('aviso2g', 'img/sprTelas/aviso2g.png');
        game.load.image('aviso1g', 'img/sprTelas/aviso1g.png');

        //Menu
        game.load.image('bgMenu', 'img/sprMenu/bgMenu.png');
        game.load.spritesheet('menuCreditos', 'img/sprMenu/menuCreditos.png', 199.93, 73);
        game.load.spritesheet('menuJogar', 'img/sprMenu/menuJogar.png', 168.3, 73);
        game.load.spritesheet('menuOpcoes', 'img/sprMenu/menuOpcoes.png', 185.5, 73);

        //Laboratorio
        game.load.image('bgLab', 'img/sprLaboratorio/labCor.png');
        game.load.image('avisoInicial', 'img/sprLaboratorio/introducao.png');
        game.load.image('aviso2', 'img/sprLaboratorio/aviso2.png');
        game.load.image('avisoEPI', 'img/sprLaboratorio/avisoarmario.png');
        game.load.image('aindaNao','img/sprLaboratorio/opsaindanao.png');
        game.load.image('mapaderiscos', 'img/sprTelas/mapadriscos.png');
        game.load.spritesheet('hud', 'img/sprLaboratorio/huds.png',112.75,114);
        game.load.spritesheet('prancheta', 'img/sprLaboratorio/pranchetaLab.png',84,72);
        game.load.spritesheet('pranchetaSB', 'img/sprLaboratorio/pranchetaLabSB.png',81,72);
        game.load.spritesheet('armario', 'img/sprLaboratorio/armario.png',78,156);
        game.load.spritesheet('prateleiras','img/sprLaboratorio/minigame1.png',147,127);
        game.load.spritesheet('pia','img/sprLaboratorio/pia.png',118.5,104);
        game.load.spritesheet('microscopio','img/sprLaboratorio/microscopio.png',37,66);
        game.load.spritesheet('mapaderiscoslab', 'img/sprTelas/mapadriscoslab.png',52,28);
        game.load.spritesheet('mapaderiscoslab', 'img/sprTelas/mapadriscoslab.png',52,28);
        game.load.spritesheet('livro', 'img/sprLaboratorio/spr_livro', 38, 27);
        game.load.image('page1', 'img/sprLaboratorio/spr_page1.png');
        game.load.image('page2', 'img/sprLaboratorio/spr_page2.png');
        game.load.image('page3', 'img/sprLaboratorio/spr_page3.png');

        //Misturas
        game.load.image('bgInicio','img/sprMisturas/bgInicio.png');
        game.load.image('charada','img/sprMisturas/charada.png');
        game.load.image('congrats','img/sprMisturas/congrats.png');
        game.load.image('dica','img/sprMisturas/dicaa.png');
        game.load.image('opcaoCorreta','img/sprMisturas/opcaoCorreta.png');
        game.load.spritesheet('littleIr', 'img/sprMisturas/irsolucoes.png',122.666,57);
        game.load.spritesheet('pipeta','img/sprMisturas/pipetasheet.png',60,211);
        game.load.spritesheet('solLeal', 'img/sprMisturas/solLealdade.png',40.666,76);
        game.load.spritesheet('solAmb', 'img/sprMisturas/solAmbicao.png',41,77);
        game.load.spritesheet('solCor', 'img/sprMisturas/solCoragem.png',40,76);
        game.load.spritesheet('solSab', 'img/sprMisturas/solSabedoria.png',40.66,77);
        game.load.spritesheet('falconA','img/sprMisturas/falconA.png',50.6,166);
        game.load.spritesheet('falconC','img/sprMisturas/falconC.png',50.6,166);
        game.load.spritesheet('falconL','img/sprMisturas/falconL.png',50.6,166);
        game.load.spritesheet('falconS','img/sprMisturas/falconS.png',50.6,166);
        game.load.image('estFalcon','img/sprMisturas/estFalcon.png');
        game.load.spritesheet('lixo', 'img/sprMisturas/lixo.png',111,139);
        game.load.spritesheet('ponteira', 'img/sprMisturas/ponteiras.png',178.6,148);
        game.load.spritesheet('bequerVa', 'img/sprMisturas/vazio.png',122.333,148);
        game.load.spritesheet('bequerMe', 'img/sprMisturas/metade.png',122.333,148);
        game.load.spritesheet('bequerCh', 'img/sprMisturas/cheio.png',122.333,148);
        game.load.spritesheet('finalizar','img/sprMisturas/Finalizar.png',123.1,57);

        //Quiz
        game.load.image('enunciado', 'img/sprQuiz/texto5.png');
        game.load.image('opcaoIncorreta', 'img/sprQuiz/texto5.1.png');
        game.load.spritesheet('botaoIr','img/sprQuiz/botaoIr.png',124,57);
        game.load.spritesheet('opcaoA','img/sprQuiz/opcao1.png',216,21);
        game.load.spritesheet('opcaoB','img/sprQuiz/opcao2.png',106.5,21);
        game.load.spritesheet('opcaoC','img/sprQuiz/opcao3.png',238,21);
        game.load.spritesheet('opcaoD','img/sprQuiz/opcao4.png',236.5,21);
        game.load.spritesheet('opcaoE','img/sprQuiz/opcao5.png',237.4,21);
        game.load.image('certinho', 'img/sprQuiz/correto.png');

        //Cristalizacao
        game.load.image('narrat','img/sprCristalizacao/narratt.png');
        game.load.image('bgCristalizacao', 'img/sprCristalizacao/bgCristalizacao.png');
        game.load.spritesheet('btnCrist', 'img/sprCristalizacao/btnCristalizacao.png', 73.5, 74);
        game.load.spritesheet('icnStress', 'img/sprCristalizacao/iconStress.png', 58, 76);
        game.load.spritesheet('icnProgress', 'img/sprCristalizacao/icnProgress.png', 76, 78);
        game.load.spritesheet('sprNicole', 'img/sprCristalizacao/spritesheetNicole.png', 222, 359);
        game.load.image('barStressStroke', 'img/sprCristalizacao/barStressStroke.png');
        game.load.image('barStressFill', 'img/sprCristalizacao/barStressFill.png');
        game.load.image('barProgressStroke', 'img/sprCristalizacao/barProgressStroke.png');
        game.load.image('barProgressFill', 'img/sprCristalizacao/barProgressFill.png');
        game.load.image('avisoIncompleto', 'img/sprCristalizacao/avisoIncompleto.png');
        game.load.image('avisoProgress', 'img/sprCristalizacao/avisoProgress.png');

        //Armario
        game.load.image('bgArmario', 'img/sprArmario/bgArmario.png');
        game.load.spritesheet('btnVestir', 'img/sprArmario/btnVestir.png', 170.3, 47);
        game.load.image('nicoleErrada', 'img/sprArmario/nicoleErrada.png');
        game.load.image('nicoleCerta', 'img/sprArmario/nicoleCerta.png');
        game.load.image('slot', 'img/sprArmario/slot.png');
        game.load.image('blusa', 'img/sprArmario/blusa.png');
        game.load.image('blusa2', 'img/sprArmario/blusa2.png');
        game.load.image('brincos', 'img/sprArmario/brincos.png');
        game.load.image('brincos2', 'img/sprArmario/brincos2.png');
        game.load.image('calca', 'img/sprArmario/calca.png');
        game.load.image('chapeu', 'img/sprArmario/chapeu.png');
        game.load.image('chinelas', 'img/sprArmario/chinelas.png');
        game.load.image('jaleco', 'img/sprArmario/jaleco.png');
        game.load.image('liga', 'img/sprArmario/liga.png');
        game.load.image('luvas', 'img/sprArmario/luvas.png');
        game.load.image('luvascoz', 'img/sprArmario/luvascoz.png');
        game.load.image('oculos', 'img/sprArmario/oculos.png');
        game.load.image('oculosnat', 'img/sprArmario/oculosnat.png');
        game.load.image('oculosprot', 'img/sprArmario/oculosprot.png');
        game.load.image('oculossol', 'img/sprArmario/oculossol.png');
        game.load.image('patins', 'img/sprArmario/patins.png');
        game.load.image('saia', 'img/sprArmario/saia.png');
        game.load.image('salto', 'img/sprArmario/salto.png');
        game.load.image('short', 'img/sprArmario/short.png');
        game.load.image('tenis', 'img/sprArmario/tenis.png');

        //Microscopio
        game.load.video('pedraCerta', 'videos/pedraCerta.mp4');
        game.load.video('pedraErrada', 'videos/pedraErrada.mp4');
        game.load.image('avisoSucesso', 'img/sprLaboratorio/avisoSucesso.png');
        game.load.image('avisoFalha', 'img/sprLaboratorio/avisoFalha.png');
        game.load.image('bgAvisoFinal', 'img/sprLaboratorio/bgAvisoFinal.png');

        //Pause
        game.load.image('bgPause', 'img/sprPause/bgPause.png');
        game.load.spritesheet('btnContinuar', 'img/sprPause/btnContinuar.png', 52, 59);
        game.load.spritesheet('btnHome', 'img/sprPause/btnHome.png', 74, 59);
        game.load.spritesheet('btnReiniciar', 'img/sprPause/btnReiniciar.png', 58, 59);
        game.load.spritesheet('btnComSom', 'img/sprPause/btnComSom.png', 71, 60);
        game.load.spritesheet('btnSemSom', 'img/sprPause/btnSemSom.png', 31, 59);
        game.load.spritesheet('btnPause', 'img/sprPause/btnPause.png', 54, 50);

    },

    create: function () {
        game.state.start('menu');
    }
};
