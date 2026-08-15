// JavaScript Interaktif - EduSpark

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


// 2. Fungsi Penanganan Event Submit Form
function handleFormSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    const name = document.getElementById('fullName').value;
    const course = document.getElementById('courseSelect').value;
    const alertContainer = document.getElementById('alertContainer');

    // Menampilkan notifikasi sukses secara dinamis dengan JS
    alertContainer.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Pendaftaran Berhasil!</strong> Selamat <strong>${name}</strong>, Anda telah terdaftar pada kelas <strong>${course}</strong>.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    // Reset form setelah disubmit
    document.getElementById('registrationForm').reset();
}

// Data Kurikulum untuk masing-masing kelas
const dataKurikulum = {
    "Pemrograman Web": {
        materi: [
            "<strong>HTML5 Dasar:</strong> Tag, atribut, elemen semantik, dan struktur dokumen.",
            "<strong>CSS3 Styling:</strong> Selector, box model, warna, dan tipografi.",
            "<strong>Responsive Design:</strong> Media queries, Flexbox, Grid, dan kerangka Bootstrap."
        ],
        langkah: [
            "Mempelajari sintaks dasar HTML & CSS.",
            "Membangun halaman portofolio responsif.",
            "Mengunggah hasil projek ke GitHub dan Netlify."
        ]
    },
    "Pemrograman C++": {
        materi: [
            "<strong>Konsep C++:</strong> Variabel, tipe data, operator, dan struktur kontrol.",
            "<strong>Fungsi & Pointer:</strong> Definisi fungsi, pointer dasar, dan manipulasi memori.",
            "<strong>OOP dalam C++:</strong> Class, object, inheritance, dan polymorphism."
        ],
        langkah: [
            "Memahami dasar JavaScript Modern (ES6+).",
            "Membuat aplikasi Single Page Application (SPA) interaktif.",
            "Optimasi performa aplikasi React untuk produksi."
        ]
    },
    "Pemrograman Python": {
        materi: [
            "<strong>Dasar Python:</strong> Variabel, tipe data, operator, dan struktur kondisi (If-Else) & Looping.",
            "<strong>Struktur Data & Fungsi:</strong> List, Tuple, Dictionary, Set, serta pembuatan fungsi lokal.",
            "<strong>Analisis Data Dasar:</strong> Pengenalan pustaka populer seperti NumPy dan Pandas untuk olah data."
        ],
        langkah: [
            "Menginstal Python dan melakukan konfigurasi IDE Visual Studio Code.",
            "Membuat skrip otomasi sederhana untuk memanipulasi file teks.",
            "Menganalisis file CSV dan menyajikannya dalam bentuk grafik dasar."
        ]
    },
};

// Fungsi untuk mengubah konten kurikulum secara dinamis
function updateKurikulum(namaKursus) {
    const data = dataKurikulum[namaKursus];
    if (!data) return; // Keluar jika nama kursus tidak terdaftar

    //  Ubah Judul Kurikulum
    document.getElementById('kurikulumTitle').textContent = `Materi yang Akan Dipelajari (${namaKursus}):`;

    //  Ubah Daftar Materi
    const materiContainer = document.getElementById('materiListContainer');
    materiContainer.innerHTML = data.materi.map(item => `<li>${item}</li>`).join('');

    //  Ubah Langkah Belajar
    const langkahContainer = document.getElementById('langkahListContainer');
    langkahContainer.innerHTML = data.langkah.map(item => `<li>${item}</li>`).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    // Menyeleksi semua kartu yang memiliki class course-card
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        // Mengubah kursor saat diarahkan ke kartu kursus
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', () => {
            // Membaca isi dari atribut data-page pada kartu yang diklik
            const targetPage = card.getAttribute('data-page');
            
            // Jika atribut data-page ditemukan, langsung pindah halaman
            if (targetPage) {
                if (targetPage === 'kelas_html.html' || targetPage === 'kelas_css.html' || targetPage === 'kelas_java.html') {
                    window.location.href = targetPage;
                } else {
                    window.open(targetPage, '_blank'); // Membuka di tab baru
                }
            }

        });
    });
});


