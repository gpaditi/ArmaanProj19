class Form{
    constructor(){ }
    display(){
        background(menuIMG)
        var title = createElement('h2');
        title.html("Dark forest")
        title.position (130,50)
    
        var play = createButton("PLAY");
        play.position(370, 230);
        play.size(190, 80);
        
        play.mousePressed(function(){
            title.hide();
            play.hide();
            background(pathImg);
        })
     }
}