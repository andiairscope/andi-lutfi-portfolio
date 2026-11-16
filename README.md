# Portofolio Rekayasa & Instrumentasi — Andi Lutfi

Website portofolio personal untuk **Andi Lutfi** (S1 Fisika Instrumentasi, Universitas Pendidikan Indonesia), dirancang dengan memadukan identitas visual **Apple-inspired minimalism** dari `Andi Lutfi – Portofolio.html` dan validasi faktual dari `CV Andi Lutfi.pdf`.

---

## 1. Struktur Folder Project

```text
andi-lutfi-portfolio/
├── index.html                           # Halaman utama website (Semantic HTML5)
├── css/
│   └── style.css                        # Stylesheet modular (Design Tokens Light/Dark, Animasi SVG & Timeline)
├── js/
│   └── main.js                          # Logika interaktif (Case Study Modal, Simulasi, Lightbox, Scroll-Spy)
├── assets/
│   ├── docs/
│   │   └── CV-Andi-Lutfi.pdf            # File CV PDF asli yang terhubung ke tombol Download My CV
│   ├── icons/
│   │   └── favicon.svg                  # Ikon vektor inisial AL
│   └── images/
│       ├── profile-andi-lutfi.jpg       # Foto profil asli Andi Lutfi (Hero Section)
│       └── dip-coater-machine.jpg       # Foto dokumentasi asli Mesin Dip-Coater Otomatis di Lab UPI
└── README.md                            # Dokumentasi arsitektur, penggantian aset, & panduan deployment
```

---

## 2. Dokumentasi Lokasi Gambar yang Sudah Terpasang & Slot yang Dapat Diganti

1. **Gambar Asli yang Sudah Terintegrasi:**
   - `assets/images/profile-andi-lutfi.jpg` — Digunakan pada **Section 2 (Hero / Landing Page)**.
   - `assets/images/dip-coater-machine.jpg` — Digunakan pada **Section 4 (Featured Project B — Automated Dip-Coating Machine)** serta **Case Study Lightbox Gallery**.
   - `assets/docs/CV-Andi-Lutfi.pdf` — Terhubung langsung pada tombol **Download My CV** di Navbar, Hero, Modal CV, dan Footer.

2. **Slot Dokumentasi Tambahan (Siap Diganti pada `js/main.js` di dalam `PROJECTS_DATA[].caseStudy.gallerySlots`):**
   - **Proyek A (Smart Farming Without Internet):**
     - `assets/images/smart-farming-sensor.jpg` (Foto Perangkat Sensor Tanah RS-485)
     - `assets/images/smart-farming-field.jpg` (Foto Instalasi pada Lahan Kopi)
     - `assets/images/smart-farming-pcb.jpg` (Foto Rangkaian Elektronik ESP32 & RS-485)
     - `assets/images/smart-farming-gateway.jpg` (Foto Gateway LoRa 10 km)
     - `assets/images/smart-farming-dashboard.jpg` (Screenshot Dashboard Node-RED / InfluxDB)
   - **Proyek B (Automated Dip-Coating Machine):**
     - `assets/images/dip-coater-linear.jpg` (Foto Mekanisme Linear Motion & Leadscrew)
     - `assets/images/dip-coater-electronics.jpg` (Foto Sistem Elektronik ESP32-S3 & TMC2209)
     - `assets/images/dip-coater-touchscreen.jpg` (Foto Antarmuka Layar Sentuh Kapasitif)
     - `assets/images/dip-coater-cad.jpg` (Screenshot Desain CAD Parametrik FreeCAD)
   - *Cara mengganti:* Simpan foto dokumentasi baru ke dalam folder `assets/images/` sesuai nama file di atas, lalu ubah properti `type: 'placeholder'` menjadi `type: 'real-image'` pada `js/main.js`.

---

## 3. Cara Menjalankan Website Secara Lokal

Karena website ini menggunakan HTML5, CSS3, dan JavaScript modern tanpa ketergantungan backend:
1. **Cara Langsung:** Klik dua kali file `index.html` untuk membukanya di browser modern (Chrome, Edge, Firefox, Safari).
2. **Menggunakan Local Server (Direkomendasikan):**
   - Melalui Python:
     ```bash
     cd andi-lutfi-portfolio
     python3 -m http.server 8080
     ```
     Lalu buka `http://localhost:8080` di browser.
   - Melalui VS Code: Gunakan ekstensi **Live Server** dan klik *Go Live* pada `index.html`.

---

## 4. Panduan Deployment (GitHub Pages, Netlify, Vercel)

- **GitHub Pages:**
  1. Buat repository baru di GitHub dan unggah seluruh isi folder `andi-lutfi-portfolio/`.
  2. Buka **Settings → Pages**, pilih branch `main` (root `/`), lalu klik **Save**.
- **Netlify:**
  1. Buka [app.netlify.com/drop](https://app.netlify.com/drop).
  2. Tarik dan lepaskan (*drag and drop*) folder `andi-lutfi-portfolio/` langsung ke halaman tersebut.
- **Vercel:**
  1. Jalankan `npx vercel` di dalam direktori `andi-lutfi-portfolio/` atau impor repository GitHub ke dashboard Vercel dengan preset *Other (Static Site)*.
