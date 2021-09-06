function preload() {
}
function setup() {
    canvas = createCanvas(450,450)
    canvas.center();
}
function draw() {
    fill('#ff0000');
    stroke('#ff0000');
    circle(30,30,20);
}
function take_snapshot() {
   save('myFilterImage.png')
}