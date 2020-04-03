var fixedellipse,movingelipse;



function setup(){
createCanvas(1200,800);
fixedellipse = createSprite(200,200,50,80);
movingellipse = createSprite(400,200,80,30);
}
function draw(){
background(0,0,0)
movingellipse.x = World.x;
movingellipse.y = World.y;
}
 