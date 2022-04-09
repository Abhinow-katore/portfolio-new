var audio  = document.getElementById('SUS');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;
function amazon(){
    if(count==0){
        count = 1;
        audio.play();
    }
    audio.play();
}