/*variaveis de controle de hud:
 estadoNicole:esta c roupa certa;
 misturasFoi:ja passou por misturas;
 cristalizou: ja passou por cristalizacao;
 pedraCerta: escolheu as cores certas em misturas;
 */
var labState;
var avisos;
var paginaAtual = 1;
var once=true;
var estadoHud;
var misturasFoi=false;
var cristalizou=false;
var tween;
var somLab = null;
var avisoMicro = false;
var pranchetaControle = true;
var leu = false;

labState = {

    create: function () {


        sef1 = game.add.audio('efeitos1');
        sef2 = game.add.audio('efeitos2');
        sef2.volume = 0.2;

        if (audio && somLab === null) {
            somLab = game.add.audio('labSom');
            somLab.loopFull(1);
        }

        if (!audio && somLab === null) {
            somLab = game.add.audio('labSom');
            somLab.loopFull(0);
        }

        if (!audio) {
            sef1.volume = 0;
            sef2.volume = 0;
        }


        avisos = 0;
        tween = null;

        if (!estadoNicole && !misturasFoi && !cristalizou) {
            estadoHud = 0;
        } else {
            if (estadoNicole) {
                if (!misturasFoi && !cristalizou) {
                    estadoHud = 1;
                }
                if (misturasFoi && cristalizou) {
                    estadoHud = 4;
                }
                if (misturasFoi && !cristalizou) {
                    estadoHud = 3;
                }
            } else {
                if (misturasFoi && !cristalizou) {
                    estadoHud = 2;
                }
            }

        }

        once = true;
        game.add.image(0, 0, 'bgLab');
        hud = game.add.sprite(35, 17, 'hud', estadoHud);

        bannerpeq = game.add.button(15, 130, 'banner1p', function () {
            coiso1 = new Tween(400, 300, 'banner1', 565);
        }, this, 1, 0);

        av2p = game.add.button(320, 80, 'aviso1p', function () {
            coiso2 = new Tween(400, 300, 'aviso1g', 490);
        }, this, 1, 0);

        av1p = game.add.button(760, 180, 'aviso2p', function () {
            coiso3 = new Tween(400, 300, 'aviso2g', 490);
        }, this, 1, 0);

        mapRiscosp = game.add.button(300, 40, 'mapaderiscoslab', function () {
            coiso4 = new Tween(400, 300, 'mapaderiscos', 500);
        }, this, 1, 0);

        btnPause = game.add.button(740, 10, 'btnPause', function () {
            isPaused = true;
            this.Pause()
        }, this, 1, 0);


        if (pranchetaControle) {
            prancheta = game.add.button(410, 415, 'prancheta', this.openWindow, this, 1, 0, 0);
        } else {
            prancheta = game.add.button(410, 415, 'pranchetaSB', this.openWindow, this, 1, 0, 0);
        }
        armario = game.add.button(124.875, 110.388, 'armario', this.actionOnClickA, this,1,0);
        prateleiras = game.add.button(612,115,'prateleiras',this.actionOnClickPrat,this,0,1);
        pia = game.add.button(655,240,'pia',this.actionOnClickPia,this,0,1);
        microscopio = game.add.button(67,235,'microscopio',this.actionOnClickMic,this,1,0);
        livro = game.add.button(460, 270, 'livro', this.openLivro, this, 0, 1, 0);
        pagina = game.add.sprite(game.world.centerX, game.world.centerY, 'page1');
        pagina.scale.set(0.001);
        pagina.anchor.set(0.5);

        popup1 = game.add.sprite(game.world.centerX, game.world.centerY, 'avisoInicial');
        popup1.scale.set(0.001);
        popup1.anchor.set(0.5);

        microscopio.events.onInputOver.add(this.mAviso);
        microscopio.events.onInputOut.add(this.mApAviso);
        prateleiras.events.onInputOver.add(this.prAviso);
        prateleiras.events.onInputOut.add(this.prApAviso);
        pia.events.onInputOver.add(this.piaAviso);
        pia.events.onInputOut.add(this.piaApAviso);



        if(avisoMicro)
            this.mostrarAvisoMicro();

    },

    update: function () {

    },

    Pause: function(){
        this.controlBotoes(false);
        bgPause = game.add.image(0, 0, 'bgPause');

        if(audio){
            btnAudio = game.add.button(400, 272, 'btnComSom', function () {
                audio = false;
                somLab.loopFull(0);
                sef1.volume = 0;
                sef2.volume = 0;
                this.updatePause();
            }, this, 0, 1);
        } else {
            btnAudio = game.add.button(400, 272, 'btnSemSom', function () {
                audio = true;
                somLab.loopFull(1);
                sef1.volume = 1;
                sef2.volume = 0.2;
                this.updatePause();
            }, this, 0, 1);
        }

        btnContinuar = game.add.button(250, 393, 'btnContinuar', function () {
            this.controlBotoes(true);
            bgPause.destroy();
            btnAudio.destroy();
            btnHome.destroy();
            btnReiniciar.destroy();
            btnContinuar.destroy();
        }, this, 0, 1);
        btnReiniciar = game.add.button(400, 393, 'btnReiniciar', function () {
            this.controlBotoes(true);
            bgPause.destroy();
            btnAudio.destroy();
            btnHome.destroy();
            btnReiniciar.destroy();
            btnContinuar.destroy();
            this.controlBotoes(true);
            somLab.destroy();
            this.restartGame();
            game.state.start('menu');
        }, this, 0, 1);
        btnHome = game.add.button(550, 393, 'btnHome', function () {
            somLab.destroy();
            somLab = null;
            game.state.start('menu');
        }, this, 0, 1);

        btnContinuar.anchor.setTo(0.5, 0.5);
        btnAudio.anchor.setTo(0.5, 0.5);
        btnReiniciar.anchor.setTo(0.5, 0.5);
        btnHome.anchor.setTo(0.5, 0.5);
    },

    updatePause: function (){
        bgPause.destroy();
        btnAudio.destroy();
        btnHome.destroy();
        btnReiniciar.destroy();
        btnContinuar.destroy();
        this.Pause();
    },

    mostrarAvisoMicro: function() {

        this.controlBotoes(false);

        if(estadoPedra){
            let avisoFinal = game.add.image(game.world.centerX - 193, 10, 'avisoSucesso');
            let botaoFinal = game.add.button(game.world.centerX -62, 475, 'botaoIr', function () {
                avisoFinal.destroy();
                botaoFinal.destroy();
                avisoMicro = false;
                this.controlBotoes(true);
                somLab.destroy();
                this.restartGame();
                game.state.start('creditos');
            }, this,2,1,0);
        } else {
            let avisoFinal = game.add.image(game.world.centerX - 193, 10, 'avisoFalha');
            let botaoFinal = game.add.button(game.world.centerX -62, 475, 'botaoIr', function () {
                avisoFinal.destroy();
                botaoFinal.destroy();
                avisoMicro = false;
                this.controlBotoes(true);
                somLab.destroy();
                this.restartGame();
                game.state.start('creditos');
            }, this,2,1,0);
        }
    },

    controlBotoes: function(booleana) {
        prancheta.inputEnabled = booleana;
        prancheta.input.useHandCursor = true;
        armario.inputEnabled = booleana;
        armario.input.useHandCursor = true;
        prateleiras.inputEnabled = booleana;
        prateleiras.input.useHandCursor = true;
        pia.inputEnabled = booleana;
        pia.input.useHandCursor = true;
        microscopio.inputEnabled = booleana;
        microscopio.input.useHandCursor = true;
        btnPause.inputEnabled = booleana;
        btnPause.input.useHandCursor = true;
        bannerpeq.inputEnabled = booleana;
        bannerpeq.input.useHandCursor = true;
        av2p.inputEnabled = booleana;
        av2p.input.useHandCursor = true;
        av1p.inputEnabled = booleana;
        av1p.input.useHandCursor = true;
        btnPause.inputEnabled = booleana;
        btnPause.input.useHandCursor = true;
        livro.inputEnabled = booleana;
        livro.input.useHandCursor = true;
    },

    closeWindow: function() {
        avisos++;
        if(avisos===3){
            sef2.play();
            avisos = 0;
            if (tween && tween.isRunning || popup1.scale.x === 0.001)
            {
                return;
            }

            tween = game.add.tween(popup1.scale).to( { x: 0.001, y: 0.001 }, 500, Phaser.Easing.Elastic.In, true);
            tween.onComplete.add(function(){
                popup1.loadTexture('avisoInicial');
            }, this);

            ir.destroy();
        }else{
            if(avisos===2){
                sef1.play();
                popup1.loadTexture('avisoEPI');
            } else if (avisos === 1) {
                sef1.play();
                popup1.loadTexture('aviso2');
            }
        }
    },

    openWindow: function(){
        prancheta.loadTexture('pranchetaSB');
        pranchetaControle = false;
        leu = true;
        sef2.play()
        if ((tween !== null && tween.isRunning) || popup1.scale.x === 1)
        {

            return;
        }

        tween = game.add.tween(popup1.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
        ir = game.add.button(game.world.centerX -62, 475, 'botaoIr', this.closeWindow, this,2,1,0);

    },

    openLivro: function() {
        sef2.play();
        tweenPage = game.add.tween(pagina.scale).to( {x: 1, y: 1 }, 1000,  Phaser.Easing.Elastic.Out, true);
        btnPage = game.add.button(game.world.centerX -62, 475, 'botaoIr', this.passarPagina, this,2,1,0);
        this.controlBotoes(false);
        livro.frame = 2;
    },

    passarPagina: function() {
        paginaAtual++;
        if(paginaAtual === 2) {
            sef1.play();
            pagina.loadTexture('page2');
        } else if (paginaAtual === 3) {
            sef1.play();
            pagina.loadTexture('page3');
        } else if (paginaAtual === 4) {
            paginaAtual = 1;
            sef2.play();
            tweenCloseBook = game.add.tween(pagina.scale).to( { x: 0.001, y: 0.001 }, 500, Phaser.Easing.Elastic.In, true);
            tweenCloseBook.onComplete.add(function(){
                pagina.loadTexture('page1');
            }, this);
            btnPage.destroy();
            this.controlBotoes(true);
        }

    },

    actionOnClickA: function () {
        sef2.play();
        if(somLab!==null)
            somLab.destroy();
        somLab=null;
        game.state.start('armario');
    },

    actionOnClickPrat:function(){
        if(estadoNicole){
            if(somLab!==null)
                sef2.play();
            somLab.destroy();
            somLab=null;
            game.state.start('misturas');
        }else{
            sef1.play();
        }
    },

    mAviso:function(){
        if(!estadoNicole || !misturasFoi || !cristalizou){
            avisoerro=game.add.image(148,270,'aindaNao');

        }
    },

    mApAviso:function(){
        if(!estadoNicole|| !misturasFoi || !cristalizou){
            avisoerro.destroy();
        }
    },

    prAviso:function(){
        if(!estadoNicole){
            avisoerro=game.add.image(563,251,'aindaNao');
        }
    },

    prApAviso: function(){

        if(!estadoNicole){
            avisoerro.destroy();
        }

    },

    piaAviso:function(){
        if(!estadoNicole|| !misturasFoi){
            avisoerro=game.add.image(585,374,'aindaNao');

        }
    },

    piaApAviso: function(){
        if(!estadoNicole || !misturasFoi){
            avisoerro.destroy();
        }
    },

    actionOnClickPia:function(){

        if(estadoNicole && misturasFoi){
            sef2.play();
            game.state.start('cristalizacao');
            if(somLab!==null)
                somLab.destroy();
            somLab=null;
        }else{
            sef1.play();
        }
    },

    actionOnClickMic:function(){
        if(estadoNicole && misturasFoi && cristalizou){
            sef2.play();
            game.state.start('microscopio');
        } else {
            sef1.play();
        }
    },

    restartGame: function () {
        estadoNicole = false;
        misturasFoi = false;
        cristalizou = false;
        once = true;
        somLab = null;
        avisoMicro = false;
        slotSelecionado = 0;
        slot = new Array(21);
        item = new Array(20);
        itemPos = [7, 9, 13, 11, 15, 17, 0, 1, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18];
        somArm = null;
        stress = 0;
        stressTemp = 0;
        stressUp = false;
        stressDown = true;
        progress = 0;
        progressTemp = 0;
        somCrist = null;
    }

};

function Tween( x, y, sprite,ybot){
    tween1=null;
    popup = game.add.sprite(x, y, sprite);
    popup.scale.set(0.001);
    popup.anchor.set(0.5);


    tween1 = game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
    pia.inputEnabled=false;
    prateleiras.inputEnabled=false;
    armario.inputEnabled=false;
    bannerpeq.inputEnabled=false;
    av2p.inputEnabled=false;
    av1p.inputEnabled=false;
    microscopio.inputEnabled=false;
    mapRiscosp.inputEnabled=false;

    bottir = game.add.button(100, ybot, 'voltar',function(){
        tween1 = game.add.tween(popup.scale).to( { x: 0.001, y: 0.001 }, 500, Phaser.Easing.Elastic.In, true);
        pia.inputEnabled=true;
        pia.input.useHandCursor = true;
        prateleiras.inputEnabled=true;
        prateleiras.input.useHandCursor = true;
        armario.inputEnabled=true;
        armario.input.useHandCursor = true;
        bannerpeq.inputEnabled=true;
        bannerpeq.input.useHandCursor = true;
        av2p.inputEnabled=true;
        av2p.input.useHandCursor = true;
        av1p.inputEnabled=true;
        av1p.input.useHandCursor = true;
        microscopio.inputEnabled=true;
        microscopio.input.useHandCursor = true;
        mapRiscosp.inputEnabled=true;
        mapRiscosp.input.useHandCursor = true;

        bottir.destroy();
    }, this,2,1,0);

}