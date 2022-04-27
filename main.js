Michael_Jackson_song="";
old_town_road_song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
song_Michael_Jackson = "";
song_old_town_road = "";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    Michael_Jackson_song = loadSound("Michael_Jackson.mp3");
    old_town_road_song = loadSound("old_town_road.mp3");
}

function draw(){
    image(video,0,0,600,530);

    fill("#00ff00");
    stroke("#ff0000");

    song_old_town_road = old_town_road_song.isPlaying();
    console.log(song_old_town_road);

    song_Michael_Jackson = Michael_Jackson_song.isPlaying();
    console.log(song_Michael_Jackson);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
       Michael_Jackson_song.stop();
        if(song_name == false){
            old_town_road_song.play();
        }
        else{
            console.log("Song Name: old town road song");
            document.getElementById("song_id").innerHTML = "Song Name: old town road song";
        }
    if(scorerightWrist > 0.2){
            circle(leftWrist_x,leftWrist_y,20);
            old_town_road_song.stop();
            if(song_name == false){
            Michael_Jackson_song.play();
            }
        else{
                console.log("Song Name: Michael Jackson song");
                document.getElementById("song_id").innerHTML = "Song Name: Michael Jackson song";
            }
    }
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}
}