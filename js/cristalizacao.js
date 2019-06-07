let cristalizacaoState;

let stress = 0;
let stressTemp = 0;
let stressUp = false;
let stressDown = true;

let progress = 0;
let progressTemp = 0;

let barStressFill;
let barProgressFill;
let cropRectStress;
let cropRectProgress;

let icnStress;
let icnProgress;

let button;
let nicole;
var somCrist=null;
cristalizacaoState = {
    create: function () {
        
        cristalizou = false;

        bSom = game.add.sound('efeitos1');
        if(audio){
            bSom.volume=2;

        }else{
            bSom.volume=0;
        }
        if(audio){
            somCrist=game.add.audio('minigameSom');
            somCrist.play();
        }
        game.add.image(0, 0, 'bgCristalizacao');

        nicole = game.add.sprite(404, 270, 'sprNicole');
        nicole.anchor.setTo(0.5, 0.5);
        nicole.animations.add('mexer', [0, 1, 2, 1, 0], 60);

        barStressFill = game.add.image(80, 500, 'barStressFill');
        barStressFill.anchor.setTo(0.5, 1);
        const barStressStroke = game.add.image(80, 300, 'barStressStroke');
        barStressStroke.anchor.setTo(0.5, 0.5);

        cropRectStress = new Phaser.Rectangle(0, 400, 40, 400);
        barStressFill.crop(cropRectStress, true);


        barProgressFill = game.add.image(720, 500, 'barProgressFill');
        barProgressFill.anchor.setTo(0.5, 1);
        const barProgressStroke = game.add.image(720, 300, 'barProgressStroke');
        barProgressStroke.anchor.setTo(0.5, 0.5);

        cropRectProgress = new Phaser.Rectangle(0, 400, 40, 400);
        barProgressFill.crop(cropRectProgress, true);




        narratCrist=game.add.image(game.world.centerX -193,10,'narrat');
        botIr=game.add.button(game.world.centerX -62, 475, 'botaoIr',this.criarBot,this,2,1,0);




        icnStress = game.add.sprite(87.7, 54.6, 'icnStress');
        icnStress.anchor.setTo(0.5, 0.5);

        icnProgress = game.add.sprite(722.5, 51.2, 'icnProgress');
        icnProgress.animations.add('liquid', [1, 0], 24);
        icnProgress.anchor.setTo(0.5, 0.5);


    },
    criarBot: function(){
        bSom.play();
        narratCrist.destroy();
        botIr.destroy();
        button = game.add.sprite(400, 558, 'btnCrist');
        button.anchor.setTo(0.5, 0.5);
        button.animations.add('click', [0, 1], 24);
        button.inputEnabled = true;
        button.input.useHandCursor = true;
        button.events.onInputOver.add( function () {
            button.frame = 1;
        });

        button.events.onInputOut.add( function () {
            button.frame = 0;
        });
        button.events.onInputUp.add( function () {
            bSom.play();
            button.animations.play('click');
            nicole.animations.play('mexer');
            icnProgress.animations.play('liquid');
            stressUp = true;
            stressDown = false;
            stressTemp = 0;
            progressTemp = 0;
            if(progress < 100)
                progress += 1.7;
            if(progress >= 100)
                progress = 100;

        });
    },

    update: function () {

        //Progress Mechanic
        if(progressTemp === 30 && progress > 0 && progress < 100) {
            progress -= 1;
            progressTemp = 0;
        }

        if (progress >= 100){
            this.complete();
        }

        cropRectProgress.y = 400 - (progress*4);
        barProgressFill.crop(cropRectProgress, true);

        progressTemp++;


        //Stress Mechanic
        icnStress.frame = Math.trunc(stress/60);
        if(stressTemp > 25) {
            stressUp = false;
            stressDown = true;
        }
        if(stressUp && stress < 300)
            stress++;
        if(stressDown && stress > 0)
            stress--;

        if(stress >= 300){
            this.incomplete();
        }

        cropRectStress.y = 400 - (stress*1.34);
        barStressFill.crop(cropRectStress, true);

        stressTemp++;
    },

    incomplete: function () {
        button.inputEnabled = false;

        stress = 0;
        progress = 0;
        stressTemp = 0;
        progressTemp = 0;

        let avisoStress = game.add.image(game.world.centerX - 193, 10, 'avisoIncompleto');
        avisoStress.bringToTop();

        let ir = game.add.button(game.world.centerX - 62, 475, 'botaoIr', function () {
            bSom.play();
            button.inputEnabled = true;
            button.input.useHandCursor = true;
            avisoStress.destroy();
            ir.destroy();
        }, this, 2, 1, 0);
        ir.input.useHandCursor = true;
    },

    complete: function () {
        button.inputEnabled = false;
        cristalizou=true;
        stress = 0;
        progress = 100;
        stressTemp = 0;
        progressTemp = 0;

        let avisoProgress = game.add.image(game.world.centerX - 193, 10, 'avisoProgress');
        avisoProgress.bringToTop();

        let ir = game.add.button(game.world.centerX - 62, 475, 'botaoIr', function () {
            bSom.play();
            button.inputEnabled = true;
            button.input.useHandCursor = true;
            avisoProgress.destroy();
            ir.destroy();
            somCrist.destroy();
            somCrist = null;
            progress = 0;
            game.state.start('laboratorio');
        }, this, 2, 1, 0);
        ir.input.useHandCursor = true;
    }
};
