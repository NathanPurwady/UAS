// Fungsi Fitur Switch Dark Mode dengan local storage
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const btn = document.getElementById('themeToggleBtn');
    
    if (body.classList.contains('dark-mode')) {
        btn.textContent = '☀️ Mode Terang';
        btn.className = 'btn btn-outline-warning ms-3';
        localStorage.setItem('theme', 'dark'); // Simpan status dark mode
    } else {
        btn.textContent = '🌙 Mode Gelap';
        btn.className = 'btn btn-outline-light ms-3';
        localStorage.setItem('theme', 'light'); // Simpan status light mode
    }
}

// Memeriksa dan menerapkan tema yang tersimpan saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem('theme');
  const btn = document.getElementById('themeToggleBtn');
  
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      if (btn) {
          btn.textContent = '☀️ Mode Terang';
          btn.className = 'btn btn-outline-warning ms-3';
      }
  }
  
  selectMateri(0); // Membuka playlist indeks pertama
});



// Data Materi (Playlist) beserta informasi video & detailnya
const materiList = [
  {
    id: "Belajar Web Dasar [HTML] - Episode 01 - Apa itu HTML",
    title: "Belajar Web Dasar [HTML] - Episode 01 - Apa itu HTML",
    youtubeId: "wriGST3vp5M?si=E_yn1js6yunxBCmy",
    desc: "Kita belajar web dasar di kelas terbuka, from zero to hero, sikat habis brader and sister",
  },
  {
    id: "Belajar Web Dasar [HTML] - Episode 02 - Instalasi dan Persiapan",
    title: "Belajar Web Dasar [HTML] - Episode 02 - Instalasi dan Persiapan",
    youtubeId: "GAd6FTsGSY8?si=YBjZZLvfXTbQZp8P",
    desc: "Kita belajar web dasar di kelas terbuka, from zero to hero, sikat habis brader and sister",
  },
  {
    id: "Belajar Web Dasar [HTML] - Episode 03 - Struktur HTML",
    title: "Belajar Web Dasar [HTML] - Episode 03 - Struktur HTML",
    youtubeId: "TM12RA6cmOQ?si=25gVDWd37q9WYuLA",
    desc: "Kita belajar web dasar di kelas terbuka, from zero to hero, sikat habis brader and sister",
  },
  {
    id: "Belajar Web Dasar [HTML] - Episode 04 - Heading dan Paragraph",
    title: "Belajar Web Dasar [HTML] - Episode 04 - Heading dan Paragraph",
    youtubeId: "bd03BfqfOSk?si=8tv0rnacLhMXD5Hl",
    desc: "Kita belajar web dasar di kelas terbuka, from zero to hero, sikat habis brader and sister",
  },
  {
    id: "Belajar Web Dasar [HTML] - Episode 05 - Underline, Superscript dan Subscript",
    title: "Belajar Web Dasar [HTML] - Episode 05 - Underline, Superscript dan Subscript",
    youtubeId: "F9Joj-lm4T0?si=oKaZdHIjKNEBvFqE",
    desc: "Kita belajar web dasar di kelas terbuka, from zero to hero, sikat habis brader and sister",
  },

];

let activeIndex = 0;

// Fungsi Render Playlist ke Sidebar
function renderPlaylist() {
  const container = document.getElementById('playlistContainer');
  container.innerHTML = '';

  materiList.forEach((item, index) => {
    const isActive = index === activeIndex;
    
    const playlistItem = document.createElement('div');
    playlistItem.className = `playlist-item ${isActive ? 'active' : ''} ${item.completed ? 'completed' : ''}`;
    playlistItem.onclick = () => selectMateri(index);

    playlistItem.innerHTML = `
      <div class="item-left">
        <span class="item-title">${item.title}</span>
      </div>
      
    `;

    container.appendChild(playlistItem);
  });
}

// Fungsi Mengganti Isi Tampilan Kiri Saat Item Diklik
function selectMateri(index) {
  activeIndex = index;
  const selected = materiList[index];

  // Update Video Player Embed URL
  document.getElementById('videoPlayer').src = `https://www.youtube.com/embed/${selected.youtubeId}`;

  // Update Judul Video
  document.getElementById('videoTitle').innerText = selected.title;

 
  // Update Deskripsi Materi
  document.getElementById('videoDesc').innerText = selected.desc;

  // Render Ulang Sidebar
  renderPlaylist();
}

// Inisialisasi Tampilan Awal saat Halaman Dimuat
document.addEventListener("DOMContentLoaded", () => {
  selectMateri(0);
});