let songsfolder = ["spotify\songsfolder\128-Ishq Sufiyana (Male) - The Dirty Picture 128 Kbps.mp3","spotify\songsfolder\128-Mere Bina - Crook 128 Kbps.mp3"
  
];
function playSong(index) {
  const audioPlayer = document.getElementById('audioPlayer1');
  if (audioPlayer) {
    audioPlayer.src = songsfolder[index];
    audioPlayer.play();
  } else {
    console.error("Audio player element not found.");
  }
}