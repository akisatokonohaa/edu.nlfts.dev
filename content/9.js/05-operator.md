---
title: Operator JavaScript
description: Memahami berbagai jenis operator di JavaScript, dari aritmatika, perbandingan, logika, hingga operator modern ES6 seperti spread dan ternary.
icon: i-lucide-signature
img: /docs/javascript/js-operators.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Operator JavaScript
Jika variabel adalah "benda" atau "kotak", maka **Operator** adalah alat untuk mengolah, membandingkan, atau menggabungkan benda-benda tersebut. 

Pada bagian ini, kamu akan mempelajari berbagai macam operator bawaan JavaScript. Mulai dari operator aritmatika untuk hitung-menghitung, operator perbandingan untuk mengecek nilai, operator logika untuk merangkai kondisi, hingga operator modern ES6 yang membuat penulisan kode jadi lebih singkat dan elegan.

---

## 1. Operator Aritmatika
Operator ini digunakan untuk melakukan operasi matematika dasar pada angka (Number).

| Operator | Nama | Deskripsi | Contoh | Hasil |
| :---: | :--- | :--- | :--- | :--- |
| `+` | Penjumlahan | Menjumlahkan dua angka | `5 + 2` | `7` |
| `-` | Pengurangan | Mengurangi angka | `5 - 2` | `3` |
| `*` | Perkalian | Mengalikan angka | `5 * 2` | `10` |
| `/` | Pembagian | Membagi angka | `5 / 2` | `2.5` |
| `%` | Modulus | Sisa bagi dari pembagian | `5 % 2` | `1` |
| `**` | Eksponensial | Pangkat | `5 ** 2` | `25` |

### 1.1 Operator Increment & Decrement
Digunakan untuk menambah atau mengurangi nilai variabel sebanyak 1.
```javascript
let a = 5;
a++; // Sama dengan a = a + 1. Sekarang a menjadi 6
a--; // Sama dengan a = a - 1. Sekarang a kembali menjadi 5
```

> [!WARNING]
Untuk penjumlahan, pastikan keduanya bertipe `Number`. Jika salah satunya `String`, tanda `+` akan berfungsi sebagai **penggabung teks (concatenation)**, bukan menjumlahkan angka. Contoh: `"5" + 2` menghasilkan `"52"`.

---

## 2. Operator Penugasan (Assignment)
Operator ini digunakan untuk memberikan nilai ke variabel. Kita sudah sering menggunakan `=`. Namun ada bentuk singkatnya:

| Operator | Contoh | Sama Dengan | Deskripsi |
| :---: | :--- | :--- | :--- |
| `=` | `x = 5` | `x = 5` | Memberi nilai |
| `+=` | `x += 5` | `x = x + 5` | Menjumlahkan lalu disimpan kembali |
| `-=` | `x -= 5` | `x = x - 5` | Mengurangi lalu disimpan kembali |
| `*=` | `x *= 5` | `x = x * 5` | Mengalikan lalu disimpan kembali |
| `/=` | `x /= 5` | `x = x / 5` | Membagi lalu disimpan kembali |

```javascript
let saldo = 10000;
saldo += 5000; // saldo sekarang 15000
```

---

## 3. Operator Perbandingan
Operator ini digunakan untuk membandingkan dua nilai. Hasil dari operator ini selalu berupa **Boolean** (`true` atau `false`).

| Operator | Nama | Contoh | Hasil | Deskripsi |
| :---: | :--- | :--- | :--- | :--- |
| `==` | Loose Equal | `5 == "5"` | `true` | Cek nilai saja (tipe data boleh beda) |
| `===` | Strict Equal | `5 === "5"` | `false` | Cek nilai DAN tipe data |
| `!=` | Loose Not Equal | `5 != "5"` | `false` | Cek ketidaksamaan nilai |
| `!==` | Strict Not Equal | `5 !== "5"` | `true` | Cek ketidaksamaan nilai/tipe |
| `>` | Lebih Besar | `5 > 3` | `true` | - |
| `<` | Lebih Kecil | `5 < 3` | `false` | - |
| `>=` | Besar/Sama Dgn | `5 >= 5` | `true` | - |
| `<=` | Kecil/Sama Dgn | `5 <= 4` | `false` | - |

> [!TIP]
**Aturan Emas:** Selalu gunakan `===` (Strict Equal) dan `!==` (Strict Not Equal) saat membandingkan nilai. Hindari menggunakan `==` karena bisa memunculkan bug tak terduga akibat perbedaan tipe data.

---

## 4. Operator Logika
Operator ini digunakan untuk merangkai beberapa kondisi (biasanya hasil dari operator perbandingan).

| Operator | Nama | Sintaks | Deskripsi |
| :---: | :--- | :--- | :--- |
| `&&` | AND | `kondisi1 && kondisi2` | Benar jika **keduanya** `true` |
| `||` | OR | `kondisi1 || kondisi2` | Benar jika **salah satu/satu** `true` |
| `!` | NOT | `!kondisi` | Membalikkan nilai (`true` jadi `false`, sebaliknya) |

```javascript
let umur = 20;
let punyaSIM = true;

// AND: Harus umur di atas 17 DAN punya SIM
let bolehBawaMotor = (umur > 17) && (punyaSIM == true); // true

// OR: Boleh masuk jika pakai kemeja ATAU pakai dasi
let bolehMasuk = (pakaian == "kemeja") || (pakaian == "dasi");
```

---

## 5. Operator Ternary (`? :`)
Ternary adalah operator kondisional yang sering digunakan sebagai *shortcut* / jalan pintas dari `if/else`. 

**Sintaks:** `kondisi ? nilai_jika_true : nilai_jika_false`

```javascript
let skor = 80;

// Jika skor di atas 75, status = "Lulus", jika tidak "Gagal"
let status = (skor > 75) ? "Lulus" : "Gagal";

console.log(status); // Output: "Lulus"
```

---

## 6. Operator Tipe (Typeof)
Seperti yang kita pelajari di modul sebelumnya, `typeof` digunakan untuk mengecek tipe data dari sebuah variabel.
```javascript
let nama = "Xoryn";
console.log(typeof nama); // Output: "string"
```

---

## 7. Operator Modern ES6+
JavaScript modern membawa beberapa operator khusus yang membuat kode jauh lebih ringkas.

### 7.1 Nullish Coalescing (`??`)
Memberikan nilai alternatif **hanya jika** variabel bernilai `null` atau `undefined`. (Berbeda dengan `||` yang menganggap `0` atau `""` sebagai *false*).
```javascript
let stok = 0;

// Pakai || : 0 dianggap false, jadi ambil "Habis"
let tampil1 = stok || "Habis"; 

// Pakai ?? : 0 adalah angka valid, jadi ambil 0
let tampil2 = stok ?? "Habis"; 
```

### 7.2 Spread Operator (`...`)
Memecah (mengurai) elemen dari Array atau Object agar bisa digabungkan atau disalin dengan mudah.
```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Menggabungkan menjadi [1, 2, 3, 4, 5]

let obj1 = { nama: "Budi" };
let obj2 = { ...obj1, umur: 20 }; // { nama: "Budi", umur: 20 }
```

---

> [!QUOTE]
*"Operator adalah mesin penggerak logikamu. Dengan aritmatika, perbandingan, dan logika yang pas, kamu bisa mulai membuat keputusan otomatis di dalam program. Di modul selanjutnya, kita akan belajar cara mengatur alur keputusan tersebut melalui Struktur Kendali!"*