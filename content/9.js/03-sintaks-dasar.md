---
title: Sintaks Dasar JavaScript
description: Memahami anatomi kode JavaScript, cara menampilkan output, komentar, aturan penamaan, dan penggunaan strict mode.
icon: i-lucide-file-code
img: /docs/javascript/js-syntax.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Sintaks Dasar JavaScript
Sebelum membangun aplikasi besar, kita harus tahu bagaimana cara menulis kalimat dan paragraf dalam bahasa JavaScript. 

Pada bagian ini, kamu akan mempelajari *syntax* (sintaks) dasar JavaScript. Sintaks adalah aturan tata bahasa dalam pemrograman. Kita akan belajar bagaimana cara membuat *statement*, memberikan *komentar*, menampilkan output ke *console* atau *browser*, memahami sensitivitas huruf, hingga mengaktifkan mode ketat (*strict mode*) agar kode yang ditulis lebih aman dan modern.

---

## 1. Anatomi Kode JavaScript (Statements)
Sebuah *script* JavaScript terdiri dari serangkaian instruksi yang disebut **statement**. Statement adalah perintah yang akan dieksekusi oleh mesin JavaScript baris demi baris, dari atas ke bawah.

### 1.1 Statement dan Titik Koma (Semicolon)
Di JavaScript, statement biasanya dipisahkan oleh titik koma (`;`). Walaupun di JavaScript modern titik koma terkadang bisa dihilangkan (karena ada fitur *Automatic Semicolon Insertion*), **sangat disarankan untuk tetap menggunakannya** agar terhindar dari bug yang tidak terduga.

```javascript
let nama = "Budi"; // Ini adalah sebuah statement
console.log(nama); // Ini statement lain
```

### 1.2 Whitespace (Spasi, Tab, dan Baris Baru)
JavaScript mengabaikan spasi yang berlebih. Kamu bebas menggunakan tab atau spasi untuk merapikan kode (indentasi) agar mudah dibaca.
```javascript
// Kode ini valid, tapi jelek dibaca
let umur=20;console.log(umur);

// Kode ini juga valid, dan jauh lebih rapi
let umur = 20;
console.log(umur);
```

---

## 2. Menampilkan Output
Bagaimana cara kita melihat hasil dari kode JavaScript yang kita tulis? Ada beberapa cara, tergantung di mana kode itu dijalankan.

### 2.1 Menggunakan `console.log()`
Ini adalah metode yang paling sering digunakan oleh developer untuk menampilkan output ke *Console* browser atau terminal (Node.js). Sangat berguna untuk melakukan *debugging*.

```javascript
console.log("Halo, ini ditampilkan di console!");
console.log(2024);
console.log("Hasil dari 2 + 2 adalah", 2 + 2);
```

### 2.2 Menggunakan `alert()`
Jika kamu menjalankan JS di browser, `alert()` akan menampilkan kotak pop-up peringatan di layar.
> [!WARNING]
`alert()` akan menghentikan eksekusi kode lainnya sampai pengguna menekan tombol "OK". Hindari gunakan ini untuk kebutuhan biasa, gunakan hanya untuk peringatan penting.

```javascript
alert("Selamat datang di website kami!");
```

### 2.3 Menggunakan `document.write()`
Metode ini akan langsung menulis teks ke dalam dokumen HTML.
> [!WARNING]
Metode ini sudah **jarang sekali digunakan** di JavaScript modern karena akan menimpa seluruh isi HTML jika dipanggil setelah halaman selesai dimuat.

### 2.4 Memanipulasi DOM (InnerHTML)
Cara paling modern dan disarankan adalah dengan memilih elemen HTML lalu mengubah isinya. (Ini akan dibahas lebih dalam di materi DOM Manipulation).
```javascript
// Mengubah teks di dalam elemen HTML yang memiliki id="judul"
document.getElementById("judul").innerHTML = "Teks diubah oleh JavaScript";
```

---

## 3. Komentar (Comments)
Komentar adalah teks yang ditulis di dalam kode namun **diabaikan oleh mesin JavaScript**. Komentar sangat penting untuk menjelaskan logika kode agar programmer lain (atau dirimu di masa depan) bisa memahaminya.

