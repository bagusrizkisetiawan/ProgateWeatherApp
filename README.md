# WeatherApp

WeatherApp adalah aplikasi cuaca sederhana yang dikembangkan menggunakan React Native. Aplikasi ini memungkinkan pengguna untuk mencari dan melihat informasi cuaca dari berbagai lokasi.

## Fitur

- Mencari informasi cuaca berdasarkan nama kota.
- Menampilkan suhu, deskripsi cuaca, kecepatan angin, dan visibilitas.
- Menampilkan ikon cuaca berdasarkan kondisi cuaca saat ini.

## Prasyarat

Pastikan Anda telah menginstal perangkat lunak berikut:

- Node.js
- Expo CLI

## Instalasi

1. Clone repository ini ke mesin lokal Anda:
    ```sh
    git clone https://github.com/username/repository.git
    ```

2. Masuk ke direktori proyek:
    ```sh
    cd WeatherApp
    ```

3. Instal dependensi:
    ```sh
    npm install
    # atau
    yarn install
    ```

## Menjalankan Aplikasi

1. Mulai server pengembangan Expo:
    ```sh
    npm start
    # atau
    yarn start
    ```

2. Scan kode QR menggunakan aplikasi Expo Go pada perangkat mobile Anda atau gunakan emulator Android/iOS untuk melihat aplikasi.

## Struktur Direktori

```plaintext
WeatherApp/
├── src/
│   ├── components/
│   │   ├── WeatherInfo.js
│   │   └── WeatherSearch.js
│   └── constant.js
├── App.js
├── package.json
└── README.md
