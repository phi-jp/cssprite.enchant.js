enchant();

var SCREEN_WIDTH = 320;
var SCREEN_HEIGHT= 320;
var BOARD_WIDTH  = 280;
var BOARD_HEIGHT = 280;

window.onload = function() {
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    
    game.onload = function() {
        var scene = game.rootScene;
        scene.backgroundColor = "black";
        
        var field = new Group();
        scene.addChild(field);
        field.x = (SCREEN_WIDTH - BOARD_WIDTH)/2;
        field.y = (SCREEN_HEIGHT- BOARD_HEIGHT)/2;
        
        var board = new CSSprite(BOARD_WIDTH, BOARD_HEIGHT, "board");
        field.addChild(board);
        
        var pieceList = [];
        for (var i=0; i<8; ++i) {
            pieceList[i] = [];
            for (var j=0; j<8; ++j) {
                var piece = new CSSprite(30, 30, "piece");
                piece.x = 20+30*j;
                piece.y = 20+30*i;
                pieceList[i][j] = piece;
                field.addChild(piece);
            }
        }
        
        game.onenterframe = function() {
            /*
            for (var i=0,len=enemyList.length; i<len; ++i) {
                var enemy = enemyList[i];
            }
            */
        };
    };
    game.start();
};