### 3.1 Komentar Satu Baris (Single Line)
Menggunakan tanda `//`. Semua teks setelah tanda ini hingga akhir baris akan diabaikan.
```javascript
// Ini adalah komentar satu baris
let harga = 5000; // Menentukan harga awal
```

### 3.2 Komentar Banyak Baris (Multi-line)
Menggunakan tanda `/*` untuk membuka dan `*/` untuk menutup. Sering digunakan untuk penjelasan yang panjang.
```javascript
/* 
  Kode di bawah ini digunakan untuk menghitung 
  total harga setelah dikirimkan ke luar kota.
  Dibuat oleh: Xoryn
*/
let ongkir = 20000;
let total = harga + ongkir;
```

> [!TIP]
Gunakan komentar secukupnya. Kode yang baik adalah kode yang "membicarakannya sendiri" (self-documenting) melalui penamaan variabel/fungsi yang jelas.

---

## 4. Aturan Penamaan (Naming Variables)
Saat kita membuat variabel atau fungsi nanti, ada aturan ketat tentang cara menamainya:

| Aturan / Kebutuhan | Deskripsi & Contoh |
| :--- | :--- |
| **Case Sensitive** | Huruf besar dan kecil dibedakan. `nama` dan `Nama` adalah dua variabel yang berbeda. |
| **Boleh pakai Huruf & Angka** | Boleh mengandung angka, asalkan **tidak di awal**. (`umur1` valid, `1umur` error). |
| **Boleh pakai `_` dan `$`** | Boleh di awal maupun di tengah. (`_nama`, `$total_harga`). |
| **Dilarang pakai Spasi** | Spasi akan dianggap pemisah statement. (`nama lengkap` akan error). |
| **Dilarang pakai Reserved Keyword** | Tidak boleh menggunakan kata bawaan JS seperti `let`, `return`, `function`. |

### 4.1 Konvensi Penamaan (CamelCase)
Dalam JavaScript, *best practice* penamaan variabel menggunakan gaya **camelCase**, di mana kata pertama diawali huruf kecil, dan kata kedua diawali huruf besar.
```javascript
let namaDepan = "Radied";   // Benar (camelCase)
let namadepan = "Radied";   // Kurang enak dibaca
let NamaDepan = "Radied";   // Biasanya dipakai untuk Class (PascalCase)
```

---

## 5. Strict Mode (Mode Ketat)
JavaScript dari sejarahnya awalnya sangat permisif (membolehkan banyak hal tanpa error). Namun, di ES5, diperkenalkan **Strict Mode**.

### 5.1 Cara Mengaktifkan Strict Mode
Cukup tulis `"use strict";` di paling atas file JavaScript kamu.
```javascript
"use strict";

// Kode di bawah ini berjalan dalam mode ketat
let namaSaya = "Xoryn";
```

### 5.2 Mengapa Harus Pakai Strict Mode?
Strict mode membuat kesalahan "silent" (yang sebelumnya diabaikan) berubah menjadi *throw error*, sehingga kodenya jauh lebih aman.

| Tanpa Strict Mode | Dengan Strict Mode |
| :--- | :--- |
| Bisa pakai variabel tanpa `let/var/const` (bikin global variable kotor) | **Error:** Variabel harus dideklarasikan |
| Bisa menghapus properti yang tidak bisa dihapus | **Error:** Tidak bisa dihapus |
| Duplikasi parameter di dalam fungsi diabaikan | **Error:** Parameter tidak boleh sama |

> [!INFO]
Saat ini, jika kamu menggunakan ES Modules (`import/export`) atau *Modern Framework* (React, Vue) dan transpiler seperti Babel/Vite, **Strict Mode otomatis aktif** tanpa perlu kamu tulis manual.

---

> [!QUOTE]
*"Sintaks dasar adalah abjad dan tata bahasa. Sekarang kamus dan rimba kata sudah siap di depan mata. Di modul selanjutnya, kita akan mulai menyimpan 'benda' ke dalam 'kotak' yang disebut Variabel!"*