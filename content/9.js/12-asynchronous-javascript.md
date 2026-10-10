---
title: Asynchronous JavaScript
description: Memahami konsep pemrograman asynchronous di JavaScript, mulai dari Callback, Promise, hingga Async/Await dan Fetch API.
icon: i-lucide-loader
img: /docs/javascript/js-async.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Asynchronous JavaScript
Sejauh ini, kode yang kita tulis berjalan secara berurutan baris demi baris (*Synchronous*). Namun, di dunia nyata, kita sering berhadapan dengan proses yang butuh waktu tidak tentu, seperti mengambil data dari server, memproses file besar, atau *query* database. Jika kita menunggu proses itu selesai, halaman web kita akan "macet" (*blocking*).

Pada bagian ini, kamu akan mempelajari inti dari JavaScript modern: **Asynchronous Programming**. Kita akan membahas evolusi cara menangani proses async, mulai dari `Callback`, `Promise`, hingga sintaks super elegan `Async/Await`, serta cara mengambil data dari internet menggunakan `Fetch API`.

---

## 1. Synchronous vs Asynchronous
- **Synchronous:** Eksekusi kode baris demi baris. Jika baris ke-2 butuh 5 detik, baris ke-3 harus menunggu 5 detik baru dijalankan.
- **Asynchronous:** Mesin JS tidak menunggu proses yang lama selesai. Ia langsung melanjutkan eksekusi baris berikutnya, dan ketika proses yang lama itu selesai, ia akan memberi tahu.

```javascript
console.log("1. Mulai");

// Proses async (Simulasi delay 2 detik)
setTimeout(() => {
    console.log("2. Proses ini selesai setelah 2 detik");
}, 2000);

console.log("3. Selesai");
// Output: 1, 3 (langsung), lalu 2 (setelah 2 detik)
```

---

## 2. Callback (Cara Lama)
Callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain, dan akan dieksekusi setelah tugas tertentu selesai. Ini adalah cara klasik menangani async di JS.

```javascript
function ambilData(callback) {
    setTimeout(() => {
        let data = "Data dari Server";
        callback(data);
    }, 1000);
}

ambilData(function(hasil) {
    console.log(hasil); // Output: Data dari Server (setelah 1 detik)
});
```

> [!WARNING]
Jika kita memiliki banyak proses async yang saling bergantung, kita harus menulis callback di dalam callback di dalam callback. Kondisi ini disebut **Callback Hell**, membuat kode sangat susah dibaca dan dirawat.

---

## 3. Promise (Solusi ES6)
`Promise` adalah objek yang merepresentasikan keberhasilan atau kegagalan dari sebuah event asynchronous di masa depan. Bayangkan seperti memesan makanan di restoran: kamu dapat struk (Promise), lalu kamu duduk (tidak *blocking*). Nanti struk itu akan berstatus *berhasil* (makanan datang) atau *gagal* (bahan habis).

### 3.1 State (Status) Promise
- **Pending:** Sedang berjalan.
- **Fulfilled (Resolved):** Berhasil.
- **Rejected:** Gagal.

### 3.2 Menggunakan `.then()` dan `.catch()`
Kita bisa menangkap hasil sukses menggunakan `.then()` dan menangkap error menggunakan `.catch()`.

```javascript
let janjiMakan = new Promise((resolve, reject) => {
    let stokTersedia = true;

    if (stokTersedia) {
        resolve("Makanan siap, silakan dimakan!");
    } else {
        reject("Maaf, stok habis.");
    }
});

janjiMakan
    .then((hasil) => console.log(hasil)) // Jika resolve
    .catch((err) => console.log(err));  // Jika reject
```

---

## 4. Async / Await (Sintaks Modern ES8)
`Promise` bagus, tapi `.then()` yang panjang tetap membuat kode terkesan berantakan. ES8 menghadirkan `async/await`, sebuah *syntactic sugar* yang membuat kode asynchronous terlihat persis seperti kode synchronous biasa.

### 4.1 Cara Menggunakan
- Tulis `async` di depan function.
- Gunakan `await` untuk memberhentikan eksekusi sampai Promise selesai.

```javascript
async function prosesData() {
    try {
        console.log("Memulai...");
        // "Menunggu" janjiMakan selesai
        let hasil = await janjiMakan; 
        console.log(hasil);
    } catch (error) {
        console.log("Terjadi error: " + error);
    }
}

prosesData();
```

> [!TIP]
Gunakan blok `try...catch` saat menggunakan `async/await` untuk menangkap error (pengganti dari `.catch()` pada Promise biasa).

---

## 5. Fetch API (Real-World Async)
Kasus penggunaan async paling sering adalah mengambil data dari API server (Format JSON). JavaScript modern memiliki `fetch()` bawaan untuk melakukan ini.

### 5.1 Fetch dengan Async/Await
Kita akan mencoba mengambil data dummy pengguna dari API publik JSONPlaceholder.

```javascript
async function ambilUser() {
    try {
        // 1. Fetch endpoint (defaultnya GET)
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        
        // 2. Cek apakah request berhasil (status 200)
        if (!response.ok) throw new Error("Gagal mengambil data");
        
        // 3. Parsing body response dari JSON ke Object JS
        let user = await response.json();
        
        console.log(`Nama User: ${user.name}`);
        console.log(`Email: ${user.email}`);
    } catch (err) {
        console.log(err.message);
    }
}

ambilUser();
```

> [!INFO]
`fetch()` mengembalikan sebuah `Promise`. Karena itu kita bisa menggunakan `await` padanya. Method `.json()` juga mengembalikan Promise, jadi ia butuh `await` lagi.

---

> [!QUOTE]
*"Async/Await adalah puncak keanggunan JavaScript. Kamu kini bisa membuat kode yang berjalan secara paralel namun tertulis secara berurutan. Di modul terakhir, kita akan merapikan struktur file JS agar siap dipakai di proyek besar menggunakan Modul & NPM!"*