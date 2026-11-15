# 🎓 DOKUMENTASI LENGKAP MODUL 10
## Praktikum Aplikasi Mobile 2
### Bottom Navigation 5 Menu, Safe Area Insets, dan Dashboard Marketplace

---

## 📚 DAFTAR ISI

1. [Overview Aplikasi](#overview-aplikasi)
2. [File-File yang Telah Dibuat](#file-file-yang-telah-dibuat)
3. [Cara Instalasi Dependencies](#cara-instalasi-dependencies)
4. [Cara Menjalankan Aplikasi](#cara-menjalankan-aplikasi)
5. [Testing Aplikasi](#testing-aplikasi)
6. [Screenshot Panduan](#screenshot-panduan)
7. [Upload ke GitHub](#upload-ke-github)
8. [Pengumpulan Tugas](#pengumpulan-tugas)
9. [FAQ](#faq)

---

## 📱 OVERVIEW APLIKASI

### Aplikasi yang Dibuat:
**Marketplace Dashboard App** - Aplikasi mobile e-commerce dengan fitur:
- Autentikasi (Login & Register)
- Dashboard dengan menu marketplace
- Katalog produk
- Transaksi berjalan
- Laporan penjualan
- Profil & Logout

### Teknologi:
- React Native Expo
- TypeScript
- Expo Router (File-based routing)
- @expo/vector-icons (Ionicons)
- Safe Area Context

### Fitur Utama:
1. ✅ Splash Screen dengan auto redirect
2. ✅ Login dengan validasi
3. ✅ Register dengan validasi lengkap
4. ✅ Bottom Navigation 5 menu
5. ✅ Dashboard Home dengan 5 menu cepat
6. ✅ Halaman Produk (5 item dummy)
7. ✅ Halaman Transaksi (5 item dummy)
8. ✅ Halaman Report (4 statistik)
9. ✅ Halaman Profil dengan Logout
10. ✅ Safe Area Insets untuk iOS & Android

---

## 📂 FILE-FILE YANG TELAH DIBUAT

### ✅ Struktur Folder

```
D:\mobile2\tugas_2310035\
├── src/
│   ├── app/
│   │   ├── _layout.tsx              ← Root Stack Navigator
│   │   ├── index.tsx                ← Splash Screen
│   │   ├── login.tsx                ← Halaman Login ✓
│   │   ├── register.tsx             ← Halaman Register ✓
│   │   └── (tabs)/
│   │       ├── _layout.tsx          ← Bottom Tab Navigator ✓
│   │       ├── home.tsx             ← Dashboard Home ✓
│   │       ├── produk.tsx           ← Halaman Produk ✓
│   │       ├── transaksi.tsx        ← Halaman Transaksi ✓
│   │       ├── report.tsx           ← Halaman Report ✓
│   │       └── profil.tsx           ← Halaman Profil & Logout ✓
│   └── styles/
│       ├── authStyles.ts            ← Style Login & Register ✓
│       ├── homeStyles.ts            ← Style Dashboard Home ✓
│       └── tabStyles.ts             ← Style All Tabs ✓
├── README.md                        ← Dokumentasi proyek ✓
├── INSTALL_INSTRUCTIONS.md          ← Panduan instalasi ✓
├── PANDUAN_GITHUB.md                ← Panduan upload GitHub ✓
└── MODUL_10_COMPLETE.md             ← Dokumentasi lengkap (file ini) ✓
```

### 📝 Penjelasan Setiap File

#### 1. **src/app/_layout.tsx**
**Fungsi**: Root Stack Navigator yang mengatur routing utama aplikasi.

**Kode Utama**:
```typescript
<Stack screenOptions={{ headerShown: false }}>
  <Stack.Screen name="index" />
  <Stack.Screen name="login" />
  <Stack.Screen name="register" />
  <Stack.Screen name="(tabs)" />
</Stack>
```

#### 2. **src/app/index.tsx**
**Fungsi**: Splash Screen dengan logo dan loading, auto redirect ke Login setelah 2 detik.

**Fitur**:
- Logo storefront
- Title "Marketplace App"
- ActivityIndicator
- useEffect dengan setTimeout

#### 3. **src/app/login.tsx**
**Fungsi**: Halaman Login dengan validasi.

**Fitur**:
- Input email dengan validasi format
- Input password dengan toggle show/hide
- Validasi tidak boleh kosong
- Alert konfirmasi login sukses
- Redirect ke Dashboard dengan router.replace()
- Link ke halaman Register

**Validasi**:
- Email tidak boleh kosong
- Password tidak boleh kosong
- Email harus format valid (regex)

#### 4. **src/app/register.tsx**
**Fungsi**: Halaman Register dengan validasi lengkap.

**Fitur**:
- Input nama lengkap
- Input email dengan validasi
- Input password dengan toggle
- Input konfirmasi password dengan toggle
- Validasi semua field
- Alert konfirmasi register sukses
- Redirect ke Login
- Link ke halaman Login

**Validasi**:
- Semua field harus diisi
- Email format valid
- Password minimal 6 karakter
- Konfirmasi password harus sama

#### 5. **src/app/(tabs)/_layout.tsx**
**Fungsi**: Bottom Tab Navigator dengan 5 menu.

**Menu**:
1. Home (ikon: home)
2. Produk (ikon: cube)
3. Transaksi (ikon: cart)
4. Report (ikon: stats-chart)
5. Profil (ikon: people)

**Fitur**:
- Safe Area Insets: `Math.max(insets.bottom, 8) + 60`
- Warna aktif: #2563EB (biru)
- Warna inaktif: #64748B (abu-abu)
- Auto hide saat keyboard muncul (Android)
- Shadow dan border top

#### 6. **src/app/(tabs)/home.tsx**
**Fungsi**: Dashboard Home dengan kartu sambutan dan menu marketplace.

**Komponen**:
- **Kartu Sambutan**:
  - Status "Berhasil Masuk"
  - Judul "Halo, Selamat Datang!"
  - Email user (dummy: user@marketplace.com)
  
- **5 Menu Cepat** (Grid 2 kolom):
  1. Produk → router.push ke tab Produk
  2. Pelanggan → Alert "Fitur akan dikembangkan"
  3. Supplier → Alert "Fitur akan dikembangkan"
  4. Barang Masuk → Alert "Fitur akan dikembangkan"
  5. Barang Keluar → Alert "Fitur akan dikembangkan"

**Desain**:
- Kartu biru gradasi
- Menu dengan ikon warna berbeda
- Responsive grid

#### 7. **src/app/(tabs)/produk.tsx**
**Fungsi**: Katalog produk dengan daftar 5 produk dummy.

**Data Produk**:
1. Minyak Goreng 2L - 45 pcs - Rp38.000
2. Beras Premium 5kg - 18 karung - Rp72.500
3. Gula Pasir 1kg - 30 pcs - Rp17.500
4. Tepung Terigu 1kg - 25 pcs - Rp15.000
5. Susu Bubuk 400g - 40 pcs - Rp42.000

**Tampilan**:
- Header: "Katalog Produk"
- Subtitle: "Inventaris Barang Toko"
- Kartu produk dengan ikon, nama, stok, harga
- Format harga Rupiah

#### 8. **src/app/(tabs)/transaksi.tsx**
**Fungsi**: Daftar transaksi berjalan dengan 5 transaksi dummy.

**Data Transaksi**:
- TRX-001: 3 item, 10:15 WIB, Rp128.000
- TRX-002: 5 item, 11:02 WIB, Rp214.500
- TRX-003: 2 item, 11:30 WIB, Rp95.000
- TRX-004: 7 item, 12:15 WIB, Rp342.000
- TRX-005: 4 item, 13:45 WIB, Rp187.500

**Tampilan**:
- Header: "Transaksi Berjalan"
- Subtitle: "Kasir & Keranjang Belanja"
- Kartu transaksi dengan ID, items, waktu, total
- Ikon keranjang

#### 9. **src/app/(tabs)/report.tsx**
**Fungsi**: Laporan statistik penjualan hari ini.

**Data Statistik** (Grid 2x2):
1. Omset Hari Ini: Rp1.850.000
2. Total Nota: 24 Transaksi
3. Produk Terjual: 156 Item
4. Rata-rata Nota: Rp77.083

**Tampilan**:
- Header: "Laporan Toko"
- Subtitle: "Ringkasan Penjualan Hari Ini"
- 4 kartu statistik dengan ikon warna berbeda
- Grid responsive

#### 10. **src/app/(tabs)/profil.tsx**
**Fungsi**: Halaman profil user dengan fitur logout.

**Komponen**:
- Ikon profil besar (100x100)
- Title: "Profil Pengguna"
- Subtitle: "Informasi akun aktif"
- Tombol Logout (merah)

**Fitur Logout**:
- Alert konfirmasi sebelum logout
- router.replace('/login') agar tidak bisa back
- Menghapus sesi (jika ada state management)

#### 11. **src/styles/authStyles.ts**
**Fungsi**: Style untuk halaman Login dan Register.

**Style Utama**:
- Container dengan background #F8FAFC
- Form card putih dengan shadow
- Input dengan border radius 12px
- Button biru dengan shadow
- Focus state untuk input

#### 12. **src/styles/homeStyles.ts**
**Fungsi**: Style untuk halaman Dashboard Home.

**Style Utama**:
- Welcome card biru (#2563EB)
- Menu grid 2 kolom
- Menu item dengan ikon warna berbeda
- Border radius 16px
- Shadow lembut

#### 13. **src/styles/tabStyles.ts**
**Fungsi**: Style untuk semua halaman tab (Produk, Transaksi, Report, Profil).

**Style Utama**:
- Product card dengan ikon dan info
- Transaction card dengan header dan footer
- Stats card grid 2x2
- Profile card centered
- Logout button merah
- Consistent spacing dan typography

---

## 🔧 CARA INSTALASI DEPENDENCIES

### ⚠️ PENTING: Atasi PowerShell Execution Policy

Jika Anda menggunakan Windows dan mendapat error:
```
running scripts is disabled on this system
```

### Solusi 1: Gunakan Command Prompt (CMD) - RECOMMENDED

1. Tekan `Windows + R`
2. Ketik `cmd`
3. Tekan Enter
4. Navigasi ke folder proyek:
   ```cmd
   cd D:\mobile2\tugas_2310035
   ```

### Solusi 2: Aktifkan Execution Policy

Buka PowerShell sebagai Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Install Package @expo/vector-icons

Di Command Prompt (CMD):
```cmd
npm install @expo/vector-icons
```

atau menggunakan Expo CLI:
```cmd
npx expo install @expo/vector-icons
```

**Output yang diharapkan**:
```
added 1 package, and audited XXX packages in Xs
```

---

## ▶️ CARA MENJALANKAN APLIKASI

### 1. Start Development Server

Di Command Prompt (CMD):
```cmd
cd D:\mobile2\tugas_2310035
npm start
```

atau:
```cmd
npx expo start
```

**Output yang diharapkan**:
```
› Metro waiting on exp://192.168.X.X:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
```

### 2. Pilih Platform

- **a** - Android Emulator (harus sudah terinstall Android Studio)
- **i** - iOS Simulator (hanya untuk Mac)
- **w** - Web Browser
- **Scan QR Code** - Gunakan aplikasi Expo Go di smartphone

### 3. Tunggu Build Selesai

Aplikasi akan di-bundle oleh Metro Bundler. Tunggu sampai muncul:
```
✓ Built successfully
```

### 4. Aplikasi Terbuka

- Di emulator/simulator: Aplikasi otomatis terbuka
- Di smartphone: Aplikasi terbuka di Expo Go setelah scan QR
- Di web: Browser otomatis membuka localhost:8081

---

## 🧪 TESTING APLIKASI

### Test Flow Lengkap (Step by Step)

#### 1. Splash Screen
- [ ] Aplikasi dibuka
- [ ] Muncul ikon storefront biru
- [ ] Muncul text "Marketplace App"
- [ ] Muncul loading indicator
- [ ] Setelah 2 detik, auto redirect ke Login

#### 2. Halaman Login
- [ ] Muncul ikon log-in biru
- [ ] Muncul title "Masuk"
- [ ] Ada input Email dan Password
- [ ] Klik "Daftar sekarang" → Pindah ke Register
- [ ] Test validasi kosong: Klik "Masuk" tanpa isi → Alert error
- [ ] Test validasi email: Isi email invalid (tanpa @) → Alert error
- [ ] Test login sukses: Isi email valid + password → Alert sukses → Redirect ke Home

#### 3. Halaman Register
- [ ] Muncul ikon person-add biru
- [ ] Muncul title "Daftar"
- [ ] Ada input Nama, Email, Password, Konfirmasi Password
- [ ] Toggle show/hide password berfungsi
- [ ] Test validasi kosong → Alert error
- [ ] Test email invalid → Alert error
- [ ] Test password < 6 karakter → Alert error
- [ ] Test konfirmasi password tidak sama → Alert error
- [ ] Test register sukses → Alert sukses → Redirect ke Login

#### 4. Dashboard Home
- [ ] Kartu sambutan biru muncul
- [ ] Status "Berhasil Masuk" terlihat
- [ ] Email user tertampil
- [ ] 5 menu cepat dalam grid 2 kolom
- [ ] Klik menu "Produk" → Pindah ke tab Produk
- [ ] Klik menu "Pelanggan" → Alert "Fitur akan dikembangkan"
- [ ] Klik menu lainnya → Alert muncul

#### 5. Bottom Navigation
- [ ] 5 tab terlihat di bawah: Home, Produk, Transaksi, Report, Profil
- [ ] Ikon aktif berwarna biru (#2563EB)
- [ ] Ikon non-aktif berwarna abu (#64748B)
- [ ] Label muncul di bawah ikon
- [ ] Tab bar memiliki shadow
- [ ] Tinggi tab bar sesuai dengan device (safe area)
- [ ] Ketika buka keyboard, tab bar otomatis hide (Android)

#### 6. Halaman Produk
- [ ] Header "Katalog Produk" terlihat
- [ ] Subtitle "Inventaris Barang Toko" terlihat
- [ ] 5 produk ditampilkan dalam kartu
- [ ] Setiap produk menampilkan: ikon, nama, stok, harga
- [ ] Harga dalam format Rupiah (Rp38.000)
- [ ] Scroll berfungsi untuk melihat semua produk

#### 7. Halaman Transaksi
- [ ] Header "Transaksi Berjalan" terlihat
- [ ] Subtitle "Kasir & Keranjang Belanja" terlihat
- [ ] 5 transaksi ditampilkan dalam kartu
- [ ] Setiap transaksi menampilkan: ID, jumlah item, waktu, total
- [ ] Total dalam format Rupiah
- [ ] Ikon keranjang terlihat
- [ ] Scroll berfungsi

#### 8. Halaman Report
- [ ] Header "Laporan Toko" terlihat
- [ ] Subtitle "Ringkasan Penjualan Hari Ini" terlihat
- [ ] 4 kartu statistik dalam grid 2x2
- [ ] Kartu 1: Omset Hari Ini - Rp1.850.000
- [ ] Kartu 2: Total Nota - 24 Transaksi
- [ ] Kartu 3: Produk Terjual - 156 Item
- [ ] Kartu 4: Rata-rata Nota - Rp77.083
- [ ] Setiap kartu memiliki ikon warna berbeda

#### 9. Halaman Profil
- [ ] Ikon profil besar (person) terlihat
- [ ] Title "Profil Pengguna" terlihat
- [ ] Subtitle "Informasi akun aktif" terlihat
- [ ] Tombol "Keluar dari Akun" berwarna merah
- [ ] Klik tombol → Alert konfirmasi muncul
- [ ] Pilih "Batal" → Alert ditutup, tetap di Profil
- [ ] Klik tombol lagi → Pilih "Keluar" → Redirect ke Login
- [ ] Coba tekan tombol Back → Tidak kembali ke Dashboard

#### 10. Test Cross-Navigation
- [ ] Dari Home → Klik menu Produk → Pindah ke tab Produk
- [ ] Dari Produk → Klik tab Transaksi → Pindah ke Transaksi
- [ ] Dari Transaksi → Klik tab Report → Pindah ke Report
- [ ] Dari Report → Klik tab Profil → Pindah ke Profil
- [ ] Dari Profil → Klik tab Home → Kembali ke Home
- [ ] Navigation smooth tanpa lag

---

## 📸 SCREENSHOT PANDUAN

### Daftar Screenshot yang Harus Diambil:

1. **Splash Screen**
   - Logo dan loading indicator

2. **Halaman Login**
   - Form login kosong
   - Optional: Alert error validasi

3. **Halaman Register**
   - Form register kosong
   - Optional: Alert sukses register

4. **Dashboard Home**
   - Kartu sambutan di atas
   - 5 menu cepat di bawah
   - Bottom navigation terlihat

5. **Halaman Produk**
   - Header dan list produk
   - Bottom navigation terlihat

6. **Halaman Transaksi**
   - Header dan list transaksi
   - Bottom navigation terlihat

7. **Halaman Report**
   - Header dan 4 kartu statistik
   - Bottom navigation terlihat

8. **Halaman Profil**
   - Ikon profil dan tombol logout
   - Bottom navigation terlihat

9. **Alert Logout**
   - Dialog konfirmasi logout

10. **Bottom Navigation Detail**
    - Fokus pada tab bar dengan ikon

### Cara Mengambil Screenshot:

#### Android Emulator:
- Klik ikon kamera di sidebar emulator
- Atau tekan `Ctrl + S`
- Screenshot tersimpan otomatis

#### iOS Simulator (Mac):
- Tekan `Cmd + S`
- Screenshot tersimpan di Desktop

#### Web Browser:
- Tekan `Print Screen` (Windows)
- Atau gunakan Snipping Tool
- Atau tekan `F12` → Emulate device → Screenshot

#### Smartphone (Expo Go):
- Android: Tekan `Volume Down + Power` bersamaan
- iOS: Tekan `Side Button + Volume Up` bersamaan

---

## 📤 UPLOAD KE GITHUB

### Ringkasan Langkah:

1. **Buat Repository di GitHub**
   - Login ke github.com
   - New repository
   - Nama: `mobile2_NIM_2026` (ganti NIM!)
   - Public
   - Jangan centang apapun
   - Create repository

2. **Upload dari Lokal**
   ```bash
   cd D:\mobile2\tugas_2310035
   git init
   git add .
   git commit -m "Modul 10: Bottom Navigation & Dashboard"
   git remote add origin https://github.com/USERNAME/mobile2_NIM_2026.git
   git branch -M main
   git push -u origin main
   ```

3. **Pastikan Public**
   - Buka repository di GitHub
   - Settings → Danger Zone
   - Change visibility → Make public

**Lihat file `PANDUAN_GITHUB.md` untuk panduan lengkap!**

---

## 📄 PENGUMPULAN TUGAS

### 1. Buat File Notepad

```
https://github.com/USERNAME/mobile2_NIM_2026
```

Ganti USERNAME dan NIM!

### 2. Simpan dengan Nama

```
Mobile2_Modul10_NIM_NamaAnda.txt
```

Contoh: `Mobile2_Modul10_2310035_JohnSmith.txt`

### 3. Upload ke Platform

- Google Classroom
- E-Learning
- Email ke dosen
- Atau sesuai instruksi

---

## ❓ FAQ (Frequently Asked Questions)

### Q1: Error "Cannot find module '@expo/vector-icons'"
**A**: Jalankan `npm install @expo/vector-icons` di CMD (bukan PowerShell).

### Q2: PowerShell script execution error
**A**: Gunakan Command Prompt (CMD) atau Git Bash, BUKAN PowerShell.

### Q3: Expo server tidak bisa start
**A**: 
```cmd
npm install
npx expo start --clear
```

### Q4: Port sudah digunakan
**A**: 
```cmd
npx expo start --port 8081
```

### Q5: Tab bar tertutup tombol Android/iOS
**A**: Sudah ditangani dengan `useSafeAreaInsets()` dan `Math.max(insets.bottom, 8)`.

### Q6: Aplikasi crash setelah login
**A**: Pastikan folder `(tabs)` dan semua file tab sudah dibuat dengan benar.

### Q7: Repository tidak bisa di-push
**A**: Cek apakah URL remote sudah benar:
```bash
git remote -v
```

### Q8: Lupa Personal Access Token GitHub
**A**: Buat token baru di GitHub Settings → Developer settings → Personal access tokens.

### Q9: TypeScript error setelah install
**A**: 
```cmd
npm install --save-dev @types/react@~19.3.0
```

### Q10: Ikon tidak muncul
**A**: Pastikan `@expo/vector-icons` sudah terinstall dan import sudah benar.

---

## ✅ CHECKLIST FINAL SEBELUM DIKUMPULKAN

### Kode & Aplikasi
- [ ] Semua file sudah dibuat sesuai struktur
- [ ] `@expo/vector-icons` sudah terinstall
- [ ] Aplikasi bisa dijalankan tanpa error
- [ ] Login dan Register berfungsi dengan validasi
- [ ] 5 bottom tabs muncul dengan benar
- [ ] Dashboard Home menampilkan kartu sambutan dan 5 menu
- [ ] Halaman Produk menampilkan 5 produk
- [ ] Halaman Transaksi menampilkan 5 transaksi
- [ ] Halaman Report menampilkan 4 statistik
- [ ] Halaman Profil dan Logout berfungsi
- [ ] Safe area insets berfungsi di semua device
- [ ] Navigasi antar halaman smooth

### Testing
- [ ] Sudah test flow lengkap dari splash sampai logout
- [ ] Sudah test validasi form login dan register
- [ ] Sudah test semua menu di Dashboard
- [ ] Sudah test navigasi bottom tabs
- [ ] Sudah test tombol logout dengan konfirmasi

### Screenshot
- [ ] Sudah ambil screenshot 10 halaman
- [ ] Screenshot jelas dan tidak blur
- [ ] Semua fitur terlihat di screenshot

### GitHub
- [ ] Repository sudah dibuat dengan nama `mobile2_NIM_2026`
- [ ] Repository berstatus Public
- [ ] Semua file sudah terupload
- [ ] README.md sudah terisi lengkap
- [ ] Bisa diakses di browser

### Pengumpulan
- [ ] File .txt sudah dibuat dengan format benar
- [ ] Isi file .txt hanya URL repository
- [ ] Nama file: `Mobile2_Modul10_NIM_Nama.txt`
- [ ] File sudah diupload ke platform pengumpulan

---

## 🎉 SELAMAT!

Anda telah menyelesaikan Praktikum Modul 10 dengan lengkap!

### Yang Telah Anda Pelajari:
✅ Expo Router (File-based routing)  
✅ Bottom Tab Navigation  
✅ Safe Area Insets  
✅ Form Validation  
✅ Navigation Flow  
✅ TypeScript dengan React Native  
✅ Style dengan StyleSheet  
✅ State Management dengan useState  
✅ Side Effects dengan useEffect  
✅ Git & GitHub Workflow  

### Next Steps:
- Pelajari State Management (Context API, Redux)
- Integrasi dengan Backend API
- Implementasi Database (AsyncStorage, Realm)
- Fitur Camera dan File Upload
- Push Notifications
- Publishing ke Play Store/App Store

---

**Good luck dengan tugas berikutnya!** 🚀

*Made with ❤️ for Praktikum Mobile 2 - 2026*
