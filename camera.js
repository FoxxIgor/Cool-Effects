function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    tint_color="";

    video =createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}
function applyColor(){
    inputValue = document.getElementById("inputColor").value;
    tint_color=inputValue;
}
function savePhoto(){
    save("photo.png");
}
function imgMode(){
    window.location="index.html";
}