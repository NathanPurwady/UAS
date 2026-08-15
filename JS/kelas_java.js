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
    id: "Belajar Javascript [Dasar] - 01 - Apa itu Javascript?",
    title: "Belajar Javascript [Dasar] - 01 - Apa itu Javascript?",
    youtubeId: "sNLadea-tLU?si=N4kN5lrbdEaEBjzZ",
    desc: "Ayo belajar javascript berbahasa Indonesia dengan lebih mantaaaap!",
  },
  {
    id: "Belajar Javascript [Dasar] - 02 - Instalasi Chrome dan VSCode",
    title: "Belajar Javascript [Dasar] - 02 - Instalasi Chrome dan VSCode",
    youtubeId: "H5ezVh3kuhI?si=BKsAkS7a04cGWIrJ",
    desc: "Ayo belajar javascript berbahasa Indonesia dengan lebih mantaaaap!",
  },
  {
    id: "Belajar Javascript [Dasar] - 03 - Menjalankan Javascript",
    title: "Belajar Javascript [Dasar] - 03 - Menjalankan Javascript",
    youtubeId: "BN6fyGVf5A4?si=qTezDbsAsG7Dbg7n",
    desc: "Ayo belajar javascript berbahasa Indonesia dengan lebih mantaaaap!",
  },
  {
    id: "Belajar Javascript [Dasar] - 04 - Variabel(let, var, const)",
    title: "Belajar Javascript [Dasar] - 04 - Variabel(let, var, const)",
    youtubeId: "op30bc1Mm60?si=dnvS-NaraxOeI3zd",
    desc: "Ayo belajar javascript berbahasa Indonesia dengan lebih mantaaaap!",
  },
  {
    id: "Belajar Javascript [Dasar] - 05 - Tipe Data",
    title: "Belajar Javascript [Dasar] - 05 - Tipe Data",
    youtubeId: "v5qtnn9eJ2M?si=d8uV6gbMgMMRKRuW",
    desc: "Ayo belajar javascript berbahasa Indonesia dengan lebih mantaaaap!",
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