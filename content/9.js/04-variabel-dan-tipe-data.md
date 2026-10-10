---
title: Variabel & Tipe Data
description: Memahami cara menyimpan data menggunakan var, let, const, serta mengenali tipe data primitif dan reference dalam JavaScript.
icon: i-lucide-database
img: /docs/javascript/js-variables.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Variabel & Tipe Data JavaScript
Dalam pemrograman, kita sering kali perlu menyimpan data sementara, seperti nama pengguna, skor permainan, atau status login. Untuk itu, kita menggunakan **Variabel**. Dan jenis data yang disimpan di dalamnya disebut **Tipe Data**.

Pada bagian ini, kamu akan mempelajari cara mendeklarasikan variabel modern menggunakan `let` dan `const` (serta mengapa `var` ditinggalkan). Kamu juga akan mengenal berbagai macam tipe data bawaan JavaScript, mulai dari teks, angka, hingga logika benar/salah.

---

## 1. Apa Itu Variabel?
Variabel adalah "wadah" atau "kotak" bernama yang digunakan untuk menyimpan nilai (data) di dalam memori komputer. Bayangkan variabel seperti sebuah gelas yang bisa diisi air (data). 

Di JavaScript modern, ada tiga cara untuk membuat variabel: `var`, `let`, dan `const`.

### 1.1 Menggunakan `let` (Bisa Diubah)
Gunakan `let` jika nilai dari variabel tersebut kemungkinan akan **berubah/diubah** di tengah jalan program.
```javascript
let skor = 10;
console.log(skor); // Output: 10

skor = 20; // Mengubah nilai variabel skor
console.log(skor); // Output: 20
```

### 1.2 Menggunakan `const` (Tetap/Konstan)
Gunakan `const` jika nilai variabel tersebut **tidak akan pernah diubah** selama program berjalan. Penggunaan `const` sangat dianjurkan agar kode lebih aman dari perubahan tak terduga.
```javascript
const pi = 3.14;
console.log(pi); // Output: 3.14

pi = 3.15; // ❌ ERROR! Tidak bisa mengubah nilai const
```

### 1.3 Menggunakan `var` (Legacy / Jadul)
`var` adalah cara lama membuat variabel sebelum era ES6. Saat ini, `var` **sangat tidak disarankan** digunakan karena memiliki masalah *hoisting* dan *scope* yang bisa membingungkan. Gunakan selalu `let` atau `const`.

> [!TIP]
**Aturan Emas:** Selalu gunakan `const` secara *default*. Jika kamu merasa nilai tersebut perlu diubah nanti (seperti counter loop atau hasil kalkulasi), barulah ubah menjadi `let`.

---

## 2. Perbedaan Scope: `let/const` vs `var`
Salah satu alasan utama `let` dan `const` diperkenalkan adalah karena masalah **Scope** (ruang lingkup di mana variabel bisa diakses).

- **Function Scope (`var`):** Variabel hanya terkunci di dalam *fungsi*. Jika dideklarasikan di dalam blok `if` atau `for`, variabel tersebut bisa "bocor" ke luar.
- **Block Scope (`let` & `const`):** Variabel terkunci di dalam sepasang kurung kurawal `{ ... }` (seperti blok `if`, `for`, `while`).

```javascript
if (true) {
    var namaVar = "Budi";
    let namaLet = "Andi";
}

console.log(namaVar); // Output: "Budi" (Bocor ke luar)
console.log(namaLet); // ❌ ERROR: namaLet is not defined
```

---

## 3. Tipe Data Primitif
JavaScript adalah bahasa yang *dynamically typed*, artinya kamu tidak perlu menyebutkan tipe data saat membuat variabel (seperti `int` atau `String` di Java/C). Mesin JS akan menebaknya sendiri. 

Tipe data **primitif** adalah tipe data dasar yang nilainya disimpan langsung di dalam variabel. Ada 7 tipe data primitif di JavaScript:

### 3.1 String (Teks)
Digunakan untuk menyimpan teks. Ditulis di antara tanda kutip tunggal (`'...'`), ganda (`"..."`), atau *backticks* (` \`...\` `).
```javascript
let namaDepan = "Radied";       // Double quotes
let namaBelakang = 'Tyaa';      // Single quotes
let sapaan = `Halo, ${namaDepan}`; // Template literal (bisa sisipkan variabel)
```

### 3.2 Number (Angka)
Menyimpan angka, baik bilangan bulat (integer) maupun desimal (float). JavaScript hanya punya satu tipe angka (tidak membedakan int/float).
```javascript
let umur = 25;
let berat = 65.5;
let negatif = -10;
```

### 3.3 Boolean (Logika)
Hanya memiliki dua nilai: `true` (benar) atau `false` (salah). Sering digunakan untuk kondisi (`if/else`).
```javascript
let isLogin = true;
let isDeleted = false;
```

### 3.4 Undefined (Belum bernilai)
Variabel yang sudah dideklarasikan tapi **belum diberi nilai**. Ini adalah nilai *default* dari JS.
```javascript
let alamat;
console.log(alamat); // Output: undefined
```

### 3.5 Null (Kosong)
Berbeda dengan `undefined`, `null` adalah nilai yang **sengaja dikosongkan** oleh programmer untuk menandakan bahwa data tersebut tidak ada.
```javascript
let pasangan = null; // Sengaja dikosongkan karena belum ada
```

### 3.6 Symbol & BigInt (Lanjutan)
- **Symbol:** Tipe data yang nilainya selalu unik (sering dipakai untuk *key* di Object kompleks).
- **BigInt:** Digunakan untuk angka yang sangat besar (di atas limit `9007199254740991`).
```javascript
let bigNum = 9007199254740992n;
let idUnik = Symbol('id');
```

---

## 4. Tipe Data Reference (Non-Primitif)
Jika tipe data primitif menyimpan nilai langsung, tipe data *reference* menyimpan **alamat (pointer)** ke lokasi memori. Yang termasuk dalam kategori ini adalah **Object** dan **Array** (yang sebenarnya juga merupakan Object).

Kita akan membahas Array dan Object secara mendalam di modul-modul selanjutnya, tapi ini gambarannya:
```javascript
// Array (Kumpulan data berurutan)
let buah = ["Apel", "Mangga", "Jeruk"];

// Object (Pasangan Key dan Value)
let user = {
    nama: "Xoryn",
    umur: 22,
    isLogin: true
};
```

---

## 5. Mengecek Tipe Data (`typeof`)
Untuk mengecek tipe data apa yang sedang disimpan di dalam sebuah variabel, gunakan operator `typeof`.

```javascript
console.log(typeof "Halo");     // Output: "string"
console.log(typeof 100);       // Output: "number"
console.log(typeof true);      // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null);      // Output: "object" 🤯 (Ini adalah bug bawaan JS sejak dulu)
```

> [!WARNING]
`typeof null` menghasilkan `"object"`. Ini adalah *bug* historis di JavaScript yang tidak bisa diperbaiki karena akan merusak jutaan website lama. Jadi, hati-hati saat mengecek tipe data `null`!

---

> [!QUOTE]
*"Variabel adalah wadah, tipe data isinya. Dengan `let` dan `const` di tangan, serta pemahaman tipe data di kepala, kamu siap untuk mengoperasikan variabel-variabel ini menggunakan Operator!"*