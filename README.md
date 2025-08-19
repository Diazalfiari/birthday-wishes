# 🎉 Website Ucapan Selamat Ulang Tahun 

Website interaktif dan penuh kejutan untuk merayakan ulang tahun

## ✨ Fitur-Fitur Menarik

### 🎊 Animasi dan Efek Visual

- **Loading screen** dengan animasi gift box
- **Background balloons** yang melayang-layang
- **Confetti animation** saat celebrasi dimulai
- **Floating hearts** dan sparkles yang terus bermunculan
- **Interactive sparkles** yang muncul secara random

### 🎂 Fitur Interaktif

1. **Age Counter** - Menghitung usia real-time dalam tahun, hari, jam, menit, dan detik
2. **Memory Gallery** - 4 kartu kenangan yang bisa diklik untuk melihat cerita romantis
3. **Love Letter** - Surat cinta yang bisa dibuka dengan efek typing animation
4. **Virtual Cake** - Kue ulang tahun dengan 3 lilin yang bisa ditiup
5. **Wishes Collection** - 4 kartu harapan dengan pesan-pesan indah
6. **Music Player** - Tombol musik dengan visualizer

### 🎨 Desain Cantik

- **Gradient background** yang berubah-ubah
- **Glassmorphism effects** pada semua elemen
- **Responsive design** untuk semua ukuran layar
- **Custom animations** untuk setiap elemen
- **Beautiful typography** dengan font Dancing Script dan Poppins

### 🎁 Kejutan-Kejutan Spesial

- **Deteksi tanggal lahir** - Jika dibuka pada 24 Agustus, akan muncul pesan khusus
- **Particle effects** saat meniup lilin
- **Confetti explosion** saat semua lilin padam
- **Interactive messages** yang muncul saat berinteraksi

## 🚀 Cara Deploy di Vercel

### Metode 1: Deploy via GitHub (Recommended)

1. **Upload ke GitHub:**

   ```bash
   # Buat repository baru di GitHub
   # Clone ke local atau upload files
   git init
   git add .
   git commit -m "Initial commit - Birthday Website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/birthday.git
   git push -u origin main
   ```

2. **Deploy di Vercel:**
   - Kunjungi [vercel.com](https://vercel.com)
   - Sign up/Login dengan GitHub
   - Klik "New Project"
   - Import repository GitHub Anda
   - Klik "Deploy"
   - Website akan otomatis deploy!

### Metode 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy dari folder project:**

   ```bash
   cd c:\laragon\www\ultah2
   vercel
   ```

4. **Ikuti prompts:**
   - Set up and deploy? Y
   - Which scope? (pilih account Anda)
   - Link to existing project? N
   - What's your project's name? birthday
   - In which directory is your code located? ./

### Metode 3: Drag & Drop Deploy

1. Zip semua files dalam folder `ultah2`
2. Kunjungi [vercel.com](https://vercel.com)
3. Login/Sign up
4. Drag & drop file zip ke dashboard Vercel
5. Tunggu proses deploy selesai

## 📁 Struktur File

```
ultah2/
├── index.html          # File HTML utama
├── style.css           # Styling dan animasi
├── script.js           # JavaScript interaktif
├── package.json        # Konfigurasi npm
├── vercel.json         # Konfigurasi Vercel
└── README.md           # Dokumentasi ini
```

## 🎮 Cara Menggunakan Website

1. **Loading Screen:** Website akan loading selama 3 detik dengan animasi
2. **Start Celebration:** Klik tombol untuk memulai perayaan
3. **Age Counter:** Lihat usia real-time 
4. **Memory Gallery:** Klik setiap kartu untuk melihat kenangan
5. **Love Letter:** Klik amplop untuk membaca surat cinta
6. **Blow Candles:** Klik setiap lilin di kue untuk meniupnya
7. **Wishes:** Klik kartu harapan untuk melihat doa-doa indah
8. **Music Player:** Klik tombol musik untuk efek visual

## 🎨 Customization

### Mengubah Nama dan Tanggal:

Edit file `index.html` dan `script.js`:

- Ganti dengan nama yang diinginkan
- Ganti tanggal "2004-08-24" di JavaScript
- Update umur di HTML jika diperlukan

### Mengubah Warna:

Edit file `style.css`:

- Ubah gradient di `body` background
- Ganti warna di variabel CSS custom
- Modifikasi warna animasi

### Menambah Konten:

- Tambah memory cards di gallery
- Edit isi surat cinta
- Tambah wishes baru
- Update pesan-pesan

## 📱 Responsiveness

Website ini sudah dioptimasi untuk:

- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)
- ✅ All screen orientations

## 🌟 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎊 Fitur-Fitur Khusus

### Deteksi Hari Ulang Tahun

Jika website dibuka pada tanggal 24 Agustus, akan muncul modal khusus dengan pesan surprise!

### Real-time Age Calculator

Menghitung usia dengan presisi detik dan terus update secara real-time.

### Interactive Animations

Setiap klik dan hover memberikan feedback visual yang menarik.

### Particle Effects

Berbagai efek partikel seperti confetti, sparkles, dan hearts.

## 💝 Pesan  

Website ini dibuat dengan penuh cinta. Semoga hari ulang tahunnya yang ke-21 dipenuhi kebahagiaan, kesehatan, dan kesuksesan. Selamat ulang tahun! 🎉👑

## 🚀 Live Demo

Setelah deploy, website akan dapat diakses di:
`https://[project-name].vercel.app`

## 📞 Support

Jika ada masalah atau pertanyaan, silakan buat issue di repository GitHub atau hubungi developer.

---