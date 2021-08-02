noseX=0
noseY=0
difference=0
leftwristX=0
rightwristX=0

function setup(){
canvas=createCanvas(550,550);
canvas.position(700,120)
video=createCapture(VIDEO);
video.size(550.550)
posenet= ml5.poseNet (video, modelLoaded)
posenet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results) {

if (results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    leftwristX = results[0].pose.leftWrist.x
    rightwristX = results[0].pose.rightWrist.x
    difference = floor(leftwristX - rightwristX)
}

}
function draw(){
    background('#c8cf4e')
    fill('#ff8cfb')
    stroke('#000291')
    strokeWeight(4)
    square(noseX,noseY,difference);
    document.getElementById('square_side').innerHTML="width And height of square will be = " + difference;

}
