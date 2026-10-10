---
title: Fungsi JavaScript
description: Mengenal konsep fungsi (functions) untuk membuat kode yang dapat digunakan kembali, parameter, return value, scope, hingga arrow function modern ES6.
icon: i-lucide-function-square
img: /docs/javascript/js-functions.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Fungsi JavaScript
Saat menulis program, kamu akan sering menemukan dirimu menulis blok kode yang melakukan tugas tertentu berkali-kali. Alih-alih menyalin-tempel (copy-paste) kode tersebut, kita bisa membungkusnya ke dalam **Fungsi (Function)**.

Pada bagian ini, kamu akan belajar cara mendefinisikan dan memanggil fungsi, mengirimkan data melalui *parameter*, mengembalikan nilai menggunakan `return`, memahami *scope* variabel, serta menggunakan sintaks **Arrow Function** modern yang sangat populer di JavaScript.

---

## 1. Apa Itu Fungsi?
Fungsi adalah blok kode terpisah yang dirancang untuk melakukan satu tugas spesifik. Tujuan utamanya adalah **reusability** (kode yang bisa dipakai ulang) sehingga program menjadi lebih rapi dan mudah dirawat (DRY - *Don't Repeat Yourself*).

### 1.1 Deklarasi Fungsi (Function Declaration)
Cara klasik membuat fungsi di JavaScript menggunakan kata kunci `function`.
```javascript
function sapa() {
    console.log("Halo! Selamat datang.");
}

// Cara memanggil/menjalankan fungsi:
sapa(); // Output: Halo! Selamat datang.
```

---

## 2. Parameter & Argumen
Fungsi akan jauh lebih berguna jika bisa menerima data dari luar untuk diolah. Data yang dikirimkan saat fungsi dipanggil disebut **Argumen**, sedangkan variabel penerimanya di dalam fungsi disebut **Parameter**.

```javascript
// "nama" adalah parameter
function sapaUser(nama) {
    console.log(`Halo, ${nama}!`);
}

// "Xoryn" adalah argumen
sapaUser("Xoryn"); // Output: Halo, Xoryn!
sapaUser("Budi");  // Output: Halo, Budi!
```

### 2.1 Default Parameter (ES6)
Kita bisa memberikan nilai awal (default) jika argumen tidak dikirimkan saat fungsi dipanggil.
```javascript
function sapaUser(nama = "Tamu") {
    console.log(`Halo, ${nama}!`);
}

sapaUser();       // Output: Halo, Tamu! (karena tidak ada argumen)
sapaUser("Andi"); // Output: Halo, Andi!
```

---

## 3. Mengembalikan Nilai (`return`)
Sejauh ini kita hanya mencetak ke *console*. Dalam kasus nyata, fungsi sering kali harus **mengembalikan hasil** perhitungan agar bisa disimpan ke dalam variabel atau digunakan di kode selanjutnya. Gunakan kata kunci `return`.

```javascript
function tambah(angka1, angka2) {
    let hasil = angka1 + angka2;
    return hasil; // Mengembalikan nilai
}

let total = tambah(5, 10); // Menyimpan hasil return ke variabel total
console.log(total); // Output: 15
```

> [!WARNING]
Ketika kata kunci `return` dieksekusi, fungsi akan **berhenti secara langsung**. Kode apa pun yang ada di bawah `return` tidak akan pernah dijalankan.

---

## 4. Function Expression
Di JavaScript, fungsi adalah *first-class citizen*. Artinya, fungsi bisa diperlakukan seperti variabel biasa (bisa disimpan ke dalam variabel, atau dikirim sebagai argumen). 

```javascript
// Fungsi anonim (tanpa nama) disimpan ke variabel 'kali'
const kali = function(a, b) {
    return a * b;
};

console.log(kali(4, 5)); // Output: 20
```

> [!NOTE]
**Hoisting:** `Function Declaration` (menggunakan `function namaFungsi()`) diangkat ke atas saat kompilasi, sehingga bisa dipanggil sebelum dideklarasikan. Namun, `Function Expression` tidak bisa dipanggil sebelum variabelnya dideklarasikan.

---

## 5. Arrow Function (ES6 Modern)
Ini adalah inovasi terbesar di ES6. **Arrow Function** memungkinkan kita menulis fungsi dengan sintaks yang jauh lebih singkat dan rapi. Sering digunakan di *framework* modern seperti React atau Node.js.

### 5.1 Sintaks Dasar
Menghapus kata kunci `function` dan menambahkan `=>` (panah).
```javascript
// Function Expression biasa
const tambah = function(a, b) {
    return a + b;
};

// Arrow Function
const tambahArrow = (a, b) => {
    return a + b;
};
```

### 5.2 Implicit Return (Pengembalian Implisit)
Jika body fungsi hanya satu baris `return`, kita bisa menghapus kurung kurawal `{}` dan kata `return`.
```javascript
const tambah = (a, b) => a + b;
console.log(tambah(2, 3)); // Output: 5
```

### 5.3 Single Parameter
Jika hanya ada satu parameter, tanda kurung `()` bisa dihilangkan.
```javascript
const sapa = nama => `Halo, ${nama}`;
console.log(sapa("Xoryn")); // Output: Halo, Xoryn
```

> [!TIP]
Gunakan **Arrow Function** secara *default* saat membuat fungsi, kecuali kamu butuh fitur spesifik dari `function` biasa seperti mengakses `arguments` object atau pengikatan konteks `this` secara dinamis (akan dibahas di materi OOP).

---

## 6. Scope (Lingkup Variabel)
*Scope* menentukan dari mana sebuah variabel bisa diakses. Memahami ini krusial agar tidak terjadi konflik penamaan variabel.

| Jenis Scope | Deskripsi | Contoh |
| :--- | :--- | :--- |
| **Global Scope** | Variabel dideklarasikan di luar fungsi/blok. Bisa diakses dari **mana saja**. | `let global = 1;` |
| **Function Scope** | Variabel dideklarasikan di dalam fungsi. Hanya bisa diakses dari **dalam fungsi** itu sendiri. | `function tes() { let lokal = 2; }` |
| **Block Scope** | Variabel `let`/`const` di dalam blok `if`/`for`. Tidak bisa diakses dari luar blok. | `if (true) { let x = 5; }` |

```javascript
let namaGlobal = "Saya Global";

function tesScope() {
    let namaLokal = "Saya Lokal";
    console.log(namaGlobal); // ✅ Bisa akses
    console.log(namaLokal);  // ✅ Bisa akses
}

tesScope();
console.log(namaGlobal); // ✅ Bisa akses
console.log(namaLokal);  // ❌ ERROR! namaLokal is not defined
```

---

> [!QUOTE]
*"Fungsi adalah pekerja yang setia di dalam kodemu. Beri mereka instruksi yang jelas (parameter), dan mereka akan memberikan hasil (return) yang sesuai. Selanjutnya, kita akan masuk ke struktur data paling sering digunakan sehari-hari: Array!"*