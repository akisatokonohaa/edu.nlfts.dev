---
title: Pengenalan JavaScript
description: Belajar JavaScript dari konsep dasar hingga modern untuk membangun aplikasi web interaktif.
icon: i-lucide-code
img: /docs/javascript/js-course.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Pengenalan pada JavaScript
Belajar **JavaScript** secara bertahap, mulai dari konsep fundamental hingga memahami paradigma modern (**ES6+ & Asynchronous**) untuk membangun aplikasi web yang dinamis.

Pada bagian ini, kamu akan mengenal JavaScript lebih dalam sebagai bahasa pemrograman inti dari *World Wide Web*. Materi akan dimulai dari fundamental seperti sintaks, variabel (`let`/`const`), tipe data, operator, percabangan, perulangan, fungsi, array, hingga manipulasi objek.

Setelah memahami dasar-dasarnya, pembelajaran akan dilanjutkan ke konsep yang lebih advance seperti DOM Manipulation, penanganan proses Asynchronous (Promise, Async/Await), Modul (ES Modules), hingga Object-Oriented Programming (OOP) modern menggunakan sintaks `class`.

---

## 1. Apa Itu JavaScript?

**JavaScript (JS)** adalah bahasa pemrograman tingkat tinggi yang bersifat *interpreted* atau *JIT (Just-In-Time) compiled*. Awalnya dirancang untuk berjalan di sisi klien (*client-side*) di dalam peramban (*browser*) web, namun sekarang juga bisa berjalan di sisi server (*server-side*) berkat lingkungan *runtime* seperti Node.js. 

Berbeda dengan HTML yang mengatur struktur konten dan CSS yang mengatur tampilan/visual, JavaScript bertugas memberikan "nyawa" atau interaktivitas pada halaman web. Mulai dari mengubah teks secara dinamis, membuat animasi, memvalidasi formular, hingga berkomunikasi dengan server untuk mengambil data tanpa perlu me-refresh halaman (AJAX/Fetch API).

Keunggulan utama JavaScript terletak pada kemampuannya yang multiparadigma (mendukung *event-driven*, *functional*, dan *object-oriented*). JavaScript bersifat *dynamic typing* (tipe data variabel bisa berubah-ubah) dan saat ini standarnya diatur oleh **ECMAScript (ES)**. Dengan lahirnya fitur-fitur modern ES6 ke atas, penulisan kode JavaScript menjadi jauh lebih rapi, terstruktur, dan *powerful* untuk membangun aplikasi skala enterprise.

---

## 2. Sejarah Singkat
**JavaScript** pertama kali diciptakan pada tahun 1995 oleh Brendan Eich saat bekerja di Netscape Communications. Awalnya, bahasa ini dikembangkan hanya dalam waktu 10 hari dengan nama Mocha, lalu diganti menjadi LiveScript, dan akhirnya dinamai JavaScript sebagai strategi pemasaran saat itu karena bahasa Java sedang sangat populer.

Meskipun namanya mirip, JavaScript dan Java adalah dua bahasa pemrograman yang sama sekali berbeda. Pada tahun 1996, Netscape menyerahkan JavaScript ke Ecma International untuk distandarisasi, melahirkan spesifikasi pertama bernama **ECMAScript (ES)**. Sejak saat itu, JavaScript terus berevolusi.

Lompatan terbesar terjadi pada tahun 2015 dengan dirilisnya **ES6 (ECMAScript 2015)** yang membawa perubahan besar-besaran seperti fitur `let/const`, *arrow functions*, `classes`, `promises`, dan *modul*. Hingga hari ini, JavaScript berevolusi menjadi bahasa pemrograman paling populer di dunia, menopang jutaan situs web modern dan ekosistem *framework* frontend (seperti React, Vue, Angular) maupun backend (seperti Node.js, Express, NestJS).

---

## 3. Versi JavaScript (ECMAScript) Saat ini
Tidak seperti bahasa lain yang menunggu rilis mayor dalam waktu bertahun-tahun, JavaScript sekarang mengikuti model rilis tahunan (Yearly Release). Versi stabil terbaru adalah **ECMAScript 2024 (ES15)**.

### 3.1 Fitur Unggulan JavaScript Modern (ES14 & ES15)
- **Group By (Object.groupBy):** Mempermudah pengelompokan elemen array berdasarkan kriteria tertentu tanpa library tambahan.
- **Pipeline Operator (|>):** Menyederhanakan penulisan pemanggilan fungsi berurutan agar lebih mudah dibaca.
- **Array Buffer & Memory Management:** Peningkatan manajemen memori untuk performa aplikasi yang lebih berat.
- **Top-level Await:** Mengizinkan penggunaan `await` di luar fungsi `async` pada modul ES, memudahkan inisialisasi konfigurasi.

