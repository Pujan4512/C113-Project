function preload(){
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 100, 80, 300, 250);
}

function take_snapshot(){
    save('frame.png');
}