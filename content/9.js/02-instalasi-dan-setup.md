---
title: Instalasi & Setup
description: Menyiapkan lingkungan pengembangan (environment) JavaScript menggunakan Node.js, VS Code, dan Browser Console.
icon: i-lucide-terminal
img: /docs/javascript/js-setup.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Instalasi & Setup JavaScript
Sebelum mulai membuat aplikasi canggih, kita perlu menyiapkan "senjata" dan "meja kerja" kita. Untungnya, memulai JavaScript sangat mudah dan gratis!

Pada bagian ini, kamu akan belajar bagaimana cara menjalankan kode JavaScript pertamamu. Karena JavaScript utamanya berjalan di browser, kamu sebenarnya sudah bisa langsung menulis kode. Namun, untuk pengembangan profesional, kita membutuhkan beberapa *tools* tambahan agar proses *ngoding* menjadi lebih cepat dan menyenangkan.

---

## 1. Menjalankan JavaScript di Browser (Bawaan)
Setiap browser modern (Chrome, Firefox, Edge, Safari) sudah memiliki **JavaScript Engine** bawaan. Kamu bisa langsung menulis dan mengeksekusi kode JS tanpa instalasi apapun.

### 1.1 Menggunakan Developer Tools (Console)
1. Buka browser Google Chrome.
2. Klik kanan di mana saja pada halaman, pilih **Inspect** (atau tekan `F12` / `Ctrl+Shift+I`).
3. Buka tab **Console**.
4. Ketik kode berikut dan tekan Enter:
```javascript
console.log("Halo Dunia! Saya belajar JavaScript.");
alert("Ini adalah popup dari JavaScript!");
```

> [!INFO]
Browser Console sangat cocok untuk mencoba kode secara cepat (snippet) atau untuk melakukan debugging aplikasi web.

---

## 2. Instalasi Node.js (Menjalankan JS di Komputer/Lokal)
Jika kamu ingin menjalankan JavaScript di luar browser (misalnya membaca file lokal, membuat server, atau menggunakan library pihak ketiga), kamu membutuhkan **Node.js**.

### 2.1 Apa itu Node.js?
Node.js adalah *runtime environment* untuk JavaScript yang dibangun di atas mesin V8 milik Google Chrome. Dengan Node.js, JS bisa mengakses sistem file, jaringan, dan OS secara langsung.

### 2.2 Cara Instalasi Node.js
1. Kunjungi website resmi: [nodejs.org](https://nodejs.org/)
2. Kamu akan melihat dua versi: **LTS (Long Term Support)** dan **Current**.
   - Pilih versi **LTS** karena lebih stabil untuk belajar dan produksi.
3. Download installer sesuai sistem operasi kamu (Windows/macOS).
4. Jalankan installer tersebut, ikuti instruksi (Next -> Next -> Finish). Untuk pengguna Linux, bisa menggunakan `NodeSource` atau `nvm`.
5. Verifikasi instalasi dengan membuka Terminal/CMD:

```bash
# Cek versi Node.js
node -v
# Output contoh: v20.11.0

# Cek versi NPM (Node Package Manager)
npm -v
# Output contoh: 10.2.4
```

> [!NOTE]
NPM (Node Package Manager) otomatis terinstall saat kamu menginstall Node.js. NPM digunakan untuk mengunduh *library* JavaScript dari internet.

---

## 3. Setup Code Editor (VS Code)
Walaupun kamu bisa nulis JS di Notepad, itu sangat tidak disarankan. Kita butuh *Code Editor* yang punya fitur *autocomplete*, *syntax highlighting*, dan *file explorer*.

### 3.1 Visual Studio Code (VS Code)
VS Code adalah editor gratis paling populer untuk JavaScript.
1. Download di [code.visualstudio.com](https://code.visualstudio.com/)
2. Install seperti biasa.

### 3.2 Rekomendasi Extensions (Plugin) JavaScript
Setelah VS Code terinstall, buka tab Extensions (Ctrl+Shift+X) dan install berikut:
- **Prettier - Code formatter:** Untuk merapikan penulisan kode otomatis.
- **ESLint:** Untuk mendeteksi error atau *bad practice* dalam kode JS.
- **Live Server:** Membuka file HTML/JS di browser dan auto-refresh saat kode diubah (sangat wajib untuk DOM manipulation!).

---

## 4. Menjalankan File JavaScript Pertama
Sekarang saatnya kita membuat file `.js` asli dan menjalankannya.

### 4.1 Membuat Struktur Folder
Buat sebuah folder baru di komputermu, misalnya `belajar-js`. Buka folder tersebut di VS Code.

```text
belajar-js/
│
├── index.html      # File HTML kita
└── app.js          # File JavaScript kita
```

### 4.2 Menulis Kode di `app.js`
Buat file `app.js` dan tulis kode berikut:
```javascript
// app.js
const namaSaya = "Pengunjung";
console.log("File JS berhasil dimuat!");

function sapa(nama) {
    return `Halo, ${nama}! Selamat datang di JavaScript.`;
}

console.log(sapa(namaSaya));
```

### 4.3 Cara Eksekusi File JS
Ada dua cara untuk menjalankan file `app.js` di atas:

**Cara 1: Menggunakan Node.js (Sisi Server)**
Buka terminal di VS Code (`Ctrl + ` `), lalu ketik:
```bash
node app.js
```
*Output akan langsung muncul di terminal.*

**Cara 2: Menggunakan Browser (Sisi Klien via HTML)**
Buat file `index.html` dan hubungkan dengan `app.js` menggunakan tag `<script>`.
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Belajar JS</title>
</head>
<body>
    <h1>Buka Console Browser (F12)</h1>
    
    <!-- Pastikan src mengarah ke app.js -->
    <script src="app.js"></script>
</body>
</html>
```
Klik kanan `index.html` di VS Code, pilih **Open with Live Server** (jika extension terpasang). Lalu tekan `F12` di browser untuk melihat output di Console.

---

> [!QUOTE]
*"Environment sudah siap, *tools* sudah terpasang. Peralatan tempur kamu sudah lengkap. Di modul selanjutnya, kita akan mulai menggali sintaks dasar dari JavaScript!"*