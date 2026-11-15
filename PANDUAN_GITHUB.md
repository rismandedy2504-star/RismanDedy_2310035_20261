# 📤 PANDUAN LENGKAP UPLOAD KE GITHUB

## 🎯 Tujuan
Upload proyek Modul 10 ke GitHub repository public dengan nama `mobile2_NIM_2026`.

---

## 📋 Persiapan

### 1. Pastikan Git Terinstall

Cek apakah Git sudah terinstall:
```cmd
git --version
```

Jika belum terinstall, download di: https://git-scm.com/download/win

### 2. Konfigurasi Git (Jika Pertama Kali)

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

---

## 🌐 LANGKAH 1: Buat Repository di GitHub

### A. Login ke GitHub
1. Buka browser, kunjungi https://github.com
2. Login dengan akun GitHub Anda
3. Jika belum punya akun, daftar dulu di https://github.com/signup

### B. Buat Repository Baru
1. Klik tombol **"+"** di pojok kanan atas
2. Pilih **"New repository"**

### C. Isi Form Repository
- **Repository name**: `mobile2_2310035_2026` 
  - ⚠️ Ganti `2310035` dengan NIM Anda!
- **Description**: "Praktikum Mobile 2 - Modul 10: Bottom Navigation & Dashboard Marketplace"
- **Visibility**: Pilih **Public** ✓
- **JANGAN centang** "Add a README file"
- **JANGAN centang** "Add .gitignore"
- **JANGAN centang** "Choose a license"

### D. Klik "Create repository"

### E. Salin URL Repository
Setelah repository dibuat, akan muncul URL seperti:
```
https://github.com/USERNAME/mobile2_2310035_2026.git
```
**Salin URL ini!** Akan digunakan nanti.

---

## 💻 LANGKAH 2: Upload Proyek dari Lokal

### A. Buka Command Prompt (CMD)
⚠️ **PENTING**: Gunakan **CMD** atau **Git Bash**, BUKAN PowerShell!

1. Tekan `Windows + R`
2. Ketik `cmd`
3. Tekan Enter

### B. Navigasi ke Folder Proyek

```cmd
cd D:\mobile2\tugas_2310035
```

### C. Inisialisasi Git

```bash
git init
```

Output yang diharapkan:
```
Initialized empty Git repository in D:/mobile2/tugas_2310035/.git/
```

### D. Tambahkan Semua File

```bash
git add .
```

**Penjelasan**: Perintah ini menambahkan semua file ke staging area Git.

### E. Commit Pertama

```bash
git commit -m "Modul 10: Bottom Navigation, Dashboard Marketplace, Login, Register"
```

Output yang diharapkan:
```
[main (root-commit) xxxxxxx] Modul 10: Bottom Navigation, Dashboard Marketplace, Login, Register
 XX files changed, XXXX insertions(+)
 create mode 100644 src/app/_layout.tsx
 ...
```

### F. Tambahkan Remote Repository

**Ganti URL dengan URL repository Anda!**

```bash
git remote add origin https://github.com/USERNAME/mobile2_2310035_2026.git
```

⚠️ **Contoh**:
- Jika username GitHub Anda: `johnsmith`
- Jika NIM Anda: `2310035`
- Maka URL: `https://github.com/johnsmith/mobile2_2310035_2026.git`

### G. Rename Branch ke Main

```bash
git branch -M main
```

### H. Push ke GitHub

```bash
git push -u origin main
```

**Jika muncul request login:**
- Masukkan username GitHub Anda
- Untuk password, gunakan **Personal Access Token** (bukan password akun)

**Cara membuat Personal Access Token:**
1. Buka GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic) → Generate new token
3. Beri nama token, pilih scope: `repo`
4. Generate token, **salin token** (hanya muncul sekali!)
5. Gunakan token sebagai password saat push

**Output yang diharapkan:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
...
To https://github.com/USERNAME/mobile2_2310035_2026.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## ✅ LANGKAH 3: Verifikasi Upload

### A. Cek di Browser
1. Buka browser
2. Kunjungi: `https://github.com/USERNAME/mobile2_NIM_2026`
3. Pastikan semua file sudah terupload

### B. Cek Struktur Folder
Pastikan folder ini ada:
```
✓ src/
  ✓ app/
    ✓ (tabs)/
  ✓ styles/
✓ assets/
✓ package.json
✓ README.md
✓ INSTALL_INSTRUCTIONS.md
✓ PANDUAN_GITHUB.md
```

### C. Pastikan Repository Public
1. Buka repository di GitHub
2. Klik tab **"Settings"**
3. Scroll ke bawah ke bagian **"Danger Zone"**
4. Jika masih Private, klik **"Change visibility"**
5. Pilih **"Make public"**
6. Konfirmasi

