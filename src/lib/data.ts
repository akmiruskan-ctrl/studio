export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  imageId: string;
};

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'festival-panen-raya-2024',
    title: 'Sukses Besar! Festival Panen Raya BANDAR 2024 Meriah',
    excerpt: 'Ribuan warga dan wisatawan memadati lapangan desa untuk merayakan festival panen raya tahunan yang berlangsung meriah.',
    content: '<p>Festival Panen Raya Desa BANDAR Kec.Sosoh Buay Rayap Kab.OKU tahun 2024 kembali digelar dengan sukses besar. Acara yang berlangsung selama dua hari ini berhasil menarik ribuan pengunjung, baik dari warga desa sendiri maupun wisatawan dari luar daerah.</p><p>Berbagai kegiatan menarik diselenggarakan, mulai dari lomba hasil panen, pertunjukan seni tradisional, hingga bazar produk UMKM lokal. Kepala Desa, Bapak Budi Santoso, dalam sambutannya menyampaikan rasa syukurnya atas hasil panen yang melimpah tahun ini dan antusiasme warga dalam menyukseskan acara.</p><p>"Ini adalah wujud syukur kita bersama dan bukti kekompakan warga Desa BANDAR Kec.Sosoh Buay Rayap Kab.OKU. Semoga tahun depan kita bisa menggelar acara yang lebih meriah lagi," ujarnya.</p>',
    author: 'Tim Redaksi Desa',
    publishedAt: '2024-07-15',
    imageId: 'news-1',
  },
  {
    id: '2',
    slug: 'pembangunan-infrastruktur-baru',
    title: 'Pembangunan Jembatan Gantung Selesai, Akses Antar Dusun Semakin Mudah',
    excerpt: 'Jembatan gantung yang menghubungkan Dusun Suka Maju dan Dusun Suka Damai telah selesai dibangun dan diresmikan.',
    content: '<p>Warga Dusun Suka Maju dan Suka Damai kini bisa bernapas lega. Jembatan gantung yang telah lama dinantikan akhirnya selesai dibangun dan diresmikan oleh Camat setempat pada hari Senin lalu. Pembangunan jembatan ini menggunakan dana desa dan swadaya masyarakat.</p><p>Sebelumnya, warga harus memutar jauh atau menyeberangi sungai yang deras untuk beraktivitas. Dengan adanya jembatan ini, waktu tempuh menjadi jauh lebih singkat dan aman. "Kami sangat berterima kasih kepada pemerintah desa dan semua pihak yang terlibat. Jembatan ini sangat membantu anak-anak kami pergi sekolah," kata seorang warga.</p>',
    author: 'Tim Redaksi Desa',
    publishedAt: '2024-07-10',
    imageId: 'news-2',
  },
  {
    id: '3',
    slug: 'umkm-roti-komala-sari',
    title: 'Pelaku UMKM desa BANDAR yang diketuai oleh ibu KOMALA SARI berkreasi membuat ROTI untuk dipasarkan',
    excerpt: 'Kelompok UMKM di bawah pimpinan Ibu Komala Sari berinovasi dengan memproduksi aneka roti lezat yang siap menembus pasar lokal.',
    content: '<p>Kelompok UMKM Desa Bandar menunjukkan semangat kewirausahaan yang tinggi. Diketuai oleh Ibu Komala Sari, para pelaku usaha mikro ini berkreasi membuat aneka roti dengan berbagai varian rasa untuk dipasarkan. Kegiatan ini bertujuan untuk meningkatkan pendapatan keluarga dan memajukan ekonomi desa.</p><p>Dengan resep warisan yang dimodifikasi, roti buatan Ibu Komala dan timnya memiliki cita rasa yang khas dan langsung menjadi favorit warga. "Kami berharap produk roti kami bisa dikenal lebih luas, tidak hanya di desa ini, tapi juga di luar," ujar Ibu Komala Sari dengan penuh semangat.</p>',
    author: 'Tim Redaksi Desa',
    publishedAt: '2024-07-05',
    imageId: 'news-3',
  },
  {
    id: '4',
    slug: 'waspada-dbd-di-oku',
    title: 'Dinkes OKU, Sumatera Selatan, Minta Warga Waspadai DBD',
    excerpt: 'Dinas Kesehatan Kabupaten Ogan Komering Ulu (OKU), Sumatera Selatan, meminta seluruh masyarakat di daerah itu untuk waspada terhadap penyebaran penyakit Demam Berdarah Dengue (DBD) selama musim pancaroba.',
    content: '<p>Kepala Dinas Kesehatan (Dinkes) OKU, Dedi Wijaya, menyatakan bahwa selama musim pancaroba, potensi penyebaran DBD cenderung meningkat. Oleh karena itu, masyarakat diimbau untuk aktif melakukan Pemberantasan Sarang Nyamuk (PSN) guna mencegah perkembangbiakan nyamuk Aedes aegypti, penyebar virus dengue.</p><p>"Kunci utama pencegahan DBD adalah melalui PSN dengan gerakan 3M Plus, yaitu Menguras tempat penampungan air, Menutup rapat tempat-tempat penampungan air, dan Memanfaatkan kembali atau mendaur ulang barang bekas yang memiliki potensi untuk jadi tempat perkembangbiakan nyamuk," jelas Dedi Wijaya.</p><p>Selain itu, gerakan "Plus" mencakup kegiatan pencegahan lainnya seperti menaburkan bubuk larvasida, menggunakan obat nyamuk, dan memelihara ikan pemakan jentik nyamuk. Dinkes juga mengaktifkan kembali juru pemantau jentik (jumantik) di setiap desa untuk memonitor dan memberikan edukasi kepada masyarakat secara langsung.</p>',
    author: 'Antara News Sumsel',
    publishedAt: '2024-08-01',
    imageId: 'news-4',
  }
];
