document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('heroVideo');
    const playPauseButton = document.getElementById('playPauseButton');
    const playIcon = playPauseButton.querySelector('.fa-play');
    const pauseIcon = playPauseButton.querySelector('.fa-pause');

    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
            playPauseButton.setAttribute('aria-label', 'Pause');
        } else {
            video.pause();
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
            playPauseButton.setAttribute('aria-label', 'Play');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('bannerVideo');
    const playPauseButton2 = document.getElementById('playPauseButton2');
    const playIcon = playPauseButton2.querySelector('.fa-play');
    const pauseIcon = playPauseButton2.querySelector('.fa-pause');

    playPauseButton2.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
            playPauseButton2.setAttribute('aria-label', 'Pause');
        } else {
            video.pause();
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
            playPauseButton2.setAttribute('aria-label', 'Play');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll('.section-title');
  
    const handleScroll = () => {
      titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          title.classList.add('underline-visible');
        } else {
          title.classList.remove('underline-visible');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  });
  