### 3.2 Keunggulan Utama Sintaks Modern (ES6+)
- **Let & Const:** Menggantikan `var` untuk menghindari *hoisting* yang membingungkan.
- **Arrow Functions:** Penulisan fungsi yang lebih singkat dan mengikat *lexical this* secara otomatis.
- **Destructuring & Spread Operator:** Ekstraksi data dari Array/Object yang jauh lebih elegan.
- **Classes:** Sintaks OOP yang lebih mirip dengan bahasa pemrograman lain seperti Java/C#.

### 3.3 Daftar Versi ECMAScript Penting
| Versi ES | Tahun Rilis | Fitur Utama & Keterangan | Status |
| :---: | :---: | :--- | :---: |
| **ES2024 (ES15)** | 2024 | `Object.groupBy()`, Pipeline Operator. | Aktif |
| **ES2023 (ES14)** | 2023 | Array find from last, Hashbang Grammar. | Aktif |
| **ES2022 (ES13)** | 2022 | Class Fields, Top-level await, `.at()`. | Aktif |
| **ES2015 (ES6)** | 2015 | Let/Const, Arrow Fn, Classes, Promises, Modules. | Fondasi Modern |

---

## 4. Arsitektur & Alur Kerja JavaScript di Browser

JavaScript bekerja dengan memanipulasi **DOM (Document Object Model)**. Berikut adalah alur lengkap bagaimana JavaScript berjalan di sisi klien (*browser*).

### 4.1 Diagram Alur Kerja JavaScript (Client-Side)

