var cdtState;
var cont;
cdtState = {
    create: function () {

        if(audio && somMenu === null){
            somMenu = game.add.audio('menuSom');
            somMenu.loopFull(1);
        }
        if(!audio && somMenu === null){
            somMenu = game.add.audio('menuSom');
            somMenu.loopFull(0);
        }
        
    	somBot1=game.add.audio('efeitos1');
    	if(!audio){
    		somBot1.volume=0;
    	}
    	cont =0;
        fundo=game.add.image(0, 0, 'cdt1');
        botaodeIr=game.add.button(game.world.centerX -62, 520,'botaoIr',function(){
        	somBot1.play();
        	if(cont===0){
        	fundo.loadTexture('cdt2');}
        	else{
        		game.state.start('menu');
        	}
        	cont++;
        },2,1,0);

        }
};