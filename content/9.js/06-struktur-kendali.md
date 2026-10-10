---
title: Struktur Kendali JavaScript
description: Mengatur alur eksekusi program menggunakan percabangan (if/else, switch) dan perulangan (for, while, for...of) di JavaScript.
icon: i-lucide-git-branch
img: /docs/javascript/js-control-flow.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Struktur Kendali JavaScript
Secara default, kode JavaScript berjalan dari atas ke bawah baris demi baris. Namun, di dunia nyata, kita sering kali perlu membuat keputusan: *"Jika user sudah login, tampilkan dashboard, jika belum, tampilkan halaman login"*. Untuk mengatur alur program ini, kita menggunakan **Struktur Kendali (Control Flow)**.

Pada bagian ini, kamu akan mempelajari **Percabangan (Conditional)** untuk membuat keputusan, dan **Perulangan (Looping)** untuk mengulang blok kode tertentu secara otomatis hingga kondisi terpenuhi.

---

## 1. Percabangan (Conditional Statements)
Percabangan digunakan untuk mengeksekusi kode yang berbeda berdasarkan kondisi tertentu yang bernilai `true` atau `false`.

### 1.1 Statement `if`
Kode di dalam blok `if` hanya akan dijalankan jika kondisinya bernilai `true`.
```javascript
let cuaca = "Hujan";

if (cuaca === "Hujan") {
    console.log("Bawa payung ya!");
}
// Output: "Bawa payung ya!"
```

### 1.2 Statement `if...else`
Jika kondisi `if` bernilai `false`, maka kode di dalam blok `else` yang akan dieksekusi.
```javascript
let umur = 16;

if (umur >= 17) {
    console.log("Kamu sudah boleh membuat KTP.");
} else {
    console.log("Kamu belum cukup umur.");
}
// Output: "Kamu belum cukup umur."
```

### 1.3 Statement `else if`
Digunakan ketika kita memiliki beberapa kondisi yang perlu diperiksa secara berurutan.
```javascript
let nilai = 85;

if (nilai >= 90) {
    console.log("Grade A");
} else if (nilai >= 80) {
    console.log("Grade B"); // Ini yang akan tereksekusi
} else if (nilai >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D / Remedial");
}
```

---

## 2. Statement `switch`
Jika kamu mempunyai banyak kondisi yang membandingkan satu variabel dengan nilai yang berbeda-beda, `switch` bisa membuat kodenya lebih rapi daripada `if/else if` yang panjang.

```javascript
let hari = "Senin";
let kegiatan;

switch (hari) {
    case "Senin":
    case "Selasa": // Bisa digabung jika aksinya sama
        kegiatan = "Kerja di kantor";
        break; // Hentikan eksekusi switch
    case "Sabtu":
        kegiatan = "Liburan";
        break;
    default: // Jika tidak ada case yang cocok
        kegiatan = "Hari biasa";
}

console.log(kegiatan); // Output: "Kerja di kantor"
```

> [!WARNING]
Jangan lupa menulis kata kunci `break;` di setiap akhir `case`. Jika tidak ditulis, JavaScript akan terus mengeksekusi `case` di bawahnya meskipun nilainya tidak cocok (fall-through effect).

---

## 3. Perulangan (Loops)
Bayangkan kamu disuruh menulis angka 1 sampai 100. Tentu lelah jika ditulis manual. Perulangan digunakan untuk menjalankan blok kode yang sama berkali-kali selama kondisi tertentu masih `true`.

### 3.1 Perulangan `for`
Digunakan ketika kita tahu persis berapa kali kode harus diulang.
**Sintaks:** `for (inisialisasi; kondisi; step)`

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
}
// Output: 1, 2, 3, 4, 5
```

### 3.2 Perulangan `while`
Digunakan ketika kita tidak yakin berapa kali perulangan akan terjadi, selama kondisinya masih `true`.
```javascript
let sisaUang = 50000;

while (sisaUang > 0) {
    console.log("Belanja jajan... Sisa: " + sisaUang);
    sisaUang -= 20000; // Kurangi uang 20rb setiap loop
}
// Berhenti ketika sisaUang <= 0
```

### 3.3 Perulangan `do...while`
Mirip dengan `while`, bedanya blok kode dieksekusi **minimal 1 kali** sebelum kondisi diperiksa.
```javascript
let angka = 10;

do {
    console.log("Angka adalah " + angka);
    angka++;
} while (angka < 5); 
// Output: "Angka adalah 10" (Dieksekusi sekali, walau kondisi awalnya false)
```

---

## 4. Perulangan Modern ES6 (Iterasi Object/Array)
JavaScript modern menyediakan cara yang lebih mudah dan *clean* untuk mengulang isi Array atau Object.

### 4.1 `for...of` (Untuk Array / Iterable)
Mengambil nilai dari setiap elemen array secara berurutan.
```javascript
let buah = ["Apel", "Mangga", "Jeruk"];

for (let item of buah) {
    console.log(item);
}
// Output: Apel, Mangga, Jeruk
```

### 4.2 `for...in` (Untuk Object / Properti)
Mengambil *key* (properti) dari sebuah Object.
```javascript
let user = { nama: "Xoryn", umur: 22, role: "Developer" };

for (let key in user) {
    console.log(key + " : " + user[key]);
}
// Output: 
// nama : Xoryn
// umur : 22
// role : Developer
```

> [!TIP]
**Jangan tertukar!** Gunakan `for...of` untuk Array (mengambil nilai), dan `for...in` untuk Object (mengambil key).

---

## 5. Mengontrol Perulangan (`break` & `continue`)
Terkadang kita ingin menghentikan paksa perulangan atau melewati satu siklus tertentu.

- **`break`**: Menghentikan perulangan secara total dan keluar dari loop.
- **`continue`**: Melewatkan sisa kode di siklus saat ini, lalu lanjut ke siklus berikutnya.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Lewati angka 5, jangan di-print
    }
    if (i === 8) {
        break; // Berhenti total saat sampai angka 8
    }
    console.log(i);
}
// Output: 1, 2, 3, 4, 6, 7
```

---

> [!QUOTE]
*"Struktur kendali adalah otak dari aplikasimu. Dengan percabangan, kamu memberi program kemampuan untuk berpikir dan mengambil keputusan. Selanjutnya, kita akan bungkus logika-logika ini ke dalam satu wadah yang bisa dipakai ulang, yaitu Fungsi!"*