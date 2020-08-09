//GLOBAL VARIABLE
var group
var cir,cro
var gamestate
var a,b,c,d,e,f,g,h,i
var anime
function setup(){
 createCanvas(500,500);
 a= createSprite(83,83,156,156);
 b= createSprite(250,83,156,156);
 c= createSprite(417,83,156,156);
 d= createSprite(83,250,156,156);
 e= createSprite(250,250,156,156);
 f= createSprite(417,250,156,156);
 g= createSprite(83,417,156,156);
 h= createSprite(250,417,156,156);
 i= createSprite(417,417,156,156);
 anime=[1,2,3,4,5,6,7,8,9]
 gamestate=1
 group= new Group()
group.add(a);
group.add(b);
group.add(c);
group.add(d);
group.add(e);
group.add(f);
group.add(g);
group.add(h);
group.add(i);
}

function preload(){
cir = loadImage("download.png");
cro = loadImage("images.png");
}

function draw(){
background("white");
for(var k =0; k<9;k++){
 var x = group.get(k);
if(mousePressedOver(x)){
if(gamestate==1){
anime[k]="x"
x.addImage(cro);
x.scale=0.2;
gamestate=2;
x.setCollider("circle",0,0,0.1);
}else if(gamestate==2){
 anime[k]="o"
 x.addImage(cir);
 x.scale=0.2;
 gamestate=1;
 x.setCollider("circle",0,0,0.1)   ;
}
} 
}
if(anime[0]==anime[1]&&anime[0]==anime[2]){
gamestate=3
}
if(anime[3]==anime[4]&&anime[3]==anime[5]){
gamestate=3
}
if(anime[6]==anime[7]&&anime[6]==anime[8]){
gamestate=3
}
if(anime[0]==anime[3]&&anime[0]==anime[6]){
gamestate=3
}
 if(anime[1]==anime[4]&&anime[1]==anime[7]){
gamestate=3
 }
if(anime[2]==anime[5]&&anime[2]==anime[8]){
 gamestate=3
 }
if(anime[0]==anime[4]&&anime[0]==anime[8]){
 gamestate=3
 }
 if(anime[2]==anime[4]&&anime[2]==anime[6]){
gamestate=3
 }
 drawSprites();
 if(gamestate==3){
fill("blue")
textSize(95)
text("You Win",100,250)
}
 
}