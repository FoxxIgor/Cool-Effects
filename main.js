//inputText = "";
function preload(){ // Carrega arquivos
    img = loadImage("1.png");

}
function setup(){ // Ele cria os elementos.
    canvas= createCanvas(640,480);
    tint_color=""; // 

    //video=createCapture(VIDEO);
    //video.hide();
}
function draw(){ // Desenha os elementos dentro do canvas.
    image(img, 0, 0, 640, 480);
    tint(tint_color);
}
function colorFilter(){
    tint_color=document.getElementById("inputColorName").value;
}
function applyBlur(){
    img.filter(BLUR, 3);
}
function applyInvert(){
    img.filter(INVERT);
}
function applyGray(){
    img.filter(GRAY);
}
function applyBlack(){
    img.filter(THRESHOLD);
}
function takeSnapshot(){
    save("photo.png");
}
function cameraMode(){
    window.location="camera.html";
}
//function insertImg(){
    //inputText = document.getElementById("inputUrl").value;
    //console.log(inputText);
//}