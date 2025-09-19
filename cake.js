document.addEventListener("DOMContentLoaded", () => {
  const blowBtn = document.getElementById("blowBtn");
  const flames = document.querySelectorAll(".flame");
  const smokes = document.querySelectorAll(".smoke");
  const starTrail = document.getElementById("starTrail");
  const bubblesContainer = document.querySelector('.bubbles');

  const musicBtn = document.getElementById("musicBtn");
  const birthdayMusic = document.getElementById("birthdayMusic");
  let isPlaying = false;

  // Nút thổi nến
  if (blowBtn) {
    blowBtn.addEventListener("click", () => {
      // Tắt nến
      flames.forEach(f => f.classList.add("extinguish"));

      // Hiện khói
      smokes.forEach(s => {
        s.classList.add("rise");
        setTimeout(() => s.classList.remove("rise"), 1500);
      });

      // 2s sau hiện sao băng
      setTimeout(() => {
        if (starTrail) starTrail.classList.add("fly");
      }, 2000);

      // 4.5s sau fade out -> chuyển trang
      setTimeout(() => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = "memories.html";
        }, 1000);
      }, 4500);
    });
  }

  // Bọt bong bóng
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + 'vw';
    const size = 10 + Math.random() * 30;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.animationDuration = 5 + Math.random() * 5 + 's';
    bubblesContainer.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, parseFloat(bubble.style.animationDuration) * 1000);
  }
  setInterval(createBubble, 500);

  // Nút bật/tắt nhạc
  if (musicBtn && birthdayMusic) {
    musicBtn.addEventListener("click", () => {
      if (!isPlaying) {
        birthdayMusic.play().catch(err => console.log("Lỗi phát nhạc:", err));
        musicBtn.textContent = "⏸ Dừng nhạc";
        isPlaying = true;
      } else {
        birthdayMusic.pause();
        musicBtn.textContent = "🎵 Phát nhạc";
        isPlaying = false;
      }
    });
  }
});
