var misturasState;
var pote1,pote2;
var lugares;
var pipetaContent;
var pipetaCheia;
var bequerCheio;
var pipeta;
var bequerContent;
var comecou;
var bequerArray;
var v;
var onceM;
var avMist;
misturasState={

    create: function(){

        misturasFoi = false;
        estadoPedra = false;
        cristalizou = false;

        tween1 = null;



        if(audio){
            somMist = game.sound.add('minigameSom');
            somMist.loopFull(1);
            somMist1 = game.add.audio('efeitos1');
            somMist2 = game.add.audio('efeitos2');
            somMist2.volume = 0.2;
        }

        if(!audio){
            somMist = game.sound.add('minigameSom');
            somMist.loopFull(0);
            somMist1 = game.add.audio('efeitos1');
            somMist2 = game.add.audio('efeitos2');
            somMist1.volume = 0;
            somMist2.volume = 0;
        }

        onceM=true;
        v=true;
        bequerArray=[0,0];
        lugares=[0,0];
        comecou=false;
        pipetaContent=0;
        pipetaCheia=false;
        bequerContent=0;
        bequerCheio=false;

        bgMisturas=game.add.sprite(0,0,'bgInicio');

        avMist=0;
        estanteEst=game.add.sprite(268,310,'ponteira');
        estFalconsEst=game.add.sprite(26,321,'estFalcon');
        lixoEst=game.add.sprite(503,319,'lixo');
        bq=game.add.sprite(657,310,'bequerVa');
        popup1 = game.add.sprite(game.world.centerX, game.world.centerY, 'dica');
        popup1.scale.set(0.001);
        popup1.anchor.set(0.5);
        this.openWindow();

        //ir = game.add.button(game.world.centerX -62, 475, 'botaoIr', this.actionOnClick, this,2,1,0);
    },
    closeWindow: function() {
        avMist++;
        if(avMist===2){
            somMist2.play();
            avMist = 0;
            if (tween && tween.isRunning || popup1.scale.x === 0.001)
            {
                return;
            }

            tween = game.add.tween(popup1.scale).to( { x: 0.001, y: 0.001 }, 500, Phaser.Easing.Elastic.In, true);
            tween.onComplete.add(function(){
                popup1.loadTexture('dica');
                pote1= new Potes('solLeal','falconL',1)
                pote2= new Potes('solAmb','falconA',2);
                pote3= new Potes('solCor','falconC',3);
                pote4= new Potes('solSab','falconS',4);
                botPreparar=game.add.button(650,540,'littleIr',this.iniciar,this,1,0,1);
            }, this);

            ir.destroy();
        }else{
            if(avMist===1){
                somMist1.play();
                popup1.loadTexture('charada');
            }
        }
    },
    openWindow: function(){
        //somMist2.play()
        if ((tween !== null && tween.isRunning) || popup1.scale.x === 1)
        {

            return;
        }

        tween = game.add.tween(popup1.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

        ir = game.add.button(game.world.centerX -62, 475, 'botaoIr', this.closeWindow, this,2,1,0);

    },
    update: function(){



        //ir.bringToTop();
        if(bequerContent==2){
            bequerCheio=true;
        }
        if(comecou){
            pipeta.x= this.input.activePointer.worldX-30;
            pipeta.y= this.input.activePointer.worldY-140;
            pipeta.bringToTop();
            if( pipetaContent===0){
                pipeta.frame=4;
            }
            if(pipetaContent===-1){
                pipeta.frame=5;
            }

        }
        if(bequerCheio && v){
            final=game.add.button(650,540,'finalizar',this.clickFinal,this,1,0,0);
            v=false;
        }
    },
    actionOnClick: function () {
        somMist1.play();
        avisosMist += 1;
    },
    iniciar: function(){
        somMist1.play();
        var i=0;

        if(lugares[0]!=0 && lugares[1]!=0){
            comecou=true;
            this.criarObjs();

            pote1.i1.destroy();
            pote2.i1.destroy();
            pote3.i1.destroy();
            pote4.i1.destroy();

            while(i<=1){

                switch(lugares[i]){
                    //50+this.lugar*84,270
                    case 1:
                        console.log('caso1');
                        pote1.tubo.destroy();
                        if(i==0){
                            falcon1= game.add.button(50+i*84,270,'falconL', this.clickFalcon1,this,1,0,2);}
                        else{
                            falcon2=game.add.button(50+i*84,270,'falconL', this.clickFalcon2,this,1,0,2);
                        }
                        break;
                    case 2:
                        console.log('caso2');
                        pote2.tubo.destroy();
                        if(i==0){
                            falcon1= game.add.button(50+i*84,270,'falconA', this.clickFalcon1,this,1,0,2);}
                        else{
                            falcon2=game.add.button(50+i*84,270,'falconA', this.clickFalcon2,this,1,0,2);
                        }
                        break;
                    case 3:
                        console.log('caso3');
                        pote3.tubo.destroy();
                        if(i==0){
                            falcon1= game.add.button(50+i*84,270,'falconC', this.clickFalcon1,this,1,0,2);}
                        else{
                            falcon2=game.add.button(50+i*84,270,'falconC', this.clickFalcon2,this,1,0,2);
                        }
                        break;
                    case 4:
                        console.log('caso4');
                        pote4.tubo.destroy();
                        if(i==0){
                            falcon1= game.add.button(50+i*84,270,'falconS', this.clickFalcon1,this,1,0,2);}
                        else{
                            falcon2=game.add.button(50+i*84,270,'falconS', this.clickFalcon2,this,1,0,2);
                        }
                        break; }
                i++;
            }
            falcon1.events.onInputOver.add(function(){
                if(pipetaContent===2 ||pipetaContent===-1){
                    avisow=game.add.image(570,545,'aindaNao');
                }
            });
            falcon1.events.onInputOut.add(function(){
                if(pipetaContent===2||pipetaContent===-1){
                    avisow.destroy();
                }
            });
            falcon2.events.onInputOver.add(function(){
                if(pipetaContent===1||pipetaContent===-1){
                    avisow=game.add.image(570,545,'aindaNao');
                }
            });
            falcon2.events.onInputOut.add(function(){
                if(pipetaContent===1||pipetaContent===-1){
                    avisow.destroy();
                }
            });
        }
    },
    clickFalcon1: function(){

        if(!pipetaCheia){
            if(pipetaContent==0 || pipetaContent==1){
                somMist2.play();
                pipetaContent=1;
                pipetaCheia=true;
                pipeta.frame=lugares[0]-1;
                console.log(pipetaContent);
            }
        }else{
            somMist1.play();
        }
    },
    clickFalcon2: function(){

        if(!pipetaCheia){

            if(pipetaContent==0 || pipetaContent==2){
                somMist2.play();
                pipeta.frame=lugares[1]-1;
                pipetaContent=2;
                pipetaCheia=true;
                console.log(pipetaContent);
            }
        }else{
            somMist1.play();
        }
    },
    despejar: function(){

        if(!bequerCheio){
            if(pipetaCheia){
                somMist2.play();
                bequerArray[bequerContent]=lugares[pipetaContent-1]
                pipeta.frame=lugares[(pipetaContent)-1]+5;
                bequerContent++;
                pipetaCheia=false;
                if(bequerContent===1){
                    bequer.loadTexture('bequerMe');}
                if(bequerContent===2){
                    bequer.loadTexture('bequerCh');
                }
                console.log(pipetaContent);
            }
        }else{
            somMist1.play();
        }
    },
    clickLixeira:function(){
        somMist1.play();
        pipetaContent=-1;
        pipetaCheia=false;
        console.log(pipetaContent);
    },
    clickNovaPonteira: function(){

        if(pipetaContent==-1){
            somMist2.play();
            pipetaContent=0;
            console.log(pipetaContent);
        }else{
            somMist1.play();
        }
    },
    clickFinal: function(){
        if(bequerCheio){
            somMist1.play();
            if((bequerArray[0]==3 || bequerArray[1]==3 ) && (bequerArray[0]==4 || bequerArray[1]==4 || bequerArray[1]==2 ||bequerArray[0]==2)){
                game.state.start('quiz');
            }
            else{
                if((bequerArray[0]===1 && bequerArray[1]===3) || (bequerArray[1]===1 && bequerArray[0]===3)){
                    estadoPedra = true;
                }
                misturasFoi=true;
                falcon1.destroy();
                falcon2.destroy();
                estantePonteiras.destroy();
                lixeira.destroy();
                bequer.destroy();
                pipeta.destroy();

                final.destroy();
                bq=game.add.sprite(657,310,'bequerVa');
                lixoEst=game.add.sprite(503,319,'lixo');
                congratulei=game.add.image(game.world.centerX -193,10, 'congrats');
                irpLab=game.add.button(game.world.centerX -62, 475, 'botaoIr', function(){
                    somMist.destroy();
                    game.state.start('laboratorio');}, this,2,1,0);
            }
        }
    },
    criarObjs: function(){
        estanteEst.destroy();
        botPreparar.destroy();
        bq.destroy();
        lixoEst.destroy();
        p1=game.add.image(130+100*1,95,'solLeal');
        p2=game.add.image(130+100*2,95,'solAmb');
        p3=game.add.image(130+100*3,95,'solCor');
        p4=game.add.image(130+100*4,95,'solSab');
        bequer= game.add.button(657,310,'bequerVa',this.despejar,this,1,0,2);
        estantePonteiras=game.add.button(268,310,'ponteira',this.clickNovaPonteira,this,1,0,2);
        lixeira=game.add.button(503,319,'lixo',this.clickLixeira,this,1,0,2);
        pipeta=game.add.image(game.input.mousePointer.x,game.input.mousePointer.y,'pipeta');
    }


};
// classe dos potes que são selecionados:
function Potes (imgFora, tuboPequeno, num){
    this.selecionado=false;
    this.i1=game.add.button(130+100*num,95,imgFora,function(){
        somMist2.play();
        if(this.selecionado){
            this.selecionado=false;
            lugares[this.lugar]=0;
            this.tubo.destroy();
        }else{
            if(lugares[0]==0 || lugares[1]==0){
                this.selecionado=true;
                if(lugares[0]==0){
                    this.lugar=0;
                    lugares[0]=num;
                }
                else{
                    this.lugar=1;
                    lugares[1]=num;
                }
                this.tubo=game.add.image(50+this.lugar*84,270,tuboPequeno);
            }
        }
        console.log(imgFora+this.selecionado+this.lugar);
    },this,1,0);
}