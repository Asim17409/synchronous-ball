var ball;
var database,ballposition,position

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballposition = database.ref("ball/position")
    ballposition.on("value",readpositon,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
       write(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
       write(1,0);
    }
    else if(keyDown(UP_ARROW)){
       write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
write(0,+1);
    }
    drawSprites();
}

function write(x,y){
    database.ref("ball/position").set({
        x : ball.x + x,
        y : ball.y + y
    })
    
}

function readpositon(data){
    position=data.val()
    ball.x = position.x
    ball.y = position.y
}

function showerror(){
    console.log("error")
}
