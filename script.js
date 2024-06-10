document.addEventListener('DOMContentLoaded', function() {
    let video = document.getElementById('videoPlayer');
    let playButton = document.getElementById('playButton');
  

playButton.style.display = 'block'; 

    video.addEventListener('pause', function() {
      playButton.style.display = 'block';
    });
  
    
    video.addEventListener('play', function() {
      playButton.style.display = 'none';
    });
  
    
    playButton.addEventListener('click', function() {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
  
    