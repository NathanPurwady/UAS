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
    id: "Belajar Web Dasar [CSS] - Episode 01 - Apa Itu CSS",
    title: "Belajar Web Dasar [CSS] - Episode 01 - Apa Itu CSS",
    youtubeId: "AQOBN9XByf0?si=nlbFlV5jl2owL5eS",
    desc: "Kita belajar web dasar di kelas terbuka, from zero to hero, sikat habis brader and sister",
  },
  {
    id: "Belajar Web Dasar [CSS] - Episode 02 - Inline CSS",
    title: "Belajar Web Dasar [CSS] - Episode 02 - Inline CSS",
    youtubeId: "NuJxNI0GltM?si=WXWAmjsv-CDq0fXf",
    desc: "Kita belajar web dasar di kelas terbuka, from zero to hero, sikat habis brader and sister",
  },
  {
    id: "Belajar Web Dasar [CSS] - Episode 03 - Internal CSS",
    title: "Belajar Web Dasar [CSS] - Episode 03 - Internal CSS",
    youtubeId: "K_B2g1t0jVA?si=Z9oyzIVMj-8-cMWN",
    desc: "Kita belajar web dasar di kelas terbuka, from zero to hero, sikat habis brader and sister",
  },
  {
    id: "Belajar Web Dasar [CSS] - Episode 04 - Eksternal CSS",
    title: "Belajar Web Dasar [CSS] - Episode 04 - Eksternal CSS",
    youtubeId: "zYTdfOERybo?si=AvZ7R8JpbcL995sJ",
    desc: "Kita belajar web dasar di kelas terbuka, from zero to hero, sikat habis brader and sister",
  },
  {
    id: "Belajar Web Dasar [CSS] - Episode 05 - CSS Selector",
    title: "Belajar Web Dasar [CSS] - Episode 05 - CSS Selector",
    youtubeId: "MiIo71YFvPg?si=DdBv89wi27zx-dl9",
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



