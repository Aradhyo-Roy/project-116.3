noseX=0;
noseY=0;
function preload(){
    mustache=loadImage("https://i.postimg.cc/B6SSHM8Y/mustache.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("pose net is Initialized");
}
function gotPoses(results){
    if (results.lenght>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y-20;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mastache,noseX,noseY,30,30);
}
function take_snapshot(){
    save('Instargram.jpg');
}
