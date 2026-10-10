---
title: Array & Manipulasinya
description: Mengenal struktur data Array di JavaScript, cara menyimpan data berurutan, serta penggunaan method array modern seperti map, filter, dan reduce.
icon: i-lucide-list
img: /docs/javascript/js-arrays.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Array & Manipulasinya JavaScript
Saat kita memiliki satu variabel, kita bisa menyimpan satu data. Tapi bagaimana jika kita perlu menyimpan daftar nama 50 siswa? Membuat 50 variabel tentu sangat tidak efisien. Di sinilah **Array** berperan.

Pada bagian ini, kamu akan mempelajari struktur data Array di JavaScript. Kita akan membahas cara membuat array, mengakses elemennya, memodifikasi data di dalamnya, dan yang paling penting: menggunakan *built-in methods* modern ES6+ (`map`, `filter`, `reduce`) yang menjadi *DNA* dari library JavaScript modern seperti React atau Vue.

---

## 1. Apa Itu Array?
Array adalah tipe data *reference* yang digunakan untuk menyimpan kumpulan nilai (elemen) secara berurutan dalam satu variabel tunggal. Array ditulis menggunakan kurung siku `[]`, dan setiap elemennya dipisahkan oleh tanda koma `,`.

```javascript
let buah = ["Apel", "Mangga", "Jeruk"];
let angka = [10, 20, 30, 40];
let campuran = ["Xoryn", 22, true, null]; // Boleh campur tipe data, tapi jarang dilakukan
```

---

## 2. Mengakses & Mengubah Elemen Array
Setiap elemen dalam array memiliki **index** (nomor urut). Penting untuk diingat: **Index di JavaScript selalu dimulai dari 0**, bukan 1.

### 2.1 Mengakses Elemen
Gunakan nama variabel diikuti kurung siku berisi nomor index.
```javascript
let hewan = ["Kucing", "Anjing", "Kelinci"];

console.log(hewan[0]); // Output: "Kucing"
console.log(hewan[1]); // Output: "Anjing"
```

### 2.2 Mengubah Nilai Elemen
Kita bisa mengganti nilai di dalam array dengan mengakses indexnya lalu memberi nilai baru.
```javascript
let hewan = ["Kucing", "Anjing", "Kelinci"];
hewan[1] = "Burung"; // Mengganti "Anjing" menjadi "Burung"

console.log(hewan); // Output: ["Kucing", "Burung", "Kelinci"]
```

### 2.3 Mengecek Panjang Array
Gunakan properti `.length` untuk mengetahui berapa banyak elemen di dalam array.
```javascript
console.log(hewan.length); // Output: 3
```

---

## 3. Method Array Dasar (Stack & Queue)
JavaScript menyediakan fungsi bawaan (method) untuk menambah atau menghapus elemen dari array.

| Method | Fungsi | Contoh |
| :--- | :--- | :--- |
| `push()` | **Menambah** elemen di **akhir** array | `buah.push("Anggur")` |
| `pop()` | **Menghapus** elemen di **akhir** array | `buah.pop()` |
| `unshift()` | **Menambah** elemen di **awal** array | `buah.unshift("Pisang")` |
| `shift()` | **Menghapus** elemen di **awal** array | `buah.shift()` |

> [!INFO]
Operasi `push()` dan `pop()` sangat cepat. Namun, operasi `unshift()` dan `shift()` relatif lebih lambat pada data besar karena harus menggeser index seluruh elemen array.

---

## 4. Array Methods Modern ES6+ (Wajib Kuasai!)
Di pengembangan JavaScript modern, kita jarang sekali menggunakan perulangan `for` biasa untuk memproses array. Kita menggunakan *higher-order functions* berikut:

### 4.1 `.forEach()`
Digunakan untuk melakukan iterasi (looping) ke setiap elemen array. **Tidak mengembalikan array baru**.
```javascript
let nama = ["Budi", "Andi", "Citra"];

nama.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`);
});
// Output: 1. Budi, 2. Andi, 3. Citra
```

### 4.2 `.map()`
Membuat array **baru** dengan hasil transformasi dari setiap elemen array lama. Panjang array baru sama dengan array lama.
```javascript
let angka = [1, 2, 3];

let kaliDua = angka.map(function(item) {
    return item * 2;
});

console.log(kaliDua); // Output: [2, 4, 6]
```

### 4.3 `.filter()**
Membuat array **baru** yang hanya berisi elemen yang **lolos syarat** (kondisi bernilai `true`).
```javascript
let umur = [12, 17, 21, 8, 30];

let dewasa = umur.filter(function(item) {
    return item >= 17; // Syarat: umur di atas 17
});

console.log(dewasa); // Output: [17, 21, 30]
```

### 4.4 `.reduce()`
Menggabungkan seluruh elemen array menjadi satu nilai tunggal (misal: hasil penjumlahan total).
```javascript
let harga = [10000, 20000, 5000];

let total = harga.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0); // 0 adalah nilai awal (initial value)

console.log(total); // Output: 35000
```

> [!TIP]
Tiga method di atas (`map`, `filter`, `reduce`) sering dirantai (*chaining*). Contoh: `angka.map(...).filter(...).reduce(...)`. Kuasai 3 ini, dan kode JavaScript kamu akan terlihat sangat profesional!

---

## 5. Array Multidimensi (Nested Array)
Array bisa berisi array lain di dalamnya. Sering digunakan untuk membuat matriks atau tabel data.
```javascript
let matriks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Mengakses baris ke-2 (index 1), kolom ke-3 (index 2)
console.log(matriks[1][2]); // Output: 6
```

---

## 6. Array Destructuring & Spread (ES6)
Sama seperti object, kita bisa mengekstrak nilai array dengan mudah berdasarkan urutannya.

### 6.1 Destructuring
```javascript
let user = ["Xoryn", "radiedtya", 22];

let [nama, username, umur] = user;

console.log(nama);     // Output: "Xoryn"
console.log(umur);    // Output: 22
```

### 6.2 Spread Operator (`...`)
Menggabungkan atau menyalin array dengan sangat mudah.
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];

let gabungan = [...arr1, ...arr2, 5];
console.log(gabungan); // Output: [1, 2, 3, 4, 5]
```

---

> [!QUOTE]
*"Array adalah gudang data terbaik dalam pemrograman. Dengan method seperti `map` dan `filter`, kamu memegang kemampuan untuk memproses data secara fungsional dan elegan. Selanjutnya, kita akan masuk ke struktur data yang lebih kompleks: Objek dan OOP!"*