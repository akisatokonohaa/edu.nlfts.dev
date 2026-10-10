---
title: Modul & NPM
description: Mengorganisir kode JavaScript ke dalam beberapa file menggunakan ES Modules, serta mengenal ekosistem Node Package Manager (NPM).
icon: i-lucide-package
img: /docs/javascript/js-modules.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Modul & NPM JavaScript
Saat aplikasi membesar, menulis seluruh kode JavaScript di dalam satu file `.js` saja akan menjadi mimpi buruk. Kode akan sulit dibaca, dicari, dan dirawat. Solusinya adalah memecah kode menjadi beberapa file yang saling terhubung, yang disebut **Modul**.

Pada bagian terakhir ini, kamu akan mempelajari cara modern memecah kode menggunakan **ES Modules** (`import`/`export`). Kamu juga akan diperkenalkan dengan **NPM (Node Package Manager)**, sebuah toko raksasa berisi *library* JavaScript buatan developer lain di seluruh dunia yang bisa kamu pakai secara gratis untuk mempercepat pekerjaanmu.

---

## 1. Apa Itu ES Modules?
**ES Modules (ECMAScript Modules)** adalah standar resmi JavaScript (sejak ES6) untuk mengatur kode ke dalam beberapa file. 

Konsepnya sederhana:
1. Kamu menulis kode (variabel, fungsi, class) di file A.
2. Kamu meng-*export* (mengirim) kode tersebut.
3. Di file B, kamu meng-*import* (menerima) kode dari file A untuk digunakan.

> [!INFO]
Sebelum ES Modules ada, developer JavaScript menggunakan sistem modul buatan pihak ketiga seperti CommonJS (`require()` di Node.js) atau AMD. Saat ini, ES Modules (`import/export`) adalah standar mutlak di Frontend maupun Backend modern.

---

## 2. Export & Import
Ada dua cara utama untuk meng-export kode dari sebuah file: **Named Export** dan **Default Export**.

### 2.1 Named Export (Banyak Export)
Digunakan ketika kamu ingin meng-export banyak variabel/fungsi dalam satu file. Saat meng-import, nama variabelnya **harus sama persis** dan dibungkus kurung kurawal `{}`.

**File: `matematika.js`**
```javascript
// Mengekspor variabel dan fungsi
export const phi = 3.14;

export function tambah(a, b) {
    return a + b;
}

export function kurang(a, b) {
    return a - b;
}
```

**File: `app.js`**
```javascript
// Mengimpor hanya yang dibutuhkan
import { tambah, phi } from "./matematika.js";

console.log(phi);          // Output: 3.14
console.log(tambah(5, 2)); // Output: 7
```

### 2.2 Default Export (Satu Export Utama)
Digunakan jika sebuah file hanya bertujuan untuk meng-export **satu hal utama** (misalnya satu Class atau satu komponen utama). Saat meng-import, kamu bebas memberi nama terserah (tanpa kurung kurawal).

**File: `user.js`**
```javascript
// Hanya boleh ada satu "export default" per file
export default class User {
    constructor(nama) {
        this.nama = nama;
    }
}
```

**File: `main.js`**
```javascript
// Bebas dikasih nama apa saja (User, Pengguna, Orang, dll)
import Pengguna from "./user.js";

let user1 = new Pengguna("Xoryn");
console.log(user1.nama); // Output: "Xoryn"
```

> [!TIP]
Di HTML, agar `import` dan `export` berfungsi di browser, tag `<script>` harus diberi atribut `type="module"`.
> `<script type="module" src="app.js"></script>`

---

## 3. Apa Itu NPM?
**NPM (Node Package Manager)** adalah *package manager* default untuk JavaScript. Bayangkan ini seperti "Play Store" atau "App Store" untuk *library* kode JavaScript. 

Jika kamu butuh *library* untuk membuat slider gambar, membuat chart, atau membangun server backend, kamu tidak perlu menulisnya dari nol. Cukup cari di NPM, lalu *download* ke proyekmu.

### 3.1 Inisialisasi Proyek (`package.json`)
Sebelum menggunakan NPM, kamu harus menginisialisasi proyekmu. Buka terminal di folder proyekmu, lalu ketik:
```bash
npm init -y
```
Perintah ini akan membuat sebuah file bernama **`package.json`**. File ini adalah "KTP"-nya proyekmu. Berisi nama proyek, daftar *library* yang terpasang, dan skrip perintah.

### 3.2 Cara Memasang Library
Untuk memasang *library* dari internet, gunakan perintah `install`.
```bash
npm install lodash
```
Perintah di atas akan:
1. Mengunduh *library* `lodash` (kumpulan fungsi utilitas JS) ke dalam folder `node_modules`.
2. Mencatat `lodash` ke dalam `package.json` sebagai *dependency* (ketergantungan proyek).

### 3.3 Menggunakan Library di Kode
Setelah dipasang, kamu bisa langsung meng-*import* library tersebut ke file JavaScript-mu.

```javascript
// app.js
import _ from "lodash"; // lodash biasa di-alias sebagai "_"

let angka = [1, 2, 3, 4, 5, 6, 7, 8];

// Menggunakan fungsi chunk bawaan lodash untuk memecah array
let pecahan = _.chunk(angka, 3);

console.log(pecahan); 
// Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
```

> [!WARNING]
Folder `node_modules` tempat *library* tersimpan ukurannya sangat besar (bisa mencapai ratusan MB). **Jangan pernah** memasukkan folder ini ke dalam GitHub atau hosting manual. Saat kamu pindah ke komputer lain, cukup jalankan perintah `npm install`, dan NPM akan otomatis membaca `package.json` dan mengunduh ulang semua *library* yang dibutuhkan.

---

## 4. Mengapa ES Modules & NPM Itu Penting?
Di dunia kerja nyata, kamu hampir tidak pernah menulis kode dari nol. Begitu kamu keluar dari materi dasar ini dan mulai mempelajari *framework* seperti **React, Vue, Next.js, atau Express.js**, semuanya bergantung pada dua konsep ini:
1. Memecah aplikasi menjadi ratusan file kecil yang saling terhubung (ES Modules).
2. Memasang puluhan *library* pendukung agar pekerjaan lebih cepat (NPM).

---

> [!QUOTE]
*"Selamat! Kamu telah menyelesaikan perjalanan panjang dari sekadar `console.log` hingga memahami arsitektur modular aplikasi JavaScript modern. Modul ini hanyalah pijakan pertama, dunia JavaScript sangat luas dan terus berkembang. Teruslah ngoding, teruslah ber eksplorasi!"*