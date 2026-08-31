Ya — **konsep besarnya sudah ada**, jadi kalau idenya hanya:

> **"Upload PDF/DOCX → website mengubah tampilannya menjadi dyslexia-friendly"**

itu **belum cukup unik**.

Saya sudah cek beberapa produk yang relevan. Yang paling dekat adalah **Helperbird**, yang saat ini menyediakan dyslexia-friendly fonts, pengaturan spacing, reading ruler, reading mode, text-to-speech, OCR untuk PDF/gambar, dan PDF reader. Bahkan mereka secara eksplisit mendukung PDF dan Google Docs. ([Helperbird][1])

**BeeLine Reader** juga sudah menyediakan pemformatan teks untuk membuat pembacaan di layar lebih mudah dan memiliki plugin khusus PDF. ([BeeLine Reader][2])

Jadi kita perlu mengubah **core innovation**, bukan sekadar membuat "dyslexia reader".

---

# 💡 Ide yang lebih kuat: Universal Document Accessibility Converter

Saya akan mengubah idenya menjadi:

> **Website yang mengubah dokumen dengan format dan layout apa pun menjadi versi digital yang lebih mudah dibaca, dengan mempertahankan struktur dan informasi asli dokumen.**

Bukan:

**PDF Reader**

tetapi:

**Document → Accessible Document**

---

## 1. Konsep produknya

Bayangkan user punya:

```text
📄 PDF
📄 DOCX
📊 PPTX
📑 EPUB
📷 JPG / PNG
📃 TXT
```

Upload ke website:

```text
             UPLOAD DOCUMENT
                    │
                    ▼
           DOCUMENT ANALYSIS
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
    TEXT DOCUMENT         SCANNED DOC
          │                   │
          │                  OCR
          │                   │
          └─────────┬─────────┘
                    ▼
             STRUCTURE PARSER
                    │
                    ▼
           ACCESSIBILITY ENGINE
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   Typography    Layout       Navigation
       │            │            │
       └────────────┼────────────┘
                    ▼
            READABLE DOCUMENT
```

---

# 2. Yang membedakan dari Helperbird

Helperbird terutama **mengubah cara halaman/PDF ditampilkan saat dibaca**. Mereka sudah punya PDF reader dengan font, highlighting, annotations, TTS, OCR, dan berbagai accessibility tools. ([Helperbird][3])

Produk Anda bisa mengambil pendekatan berbeda:

> **Kami tidak hanya membuat reader. Kami melakukan "reconstruction" terhadap dokumen menjadi format accessible.**

Misalnya PDF asli:

```text
┌─────────────────────────────────────┐
│        ECONOMIC GROWTH              │
│                                     │
│  text text text    text text text   │
│  text text text    text text text   │
│       [GRAPH]                         │
│  text text text    text text text   │
└─────────────────────────────────────┘
```

Setelah diproses:

```text
┌─────────────────────────────────────┐
│ ECONOMIC GROWTH                     │
│                                     │
│ Economic growth refers to...       │
│                                     │
│ ───────────────                     │
│ KEY CONCEPT                         │
│                                     │
│ Economic growth = increase in      │
│ production of goods and services.  │
│                                     │
│ [GRAPH]                             │
│                                     │
│ SOURCE                              │
└─────────────────────────────────────┘
```

**Struktur informasi tetap dipertahankan, tetapi presentation layer dirombak.**

---

# 3. 🔥 Inovasi utama: Document Reflow Engine

Ini yang saya jadikan **core innovation**.

Dokumen tidak hanya diubah fontnya.

Sistem melakukan:

```text
Original document
       ↓
Extract content
       ↓
Detect structure
       ↓
Rebuild structure
       ↓
Accessible layout
       ↓
Readable document
```

Misalnya:

### Original

```text
PAGE 14

        2.3 Economic Growth

Economic growth is the increase
in the production of goods and
services...

[large whitespace]

Figure 2.1

GDP Growth 2020–2025

[chart]

Source: BPS
```

Menjadi:

```text
CHAPTER 2

2.3 Economic Growth

Economic growth is the increase
in the production of goods and
services...

━━━━━━━━━━━━━━━━━━━━

FIGURE 2.1

GDP Growth 2020–2025

[chart]

Source:
BPS
```

Jadi website memahami:

* heading
* paragraph
* list
* table
* image
* caption
* footnote
* citation
* header
* footer
* page number

dan menyusun ulang semuanya.

---

# 4. 📐 Intelligent Layout — tapi tanpa AI

Ini penting karena Anda sebelumnya meminta **tanpa AI**.

Kita bisa menggunakan:

### Rule-based document parser.

Misalnya:

