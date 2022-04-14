Michael_Jackson_song="";
old_town_road_song="";

function preload(){
    Michael_Jackson_song = loadSound("Michael_Jackson.mp3");
    old_town_road_song = loadSound("old_town_road.mp3");
}
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}



function draw(){
    image(video,0,0,600,530);
}