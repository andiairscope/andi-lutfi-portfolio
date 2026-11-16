// Embedded Base64 PDF Placeholder (Replaced with real CV Andi Lutfi.pdf base64 during build step)
    const CV_PDF_DATA_URI = "assets/docs/CV-Andi-Lutfi.pdf";

    // =========================================================================
    // 1. GROUNDED DATA REPOSITORY & 12-SECTION CASE STUDIES (CV + ORIGINAL HTML)
    // =========================================================================
    const PROJECTS_DATA = [
      {
        id: 'smart-farming',
        category: 'iot',
        badge: 'IoT Engineering · Embedded Systems',
        title: 'Smart Farming Without Internet (Multi-Node LoRa 10 km)',
        role: 'IoT & Hardware Engineering Researcher',
        org: 'Universitas Pendidikan Indonesia',
        location: 'Bandung, Jawa Barat',
        period: 'Juni 2025 – November 2025',
        simulatorTab: 'smart-farming',
        highlightMetric: '10 km Transmisi LoRa Tanpa Internet • Diliput Tempo.co',
        summaryBullets: [
          'Memimpin rekayasa arsitektur pemantauan tanah multi-node, mengintegrasikan ESP32, komunikasi RS-485, dan modul LoRa untuk operasional jarak jauh (10 km) tanpa ketergantungan internet.',
          'Membangun IoT backend (MQTT, Node-RED, InfluxDB) dan mengimplementasikan algoritma logika fuzzy serta fungsi trapezoid berbobot untuk menghasilkan skor lahan secara real-time.',
          'Dampak: Sistem berhasil dihilirisasi dan terbukti secara langsung meningkatkan kualitas panen kopi petani. Tervalidasi melalui liputan media nasional Tempo.co.'
        ],
        architectureNodes: [
          { step: '01', name: 'Multi-Node Sensor Tanah', detail: 'Akuisisi parameter kondisi tanah multi-lahan melalui komunikasi industri RS-485 dan mikrokontroler ESP32.' },
          { step: '02', name: 'Transmisi Jarak Jauh LoRa (10 km)', detail: 'Komunikasi radio jarak jauh hingga 10 km tanpa ketergantungan jaringan internet seluler.' },
          { step: '03', name: 'IoT Backend (MQTT, Node-RED, InfluxDB)', detail: 'Penerimaan paket telemetri melalui broker MQTT, pemrosesan alur di Node-RED, dan penyimpanan di InfluxDB.' },
          { step: '04', name: 'Weighted Trapezoidal Fuzzy Logic', detail: 'Inferensi logika fuzzy dengan fungsi keanggotaan trapezoid berbobot untuk menghasilkan skor lahan real-time.' }
        ],
        techStack: ['ESP32', 'Sensor Tanah', 'RS-485', 'LoRa (10 km)', 'MQTT', 'Node-RED', 'InfluxDB', 'Weighted Trapezoidal Fuzzy Logic', 'C++ / Python', 'JSON'],
        patentsLinked: [
          'Sistem Multimeter Portabel Pengukur Kondisi Tanah Multi-Lahan Berbasis IoT (Bersama Dr. Selly Ferani, S.Pd., M.Si)',
          'Sistem Multimeter Portabel Pengukur Kondisi Tanah Jarak Jauh Tanpa Jaringan Internet (Bersama Dr. Selly Ferani, S.Pd., M.Si)'
        ],
        caseStudy: {
          overview: 'Pengembangan sistem pemantauan kondisi tanah multi-node menggunakan ESP32, komunikasi RS-485, dan LoRa untuk operasional jarak jauh (10 km) tanpa ketergantungan terhadap internet, dilengkapi backend MQTT, Node-RED, InfluxDB, dan algoritma logika fuzzy.',
          backgroundProblem: 'Lahan perkebunan kopi sering kali berada di wilayah topografi yang tidak terjangkau jaringan seluler/internet stabil, sementara pemantauan kondisi tanah secara manual di banyak titik lahan membutuhkan waktu dan tenaga besar.',
          objectives: 'Membangun arsitektur sensor tanah multi-node yang mampu mentransmisikan data hingga jarak 10 km tanpa internet serta mengolah parameter tanah menjadi skor kondisi lahan secara real-time.',
          myRole: 'Sebagai IoT & Hardware Engineering Researcher (Juni 2025 – November 2025), saya memimpin rekayasa arsitektur pemantauan tanah multi-node, mengintegrasikan komunikasi RS-485 & LoRa, membangun IoT backend (MQTT, Node-RED, InfluxDB), serta mengimplementasikan algoritma logika fuzzy dan fungsi trapezoid berbobot. Proyek ini dikembangkan dalam kerangka riset dan hilirisasi bersama tim peneliti di Universitas Pendidikan Indonesia.',
          hardwareComponents: ['Mikrokontroler ESP32', 'Sensor Instrumentasi Tanah', 'Antarmuka Komunikasi Industri RS-485', 'Modul Transceiver Radio LoRa (Jangkauan 10 km)'],
          softwareTech: ['Firmware C++ (ESP32)', 'Protokol MQTT', 'Node-RED Flow Orchestration', 'InfluxDB Time-Series Database', 'Algoritma Logika Fuzzy & Fungsi Trapezoid Berbobot', 'Pengolahan JSON'],
          devProcess: 'Dimulai dari perancangan arsitektur node sensor berbasis RS-485, pengujian tautan komunikasi radio LoRa jarak jauh hingga 10 km, pembangunan pipeline data MQTT–Node-RED–InfluxDB, hingga perumusan fungsi keanggotaan trapezoid berbobot.',
          testing: 'Pengujian dilakukan pada skenario operasional multi-lahan jarak jauh tanpa koneksi internet, diikuti implementasi langsung bersama petani kopi.',
          resultsImpact: 'Sistem berhasil dihilirisasi dan dilaporkan meningkatkan kualitas panen kopi petani secara langsung, serta memperoleh validasi liputan dari media nasional Tempo.co.',
          futureDev: '[Rencana Pengembangan Lanjutan]: Integrasi manajemen daya surya otonom dan perluasan cakupan node sensor pada komoditas pertanian lainnya.',
          gallerySlots: [
            { title: 'Diagram Arsitektur Sistem Multi-Node LoRa', assetPath: 'assets/images/smart-farming-architecture.svg', type: 'svg-lora', status: 'Tersedia (Skematik Interaktif)' },
            { title: 'Foto Perangkat Sensor Tanah RS-485', assetPath: 'assets/images/smart-farming-sensor.jpg', type: 'placeholder', status: 'Slot Dokumentasi Siap Ganti' },
            { title: 'Foto Instalasi pada Lahan Kopi', assetPath: 'assets/images/smart-farming-field.jpg', type: 'placeholder', status: 'Slot Dokumentasi Siap Ganti' },
            { title: 'Foto Rangkaian Elektronik ESP32 & RS-485', assetPath: 'assets/images/smart-farming-pcb.jpg', type: 'placeholder', status: 'Slot Dokumentasi Siap Ganti' },
            { title: 'Foto Gateway LoRa 10 km', assetPath: 'assets/images/smart-farming-gateway.jpg', type: 'placeholder', status: 'Slot Dokumentasi Siap Ganti' },
            { title: 'Screenshot Dashboard Node-RED / InfluxDB', assetPath: 'assets/images/smart-farming-dashboard.jpg', type: 'placeholder', status: 'Slot Dokumentasi Siap Ganti' }
          ]
        }
      },
      {
        id: 'dip-coater',
        category: 'automation',
        badge: 'Hardware R&D · Precision Instrumentation',
        title: 'Automated Dip-Coating Machine (Terintegrasi IoT & Ruang Termal)',
        role: 'R&D Hardware Developer',
        org: 'Universitas Pendidikan Indonesia',
        location: 'Bandung, Jawa Barat',
        period: 'Mei 2026 – September 2026',
        simulatorTab: 'dip-coater',
        highlightMetric: 'Kontrol Step-Pulse Presisi • Riset Sel Surya Film Tipis TiO₂',
        summaryBullets: [
          'Dipercaya oleh Guru Besar universitas untuk merekayasa mesin dip-coating otomatis terintegrasi IoT guna menunjang kebutuhan riset material tingkat lanjut.',
          'Merancang mekanika presisi dan kontrol aktuator berbasis perhitungan step pulse dengan safety offset sensor optik, serta ruang isolasi termal berantarmuka layar sentuh kapasitif.',
          'Digunakan secara eksklusif untuk memproduksi dan menguji film tipis TiO₂ pada penelitian aplikasi sel surya.'
        ],
        architectureNodes: [
          { step: '01', name: 'Antarmuka Layar Sentuh Kapasitif & IoT', detail: 'Konsol kendali pengguna pada bagian depan mesin untuk mengatur parameter pencelupan dan pemanasan.' },
          { step: '02', name: 'Mekanika Presisi & Aktuator Step Pulse', detail: 'Sistem gerak vertikal menggunakan motor stepper dan driver TMC2209 berbasis perhitungan step pulse.' },
          { step: '03', name: 'Safety Offset Sensor Optik', detail: 'Referensi titik nol dan pengaman batas jarak otomatis menggunakan sensor optik.' },
          { step: '04', name: 'Ruang Isolasi Termal Tertutup', detail: 'Enklosur akrilik dan rangka aluminium tertutup guna menjaga kestabilan termal selama deposisi film tipis.' }
        ],
        techStack: ['ESP32-S3', 'Stepper Motor', 'Driver TMC2209', 'Optical Sensor (Safety Offset)', 'Capacitive Touchscreen', 'FreeCAD (3D, A2plus, TechDraw)', '3D Printing', 'IoT'],
        patentsLinked: [
          'Sistem Pelapis Celup Otomatis Dengan Ruang Tertutup Dan Pemanas Terintegrasi Berbasis IoT (Bersama Prof. Dr. Eka Cahya Prima & Prof. Dr. Endi Suhendi)'
        ],
        caseStudy: {
          overview: 'Pengembangan mesin dip-coating otomatis terintegrasi IoT dengan ruang isolasi termal tertutup, kontrol aktuator berbasis perhitungan step pulse, dan safety offset sensor optik untuk mendukung penelitian material dan pembuatan film tipis TiO₂.',
          backgroundProblem: 'Proses deposisi film tipis semikonduktor (seperti TiO₂ untuk sel surya) membutuhkan kecepatan penarikan substrat yang sangat stabil dan lingkungan termal yang terkendali agar lapisan seragam.',
          objectives: 'Merekayasa instrumen pelapis celup otomatis mandiri yang presisi, aman dengan pembatas sensor optik, memiliki ruang isolasi termal tertutup, dan mudah dioperasikan melalui layar sentuh kapasitif.',
          myRole: 'Sebagai R&D Hardware Developer (Mei 2026 – September 2026) yang dipercaya oleh Guru Besar UPI (Prof. Dr. Eka Cahya Prima & Prof. Dr. Endi Suhendi), saya merancang mekanika presisi di FreeCAD, mencetak komponen 3D, merakit ruang isolasi termal, serta memprogram kontrol aktuator step-pulse dan safety offset sensor optik.',
          hardwareComponents: ['Mikrokontroler ESP32-S3', 'Motor Stepper & Driver Aktuator Mekanik TMC2209', 'Sensor Optik (Safety Offset)', 'Layar Sentuh Kapasitif', 'Ruang Isolasi Termal Akrilik & Pemanas Terintegrasi'],
          softwareTech: ['C++ Embedded Control', 'Kalkulasi Frekuensi Step Pulse', 'Integrasi Telemetri IoT', 'FreeCAD (Pemodelan 3D Parametrik, Perakitan A2plus, TechDraw)'],
          devProcess: 'Meliputi pemodelan 3D parametrik dan perakitan A2plus di FreeCAD, fabrikasi komponen dudukan dengan 3D printing, perakitan rangka enklosur isolasi termal, integrasi elektronika driver TMC2209 & sensor optik, serta kalibrasi gerak linear.',
          testing: 'Diujicobakan dan digunakan secara eksklusif untuk memproduksi dan mengkarakterisasi film tipis TiO₂ pada riset aplikasi sel surya.',
          resultsImpact: 'Menghasilkan instrumen Dip-Coater Otomatis fungsional yang menopang riset akademik sel surya TiO₂ sekaligus terdaftar dalam invensi paten bersama Guru Besar UPI.',
          futureDev: '[Rencana Pengembangan Lanjutan]: Penambahan profil multi-siklus otomatis dan pencatatan kurva suhu-kelembaban ruang isolasi ke cloud secara kontinyu.',
          gallerySlots: [
            { title: 'Foto Keseluruhan Mesin Dip-Coater Otomatis (Dokumentasi Asli)', assetPath: 'assets/images/dip-coater-machine.jpg', type: 'real-image', status: 'Foto Asli Terpasang' },
            { title: 'Diagram Mekanik & Gerak Aktuator Dip-Coater', assetPath: 'assets/images/dip-coater-schematic.svg', type: 'svg-dip', status: 'Tersedia (Skematik Interaktif)' },
            { title: 'Foto Mekanisme Linear Motion & Leadscrew', assetPath: 'assets/images/dip-coater-linear.jpg', type: 'real-image', status: 'Foto Asli Terpasang' },
            { title: 'Foto Sistem Elektronik (ESP32-S3 & TMC2209)', assetPath: 'assets/images/dip-coater-electronics.jpg', type: 'placeholder', status: 'Slot Dokumentasi Siap Ganti' },
            { title: 'Foto Antarmuka Layar Sentuh Kapasitif', assetPath: 'assets/images/dip-coater-touchscreen.jpg', type: 'real-image', status: 'Foto Asli Terpasang' },
            { title: 'Screenshot Desain CAD Parametrik (FreeCAD)', assetPath: 'assets/images/dip-coater-cad.jpg', type: 'real-image', status: 'Foto Asli Terpasang' }
          ]
        }
      },
      {
        id: 'pindad-qa',
        category: 'qa',
        badge: 'Quality Assurance · Precision Calibration',
        title: 'Quality Assurance & Kalibrasi Instrumen Presisi Industri Pertahanan',
        role: 'Quality Assurance & Calibration Intern',
        org: 'PT Pindad (Persero)',
        location: 'Bandung, Jawa Barat',
        period: 'Maret 2026 – Mei 2026',
        simulatorTab: 'pindad-qa',
        highlightMetric: 'Kepatuhan Standar Toleransi Ketat Industri Pertahanan',
        summaryBullets: [
          'Melaksanakan prosedur quality assurance (QA) dan kalibrasi instrumen presisi di laboratorium pengujian material PT Pindad (Persero).',
          'Melakukan inspeksi kualitas dan pemantauan parameter secara langsung di fasilitas lini produksi utama (on-site).',
          'Memastikan seluruh proses manufaktur mematuhi standar toleransi ketat industri pertahanan melalui analisis data statistik dan pengujian material.'
        ],
        architectureNodes: [
          { step: '01', name: 'Kalibrasi Instrumen Presisi', detail: 'Pelaksanaan prosedur kalibrasi alat ukur di laboratorium pengujian material.' },
          { step: '02', name: 'Pengujian Material & Analisis Statistik', detail: 'Evaluasi akurasi dan pengolahan data statistik hasil pengujian.' },
          { step: '03', name: 'Inspeksi Lini Produksi Utama (On-Site)', detail: 'Pemantauan parameter kualitas secara langsung di lantai produksi.' },
          { step: '04', name: 'Kepatuhan Standar Toleransi Pertahanan', detail: 'Verifikasi bahwa proses manufaktur mematuhi batas toleransi ketat yang ditetapkan.' }
        ],
        techStack: ['Precision Instrument Calibration', 'On-Site Inspection', 'Statistical Data Analysis', 'Material Testing', 'Quality Assurance (QA)'],
        patentsLinked: [],
        caseStudy: {
          overview: 'Pelaksanaan prosedur penjaminan mutu (Quality Assurance), kalibrasi instrumen presisi di laboratorium pengujian material, serta inspeksi kualitas langsung di fasilitas lini produksi utama PT Pindad (Persero).',
          backgroundProblem: 'Manufaktur industri pertahanan mensyaratkan akurasi instrumen ukur dan kepatuhan toleransi dimensi/material yang sangat ketat di setiap tahapan produksi.',
          objectives: 'Memastikan seluruh instrumen pengujian material terkalibrasi secara presisi dan proses manufaktur di lini produksi utama memenuhi standar toleransi yang ditetapkan.',
          myRole: 'Sebagai Quality Assurance & Calibration Intern (Maret 2026 – Mei 2026), saya melaksanakan prosedur QA dan kalibrasi instrumen presisi di laboratorium pengujian material serta melakukan inspeksi kualitas on-site di lini produksi utama bersama tim QA PT Pindad (Persero).',
          hardwareComponents: ['Instrumen Ukur Presisi Laboratorium', 'Peralatan Pengujian Material', 'Instrumen Inspeksi Lini Produksi'],
          softwareTech: ['Analisis Data Statistik Kalibrasi', 'Dokumentasi Standar Mutu & Toleransi Manufaktur'],
          devProcess: 'Meliputi persiapan standar acuan kalibrasi, pengambilan data berulang pada instrumen uji, evaluasi deviasi statistik, serta pemeriksaan parameter langsung di fasilitas produksi.',
          testing: 'Verifikasi kepatuhan parameter terhadap batas toleransi ketat industri pertahanan.',
          resultsImpact: 'Mendukung keandalan hasil pengukuran laboratorium pengujian material dan konsistensi mutu pada lini produksi utama.',
          futureDev: '[Rencana Pengembangan Lanjutan]: Integrasi pencatatan log kalibrasi digital untuk mempercepat pelacakan riwayat instrumen.',
          gallerySlots: [
            { title: 'Skematik Kalibrasi & Evaluasi Toleransi Presisi', assetPath: 'assets/images/pindad-calibration.svg', type: 'svg-qa', status: 'Tersedia (Skematik Interaktif)' },
            { title: 'Slot Dokumentasi Kegiatan Magang PT Pindad', assetPath: 'assets/images/pindad-activity.jpg', type: 'placeholder', status: 'Slot Dokumentasi Siap Ganti' }
          ]
        }
      }
    ];

    const PATENTS_DATA = [
      {
        id: 'pat-1',
        type: 'soil',
        number: 'INVENSI / PATEN #01',
        title: 'Sistem Multimeter Portabel Pengukur Kondisi Tanah Multi-Lahan Berbasis IoT',
        coInventors: 'Bersama Dr. Selly Ferani, S.Pd., M.Si.',
        institution: 'Universitas Pendidikan Indonesia',
        relatedProject: 'Proyek Smart Farming (Jun – Nov 2025)',
        highlights: 'Inovasi instrumen pengukur kondisi tanah portabel untuk pemantauan multi-lahan yang terintegrasi dengan sistem berbasis Internet of Things (IoT).',
        meta: {
          appNo: '[Nomor permohonan dapat diisi sesuai dokumen HKI]',
          year: '2025 / 2026',
          status: 'Tercantum sebagai Inventor dalam CV (Status hukum merujuk dokumen resmi)',
          certSlot: 'assets/docs/sertifikat-paten-1.pdf'
        }
      },
      {
        id: 'pat-2',
        type: 'soil',
        number: 'INVENSI / PATEN #02',
        title: 'Sistem Multimeter Portabel Pengukur Kondisi Tanah Jarak Jauh Tanpa Jaringan Internet',
        coInventors: 'Bersama Dr. Selly Ferani, S.Pd., M.Si.',
        institution: 'Universitas Pendidikan Indonesia',
        relatedProject: 'Proyek Smart Farming (Jun – Nov 2025)',
        highlights: 'Inovasi sistem pengukuran kondisi tanah portabel dengan kemampuan transmisi jarak jauh tanpa ketergantungan pada jaringan internet.',
        meta: {
          appNo: '[Nomor permohonan dapat diisi sesuai dokumen HKI]',
          year: '2025 / 2026',
          status: 'Tercantum sebagai Inventor dalam CV (Status hukum merujuk dokumen resmi)',
          certSlot: 'assets/docs/sertifikat-paten-2.pdf'
        }
      },
      {
        id: 'pat-3',
        type: 'dipcoater',
        number: 'INVENSI / PATEN #03',
        title: 'Sistem Pelapis Celup Otomatis Dengan Ruang Tertutup Dan Pemanas Terintegrasi Berbasis IoT',
        coInventors: 'Bersama Prof. Dr. Eka Cahya Prima & Prof. Dr. Endi Suhendi',
        institution: 'Universitas Pendidikan Indonesia',
        relatedProject: 'Proyek Mesin Dip-Coater Otomatis (Mei – Sep 2026)',
        highlights: 'Inovasi mesin pelapis celup (dip-coater) otomatis yang dilengkapi ruang isolasi tertutup dan pemanas terintegrasi berbasis IoT untuk deposisi film tipis.',
        meta: {
          appNo: '[Nomor permohonan dapat diisi sesuai dokumen HKI]',
          year: '2026',
          status: 'Tercantum sebagai Inventor dalam CV (Status hukum merujuk dokumen resmi)',
          certSlot: 'assets/docs/sertifikat-paten-3.pdf'
        }
      }
    ];

    const SKILLS_DATA = [
      {
        id: 'embedded',
        code: 'A',
        title: 'EMBEDDED SYSTEMS & IoT',
        subtitle: 'Sistem Tertanam, Akuisisi Sensor & Komunikasi Jarak Jauh',
        items: [
          { name: 'ESP32 & ESP32-S3', usage: 'Unit pemrosesan utama pada arsitektur Smart Farming Multi-Node dan sistem kendali Mesin Dip-Coater Otomatis.' },
          { name: 'LoRa Communication', usage: 'Transmisi telemetri kondisi tanah jarak jauh hingga 10 km tanpa ketergantungan internet.' },
          { name: 'RS-485 Industrial Protocol', usage: 'Komunikasi akuisisi data sensor tanah multi-node yang andal terhadap gangguan sinyal.' },
          { name: 'MQTT Protocol', usage: 'Pengiriman paket data telemetri menuju IoT backend secara real-time.' },
          { name: 'TMC2209 Stepper Driver', usage: 'Pengendalian aktuator mekanik berbasis perhitungan step pulse presisi pada mesin Dip-Coater.' },
          { name: 'Sensor Instrumentation', usage: 'Integrasi sensor kondisi tanah serta sensor optik sebagai safety offset titik nol.' }
        ]
      },
      {
        id: 'software',
        code: 'B',
        title: 'SOFTWARE & DATA ENGINEERING',
        subtitle: 'Pemrograman Sistem, Arsitektur Backend IoT & Algoritma Terapan',
        items: [
          { name: 'C++', usage: 'Pengembangan firmware mikrokontroler untuk kendali aktuator step-pulse, pembacaan sensor, dan komunikasi serial.' },
          { name: 'Python', usage: 'Pengolahan data ilmiah, analisis statistik, dan pemodelan algoritma.' },
          { name: 'JavaScript & JSON', usage: 'Pengembangan antarmuka web interaktif dan pertukaran struktur data telemetri IoT.' },
          { name: 'Node-RED & InfluxDB', usage: 'Arsitektur backend IoT untuk orkestrasi aliran data dan penyimpanan basis data deret waktu (time-series).' },
          { name: 'Applied Algorithms (Fuzzy Logic)', usage: 'Implementasi algoritma logika fuzzy dan fungsi trapezoid berbobot untuk skor kualitas lahan real-time.' }
        ]
      },
      {
        id: 'mechanical',
        code: 'C',
        title: 'MECHANICAL DESIGN & MANUFACTURING',
        subtitle: 'Pemodelan 3D Parametrik, Perakitan Mekanika & Fabrikasi',
        items: [
          { name: 'FreeCAD & Parametric 3D Modeling', usage: 'Perancangan komponen mekanika presisi dan enklosur ruang isolasi termal mesin Dip-Coater.' },
          { name: 'A2plus Assembly & TechDraw', usage: 'Perakitan virtual multi-komponen mekanik dan penyusunan gambar kerja teknis.' },
          { name: '3D Printing', usage: 'Manufaktur aditif untuk konsol layar sentuh kapasitif, pemegang substrat, dan dudukan sensor.' }
        ]
      },
      {
        id: 'qa',
        code: 'D',
        title: 'QUALITY ASSURANCE & INSTRUMENTATION',
        subtitle: 'Kalibrasi Presisi, Inspeksi Manufaktur & Pengujian Material',
        items: [
          { name: 'Precision Instrument Calibration', usage: 'Pelaksanaan prosedur kalibrasi instrumen ukur presisi di laboratorium pengujian material PT Pindad (Persero).' },
          { name: 'On-Site Inspection', usage: 'Inspeksi kualitas dan pemantauan parameter secara langsung di fasilitas lini produksi utama.' },
          { name: 'Statistical Data Analysis', usage: 'Evaluasi kepatuhan proses manufaktur terhadap standar toleransi ketat.' },
          { name: 'Material Testing', usage: 'Pengujian material di laboratorium industri dan karakterisasi film tipis TiO₂ untuk sel surya.' }
        ]
      }
    ];

    // =========================================================================
    // 2. APPLICATION STATE
    // =========================================================================
    const appState = {
      activeHeroTab: 0,
      projectFilter: 'all',
      projectSearch: '',
      cardTabs: {
        'smart-farming': 'summary',
        'dip-coater': 'summary',
        'pindad-qa': 'summary'
      },
      patentFilter: 'all',
      skillCategory: 'all',
      activeCaseStudyIndex: 0,
      dipCycleInterval: null
    };

    const HERO_TELEMETRY_VIEWS = [
      {
        id: 'smart-farming',
        statusText: '● LoRa 10 km Off-Grid · Tempo.co',
        title: 'Smart Farming Multi-Node (ESP32 + RS-485 + LoRa)',
        subtitle: 'Juni 2025 – November 2025 · UPI Bandung',
        summary: 'Arsitektur pemantauan tanah jarak jauh 10 km tanpa internet dengan backend MQTT, Node-RED, InfluxDB, dan logika fuzzy.'
      },
      {
        id: 'dip-coater',
        statusText: '● Step-Pulse TMC2209 & Optical Safety Offset',
        title: 'Automated Dip-Coating Machine (R&D Hardware)',
        subtitle: 'Mei 2026 – September 2026 · UPI Bandung',
        summary: 'Mesin pelapis celup otomatis berenklosur isolasi termal dan layar sentuh kapasitif untuk riset sel surya film tipis TiO₂.'
      },
      {
        id: 'pindad-qa',
        statusText: '● Kalibrasi Lab Material & Inspeksi On-Site',
        title: 'Quality Assurance & Calibration Intern',
        subtitle: 'Maret 2026 – Mei 2026 · PT Pindad (Persero)',
        summary: 'Kalibrasi instrumen presisi di laboratorium pengujian material serta inspeksi kualitas di lini produksi utama.'
      }
    ];

    function switchHeroTelemetry(index) {
      appState.activeHeroTab = index;
      for (let i = 0; i < 3; i++) {
        const btn = document.getElementById('hero-tab-' + i);
        if (!btn) continue;
        if (i === index) {
          btn.className = 'hero-tab-btn py-1.5 px-2 rounded-lg font-semibold bg-blue-600 text-white transition-all';
        } else {
          btn.className = 'hero-tab-btn py-1.5 px-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all';
        }
      }
      const view = HERO_TELEMETRY_VIEWS[index];
      const container = document.getElementById('hero-console-body');
      const statusEl = document.getElementById('hero-console-status');
      if (statusEl) statusEl.textContent = view.statusText;
      if (!container) return;

      container.innerHTML = `
        <div class="p-3.5 rounded-xl border" style="background-color: var(--bg); border-color: var(--ln);">
          <div class="text-[11px] font-mono text-blue-600 dark:text-blue-400">${view.subtitle}</div>
          <div class="font-display font-bold text-sm mt-0.5">${view.title}</div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">${view.summary}</p>
        </div>
      `;
    }

    function openHeroActiveBlueprint() {
      const view = HERO_TELEMETRY_VIEWS[appState.activeHeroTab];
      if (view) openProjectBlueprint(view.id);
    }

    // =========================================================================
    // 3. PROJECT CARDS & CASE STUDY MODAL (12 MANDATORY SECTIONS)
    // =========================================================================
    function filterProjects(category) {
      appState.projectFilter = category;
      ['all', 'iot', 'automation', 'qa'].forEach(c => {
        const btn = document.getElementById('filter-' + c);
        if (!btn) return;
        if (c === category) {
          btn.className = 'proj-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-blue-600 text-white transition-all';
        } else {
          btn.className = 'proj-filter-btn px-4 py-2 rounded-full text-xs font-medium glass-card';
        }
      });
      renderProjects();
    }

    function handleProjectSearch(query) {
      appState.projectSearch = (query || '').trim().toLowerCase();
      renderProjects();
    }

    function switchProjectCardTab(projectId, tabName) {
      appState.cardTabs[projectId] = tabName;
      renderProjects();
    }

    function renderProjects() {
      const container = document.getElementById('projects-container');
      if (!container) return;

      const filtered = PROJECTS_DATA.filter(p => {
        const matchesCat = appState.projectFilter === 'all' || p.category === appState.projectFilter;
        const haystack = (p.title + ' ' + p.role + ' ' + p.org + ' ' + p.summaryBullets.join(' ') + ' ' + p.techStack.join(' ')).toLowerCase();
        const matchesSearch = !appState.projectSearch || haystack.includes(appState.projectSearch);
        return matchesCat && matchesSearch;
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="col-span-full glass-card rounded-3xl p-10 text-center space-y-3">
            <div class="font-display text-lg font-bold">Tidak ada proyek yang sesuai dengan filter pencarian</div>
            <button type="button" onclick="resetProjectFilters()" class="px-5 py-2 rounded-full text-xs font-semibold bg-blue-600 text-white">Tampilkan Semua Proyek CV</button>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(proj => {
        const activeTab = appState.cardTabs[proj.id] || 'summary';
        let tabBodyHtml = '';

        if (activeTab === 'summary') {
          tabBodyHtml = `
            <ul class="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              ${proj.summaryBullets.map(b => `
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>${b}</span>
                </li>
              `).join('')}
            </ul>
          `;
        } else if (activeTab === 'arch') {
          tabBodyHtml = `
            <div class="space-y-2">
              ${proj.architectureNodes.map(node => `
                <div class="p-2.5 rounded-xl border" style="background-color: var(--bg); border-color: var(--ln);">
                  <div class="text-xs font-semibold">
                    <span class="font-mono text-blue-600 dark:text-blue-400">${node.step}.</span> ${node.name}
                  </div>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${node.detail}</p>
                </div>
              `).join('')}
            </div>
          `;
        } else {
          tabBodyHtml = `
            <div class="space-y-3">
              <div class="flex flex-wrap gap-1.5">
                ${proj.techStack.map(t => `<span class="px-2.5 py-1 rounded-full text-[11px] font-medium border" style="background-color: var(--bg); border-color: var(--ln);">${t}</span>`).join('')}
              </div>
              ${proj.patentsLinked.length > 0 ? `
                <div class="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 text-[11px] text-slate-600 dark:text-slate-300">
                  <strong class="text-blue-600 dark:text-blue-400">Terkait ${proj.patentsLinked.length} Invensi/Paten CV:</strong><br/>
                  • ${proj.patentsLinked.join('<br/>• ')}
                </div>
              ` : `
                <div class="p-3 rounded-xl border text-[11px] text-slate-600 dark:text-slate-300" style="background-color: var(--bg); border-color: var(--ln);">
                  <strong>Lingkup Industri:</strong> Laboratorium pengujian material &amp; lini produksi utama PT Pindad (Persero).
                </div>
              `}
            </div>
          `;
        }

        return `
          <article class="glass-card rounded-3xl p-6 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between gap-2">
                <span class="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">${proj.badge}</span>
                <span class="text-[11px] font-mono text-slate-400">${proj.period}</span>
              </div>

              <div>
                <h3 class="font-display text-lg font-bold leading-snug">${proj.title}</h3>
                <p class="text-xs text-slate-500 mt-1">${proj.role} · ${proj.org}</p>
              </div>

              <div class="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs">
                <button type="button" onclick="switchProjectCardTab('${proj.id}', 'summary')" class="py-1.5 rounded-lg transition-all ${activeTab === 'summary' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-500 hover:text-blue-600'}">Ringkasan</button>
                <button type="button" onclick="switchProjectCardTab('${proj.id}', 'arch')" class="py-1.5 rounded-lg transition-all ${activeTab === 'arch' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-500 hover:text-blue-600'}">Arsitektur</button>
                <button type="button" onclick="switchProjectCardTab('${proj.id}', 'stack')" class="py-1.5 rounded-lg transition-all ${activeTab === 'stack' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-500 hover:text-blue-600'}">Tech &amp; HKI</button>
              </div>

              <div class="min-h-[170px]">
                ${tabBodyHtml}
              </div>
            </div>

            <div class="pt-4 mt-5 border-t flex items-center justify-between gap-2" style="border-color: var(--ln);">
              <button type="button" onclick="openProjectBlueprint('${proj.id}')" class="btn-spectacular flex-1 py-2.5 px-3 rounded-full text-xs font-semibold bg-blue-600 text-white text-center">
                📐 Blueprint Detail
              </button>

            </div>
          </article>
        `;
      }).join('');
    }

    function resetProjectFilters() {
      const searchInput = document.getElementById('project-search-input');
      if (searchInput) searchInput.value = '';
      appState.projectSearch = '';
      filterProjects('all');
    }

    function openCaseStudyModal(projectId) {
      openProjectBlueprint(projectId);
    }

    function navigateCaseStudy(direction) {
      const nextIdx = (appState.activeCaseStudyIndex + direction + PROJECTS_DATA.length) % PROJECTS_DATA.length;
      openProjectBlueprint(PROJECTS_DATA[nextIdx].id);
    }

    function openProjectBlueprint(projectId) {
      const idx = PROJECTS_DATA.findIndex(p => p.id === projectId);
      if (idx === -1) return;
      appState.activeCaseStudyIndex = idx;
      const proj = PROJECTS_DATA[idx];
      const cs = proj.caseStudy;

      document.getElementById('bp-modal-period').textContent = `${proj.org} • ${proj.period}`;
      document.getElementById('bp-modal-title').textContent = proj.title;

      const galleryHtml = cs.gallerySlots.map(slot => {
        if (slot.type === 'real-image') {
          return `
            <div class="p-3 rounded-2xl border space-y-2 cursor-pointer group" style="background-color: var(--bg); border-color: var(--ln);" onclick="openLightbox('${slot.assetPath}', '${slot.title}')">
              <div class="aspect-video rounded-xl overflow-hidden bg-slate-900">
                <img src="${slot.assetPath}" alt="${slot.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div class="flex items-center justify-between text-[11px]">
                <span class="font-semibold">${slot.title}</span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">Asli (Klik Perbesar)</span>
              </div>
            </div>
          `;
        }
        return `
          <div class="p-4 rounded-2xl border border-dashed flex flex-col justify-between space-y-2" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="space-y-1">
              <span class="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400">${slot.status}</span>
              <div class="font-semibold text-xs">${slot.title}</div>
            </div>
            <div class="text-[11px] font-mono text-slate-400 break-all">Path: ${slot.assetPath}</div>
          </div>
        `;
      }).join('');

      const contentEl = document.getElementById('bp-modal-content');
      contentEl.innerHTML = `
        <!-- Top Meta Banner -->
        <div class="p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3" style="background-color: var(--bg); border-color: var(--ln);">
          <div>
            <div class="text-[11px] font-mono text-slate-400">PERAN &amp; AFILIASI</div>
            <div class="font-display font-bold text-sm sm:text-base text-blue-600 dark:text-blue-400">${proj.role} — ${proj.org} (${proj.location})</div>
          </div>

        </div>

        <!-- 12 Structured Case Study Sections -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl border space-y-1.5" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">01. PROJECT OVERVIEW</div>
            <p class="text-slate-600 dark:text-slate-300">${cs.overview}</p>
          </div>
          <div class="p-4 rounded-2xl border space-y-1.5" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">02. BACKGROUND &amp; PROBLEM</div>
            <p class="text-slate-600 dark:text-slate-300">${cs.backgroundProblem}</p>
          </div>
          <div class="p-4 rounded-2xl border space-y-1.5" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">03. PROJECT OBJECTIVES</div>
            <p class="text-slate-600 dark:text-slate-300">${cs.objectives}</p>
          </div>
          <div class="p-4 rounded-2xl border space-y-1.5" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">04. MY ROLE &amp; CONTRIBUTIONS</div>
            <p class="text-slate-600 dark:text-slate-300">${cs.myRole}</p>
          </div>
        </div>

        <!-- 05. System Architecture -->
        <div class="space-y-3">
          <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">05. SYSTEM ARCHITECTURE</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${proj.architectureNodes.map(n => `
              <div class="p-4 rounded-2xl border" style="background-color: var(--bg); border-color: var(--ln);">
                <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">STAGE ${n.step}</span>
                <div class="font-bold text-sm mt-1">${n.name}</div>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${n.detail}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 06 & 07. Hardware & Software -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl border space-y-2" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">06. HARDWARE COMPONENTS</div>
            <ul class="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
              ${cs.hardwareComponents.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
          <div class="p-4 rounded-2xl border space-y-2" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">07. SOFTWARE &amp; TECHNOLOGIES</div>
            <ul class="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
              ${cs.softwareTech.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- 08, 09, 10 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-2xl border space-y-1.5" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">08. DEVELOPMENT PROCESS</div>
            <p class="text-slate-600 dark:text-slate-300">${cs.devProcess}</p>
          </div>
          <div class="p-4 rounded-2xl border space-y-1.5" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">09. IMPLEMENTATION &amp; TESTING</div>
            <p class="text-slate-600 dark:text-slate-300">${cs.testing}</p>
          </div>
          <div class="p-4 rounded-2xl border space-y-1.5" style="background-color: var(--bg); border-color: var(--ln);">
            <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">10. RESULTS &amp; IMPACT</div>
            <p class="text-slate-600 dark:text-slate-300">${cs.resultsImpact}</p>
          </div>
        </div>

        <!-- 11. Project Gallery & Asset Slots -->
        <div class="space-y-3">
          <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">11. PROJECT GALLERY &amp; DOCUMENTATION SLOTS</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${galleryHtml}
          </div>
        </div>

        <!-- 12. Future Development -->
        <div class="p-4 rounded-2xl border space-y-1" style="background-color: var(--bg); border-color: var(--ln);">
          <div class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">12. FUTURE DEVELOPMENT</div>
          <p class="text-slate-600 dark:text-slate-300">${cs.futureDev}</p>
        </div>
      `;

      const modal = document.getElementById('blueprint-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeBlueprintModal() {
      const modal = document.getElementById('blueprint-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }


    // =========================================================================
    // 5. PATENTS & SKILLS RENDERERS
    // =========================================================================
    function filterPatents(filterType) {
      appState.patentFilter = filterType;
      ['all', 'soil', 'dipcoater'].forEach(f => {
        const btn = document.getElementById('pat-filter-' + f);
        if (!btn) return;
        if (f === filterType) {
          btn.className = 'pat-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-blue-600 text-white transition-all';
        } else {
          btn.className = 'pat-filter-btn px-4 py-2 rounded-full text-xs font-medium glass-card';
        }
      });
      renderPatents();
    }

    function renderPatents() {
      const container = document.getElementById('patents-container');
      if (!container) return;

      const list = PATENTS_DATA.filter(p => appState.patentFilter === 'all' || p.type === appState.patentFilter);
      container.innerHTML = list.map(pat => `
        <div class="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-2">
              <div class="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <span class="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">${pat.number}</span>
            </div>

            <h3 class="font-display text-lg font-bold leading-snug">
              “${pat.title}”
            </h3>

            <div class="p-3 rounded-2xl border text-xs font-medium" style="background-color: var(--bg); border-color: var(--ln);">
              👥 Inventor: Andi Lutfi (${pat.coInventors})
            </div>

            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              ${pat.highlights}
            </p>

            <!-- Transparent Legal Metadata Slots per Section 6 -->
            <div class="p-3.5 rounded-2xl border border-dashed text-[11px] space-y-1 text-slate-500 dark:text-slate-400" style="border-color: var(--ln);">
              <div><strong>Terkait Proyek:</strong> ${pat.relatedProject}</div>
              <div><strong>Status CV:</strong> ${pat.meta.status}</div>
              <div><strong>Nomor Permohonan / Paten:</strong> ${pat.meta.appNo}</div>
            </div>
          </div>

          <div class="pt-4 mt-5 border-t flex items-center justify-between gap-2" style="border-color: var(--ln);">
            <span class="text-[11px] font-mono text-slate-400">${pat.institution}</span>
            <button type="button" onclick="copyToClipboard('${pat.title} — ${pat.coInventors}', 'Judul paten berhasil disalin!')" class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all">
              Salin Judul
            </button>
          </div>
        </div>
      `).join('');
    }

    function selectSkillCategory(catId) {
      appState.skillCategory = catId;
      ['all', 'embedded', 'software', 'mechanical', 'qa'].forEach(c => {
        const btn = document.getElementById('skill-cat-' + c);
        if (!btn) return;
        if (c === catId) {
          btn.className = 'skill-cat-btn px-4 py-2 rounded-full text-xs font-semibold bg-blue-600 text-white transition-all';
        } else {
          btn.className = 'skill-cat-btn px-4 py-2 rounded-full text-xs font-medium glass-card';
        }
      });
      renderSkills();
    }

    function renderSkills() {
      const container = document.getElementById('skills-container');
      if (!container) return;

      const groups = SKILLS_DATA.filter(g => appState.skillCategory === 'all' || g.id === appState.skillCategory);
      container.innerHTML = groups.map(group => `
        <div class="glass-card rounded-3xl p-6 sm:p-7 space-y-4">
          <div class="flex items-start justify-between gap-3 border-b pb-4" style="border-color: var(--ln);">
            <div>
              <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">CATEGORY ${group.code}</span>
              <h3 class="font-display text-lg font-bold mt-0.5">${group.title}</h3>
              <p class="text-xs text-slate-500 mt-0.5">${group.subtitle}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-2.5">
            ${group.items.map(item => `
              <div class="p-3.5 rounded-2xl border hover:border-blue-500/40 transition-all" style="background-color: var(--bg); border-color: var(--ln);">
                <div class="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>${item.name}</span>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-3.5 leading-relaxed">${item.usage}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    // =========================================================================
    // 6. CV DOWNLOAD, LIGHTBOX, MODALS & CONTACT COMPOSER
    // =========================================================================
    function downloadCvPdf() {
      if (CV_PDF_DATA_URI && CV_PDF_DATA_URI.startsWith('data:application/pdf;base64,')) {
        try {
          const base64Data = CV_PDF_DATA_URI.split(',')[1];
          const byteCharacters = atob(base64Data);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'application/pdf' });
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = 'CV_Andi_Lutfi.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
          showToast('Mengunduh dokumen asli CV_Andi_Lutfi.pdf');
          return;
        } catch (err) {
          openCvModal();
        }
      } else {
        const a = document.createElement('a'); a.href = CV_PDF_DATA_URI; a.download = 'CV-Andi-Lutfi.pdf'; a.target = '_blank'; document.body.appendChild(a); a.click(); document.body.removeChild(a); showToast('Mengunduh CV-Andi-Lutfi.pdf');
      }
    }

    function openCvModal() {
      const modal = document.getElementById('cv-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeCvModal() {
      const modal = document.getElementById('cv-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function openLightbox(imgSrc, captionText) {
      const modal = document.getElementById('lightbox-modal');
      const imgEl = document.getElementById('lightbox-img');
      const capEl = document.getElementById('lightbox-caption');
      if (!modal || !imgEl || !capEl) return;
      imgEl.src = imgSrc;
      capEl.textContent = captionText || 'Dokumentasi Proyek Andi Lutfi';
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeLightbox() {
      const modal = document.getElementById('lightbox-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function updateComposedMessage() {
      const senderInput = document.getElementById('msg-sender-name');
      const topicSelect = document.getElementById('msg-topic-select');
      const previewBox = document.getElementById('msg-preview-box');
      if (!senderInput || !topicSelect || !previewBox) return;

      const sender = senderInput.value.trim() || '[Nama/Institusi Anda]';
      const topic = topicSelect.value;

      const templates = {
        iot: `Halo Andi Lutfi,\n\nSaya ${sender} tertarik dengan pengalaman Anda dalam memimpin rekayasa proyek Smart Farming Multi-Node (ESP32, RS-485, LoRa 10 km) beserta backend MQTT/Node-RED/InfluxDB dan logika Fuzzy yang telah dihilirisasi. Mari berdiskusi mengenai potensi kolaborasi pengembangan sistem IoT.`,
        dipcoater: `Halo Andi Lutfi,\n\nSaya ${sender} tertarik dengan instrumen Mesin Dip-Coater Otomatis berbasis step-pulse TMC2209, safety offset sensor optik, dan ruang isolasi termal yang Anda rancang untuk riset film tipis TiO2. Kami ingin mendiskusikan kolaborasi riset/pengembangan instrumen serupa.`,
        qa: `Halo Andi Lutfi,\n\nSaya ${sender} melihat pengalaman Anda sebagai Quality Assurance & Calibration Intern di PT Pindad (Persero) serta penguasaan kalibrasi instrumen presisi. Kami ingin berdiskusi terkait peluang kolaborasi di bidang pengujian dan penjaminan mutu.`,
        recruitment: `Halo Andi Lutfi,\n\nSaya ${sender} telah meninjau portofolio proyek rekayasa dan 3 invensi paten Anda di bidang Fisika Instrumentasi & Embedded IoT. Kami ingin mengundang Anda untuk berdiskusi lebih lanjut mengenai peluang kolaborasi/karier.`
      };

      previewBox.value = templates[topic] || templates.iot;
    }

    function copyComposedMessage() {
      const previewBox = document.getElementById('msg-preview-box');
      if (!previewBox) return;
      copyToClipboard(previewBox.value, 'Pesan kolaborasi berhasil disalin ke clipboard!');
    }

    function sendComposedEmail() {
      const previewBox = document.getElementById('msg-preview-box');
      const topicSelect = document.getElementById('msg-topic-select');
      const subject = encodeURIComponent('Kolaborasi Portofolio Rekayasa — ' + (topicSelect ? topicSelect.options[topicSelect.selectedIndex].text : 'Andi Lutfi'));
      const body = encodeURIComponent(previewBox ? previewBox.value : '');
      window.location.href = `mailto:4ndihandsome@gmail.com?subject=${subject}&body=${body}`;
      showToast('Membuka aplikasi email menuju 4ndihandsome@gmail.com');
    }

    function copyToClipboard(text, message) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(message || 'Teks berhasil disalin');
        }).catch(() => {
          fallbackCopy(text, message);
        });
      } else {
        fallbackCopy(text, message);
      }
    }

    function fallbackCopy(text, message) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast(message || 'Teks berhasil disalin');
      } catch (err) {
        showToast('Salin manual: ' + text);
      }
      document.body.removeChild(ta);
    }

    let toastTimeout = null;
    function showToast(msg) {
      const toast = document.getElementById('toast-notification');
      const textEl = document.getElementById('toast-message');
      if (!toast || !textEl) return;
      textEl.textContent = msg;
      toast.classList.remove('opacity-0', 'translate-y-4');
      toast.classList.add('opacity-100', 'translate-y-0');
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-4');
      }, 3200);
    }

    // =========================================================================
    // 7. THEME, NAVIGATION SCROLL-SPY, TIMELINE PROGRESS & ANIMATIONS
    // =========================================================================
    function toggleTheme() {
      const root = document.documentElement;
      root.classList.toggle('dark');
      const isDark = root.classList.contains('dark');
      try {
        localStorage.setItem('andi_portfolio_theme', isDark ? 'dark' : 'light');
      } catch (e) {}
      showToast(isDark ? 'Dark Mode diaktifkan' : 'Light Mode diaktifkan');
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const btn = document.getElementById('mobile-menu-btn');
      if (!menu) return;
      const isHidden = menu.classList.toggle('hidden');
      if (btn) btn.setAttribute('aria-expanded', String(!isHidden));
    }

    function closeMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const btn = document.getElementById('mobile-menu-btn');
      if (menu) menu.classList.add('hidden');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Preserved Scroll-Triggered Reveal (.rv) & Number Counter (data-n) from Andi Lutfi – Portofolio.html
    function initScrollRevealAndCounters() {
      function animateCount(el) {
        if (el.dataset.counted === 'true') return;
        el.dataset.counted = 'true';
        const target = parseInt(el.dataset.n, 10);
        if (isNaN(target)) return;
        let startTs = null;
        function step(ts) {
          if (!startTs) startTs = ts;
          const p = Math.min((ts - startTs) / 1300, 1);
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }

      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              const numEl = entry.target.querySelector('[data-n]');
              if (numEl) animateCount(numEl);
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });

        document.querySelectorAll('.rv').forEach((el, idx) => {
          el.style.transitionDelay = ((idx % 4) * 60) + 'ms';
          io.observe(el);
        });
      } else {
        document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
      }
    }

    // Preserved Timeline Fill (#tl & #fill) + Top Scroll Progress + Active Nav Spy
    function handleWindowScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progressPct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      const progBar = document.getElementById('scroll-progress');
      if (progBar) progBar.style.width = progressPct.toFixed(1) + '%';

      // Back to top button visibility
      const btt = document.getElementById('back-to-top');
      if (btt) {
        if (scrollTop > 480) {
          btt.classList.remove('opacity-0', 'pointer-events-none');
          btt.classList.add('opacity-100');
        } else {
          btt.classList.add('opacity-0', 'pointer-events-none');
          btt.classList.remove('opacity-100');
        }
      }

      // Timeline vertical line fill (from Original HTML)
      const tl = document.getElementById('tl');
      const fill = document.getElementById('fill');
      if (tl && fill) {
        const r = tl.getBoundingClientRect();
        const h = window.innerHeight;
        const p = Math.max(0, Math.min(1, (h * 0.62 - r.top) / Math.max(1, r.height)));
        fill.style.height = (p * Math.max(0, r.height - 16)) + 'px';
      }

      // Active navigation section highlight
      const sectionIds = ['beranda', 'tentang', 'proyek', 'pengalaman', 'paten', 'keahlian', 'kontak'];
      let currentActive = 'beranda';
      for (let i = 0; i < sectionIds.length; i++) {
        const sec = document.getElementById(sectionIds[i]);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 150) {
            currentActive = sectionIds[i];
          }
        }
      }
      document.querySelectorAll('.nav-link').forEach(link => {
        const sec = link.getAttribute('data-section');
        if (sec === currentActive) {
          link.className = 'nav-link px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600 text-white transition-all';
        } else {
          link.className = 'nav-link px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-all';
        }
      });
    }

    // Subtle Harmonic Signal Waveform on Background Canvas
    function initHeroCanvas() {
      const canvas = document.getElementById('hero-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);
      let phase = 0;

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      function draw() {
        ctx.clearRect(0, 0, width, height);
        phase += 0.005;
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          const baseY = height * 0.32 + i * 48;
          for (let x = 0; x <= width; x += 28) {
            const y = baseY + Math.sin(x * 0.0025 + phase + i * 0.6) * 32;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(37, 99, 235, ${0.07 - i * 0.012})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
        requestAnimationFrame(draw);
      }
      draw();
    }

    function updateClock() {
      const el = document.getElementById('live-clock');
      if (!el) return;
      const now = new Date();
      el.textContent = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    }

    // Keyboard Escape to close active modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeBlueprintModal();
        closeCvModal();
        closeLightbox();
      }
    });

    window.addEventListener('DOMContentLoaded', () => {
      try {
        const savedTheme = localStorage.getItem('andi_portfolio_theme');
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {}

      switchHeroTelemetry(0);
      renderProjects();

      renderPatents();
      renderSkills();
      updateComposedMessage();
      initScrollRevealAndCounters();
      initHeroCanvas();
      updateClock();
      setInterval(updateClock, 15000);
      window.addEventListener('scroll', handleWindowScroll, { passive: true });
      handleWindowScroll();
    });