---

## 📄 LANGKAH 4: Buat File Pengumpulan

### A. Buka Notepad
1. Tekan `Windows + R`
2. Ketik `notepad`
3. Tekan Enter

### B. Ketik URL Repository

```
https://github.com/USERNAME/mobile2_NIM_2026
```

**Contoh**:
```
https://github.com/johnsmith/mobile2_2310035_2026
```

⚠️ **Ganti dengan URL repository Anda yang sebenarnya!**

### C. Simpan File

1. Klik **File** → **Save As**
2. **File name**: `Mobile2_Modul10_2310035_NamaAnda.txt`
   - Ganti `2310035` dengan NIM Anda
   - Ganti `NamaAnda` dengan nama Anda (tanpa spasi)
3. **Save as type**: Pilih **"All Files (*.*)"**
4. Pilih lokasi penyimpanan (Desktop atau folder khusus)
5. Klik **"Save"**

**Contoh nama file**:
- `Mobile2_Modul10_2310035_JohnSmith.txt`
- `Mobile2_Modul10_2310040_MariaSantos.txt`

### D. Verifikasi File

1. Buka file .txt yang baru dibuat
2. Pastikan isinya hanya URL repository
3. Tidak ada spasi atau karakter tambahan

---

## 🎓 LANGKAH 5: Upload ke Platform Pengumpulan

### Tergantung platform yang digunakan dosen:

#### A. Google Classroom
1. Buka Google Classroom
2. Pilih tugas "Modul 10"
3. Klik "Add or create"
4. Pilih "File"
5. Upload file `.txt` yang sudah dibuat
6. Klik "Turn in"

#### B. E-Learning
1. Login ke e-learning
2. Masuk ke kelas Praktikum Mobile 2
3. Cari tugas "Modul 10"
4. Klik "Add submission"
5. Upload file `.txt`
6. Klik "Submit"

#### C. Email
Jika pengumpulan via email:
```
To: email.dosen@university.ac.id
Subject: Pengumpulan Tugas Modul 10 - NIM - Nama
Attachment: Mobile2_Modul10_NIM_Nama.txt

Isi email:
Yth. Bapak/Ibu Dosen,

Saya melampirkan link repository GitHub untuk tugas Praktikum Mobile 2 Modul 10.

Nama: [Nama Lengkap]
NIM: [NIM]
Kelas: [Kelas]
Repository: https://github.com/USERNAME/mobile2_NIM_2026

Terima kasih.

Hormat saya,
[Nama]
```

---

## 🔄 Update Proyek (Jika Ada Perubahan)

Jika Anda melakukan perubahan kode dan ingin update di GitHub:

```bash
# Navigasi ke folder proyek
cd D:\mobile2\tugas_2310035

# Tambahkan file yang berubah
git add .

# Commit dengan pesan
git commit -m "Update: perbaikan bug di halaman login"

# Push ke GitHub
git push origin main
```

---

## ⚠️ Troubleshooting

### Error: "fatal: remote origin already exists"
**Solusi:**
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/mobile2_NIM_2026.git
```

### Error: "failed to push some refs"
**Solusi:**
```bash
git pull origin main --rebase
git push origin main
```

### Error: "Permission denied (publickey)"
**Solusi**: Gunakan HTTPS URL, bukan SSH. URL harus dimulai dengan `https://`.

### Error: PowerShell Execution Policy
**Solusi**: Gunakan **Command Prompt (CMD)** atau **Git Bash**, bukan PowerShell.

### Lupa Personal Access Token
**Solusi**: Buat token baru di GitHub Settings → Developer settings → Personal access tokens.

---

## ✅ Checklist Pengumpulan

- [ ] Repository sudah dibuat di GitHub
- [ ] Nama repository: `mobile2_NIM_2026`
- [ ] Repository berstatus **Public**
- [ ] Semua file sudah terupload
- [ ] README.md sudah terisi dengan lengkap
- [ ] File .txt sudah dibuat dengan format benar
- [ ] File .txt sudah diupload ke platform pengumpulan
- [ ] Email/nama yang diisi sudah benar

---

## 📞 Bantuan

Jika mengalami kesulitan:
1. Tanyakan ke teman/asisten dosen
2. Cek dokumentasi Git: https://git-scm.com/doc
3. Cek GitHub Docs: https://docs.github.com
4. Tanyakan di grup kelas

---

## 🎉 Selamat!

Proyek Modul 10 Anda sudah berhasil diupload ke GitHub dan siap dikumpulkan! 

**Good luck!** 🚀
