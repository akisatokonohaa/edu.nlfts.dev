---
title: DOM Manipulation
description: Mengubah elemen HTML dan CSS secara dinamis menggunakan JavaScript, serta menangani interaksi pengguna dengan Event Listener.
icon: i-lucide-mouse-pointer-click
img: /docs/javascript/js-dom.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# DOM Manipulation JavaScript
Selama ini, kode JavaScript yang kita tulis hanya berputar di sekitar *Console* atau terminal. Saatnya keluar dari terminal dan mulai berinteraksi dengan halaman web yang dilihat oleh pengguna! 

Pada bagian ini, kamu akan mempelajari **DOM (Document Object Model)**. Kamu akan belajar cara mengambil elemen HTML, mengubah teks dan warnanya, menambahkan elemen baru, hingga merespon aksi pengguna seperti klik tombol atau input form menggunakan *Event Listener*.

---

## 1. Apa Itu DOM?
Saat browser memuat halaman HTML, ia akan membuat sebuah model dari dokumen tersebut dalam bentuk struktur pohon (tree). Model inilah yang disebut **DOM**. 

JavaScript memiliki akses penuh ke DOM ini. Artinya, JS bisa menambah, mengubah, atau menghapus elemen HTML dan atribut CSS secara *real-time* tanpa harus me-*refresh* halaman.

```text
Document (Halaman Web)
 └── <html>
      ├── <head>
      │    └── <title>Belajar DOM</title>
      └── <body>
           ├── <h1 id="judul">Halo</h1>      ← Bisa diubah JS
           └── <button class="tombol">Klik</button> ← Bisa dipasang event JS
```

---

## 2. Seleksi Elemen HTML
Untuk memanipulasi elemen, langkah pertama adalah "menangkap" elemen tersebut dari HTML. Ada beberapa method bawaan yang bisa digunakan:

| Method | Deskripsi | Hasil |
| :--- | :--- | :--- |
| `getElementById("id")` | Mencari elemen berdasarkan atribut `id`. | 1 Elemen |
| `getElementsByClassName("class")` | Mencari elemen berdasarkan atribut `class`. | HTMLCollection (Array-like) |
| `querySelector("selector")` | Mencari elemen **pertama** yang cocok dengan selector CSS. | 1 Elemen |
| `querySelectorAll("selector")` | Mencari **semua** elemen yang cocok. | NodeList (Bisa di-`forEach`) |

### 2.1 Contoh Praktik Seleksi
```html
<!-- HTML -->
<h1 id="judul-utama">Saya Belajar DOM</h1>
<p class="teks">Ini paragraf pertama.</p>
<p class="teks">Ini paragraf kedua.</p>
```

```javascript
// JavaScript
let judul = document.getElementById("judul-utama");
let paragrafPertama = document.querySelector(".teks");
let semuaParagraf = document.querySelectorAll(".teks");
```

> [!TIP]
`querySelector` dan `querySelectorAll` adalah standar modern. Kamu bisa menggunakan sintaks CSS (`#id`, `.class`, `div > p`) untuk menyeleksi elemen, sehingga jauh lebih fleksibel.

---

## 3. Memanipulasi Konten & Atribut
Setelah elemen ditangkap, kita bisa mengubah isinya.

### 3.1 Mengubah Teks (`innerText` & `textContent`)
- `innerText`: Mengubah teks yang terlihat di layar.
- `textContent`: Mengubah semua teks (termasuk yang tersembunyi oleh CSS).

```javascript
let judul = document.querySelector("#judul-utama");
judul.innerText = "Saya Sudah Jago DOM!"; 
// Teks di layar akan langsung berubah
```

### 3.2 Mengubah Struktur HTML (`innerHTML`)
Jika kamu ingin menyisipkan tag HTML baru, gunakan `innerHTML`.
```javascript
let box = document.querySelector("#box");
box.innerHTML = "<b>Teks ini tebal</b> dan ini biasa.";
```

> [!WARNING]
Hati-hati menggunakan `innerHTML` jika datanya berasal dari input pengguna, karena rentan terhadap serangan **XSS (Cross-Site Scripting)**.

---

## 4. Memanipulasi Style (CSS)
Kamu bisa mengubah CSS secara langsung menggunakan properti `.style`. Aturan CSS yang memakai tanda hubung (`background-color`) ditulis dengan format **camelCase** (`backgroundColor`).

```javascript
let judul = document.querySelector("#judul-utama");

judul.style.color = "blue";
judul.style.backgroundColor = "yellow";
judul.style.fontSize = "32px";
```

### 4.1 Menggunakan `classList` (Best Practice)
Mengubah style satu per satu lewat `.style` kurang efisien. Cara terbaik adalah membuat class di CSS, lalu menambah/menghapus class tersebut dari JS.

```javascript
let tombol = document.querySelector(".tombol");

// Menambah class CSS
tombol.classList.add("btn-primary");

// Menghapus class CSS
tombol.classList.remove("btn-primary");

// Toggle: Jika ada, hapus. Jika tidak ada, tambahkan. (Sangat berguna!)
tombol.classList.toggle("active");
```

---

## 5. Event Listener (Interaktivitas)
Web menjadi interaktif ketika program merespons aksi pengguna (klik, ketik, scroll). Di JavaScript, kita mendengarkan aksi tersebut menggunakan **Event Listener**.

### 5.1 Cara Modern: `addEventListener()`
Ini adalah cara paling disarankan karena bisa memasang banyak fungsi sekaligus pada satu elemen.

```javascript
let tombol = document.querySelector("#tombolSaya");

tombol.addEventListener("click", function() {
    console.log("Tombol telah diklik!");
    alert("Halo, kamu baru saja klik tombol.");
});
```

### 5.2 Jenis-Jenis Event Umum
| Event | Dipicu Ketika... |
| :--- | :--- |
| `click` | Pengguna klik kiri mouse pada elemen. |
| `dblclick` | Pengguna klik dua kali (double click). |
| `mouseenter` | Kursor mouse masuk ke area elemen. |
| `mouseleave` | Kursor mouse keluar dari area elemen. |
| `input` | Pengguna mengetik di dalam `<input>` atau `<textarea>`. |
| `submit` | Pengguna menekan tombol submit pada `<form>`. |
| `keydown` | Pengguna menekan tombol di keyboard. |

### 5.3 Mengambil Data dari Event (`e`)
Saat event terjadi, kita bisa mengambil detail informasinya melalui parameter objek `e` (atau `event`).

```javascript
let inputNama = document.querySelector("#namaInput");

inputNama.addEventListener("input", function(e) {
    // e.target merujuk ke elemen yang memicu event (inputNama)
    console.log("Kamu mengetik: " + e.target.value);
});
```

---

> [!QUOTE]
*"DOM adalah jembatan yang membuat JavaScript menjadi "raja" di halaman web. Dengan DOM dan Event, kamu bisa membuat apapun terjadi di layar pengguna. Selanjutnya, kita akan bahas cara mengambil data dari internet tanpa me-refresh halaman menggunakan Asynchronous JavaScript!"*