```text
IF font-size > body-font-size × 1.5
THEN classify = heading

IF text starts with "Figure"
THEN classify = caption

IF text has repeated short lines
AND aligned horizontally
THEN classify = table

IF object dimensions > threshold
THEN classify = image
```

Kemudian:

```text
Document Structure
        ↓
Rules
        ↓
Semantic HTML
        ↓
Accessible UI
```

Tidak perlu machine learning.

---

# 5. 🧠 Dyslexia Reading Profile

Kemudian user memilih profil:

### Profile A — Standard

```text
Normal spacing
Normal font
Normal width
```

### Profile B — Dyslexia Friendly

```text
Lexend
20px
1.8 line height
0.03em letter spacing
left aligned
short paragraph width
```

### Profile C — Focus Reading

```text
limited lines
reading ruler
highlight current paragraph
reduced distractions
```

### Profile D — Visual Stress

```text
custom background
contrast adjustment
color overlay
reduced visual density
```

Jadi sistem bukan menentukan:

> "Ini adalah tampilan terbaik untuk dyslexia."

Tetapi:

> **User memilih konfigurasi yang paling nyaman untuk dirinya.**

Ini lebih aman secara UX karena kebutuhan membaca tidak identik pada semua orang.

---

# 6. 🔥 Fitur yang menurut saya benar-benar menarik

## "Convert & Export"

Setelah upload:

```text
Your document is ready.

Original:
research-paper.pdf

Accessible version:
research-paper-readable.pdf

[ Read Online ]

[ Download PDF ]

[ Download EPUB ]

[ Download DOCX ]
```

Ini membuat produk Anda berbeda dari sekadar reader.

**Input → Transformation → Output**

---

# 7. Bahkan bisa membuat "Accessible EPUB"

Ini menurut saya sangat bagus.

Misalnya user punya:

```text
skripsi.pdf
```

Website menghasilkan:

```text
skripsi-accessible.epub
```

EPUB tersebut memiliki:

* semantic headings
* adjustable font
* adjustable spacing
* responsive layout
* TTS compatibility
* screen-reader compatibility
* dyslexia-friendly presets

Jadi hasilnya bisa dibawa ke:

* tablet
* smartphone
* e-reader
* browser
* accessibility software

---

# 8. 🔍 Document Quality Checker

Tambahkan fitur:

## Accessibility Score

Contoh:

```text
DOCUMENT ACCESSIBILITY

              78 / 100
             ━━━━━━━━━

Typography             ✓
Heading Structure      ✓
Paragraph Length       ⚠
Color Contrast         ⚠
Table Structure        ✓
Image Description      ✕
Reading Order          ✓
```

Kemudian:

### Issues

```text
⚠ Page 12
Paragraph terlalu panjang.

⚠ Page 19
Contrast rendah.

✕ Page 27
Image tidak memiliki description.

✓ Page 34
Heading structure OK.
```

Ini bukan hanya reader.

Ini mulai menjadi:

# **Document Accessibility Platform**

---

# 9. 🔥 Bahkan bisa dibuat dua mode

### Reader Mode

Untuk pengguna dyslexia:

```text
Upload
 ↓
Read
```

### Accessibility Converter

Untuk pembuat dokumen:

```text
Upload
 ↓
Analyze
 ↓
Fix
 ↓
Export
```

Ini membuka target market kedua:

**guru / dosen / sekolah / perusahaan / publisher.**

---

# 10. Contoh user journey

User masuk:

> **Make any document easier to read.**

↓

Upload:

```text
Drag & Drop

PDF
DOCX
PPTX
EPUB
JPG
PNG
```

↓

Website:

> Processing document...

```text
✓ Text extracted
✓ Structure detected
✓ Reading order detected
✓ Tables detected
✓ Images detected
✓ Accessibility layout generated
```

↓

User melihat:

```text
READING PROFILE

○ Standard

● Dyslexia Friendly

○ Focus

○ High Contrast

○ Custom
```

↓

**Open Document**

↓

Baca.

↓

**Export Accessible Version**

---

# 11. Yang menurut saya paling unik

Kalau mau membuatnya layak sebagai **TA/skripsi**, saya akan membuat inovasi utamanya:

# **Universal Document Reflow**

> **Mengubah dokumen digital yang memiliki layout kompleks menjadi struktur bacaan linear yang customizable dan accessible, tanpa mengubah substansi informasi dokumen.**

Contoh:

```text
             ORIGINAL
                 │
                 ▼
       ┌─────────────────┐
       │ Complex Layout  │
       │ columns         │
       │ tables          │
       │ images          │
       │ headers         │
       │ footnotes       │
       └────────┬────────┘
                │
                ▼
        DOCUMENT PARSER
                │
                ▼
       SEMANTIC STRUCTURE
                │
                ▼
       ACCESSIBLE REFLOW
                │
                ▼
             OUTPUT
```

