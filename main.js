nose_x=0;
nose_y=0;
function preload(){
mustash = loadImage('https://i.postimg.cc/9QjQ4VX6/moustache-PNG8.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
video = createCapture(300, 300);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
image(video, 0, 0, 300, 300);
fill(255, 0, 0);
stroke(255,0,0);
image(mustash, nose_x, nose_y, 30, 30);
}

function take_snapshot() {
    save('MyFilterImage');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-15;
        nose_y = results[0].pose.nose.y-1;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}


function take_snapshot(){
    save('myFilterImage.png');
}