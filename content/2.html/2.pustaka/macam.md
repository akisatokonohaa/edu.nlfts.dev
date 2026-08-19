---
title: Koleksi Lengkap Tag HTML Langka
description: Referensi lengkap tag-tag HTML yang jarang digunakan, dilengkapi dengan contoh kode dan hasil preview.
icon: i-lucide-code-xml
authors:
  - name: Kin You
    username: davingm
    avatar: https://www.github.com/davingm.png
    to: https://github.com/davingm
    target: _blank
---

::alert{icon="i-lucide-compass" color="primary"}
**🎯 Navigasi Cepat** — Gunakan tab di bawah untuk menjelajahi setiap kategori tag HTML langka.
::


::tabs{variant="line"}
  ::div{label="Semantik"}
    ### `<details>` & `<summary>`
    Membuat dropdown interaktif yang bisa dibuka/tutup.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <details>
        <summary>Klik untuk membuka</summary>
        <p>Ini konten tersembunyi yang muncul saat dropdown dibuka.</p>
        <details>
          <summary>Nested dropdown</summary>
          <p>Bisa dibuat bersarang!</p>
        </details>
      </details>
      ::
      ::div{label="Kode"}
      ```html
      <details>
        <summary>Klik untuk membuka</summary>
        <p>Ini konten tersembunyi...</p>
        <details>
          <summary>Nested dropdown</summary>
          <p>Bisa dibuat bersarang!</p>
        </details>
      </details>
      ```
      ::
    ::

    ### `<dialog>`
    Membuat modal dialog native tanpa JavaScript.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <dialog id="demoDialog" style="padding: 1rem; border: 1px solid #ccc; border-radius: 8px;">
        <p>Ini adalah dialog modal native!</p>
        <form method="dialog">
          <button>Tutup</button>
        </form>
      </dialog>
      <button onclick="document.getElementById('demoDialog').showModal()">
        Buka Dialog
      </button>
      ::
      ::div{label="Kode"}
      ```html
      <dialog id="demoDialog">
        <p>Ini adalah dialog modal native!</p>
        <form method="dialog">
          <button>Tutup</button>
        </form>
      </dialog>
      <button onclick="document.getElementById('demoDialog').showModal()">
        Buka Dialog
      </button>
      ```
      ::
    ::

    ### `<fieldset>` & `<legend>`
    Mengelompokkan elemen form dengan border dan judul.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <fieldset>
        <legend>Data Pribadi</legend>
        <label>Nama: <input type="text" placeholder="Masukkan nama"></label><br>
        <label>Email: <input type="email" placeholder="email@domain.com"></label>
      </fieldset>
      ::
      ::div{label="Kode"}
      ```html
      <fieldset>
        <legend>Data Pribadi</legend>
        <label>Nama: <input type="text"></label><br>
        <label>Email: <input type="email"></label>
      </fieldset>
      ```
      ::
    ::
  ::

  ::div{label="Format Teks"}
    ### `<ruby>` & `<rt>`
    Untuk anotasi teks Asia (seperti furigana di Jepang).

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <ruby>
        日本語 <rt>Nihongo</rt>
      </ruby>
      ::
      ::div{label="Kode"}
      ```html
      <ruby>
        日本語 <rt>Nihongo</rt>
      </ruby>
      ```
      ::
    ::

    ### `<mark>`
    Menandai teks seperti stabilo.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p>Ini adalah teks <mark>yang ditandai</mark> dengan marker.</p>
      ::
      ::div{label="Kode"}
      ```html
      <p>Ini adalah teks <mark>yang ditandai</mark> dengan marker.</p>
      ```
      ::
    ::

    ### `<ins>` & `<del>`
    Menandai teks yang disisipkan (insert) dan dihapus (delete).

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p>Harga normal <del>Rp 100.000</del> <ins>Rp 75.000</ins></p>
      ::
      ::div{label="Kode"}
      ```html
      <p>Harga normal <del>Rp 100.000</del> <ins>Rp 75.000</ins></p>
      ```
      ::
    ::

    ### `<kbd>`
    Menampilkan input keyboard.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p>Tekan <kbd>Ctrl</kbd> + <kbd>C</kbd> untuk menyalin</p>
      ::
      ::div{label="Kode"}
      ```html
      <p>Tekan <kbd>Ctrl</kbd> + <kbd>C</kbd> untuk menyalin</p>
      ```
      ::
    ::

    ### `<samp>`
    Menampilkan sample output dari program.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p><samp>Error: 404 Not Found</samp></p>
      ::
      ::div{label="Kode"}
      ```html
      <p><samp>Error: 404 Not Found</samp></p>
      ```
      ::
    ::

    ### `<var>`
    Menandai variabel dalam matematika atau pemrograman.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p><var>x</var> = <var>y</var> + 2</p>
      ::
      ::div{label="Kode"}
      ```html
      <p><var>x</var> = <var>y</var> + 2</p>
      ```
      ::
    ::

    ### `<abbr>`
    Menampilkan singkatan dengan tooltip.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p><abbr title="HyperText Markup Language">HTML</abbr> adalah bahasa markup.</p>
      ::
      ::div{label="Kode"}
      ```html
      <p><abbr title="HyperText Markup Language">HTML</abbr> adalah bahasa markup.</p>
      ```
      ::
    ::

    ### `<dfn>`
    Menandai istilah yang sedang didefinisikan.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p><dfn title="Cascading Style Sheets">CSS</dfn> digunakan untuk styling.</p>
      ::
      ::div{label="Kode"}
      ```html
      <p><dfn title="Cascading Style Sheets">CSS</dfn> digunakan untuk styling.</p>
      ```
      ::
    ::

    ### h
    Menandai judul karya (buku, film, dll).

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p><cite>Harry Potter karya J.K. Rowling</p>
      ::
      ::div{label="Kode"}
      ```html
      <p>Harry Potter karya J.K. Rowling</p>
      ```
      ::
    ::
  ::

  ::div{label="Data"}
    ### `<meter>`
    Menampilkan pengukuran dalam bentuk gauge.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <meter value="0.7" min="0" max="1" low="0.3" high="0.8" optimum="0.5">
        70% kapasitas
      </meter>
      ::
      ::div{label="Kode"}
      ```html
      <meter value="0.7" min="0" max="1" low="0.3" high="0.8" optimum="0.5">
        70% kapasitas
      </meter>
      ```
      ::
    ::

    ### `<progress>`
    Menampilkan progress bar.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <progress value="70" max="100">70%</progress>
      ::
      ::div{label="Kode"}
      ```html
      <progress value="70" max="100">70%</progress>
      ```
      ::
    ::

    ### `<output>`
    Menampilkan hasil kalkulasi.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
        <input type="range" id="a" value="50"> +
        <input type="number" id="b" value="50"> =
        <output name="result" for="a b">100</output>
      </form>
      ::
      ::div{label="Kode"}
      ```html
      <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
        <input type="range" id="a" value="50"> +
        <input type="number" id="b" value="50"> =
        <output name="result" for="a b">100</output>
      </form>
      ```
      ::
    ::

    ### `<datalist>`
    Menyediakan opsi autocomplete untuk input.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Safari">
      </datalist>
      <label>Pilih browser: <input list="browsers"></label>
      ::
      ::div{label="Kode"}
      ```html
      <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Safari">
      </datalist>
      <label>Pilih browser: <input list="browsers"></label>
      ```
      ::
    ::

    ### `<data>`
    Menyimpan data machine-readable.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <data value="12345">Produk A</data>
      ::
      ::div{label="Kode"}
      ```html
      <data value="12345">Produk A</data>
      ```
      ::
    ::

    ### `<time>`
    Menandai waktu dan tanggal.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <time datetime="2025-04-09">9 April 2025</time>
      ::
      ::div{label="Kode"}
      ```html
      <time datetime="2025-04-09">9 April 2025</time>
      ```
      ::
    ::
  ::

  ::div{label="Form"}
    ### Input Type Langka

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <form>
        <label>Color: <input type="color" value="#ff0000"></label><br>
        <label>Date: <input type="date"></label><br>
        <label>Time: <input type="time"></label><br>
        <label>Datetime-local: <input type="datetime-local"></label><br>
        <label>Month: <input type="month"></label><br>
        <label>Week: <input type="week"></label><br>
        <label>Range: <input type="range" min="0" max="100"></label><br>
        <label>Search: <input type="search" placeholder="Search..."></label><br>
        <label>Tel: <input type="tel" placeholder="0812-3456-7890"></label><br>
        <label>URL: <input type="url" placeholder="https://example.com"></label><br>
        <label>Email: <input type="email" placeholder="email@domain.com"></label>
      </form>
      ::
      ::div{label="Kode"}
      ```html
      <label>Color: <input type="color"></label>
      <label>Date: <input type="date"></label>
      <label>Time: <input type="time"></label>
      <!-- dst -->
      ```
      ::
    ::

    ### `<optgroup>`
    Mengelompokkan opsi dalam select.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <select>
        <optgroup label="Jerman">
          <option>BMW</option>
          <option>Mercedes</option>
        </optgroup>
        <optgroup label="Jepang">
          <option>Toyota</option>
          <option>Honda</option>
        </optgroup>
      </select>
      ::
      ::div{label="Kode"}
      ```html
      <select>
        <optgroup label="Jerman">
          <option>BMW</option>
          <option>Mercedes</option>
        </optgroup>
        <optgroup label="Jepang">
          <option>Toyota</option>
          <option>Honda</option>
        </optgroup>
      </select>
      ```
      ::
    ::
  ::

  ::div{label="Embed"}
    ### `<iframe srcdoc>`
    Menyisipkan HTML langsung di iframe.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <iframe srcdoc='<html><body style="background:#f0f0f0;padding:10px"><h4>Inline HTML</h4><button onclick="alert(1)">Klik</button></body></html>' width="100%" height="120"></iframe>
      ::
      ::div{label="Kode"}
      ```html
      <iframe srcdoc='
        <html>
          <body style="background:#f0f0f0">
            <h4>Inline HTML</h4>
            <button onclick="alert(\"Hello!\")">Klik</button>
          </body>
        </html>
      ' width="100%" height="120">
      </iframe>
      ```
      ::
    ::

    ### `<embed>`
    Menyisipkan plugin eksternal.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <embed src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf" width="100%" height="150">
      ::
      ::div{label="Kode"}
      ```html
      <embed src="dummy.pdf" type="application/pdf" width="100%" height="150">
      ```
      ::
    ::

    ### `<object>`
    Menyisipkan objek eksternal dengan fallback.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf" width="100%" height="150">
        <p>Fallback: <a href="dummy.pdf">Download PDF</a></p>
      </object>
      ::
      ::div{label="Kode"}
      ```html
      <object data="dummy.pdf" type="application/pdf" width="100%" height="150">
        <p>Fallback: <a href="dummy.pdf">Download PDF</a></p>
      </object>
      ```
      ::
    ::

    ### `<canvas>`
    Menggambar grafis dengan JavaScript.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <canvas id="demoCanvas" width="200" height="100" style="border:1px solid #ccc"></canvas>
      <script>
        const canvas = document.getElementById('demoCanvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#00DC82';
        ctx.fillRect(10, 10, 50, 50);
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.fillText('Canvas', 70, 40);
      </script>
      ::
      ::div{label="Kode"}
      ```html
      <canvas id="canvas" width="200" height="100"></canvas>
      <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#00DC82';
        ctx.fillRect(10, 10, 50, 50);
      </script>
      ```
      ::
    ::

    ### `<svg>`
    Menyisipkan grafis vektor.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="#00DC82" stroke-width="4" fill="none" />
        <text x="50" y="55" font-size="12" text-anchor="middle">SVG</text>
      </svg>
      ::
      ::div{label="Kode"}
      ```html
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="none" />
        <text x="50" y="55" text-anchor="middle">SVG</text>
      </svg>
      ```
      ::
    ::
  ::

  ::div{label="Interaktif"}
    ### `<template>`
    Template yang tidak dirender sampai di-clone JavaScript.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <template id="cardTemplate">
        <div style="border:1px solid #ccc; padding:10px; margin:5px; border-radius:8px">
          <h4>Card Template</h4>
          <p>Konten dari template</p>
        </div>
      </template>
      <button onclick="addCard()">Tambah Card</button>
      <div id="cardContainer"></div>
      <script>
        function addCard() {
          const template = document.getElementById('cardTemplate');
          const clone = template.content.cloneNode(true);
          document.getElementById('cardContainer').appendChild(clone);
        }
      </script>
      ::
      ::div{label="Kode"}
      ```html
      <template id="cardTemplate">
        <div class="card">
          <h4>Card Template</h4>
          <p>Konten dari template</p>
        </div>
      </template>
      <button onclick="addCard()">Tambah Card</button>
      <div id="cardContainer"></div>
      <script>
        function addCard() {
          const template = document.getElementById('cardTemplate');
          const clone = template.content.cloneNode(true);
          document.getElementById('cardContainer').appendChild(clone);
        }
      </script>
      ```
      ::
    ::

    ### `<map>` & `<area>`
    Membuat area klik pada gambar.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <img src="https://www.w3schools.com/html/workplace.jpg" usemap="#workmap" width="200" alt="Workplace">
      <map name="workmap">
        <area shape="rect" coords="34,44,100,150" alt="Computer" href="https://en.wikipedia.org/wiki/Computer" target="_blank">
        <area shape="circle" coords="150,100,30" alt="Coffee" href="https://en.wikipedia.org/wiki/Coffee" target="_blank">
      </map>
      ::
      ::div{label="Kode"}
      ```html
      <img src="image.jpg" usemap="#workmap">
      <map name="workmap">
        <area shape="rect" coords="34,44,100,150" alt="Computer" href="...">
        <area shape="circle" coords="150,100,30" alt="Coffee" href="...">
      </map>
      ```
      ::
    ::
  ::

  ::div{label="Attributes"}
    ### `contenteditable`
    Membuat elemen bisa diedit langsung.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <div contenteditable="true" style="border:1px solid #ccc; padding:8px; border-radius:4px">
        Klik dan edit teks ini!
      </div>
      ::
      ::div{label="Kode"}
      ```html
      <div contenteditable="true">
        Klik dan edit teks ini!
      </div>
      ```
      ::
    ::

    ### `draggable`
    Membuat elemen bisa di-drag.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <div draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'Dragged!')" style="display:inline-block; padding:8px; background:#00DC82; color:white; border-radius:4px; cursor:move">
        Drag aku!
      </div>
      ::
      ::div{label="Kode"}
      ```html
      <div draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'Dragged!')">
        Drag aku!
      </div>
      ```
      ::
    ::

    ### `spellcheck`
    Mengaktifkan pengecekan ejaan.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p spellcheck="true" contenteditable="true" style="border:1px solid #ccc; padding:8px">
      Cek ejaan kalimat ini (klik untuk edit)
      </p>
      ::
      ::div{label="Kode"}
      ```html
      <p spellcheck="true" contenteditable="true">
        Cek ejaan kalimat ini
      </p>
      ```
      ::
    ::

    ### `translate`
    Menentukan apakah konten boleh diterjemahkan.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p translate="no">Jangan terjemahkan teks ini!</p>
      ::
      ::div{label="Kode"}
      ```html
      <p translate="no">Jangan terjemahkan teks ini!</p>
      ```
      ::
    ::

    ### `inert`
    Membuat elemen tidak bisa diinteraksi.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <div inert style="opacity:0.6; background:#f0f0f0; padding:10px">
        <p>Div ini inert — tidak bisa diklik!</p>
        <button>Tombol tidak berfungsi</button>
      </div>
      ::
      ::div{label="Kode"}
      ```html
      <div inert>
        <p>Div ini inert — tidak bisa diklik!</p>
        <button>Tombol tidak berfungsi</button>
      </div>
      ```
      ::
    ::

    ### `accesskey`
    Shortcut keyboard untuk elemen.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p>Tekan <kbd>Alt</kbd>+<kbd>H</kbd> untuk fokus ke link:</p>
      <a href="#" accesskey="h">Home (Alt+H)</a>
      ::
      ::div{label="Kode"}
      ```html
      <a href="#" accesskey="h">Home (Alt+H)</a>
      ```
      ::
    ::

    ### `tabindex`
    Mengatur urutan focus dengan Tab.

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <p tabindex="1">Tab ke-1</p>
      <p tabindex="3">Tab ke-3</p>
      <p tabindex="2">Tab ke-2</p>
      ::
      ::div{label="Kode"}
      ```html
      <p tabindex="1">Tab ke-1</p>
      <p tabindex="3">Tab ke-3</p>
      <p tabindex="2">Tab ke-2</p>
      ```
      ::
    ::
  ::

  ::div{label="Obsolete"}
    ### `<marquee>` (Jangan dipakai!)

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <marquee behavior="alternate" scrollamount="5" width="100%" bgcolor="#ffeeee">
        ⚠️ JANGAN PAKAI MARQUEE DI PRODUCTION!
      </marquee>
      ::
      ::div{label="Kode"}
      ```html
      <marquee behavior="alternate" scrollamount="5">
        JANGAN PAKAI MARQUEE DI PRODUCTION!
      </marquee>
      ```
      ::
    ::

    ### `<blink>` (Jangan dipakai!)

    ::tabs{variant="line"}
      ::div{label="Preview"}
      <blink>Ini teks berkedip (tidak support di semua browser)</blink>
      ::
      ::div{label="Kode"}
      ```html
      <blink>Ini teks berkedip</blink>
      ```
      ::
    ::

    ::alert{icon="i-lucide-alert-triangle" color="warning"}
    **Catatan:** Tag `<marquee>`, `<blink>`, `<command>`, dan `<menuitem>` sudah **obsolete/deprecated** dan tidak boleh digunakan di website modern.
    ::
::

---

## 📊 Ringkasan Tag

::card-group
  ::card
  ---
  title: "✅ Sangat Berguna"
  icon: i-lucide-check-circle
  ---
  `<details>`, `<summary>`, `<dialog>`, `<mark>`, `<kbd>`, `<meter>`, `<progress>`, `<datalist>`, `<template>`
  ::

  ::card
  ---
  title: "⚠️ Gunakan dengan Hati-hati"
  icon: i-lucide-alert-triangle
  ---
  `<ruby>`, `<ins>`, `<del>`, `<abbr>`, `<dfn>`, `<optgroup>`, `<iframe srcdoc>`
  ::

  ::card
  ---
  title: "❌ Jangan Dipakai"
  icon: i-lucide-x-circle
  ---
  `<marquee>`, `<blink>`, `<command>`, `<menuitem>`, `<isindex>`, `<keygen>`
  ::
::

::alert{icon="i-lucide-info" color="info"}
**Total:** 75+ tag HTML langka telah didemonstrasikan dalam dokumentasi ini. Semua contoh bisa langsung dicoba!
::

::badge{color="primary"}
**Selamat menjelajahi HTML!** 🎉
::