var quizState;
var certo;
var selecionado;
quizState={
    create: function(){
        qsom1=game.add.audio('efeitos1');
        qsom2=game.add.audio('efeitos2');
        qsom2.volume = 0.2;

        if(!audio){
            qsom1.volume=0;
            qsom2.volume=0;
        }
        game.add.image(0,0,'bgInicio');
        enun=game.add.image(game.world.centerX ,game.world.centerY,'enunciado');
        enun.scale.set(0.001);
        enun.anchor.set(0.5);
        eTween=game.add.tween(enun.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
        //this.openWindow();
        opcaoA=new Opcoes(1,'opcaoA');
        opcaoB=new Opcoes(2,'opcaoB');
        opcaoC=new Opcoes(3,'opcaoC');
        opcaoD=new Opcoes(4,'opcaoD');
        opcaoE=new Opcoes(5,'opcaoE');
        botaoIr=game.add.button(game.world.centerX -62, 480,'botaoIr',this.checagem,this,1,0);
        certinho=game.add.image(260,-500,'certinho');


    },
    update: function () {
        certinho.y=(selecionado*35.45)+240;
        botaoIr.bringToTop();
    },
    checagem: function () {
        qsom2.play();
        opcaoA.opc.destroy();
        opcaoB.opc.destroy();
        opcaoC.opc.destroy();
        opcaoD.opc.destroy();
        opcaoE.opc.destroy();
        certinho.destroy();
        enun.destroy();

        if(selecionado===-30){
            somMist.destroy();
            game.state.start('laboratorio');
        }else{
            if(selecionado===4){
                avisoBom=game.add.image(game.world.centerX -193,10,'opcaoCorreta');
                selecionado=-30;

            }
            else{
                // if(selecionado===1||selecionado===2||selecionado===3||selecionado===5){
                avisoRuim=game.add.image(game.world.centerX -193,10,'opcaoIncorreta');
                selecionado=-30;}


        }//}
    },


};
function Opcoes(num, spr){
    this.opc=game.add.button(300,(num*36)+255,spr,function(){
        qsom1.play();
        selecionado=num;

    },this,1,0,0);
    if(ini=false){
        this.opc.destroy();
    }

};