**Ini jauh lebih menarik daripada "e-book dyslexia-friendly".**

---

# 12. Tapi ada satu masalah besar

Kalau kita mengatakan:

> **"dokumen apapun"**

secara teknis itu terlalu luas.

Contohnya:

### PDF digital

Relatif mudah.

### DOCX

Relatif mudah.

### EPUB

Mudah karena memang sudah terstruktur.

### PPTX

Masih manageable.

### Scanned PDF

Perlu OCR.

### Foto dokumen

Perlu OCR + layout reconstruction.

### Dokumen dengan tabel kompleks

Sulit.

### Dokumen dengan rumus matematika

Lebih sulit.

### Dokumen dengan diagram

Sulit mempertahankan makna.

Jadi untuk MVP saya akan mengatakan:

> **"Convert common digital documents into dyslexia-friendly readable formats."**

bukan:

> ❌ "Convert any document perfectly."

---

# 13. Positioning yang saya rekomendasikan

### Nama konsep

**ReadAble**

> **Turn any document into a reading experience that works for you.**

atau:

**Reado**

> **Upload. Adapt. Read.**

atau lebih akademik:

**OpenRead**

> **Universal Accessible Document Reader**

---

# 14. Apakah inovasinya sudah ada?

**Jawaban jujurnya: sebagian besar komponennya sudah ada.**

| Fitur                                                           | Sudah ada?                                                        |
| --------------------------------------------------------------- | ----------------------------------------------------------------- |
| Dyslexia font                                                   | ✅                                                                 |
| Font/spacing customization                                      | ✅                                                                 |
| Reading ruler                                                   | ✅                                                                 |
| TTS                                                             | ✅                                                                 |
| PDF accessibility reader                                        | ✅                                                                 |
| OCR                                                             | ✅                                                                 |
| Reading mode                                                    | ✅                                                                 |
| Google Docs accessibility                                       | ✅                                                                 |
| PDF → readable experience                                       | ✅                                                                 |
| Document accessibility tools                                    | ✅                                                                 |
| **Universal document → reflowed accessible document**           | ⚠️ Ada pendekatan terkait, tetapi masih bisa menjadi diferensiasi |
| **Exportable standardized accessible version**                  | ⭐ Potensi diferensiasi                                            |
| **Rule-based document reflow engine khusus kebutuhan dyslexia** | ⭐ Potensi riset                                                   |
| **Accessibility scoring + automatic structural correction**     | ⭐ Potensi riset                                                   |

Helperbird khususnya sudah sangat dekat dengan ide awal Anda, bahkan pada 2026 mereka memiliki PDF reader, OCR, dyslexia fonts, spacing, reading ruler, TTS, dan fitur accessibility lainnya. ([Helperbird][4])

**Jadi jangan membuat "Helperbird versi web".**

---

# 🏆 Saya akan mengubah ide Anda menjadi ini

## **Universal Accessible Document Converter**

### Problem

> Banyak dokumen digital dibuat untuk mempertahankan layout, bukan untuk kenyamanan membaca.

### Solution

> Website yang **mengubah struktur presentasi dokumen** menjadi format yang lebih mudah dibaca dengan mempertahankan konten asli.

### Core Innovation

> **Rule-Based Universal Document Reflow Engine**

### Input

**PDF / DOCX / PPTX / EPUB / HTML / TXT / Image**

### Process

**Parse → Structure → Reflow → Accessibility Profile → Preview → Export**

### Output

**Readable Web / Accessible PDF / EPUB / DOCX**

### Tanpa AI

✅ Rule-based
✅ Document parsing
✅ OCR
✅ Semantic HTML
✅ Accessibility standards
✅ User preferences
✅ Statistical analytics

---

Kalau ini untuk **skripsi/TA**, menurut saya malah bisa dibuat jauh lebih kuat dengan mengambil satu masalah spesifik: **"bagaimana mempertahankan struktur semantik dokumen ketika layout kompleks diubah menjadi dyslexia-friendly reflow."** Itu memberi Anda problem teknis yang jelas, metrik pengujian yang jelas, dan novelty yang lebih defensible daripada sekadar membuat e-book reader.

[1]: https://www.helperbird.com/extension/?utm_source=chatgpt.com "Make the Web more Accessible with Helperbird | Chrome, Firefox & Edge"
[2]: https://www.beelinereader.com/?utm_source=chatgpt.com "BeeLine Reader: making reading on-screen easier and faster."
[3]: https://www.helperbird.com/features/pdfs/?utm_source=chatgpt.com "PDF Reader & Annotator | Use Helperbird Tools on Any PDF - Helperbird"
[4]: https://www.helperbird.com/features/?filter=writing&utm_source=chatgpt.com "Accessibility & Productivity Features - Helperbird"
