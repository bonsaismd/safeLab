let armarioState;
let sprNicole;
let estadoNicole = false;
let slotSelecionado = 0;

slot = new Array(21);
item = new Array(20);
itemPos = [7, 9, 13, 11, 15, 17, 0, 1, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18];
var somArm = null;
armarioState = {

    create: function () {

        slotSom = game.add.audio('efeitos1');
        slotSom2 = game.add.audio('efeitos2');
        slotSom2.volume = 0.2;

        if(audio){
            somArm=game.sound.add('minigameSom');
            somArm.loopFull(1);
        }

        if(!audio){
            somArm = game.sound.add('minigameSom');
            somArm.loopFull(0);
            slotSom.volume = 0;
            slotSom2.volume = 0;
        }

        game.add.image(0, 0, 'bgArmario');
        const btnVestir = game.add.button(game.world.centerX - 85.15, 525, 'btnVestir', this.Vestir, this, 1, 0, 1);
        sprNicole = game.add.image(210, 300, 'nicoleErrada');
        sprNicole.anchor.setTo(0.5, 0.5);


        slot[0]  = new Slot(207, 134, 0);
        slot[1]  = new Slot(84, 217, 1);
        slot[2]  = new Slot(330, 217, 2);
        slot[3]  = new Slot(84, 383, 3);
        slot[4]  = new Slot(330, 383, 4);
        slot[5]  = new Slot(207, 466, 5);
        slot[6]  = new Slot(501, 134, 6);
        slot[7]  = new Slot(587, 134, 7);
        slot[8]  = new Slot(673, 134, 8);
        slot[9]  = new Slot(501, 217, 9);
        slot[10] = new Slot(587, 217, 10);
        slot[11] = new Slot(673, 217, 11);
        slot[12] = new Slot(501, 300, 12);
        slot[13] = new Slot(587, 300, 13);
        slot[14] = new Slot(673, 300, 14);
        slot[15] = new Slot(501, 383, 15);
        slot[16] = new Slot(587, 383, 16);
        slot[17] = new Slot(673, 383, 17);
        slot[18] = new Slot(501, 466, 18);
        slot[19] = new Slot(587, 466, 19);
        slot[20] = new Slot(673, 466, 20);


        item[0]  = new Item('luvas', 0);
        item[1]  = new Item('liga', 1);
        item[2]  = new Item('oculosprot', 2);
        item[3]  = new Item('jaleco', 3);
        item[4]  = new Item('calca', 4);
        item[5]  = new Item('tenis', 5);
        item[6]  = new Item('oculos', 6);
        item[7]  = new Item('brincos', 7);
        item[8]  = new Item('blusa', 8);
        item[9]  = new Item('short', 9);
        item[10] = new Item('chinelas', 10);
        item[11] = new Item('blusa2', 11);
        item[12] = new Item('chapeu', 12);
        item[13] = new Item('oculosnat', 13);
        item[14] = new Item('saia', 14);
        item[15] = new Item('salto', 15);
        item[16] = new Item('patins', 16);
        item[17] = new Item('oculossol', 17);

    },

    update: function () {
        if(!audio){
            slotSom.volume=0;
            slotSom2.volume=0;
        }
        if(estadoNicole){
            sprNicole.loadTexture('nicoleCerta');
            if(leu && estadoHud === 0) pranchetaControle = true;
        } else {
            sprNicole.loadTexture('nicoleErrada');
            if(leu && estadoHud === 0) pranchetaControle = false;
        }

        this.checkSlot();
        this.checkEquip();
    },

    checkSlot: function(){
        for(i = 0; i < 21; i++){
            if(((game.input.x > slot[i].limiteEsq) && (game.input.x < slot[i].limiteDir)) &&
                ((game.input.y > slot[i].limiteCima) && (game.input.y < slot[i].limiteBaixo))){
                slotSelecionado = slot[i].index;
            }
        }
    },

    Vestir: function () {
        if(somArm!==null)
        somArm.destroy();
        somArm=null;
        game.state.start('laboratorio');
    },

    checkEquip: function () {

        let pos = new Array(6);
        for(let i = 0; i < 6; i++) {
            pos[i] = itemPos[i] === 0 || itemPos[i] === 1 ||
                itemPos[i] === 2 || itemPos[i] === 3 ||
                itemPos[i] === 4 || itemPos[i] === 5;
        }

        estadoNicole = pos[0] && pos[1] && pos[2] && pos[3] && pos[4] && pos[5];
    }

};

function Slot(x, y, index) {
    this.image = game.add.sprite(x, y, 'slot');
    this.image.anchor.setTo(0.5, 0.5);
    this.slotX = x;
    this.slotY = y;
    this.index = index;
    this.cheio = false;
    this.limiteCima = y - 39;
    this.limiteBaixo = y + 39;
    this.limiteEsq = x - 39;
    this.limiteDir = x + 39;
    this.image.inputEnabled = true;
}

function Item(name, index) {
    this.index = index;
    this.image = game.add.sprite(slot[itemPos[index]].slotX, slot[itemPos[index]].slotY, name);
    this.image.anchor.setTo(0.5, 0.5);
    this.image.inputEnabled = true;
    game.physics.enable(this.image, Phaser.Physics.ARCADE);
    this.image.input.enableDrag(true);
    this.image.input.useHandCursor = true;
    this.image.body.collideWorldBounds = true;
    this.oldX = slot[itemPos[index]].slotX;
    this.oldY = slot[itemPos[index]].slotY;

    this.oldSlot = slot[itemPos[index]].index;
    slot[itemPos[index]].cheio = true;
    this.image.events.onDragStart.add(onDragStart, this);
    this.image.events.onDragStop.add(onDragStop, this);

}

function onDragStart() {
    slotSom.play();
    this.oldSlot = slotSelecionado;
    slot[this.oldSlot].cheio = false;
}

function  onDragStop() {
    if (!slot[slotSelecionado].cheio) {
        slotSom2.play();
        slot[slotSelecionado].cheio = true;
        itemPos[this.index] = slotSelecionado;
        this.image.x = slot[slotSelecionado].slotX;
        this.image.y = slot[slotSelecionado].slotY;
        this.oldX = slot[slotSelecionado].slotX;
        this.oldY = slot[slotSelecionado].slotY;

    } else {
        slotSom2.play();
        slot[this.oldSlot].cheio = true;
        this.image.x = this.oldX;
        this.image.y = this.oldY;
    }
}