```text
┌─────────┐
│  USER   │
└────┬────┘
     │ 1. Interaksi (Scroll, Klik tombol, Isi form)
     ▼
┌─────────────────────────────────────────────────────────────┐
│                       WEB BROWSER                           │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ 1. HTML & CSS Parsing                                │   │
│  │  • Membaca HTML dan membangun DOM Tree               │   │
│  │  • Menerapkan CSS menjadi CSSOM Tree (Render Tree)    │   │
│  └──────────────────────┬───────────────────────────────┘   │
│                         │                                   │
│  ┌──────────────────────▼───────────────────────────────┐   │
│  │ 2. JAVASCRIPT ENGINE (V8 / SpiderMonkey / etc.)      │   │
│  │  • Parse JS -> AST (Abstract Syntax Tree)            │   │
│  │  • Compile to Machine Code (JIT)                     │   │
│  │  • Eksekusi logika (Event Loop, Call Stack, Web API) │   │
│  └──────────────────────┬───────────────────────────────┘   │
│                         │                                   │
│  ┌──────────────────────▼───────────────────────────────┐   │
│  │ 3. DOM MANIPULATION                                  │   │
│  │  • Mengubah teks, style, atau struktur HTML          │   │
│  │  • Re-rendering halaman (Repaint/Reflow)             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────┬───────────────────────────────────┘
                          │ (Jika butuh data dari server)
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      SERVER (Backend/API)                   │
│   • Menerima HTTP Request (GET/POST via Fetch API/AJAX)     │
│   • Mengembalikan data (JSON/XML) ke Browser                │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Penjelasan Tahap demi Tahap

| No | Tahapan | Deskripsi Detail |
| :---: | :--- | :--- |
| **1** | **User Action** | Pengguna membuka halaman atau berinteraksi (klik, ketik), memicu *Event* di browser. |
| **2** | **HTML/CSS Parsing** | Browser membaca struktur HTML & CSS terlebih dahulu sebelum/saat skrip JS dieksekusi. |
| **3** | **JS Engine Execution** | Mesin JavaScript (seperti V8 di Chrome) membaca kode, mengompilasinya, lalu menjalankannya. |
| **4** | **DOM Manipulation** | Kode JS mengakses elemen HTML melalui DOM API untuk mengubah tampilan secara dinamis. |
| **5** | **Network Request** | Jika membutuhkan data (misal dari database), JS mengirim *request* ke server secara *asynchronous*. |
| **6** | **UI Update** | Setelah data dari server kembali, JS kembali memanipulasi DOM untuk menampilkan data tersebut. |

> [!INFO]
JavaScript di browser bersifat *Single-Threaded* (memiliki satu jalur eksekusi utama), namun dapat menangani proses *asynchronous* menggunakan *Event Loop* dan *Web APIs*.

---

## 5. Keunggulan dan Penggunaan JavaScript

JavaScript adalah bahasa yang serbaguna, tak hanya untuk web, tapi merambah ke berbagai platform.

### 5.1 Keunggulan JavaScript
| Keunggulan JS | Deskripsi Utama |
| :--- | :--- |
| **Universal** | Berjalan di browser apa pun tanpa perlu instalasi tambahan di sisi pengguna. |
| **Full-Stack** | Bisa digunakan untuk Frontend (React/Vue) maupun Backend (Node.js/Express). |
| **Komunitas Besar** | Memiliki jutaan *library* di NPM, solusi mudah dicari di Stack Overflow. |
| **Asynchronous Native** | Memiliki dukungan *event-driven* dan *non-blocking I/O* bawaan, cocok untuk I/O berat. |
| **Ekosistem Luas** | Dapat digunakan untuk membuat Mobile App (React Native), Desktop App (Electron), hingga IoT. |

### 5.2 Penggunaan JavaScript pada Dunia Nyata
| Kategori Aplikasi | Contoh Implementasi | Deskripsi Singkat |
| :--- | :--- | :--- |
| **Web Interaktif** | Single Page Application (SPA) | Membangun aplikasi web yang halus tanpa reload (React, Vue, Angular). |
| **Web Server** | RESTful API / Backend | Membuat server dan *endpoint* API menggunakan Node.js & Express/NestJS. |
| **Aplikasi Mobile** | Cross-Platform App | Membuat aplikasi Android & iOS sekali tulis menggunakan React Native. |
| **Aplikasi Desktop** | Desktop App | Membuat aplikasi desktop lintas OS menggunakan Electron (misal: VS Code). |
| **Game** | Browser Game | Membuat game 2D/3D di browser menggunakan Canvas/WebGL API. |

> [!NOTE]
*Catatan*: JavaScript bisa dikombinasikan dengan backend apa pun (PHP, Python, Java) untuk berkomunikasi melalui API (Format JSON).

---

## 6. Prasyarat
>[!QUESTION]
**apa saja sih kebutuhan untuk memulai JavaScript?** *berikut adalah kebutuhan atau prasyarat untuk memulai JavaScript*

| Prasyarat / Kebutuhan | Tingkat Urgensi | Deskripsi & Fokus Pembelajaran |
| :--- | :---: | :--- |
| **HTML (Hypertext Markup Language)** | **Wajib** | JS berinteraksi langsung dengan HTML (DOM). Kamu wajib paham tag, id, class, dll. |
| **CSS (Cascading Style Sheets)** | **Dasar** | JS sering digunakan untuk mengubah style secara dinamis (menyembunyikan elemen, dll). |
| **Logika & Dasar Pemrograman** | **Wajib** | Paham konsep variabel, kondisi (`if/else`), perulangan (`loop`), serta fungsi. |
| **Web Browser Modern** | **Wajib** | Google Chrome, Firefox, atau Edge untuk melihat hasil dan menggunakan Developer Tools (Console). |
| **Code Editor / IDE** | **Wajib** | VS Code adalah pilihan terbaik karena ekosistem extension JavaScript-nya sangat lengkap. |
| **Node.js (Opsional di awal)** | **Anjuran** | Diperlukan jika ingin mencoba JS di luar browser, menggunakan NPM, atau membuat backend. |

---

## 7. Apa yang akan kita pelajari?
>[!INFO]
**berikut adalah materi yang akan dipelajari:**

| No | Materi | Deskripsi Singkat |
| :---: | :--- | :--- |
| **1** | **Pengenalan JavaScript** | Apa itu JS, sejarah, arsitektur, dan kegunaannya |
| **2** | **Instalasi & Setup** | Menyiapkan Node.js, Browser Console, VS Code, menjalankan file `.js` |
| **3** | **Sintaks Dasar** | Statement, komentar, `console.log()`, strict mode |
| **4** | **Variabel & Tipe Data** | `let`, `const`, String, Number, Boolean, Null, Undefined, Array, Object |
| **5** | **Operator** | Aritmatika, perbandingan, logika, ternary, spread operator |
| **6** | **Struktur Kendali** | `if/else`, `switch`, `for`, `while`, `for...of`, `for...in` |
| **7** | **Fungsi** | Function declaration, expression, arrow function, scope, closure |
| **8** | **Array & Manipulasinya** | Push/pop, map, filter, reduce, forEach |
| **9** | **Objek & OOP Dasar** | Object literal, properties, methods, `this`, Class, Constructor |
| **10** | **OOP Lanjutan** | Inheritance, Encapsulation, Polymorphism |
| **11** | **DOM Manipulation** | Seleksi elemen, manipulasi konten & CSS, Event handling |
| **12** | **Asynchronous JS** | Callback, Promises, Async/Await, Fetch API |
| **13** | **Modul & NPM** | ES Modules (`import/export`), package.json, pengenalan NPM |

---

> [!QUOTE]
*"JavaScript adalah bahasa yang memungkinkan web menjadi hidup. Mulai dari tombol kecil hingga aplikasi luar biasa, semuanya berawal dari satu baris `console.log`. Saatnya menulis kodenya!"*