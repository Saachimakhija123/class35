var ball;
var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database=firebase.database();
    console.log(database);


    var dball=database.ref("ball/Position");
    dball.on("value",readPosition,showError);
}

function readPosition(data){

    position=data.val();
    console.log(position);
    console.log(position.x);
    ball.x=position.x;
    ball.y=position.y;
}

function writePosition(x,y){
    database.ref("ball/Position").set(
    {
        "X":position.x+x,
        "Y":position.y+y
    }

    )
   }
 

function showError(){
    console.log("error occured");
}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
