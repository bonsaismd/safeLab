var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameSafeLab');
var audio = true;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('quiz', quizState);
game.state.add('misturas', misturasState);
game.state.add('cristalizacao', cristalizacaoState);
game.state.add('armario', armarioState);
game.state.add('laboratorio', labState);
game.state.add('creditos',cdtState);
game.state.add('opcoes',opcoesState);
game.state.add('microscopio', microState);

game.state.start('boot');