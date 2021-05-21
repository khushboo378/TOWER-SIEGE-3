const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
const Constraint=Matter.Constraint

var ground,polygon1,chain1
var score=0
var backgroundIMG
var bg="bg2.jpg"
var bgIMG


function preload(){
    getBackgroundImg()
    sound1=loadSound("sound.mp3")    
}


function setup(){
createCanvas(1200,700)    
engine=Engine.create()
world=engine.world

g1=new Ground(600,700,1200,30)
g2=new Ground(430,600,380,20)

polygon1=new Polygon(100,500,70,70)
chain1=new Chain(polygon1.body,{x:200,y:500})

//30,4
b1=new Box(330,570,30,40)
b2=new Box(360,570,30,40)
b3=new Box(390,570,30,40)
b4=new Box(420,570,30,40)
b5=new Box(450,570,30,40)
b6=new Box(480,570,30,40)
b7=new Box(510,570,30,40)
b8=new Box(540,570,30,40)


b9=new Box(360,530,30,40)
b10=new Box(390,530,30,40)
b11=new Box(420,530,30,40)
b12=new Box(450,530,30,40)
b13=new Box(480,530,30,40)
b14=new Box(510,530,30,40)

b15=new Box(390,490,30,40)
b16=new Box(420,490,30,40)
b17=new Box(450,490,30,40)
b18=new Box(480,490,30,40)

b19=new Box(420,450,30,40)
b20=new Box(450,450,30,40)



Engine.run(engine)
}


function draw(){
if(bgIMG)    
background(bgIMG)
Engine.update(engine)


noStroke()
textSize(35)
fill("white")
text("SCORE :" + score,width-300,50)

g1.display()
g2.display()

polygon1.display()



b1.display()
b2.display()
b3.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()

b9.display()
b10.display()
b11.display()
b12.display()
b13.display()
b14.display()
b15.display()
b16.display()
b17.display()
b18.display()
b19.display()
b20.display()

chain1.display()

b1.score()
b2.score()
b3.score()
b4.score()
b5.score()
b6.score()
b7.score()
b8.score()
b9.score()
b10.score()
b11.score()
b12.score()
b13.score()
b14.score()
b15.score()
b16.score()
b17.score()
b18.score()
b19.score()
b20.score()

}

function mouseDragged(){
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
chain1.fly()    
sound1.play()
}

function keyPressed(){
if(keyCode===32){
    //text("press space to serve again",200,200)
    chain1.attach(polygon1.body)
}
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sunny.png";
    }
    else{
        bg = "bg2.jpg";
    }

    bgIMG = loadImage(bg);
    console.log(bgIMG);
}


