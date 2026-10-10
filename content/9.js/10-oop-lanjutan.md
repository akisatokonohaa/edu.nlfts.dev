---
title: OOP Lanjutan (Inheritance & Encapsulation)
description: Mendalami konsep Object-Oriented Programming lanjutan di JavaScript, mencakup pewarisan (Inheritance), Enkapsulasi (Private Fields), dan Polimorfisme.
icon: i-lucide-network
img: /docs/javascript/js-oop-advanced.svg
authors:
  - name: Xoryn
    username: radiedtya
    avatar: https://www.github.com/radiedtya.png
    to: https://github.com/radiedtya
    target: _blank
---

# OOP Lanjutan JavaScript
Setelah memahami cara membuat *Class* dan *Object*, saatnya kita naik ke level berikutnya. Dalam pemrograman berorientasi objek (OOP), kita tidak hanya membuat objek yang berdiri sendiri, tetapi juga membangun hierarki dan hubungan antar objek.

Pada bagian ini, kamu akan mempelajari konsep pilar OOP lanjutan di JavaScript: **Inheritance** (Pewarisan) untuk menurunkan sifat class induk ke class anak, **Encapsulation** (Enkapsulasi) untuk melindungi data menggunakan *private fields*, serta **Polymorphism** (Polimorfisme) untuk menimpa fungsi bawaan.

---

## 1. Inheritance (Pewarisan)
Inheritance adalah konsep di mana sebuah *Class* (anak) mewarisi properti dan method dari *Class* lain (induk). Ini memungkinkan kita menggunakan kembali kode (code reusability) tanpa harus menulis ulang logika yang sama.

### 1.1 Kata Kunci `extends` dan `super`
Di JavaScript, pewarisan dilakukan menggunakan kata kunci `extends`. Di dalam constructor class anak, kita wajib memanggil `super()` untuk memanggil constructor class induk sebelum menggunakan `this`.

```javascript
// Class Induk
class Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    makan() {
        console.log(`${this.nama} sedang makan.`);
    }
}

// Class Anak mewarisi class Hewan
class Kucing extends Hewan {
    constructor(nama, warna) {
        super(nama); // Memanggil constructor Hewan(nama)
        this.warna = warna; // Properti khusus Kucing
    }

    meong() {
        console.log("Meonggg!");
    }
}

let kucingSaya = new Kucing("Tom", "Abu-abu");
kucingSaya.makan(); // Output: Tom sedang makan. (Diwarisi dari Hewan)
kucingSaya.meong(); // Output: Meonggg!
```

> [!INFO]
`super` juga bisa digunakan untuk memanggil method lain dari class induk, misalnya `super.makan()`.

---

## 2. Polymorphism (Polimorfisme)
Polimorfisme berarti "banyak bentuk". Dalam OOP, ini mengacu pada kemampuan sebuah method di class anak untuk **menimpa (override)** method yang ada di class induk dengan nama yang sama, namun memiliki perilaku yang berbeda.

```javascript
class Burung extends Hewan {
    constructor(nama) {
        super(nama);
    }

    // Override method makan() dari class Hewan
    makan() {
        console.log(`${this.nama} sedang memakan biji-bijian.`);
    }
}

let burungSaya = new Burung("Tweety");
burungSaya.makan(); // Output: Tweety sedang memakan biji-bijian.
```
Meskipun `burungSaya` dan `kucingSaya` sama-sama turunan dari `Hewan` dan memanggil method `makan()`, keduanya menghasilkan output yang berbeda sesuai konteksnya. Inilah esensi dari Polimorfisme.

---

## 3. Encapsulation (Enkapsulasi) & Private Fields
Encapsulation adalah konsep menyembunyikan data internal objek agar tidak bisa diubah sembarangan dari luar. JavaScript versi modern (ES2022) menghadirkan fitur **Private Fields** menggunakan tanda pagar `#`.

### 3.1 Menggunakan Private Fields (`#`)
Properti yang diawali `#` tidak bisa diakses secara langsung dari luar class. Untuk membaca atau mengubahnya, kita harus menyediakan method khusus (Getter & Setter).

```javascript
class RekeningBank {
    #saldo; // Deklarasi private field

    constructor(saldoAwal) {
        this.#saldo = saldoAwal;
    }

    // Getter: Untuk membaca saldo
    lihatSaldo() {
        return this.#saldo;
    }

    // Setter: Untuk menambah saldo dengan validasi
    setor(uang) {
        if (uang > 0) {
            this.#saldo += uang;
            console.log(`Berhasil menyetor ${uang}. Saldo baru: ${this.#saldo}`);
        } else {
            console.log("Nominal tidak valid!");
        }
    }
}

let rekening = new RekeningBank(500000);

console.log(rekening.lihatSaldo()); // Output: 500000
rekening.setor(100000);            // Output: Berhasil menyetor 100000...

console.log(rekening.#saldo); // ❌ ERROR! Private field tidak bisa diakses dari luar
```

> [!TIP]
Dengan enkapsulasi, kamu memaksa pengguna class untuk mengikuti "aturan" yang sudah kamu buat (misalnya tidak bisa setorkan uang minus), sehingga data tetap aman dan valid.

---

## 4. Static Methods & Properties
Secara default, properti dan method berada di dalam *instance* (objek yang dibuat dengan `new`). Namun, kadang kita butuh fungsi yang menempel pada **Class itu sendiri**, bukan pada objeknya. Untuk itu gunakan kata kunci `static`.

```javascript
class Kalkulator {
    // Method static
    static tambah(a, b) {
        return a + b;
    }

    static phi = 3.14;
}

// Memanggil static method langsung dari Class, TANPA new
console.log(Kalkulator.tambah(5, 10)); // Output: 15
console.log(Kalkulator.phi);           // Output: 3.14

let k = new Kalkulator();
console.log(k.tambah(5, 10)); // ❌ ERROR! tambah() bukan method instance
```

> [!NOTE]
Contoh static method bawaan JavaScript adalah `Math.random()`, `Math.max()`, atau `Object.keys()`. Kita tidak perlu membuat objek `new Math()` untuk menggunakannya.

---

> [!QUOTE]
*"Inheritance, Polymorphism, dan Encapsulation bukan sekadar teori, melainkan senjata untuk membuat kode yang rapi, aman, dan modular. Selanjutnya, kita akan keluar dari konsole dan mulai berinteraksi langsung dengan halaman web melalui DOM Manipulation!"*