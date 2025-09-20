const albums = [
    { 
        title: "Album 1", 
        pages: [
            {note:"1 !", image:"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa244NXhoa2Noa3BpbXkza2ZrejY1eDhvN2M3ZWM2N3IxNmUyNzFpdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WUAvPkMZLw78SY1z6M/giphy.gif"},
            {note:"PLSSSSS SCORED ME HIGHER ! ", image:"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hmeG92aHp4d3BqZWc2ejRndXBsZmQ4cm52ZG0zeG91ZWNvNG9iaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xAwUd8dmFfJJfmjYde/giphy.gif"},
            {note:"3 ", image:"images/Em nói Yêu sau tất cả.jpg"},
            {note:"4!", image:"images/bennhau.jpg"},
            {note:"5", image:"images/Mình không hiểu nhau.jpg"},
            {note:"6", image:"images/Quà em gửi.jpg"},
            {note:"7", image:"images/Mình chưa từng  hiểu nhau 2.jpg"},
            {note:"8", image:"images/Mình k hiểu nhau 1.jpg"},
            {note:"9", image:"images/Quà em gửi.jpg"},
            {note:"10", image:"images/Nhatui.jpg"},
            {note:"11!", image:"images/QuanTrong.jpg"},
            {note:"12", image:"images/1.jpg"}
        ]
    }
]
let albumIndex = 0, pageIndex = 0;
const noteDiv = document.getElementById('note');
const imageDiv = document.getElementById('image');
const musicBtn = document.getElementById("musicBtn");
  const BGM = document.getElementById("BGM");
  let isPlaying = false;
function renderPage(next = true) {
    const page = albums[albumIndex].pages[pageIndex];

    noteDiv.classList.add('fade-out');
    imageDiv.classList.add('fade-out');

    setTimeout(() => {
        noteDiv.textContent = page.note;
        imageDiv.innerHTML = `<img src="${page.image}" alt="Album">`;

        noteDiv.classList.remove('fade-out');
        imageDiv.classList.remove('fade-out');

        noteDiv.classList.add('fade-in');
        imageDiv.classList.add('fade-in');

        setTimeout(() => {
            noteDiv.classList.remove('fade-in');
            imageDiv.classList.remove('fade-in');
        }, 600);
    }, 300);
}

document.getElementById('nextBtn').addEventListener('click', () => {
    pageIndex++;
    if(pageIndex >= albums[albumIndex].pages.length){
        albumIndex = (albumIndex + 1) % albums.length;
        pageIndex = 0;
    }
    renderPage();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    pageIndex--;
    if(pageIndex < 0){
        albumIndex = (albumIndex - 1 + albums.length) % albums.length;
        pageIndex = albums[albumIndex].pages.length -1;
    }
    renderPage(false);
});

document.getElementById('fireworkBtn').addEventListener('click', () => {
    window.location.href = 'Phoahoa.html';
});

renderPage();
if (musicBtn && BGM) {
    musicBtn.addEventListener("click", () => {
      if (!isPlaying) {
        BGM.play().catch(err => console.log("Lỗi phát nhạc:", err));
        musicBtn.textContent = "⏸ Dừng nhạc";
        isPlaying = true;
      } else {
        BGM.pause();
        musicBtn.textContent = "🎵 Phát nhạc";
        isPlaying = false;
      }
    });
  }
