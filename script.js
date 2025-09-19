document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("musicBtn");
  const bgMusic = document.getElementById("bgMusic");
  let isPlaying = false;

  if (musicBtn && bgMusic) {
    musicBtn.addEventListener("click", () => {
      if (!isPlaying) {
        bgMusic.play();
        musicBtn.textContent = "⏸ Dừng nhạc";
        isPlaying = true;
      } else {
        bgMusic.pause();
        musicBtn.textContent = "🎵 Phát nhạc";
        isPlaying = false;
      }
    });
  }
});