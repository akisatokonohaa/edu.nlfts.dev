---
title: Objek & OOP Dasar
description: Mengenal tipe data Object, properti, method, keyword this, hingga konsep dasar Object-Oriented Programming (OOP) menggunakan Class dan Constructor.
icon: i-lucide-box
img: /docs/javascript/js-oop.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# Objek & OOP Dasar JavaScript
Dalam dunia nyata, suatu objek memiliki karakteristik (warna, ukuran) dan kelakuan (berjalan, berbicara). Di JavaScript, konsep ini diadopsi melalui tipe data **Object** dan paradigma **Object-Oriented Programming (OOP)**.

Pada bagian ini, kamu akan belajar cara membuat objek literat, mendefinisikan properti dan method, memahami keyword `this`, lalu beralih ke penulisan kode yang lebih terstruktur menggunakan `class` dan `constructor` modern (ES6).

---

## 1. Apa Itu Objek?
Jika Array adalah kumpulan data berurutan, **Object** adalah kumpulan data yang memiliki pasangan **Key dan Value** (Properti). Key bertindak sebagai label/nama, dan Value adalah nilainya.

Objek ditulis menggunakan kurung kurawal `{}`.
```javascript
let mobil = {
    merk: "Toyota",     // Properti "merk" dengan value "Toyota"
    tahun: 2020,        // Properti "tahun"
    warna: "Hitam"
};
```

---

## 2. Mengakses & Mengubah Properti
Ada dua cara untuk mengakses nilai dari sebuah objek: **Dot Notation** (titik) dan **Bracket Notation** (kurung siku).

```javascript
let user = {
    nama: "Xoryn",
    umur: 22
};

// 1. Dot Notation (Sering dipakai)
console.log(user.nama); // Output: "Xoryn"

// 2. Bracket Notation (Dipakai jika key ada spasi/karakter aneh)
console.log(user["umur"]); // Output: 22

// Mengubah nilai
user.umur = 23;
console.log(user.umur); // Output: 23
```

---

## 3. Method & Keyword `this`
Jika properti berisi data (string, number), maka **Method** adalah properti yang berisi **fungsi**. Method digunakan untuk mendefinisikan "kelakuan" dari objek tersebut.

Di dalam method, kita sering menggunakan keyword **`this`**. `this` merujuk pada objek "pemilik" kode yang sedang dijalankan.

```javascript
let mahasiswa = {
    nama: "Budi",
    jurusan: "Informatika",
    
    // Ini adalah Method
    perkenalan: function() {
        // "this.nama" sama dengan "mahasiswa.nama"
        return `Halo, saya ${this.nama} dari jurusan ${this.jurusan}`;
    }
};

console.log(mahasiswa.perkenalan()); 
// Output: "Halo, saya Budi dari jurusan Informatika"
```

> [!WARNING]
Perilaku `this` di JavaScript bisa membingungkan jika dipakai di *regular function* biasa (sering mengembalikan objek `Window` atau `undefined`). Namun, jika dipanggil dari dalam method objek (seperti contoh di atas), `this` akan merujuk ke objek tersebut.

---

## 4. Object Destructuring & Spread (ES6)
Sama seperti array, kita bisa mengekstrak properti objek ke dalam variabel dengan mudah menggunakan **Destructuring**.

### 4.1 Destructuring
Nama variabel harus sama dengan nama properti objeknya.
```javascript
let user = { nama: "Andi", umur: 20, status: "Aktif" };

// Ekstrak properti nama dan umur
let { nama, umur } = user;

console.log(nama); // Output: "Andi"
```

### 4.2 Spread Operator (`...`)
Menyalin atau menggabungkan properti objek.
```javascript
let dataDasar = { role: "User", aktif: true };
let dataLengkap = { ...dataDasar, nama: "Citra" };

console.log(dataLengkap); 
// Output: { role: "User", aktif: true, nama: "Citra" }
```

---

## 5. Pengenalan Class & OOP
Membuat objek satu per satu menggunakan *object literal* (seperti di atas) tidak efisien jika kita butuh ratusan objek yang strukturnya sama. Di sinilah **Class** hadir sebagai solusi (diperkenalkan di ES6).

**Class** adalah *blueprint* (cetak biru) atau desain untuk membuat objek. Sementara **Object** adalah barang jadinya (instance) dari class tersebut.

### 5.1 Sintaks Dasar Class
```javascript
class Hewan {
    // Constructor: Method khusus yang dijalankan otomatis saat objek dibuat
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
    }

    // Method biasa
    bersuara() {
        return `${this.nama} mengeluarkan suara!`;
    }
}
```

### 5.2 Membuat Instance (Objek)
Untuk membuat objek dari Class, gunakan kata kunci `new`.
```javascript
let kucing = new Hewan("Tom", "Mamalia");
let anjing = new Hewan("Spike", "Mamalia");

console.log(kucing.nama); // Output: "Tom"
console.log(anjing.bersuara()); // Output: "Spike mengeluarkan suara!"
```

> [!TIP]
Pikirkan Class seperti cetakan kue. `constructor` adalah saat kamu memasukkan adonan ke cetakan. `new Hewan()` adalah saat kamu mengeluarkan kuenya dari cetakan. Kamu bisa membuat banyak kue (objek) dengan satu cetakan (class)!

---

## 6. Parameter di Constructor
Constructor adalah fungsi spesial. Kamu bisa memberikan parameter saat membuat objek `new` agar data dinamis.
```javascript
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.isActive = true; // Default value
    }
}

let user1 = new User("radiedtya", "radied@mail.com");
let user2 = new User("budi123", "budi@mail.com");

console.log(user1.username); // "radiedtya"
console.log(user2.isActive); // true
```

---

> [!QUOTE]
*"Objek adalah representasi digital dari dunia nyata. Dengan Class, kita bisa memproduksi objek secara massal dengan struktur yang konsisten. Selanjutnya, kita akan bawa OOP ini ke level selanjutnya: pewarisan (Inheritance) dan enkapsulasi!"*