img = "";
status = "";

function preload() {
    img = loadImage('bedroom.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 120, 170);
    noFill();
    stroke("#FF0000");
    rect(100, 150, 500, 300);
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults() {
    if (error) {
        console.log(error);
    }
    console.log(results);
}