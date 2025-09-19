const albums = [
    { 
        title: "Album 1", 
        pages: [
            {note:"Ngày 21 tháng 5 năm 2025, Ngày mình gặp nhau !", image:"images/Em cười xinh.jpg"},
            {note:"10 ngày bên nhau mình lần đầu tiên cãi nhau ! ", image:"images/10ngay.jpg"},
            {note:"Một tháng bên nhau vui cũng vui mà buồn cũng buồn ! ", image:"images/Em nói Yêu sau tất cả.jpg"},
            {note:"Học cách bên nhau !", image:"images/bennhau.jpg"},
            {note:"Những lời yêu mình nói", image:"images/Mình không hiểu nhau.jpg"},
            {note:"Chúng ta chưa từng hoàn hảo", image:"images/Quà em gửi.jpg"},
            {note:"Anh không hiểu em", image:"images/Mình chưa từng  hiểu nhau 2.jpg"},
            {note:"Em không hiểu anh", image:"images/Mình k hiểu nhau 1.jpg"},
            {note:"Nhưng chúng ta vẫn bên nhau", image:"images/Quà em gửi.jpg"},
            {note:"Mình còn có căn nhà chung", image:"images/Nhatui.jpg"},
            {note:"Mình bên nhau !", image:"images/QuanTrong.jpg"},
            {note:"Chúc mừng sinh nhật công chúa của anh,13/09/2005 sinh nhật đầu tiên cùng nhau. Bao dung anh bé hơn nhé !!!", image:"images/1.jpg"}
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
