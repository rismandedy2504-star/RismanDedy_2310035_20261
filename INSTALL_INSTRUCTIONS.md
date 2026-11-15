# 🚀 LANGKAH INSTALASI DAN MENJALANKAN APLIKASI

## ⚠️ PENTING: Atasi Masalah PowerShell Execution Policy

Jika Anda mendapat error "running scripts is disabled on this system", ikuti langkah berikut:

### Opsi 1: Gunakan Command Prompt (CMD) - RECOMMENDED
1. Tekan `Windows + R`
2. Ketik `cmd` lalu Enter
3. Navigasi ke folder proyek:
   ```cmd
   cd D:\mobile2\tugas_2310035
   ```

### Opsi 2: Aktifkan Execution Policy di PowerShell
1. Buka PowerShell sebagai Administrator
2. Jalankan perintah:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Ketik `Y` untuk konfirmasi

---

## 📦 INSTALL DEPENDENCIES

Jalankan perintah berikut di **Command Prompt (CMD)**:

```cmd
cd D:\mobile2\tugas_2310035
npm install @expo/vector-icons
```

atau menggunakan Expo CLI:

```cmd
npx expo install @expo/vector-icons
```

---

## ▶️ MENJALANKAN APLIKASI

### 1. Start Development Server

```cmd
npm start
```

atau

```cmd
npx expo start
```

### 2. Pilih Platform

Setelah server berjalan, pilih salah satu:
- Tekan `a` - Android Emulator
- Tekan `i` - iOS Simulator (hanya untuk Mac)
- Tekan `w` - Web Browser
- Scan QR Code dengan aplikasi **Expo Go** di smartphone

---

## ✅ VERIFIKASI KODE

### Check TypeScript Errors:
```cmd
node node_modules\typescript\bin\tsc --noEmit
```

### Run Linter:
```cmd
npx expo lint
```

---

## 📱 TESTING APLIKASI

1. **Splash Screen** → Auto redirect ke Login (2 detik)
2. **Klik "Daftar sekarang"** → Halaman Register
3. **Isi form Register** → Alert sukses → Redirect ke Login
4. **Login dengan email/password** → Alert sukses → Dashboard Home
5. **Test 5 Bottom Tabs**: Home, Produk, Transaksi, Report, Profil
6. **Klik menu Produk di Home** → Pindah ke tab Produk
7. **Klik menu lainnya** → Alert "Fitur akan dikembangkan"
8. **Buka tab Profil** → Klik tombol Logout → Konfirmasi → Kembali ke Login

---

## 🐛 TROUBLESHOOTING

### Error: Cannot find module '@expo/vector-icons'
**Solusi:**
```cmd
npm install @expo/vector-icons
```

### Error: Expo server tidak bisa start
**Solusi:**
```cmd
npm install
npx expo start --clear
```

### Error: Port sudah digunakan
**Solusi:**
```cmd
npx expo start --port 8081
```

---

## 📤 UPLOAD KE GITHUB

```bash
# Inisialisasi Git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit
git commit -m "Modul 10: Bottom Navigation & Dashboard Marketplace"

# Tambahkan remote (ganti dengan URL repository Anda)
git remote add origin https://github.com/USERNAME/mobile2_NIM_2026.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

**Jangan lupa ganti `USERNAME` dan `NIM`!**

---

## 📄 FILE PENGUMPULAN

Buat file `Mobile2_Modul10_NIM_Nama.txt` berisi:

```
https://github.com/USERNAME/mobile2_NIM_2026
```

Upload file tersebut ke platform pengumpulan tugas.

---

## ✨ SELESAI!

Aplikasi Anda sudah siap dijalankan dan dikumpulkan! 🎉
