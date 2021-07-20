//var menu, menuIMG, menuGroup, menuSound;
var pathImg
//var title, titleIMG, titleG;
var SERVE = 1
var gameState = 1;
var form;

function preload() {
    menuIMG = loadImage("forest.gif");
    titleIMG = loadImage("dark-forest.png");
    menuSound = loadSound("background_music.wav");
    pathImg = loadImage("path.gif")
}
function setup() {
    createCanvas(1000, 600);
    if(gameState === SERVE){
        form = new Form ();
        form.display();
    }
 }

 function draw() {
     menuSound.play();
    drawSprites();
}
