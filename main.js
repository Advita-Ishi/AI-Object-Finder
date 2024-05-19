objects = [];
status = "";

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}


function setup() {
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 450);
}

function modelLoaded() {
    console.log("Model loaded!");
    status = true;
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = 'Status: Detecting Objects';

    }

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}


function draw() {
image (video, 0, 0, 450, 450);

if(status != "") {
objectDetector.detect (video, gotResult);
for (i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "Status: Object Detected";

fill("#FF0000");
percent = floor (objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("#FF0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

if (objects[i].label == objects-name) {
video.stop();
objectDetector.detect (gotResult);
document.getElementById("object_status").innerHTML = object_name + "Found";

synthwindow.speechSynthesis;
utterThis = new SpeechSynthesisUtterance (object_name , "Found");
synth.speak(utterThis);
}
else {
    document.getElementById("object_status").innerHTML = object_name + " Not Found";
}
}
}
}

