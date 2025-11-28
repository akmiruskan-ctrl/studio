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
    title: 'Sukses Besar! Festival Panen Raya Bandar 2024 Meriah',
    excerpt: 'Ribuan warga dan wisatawan memadati lapangan desa untuk merayakan festival panen raya tahunan yang berlangsung meriah.',
    content: '<p>Festival Panen Raya Desa Bandar tahun 2024 kembali digelar dengan sukses besar. Acara yang berlangsung selama dua hari ini berhasil menarik ribuan pengunjung, baik dari warga desa sendiri maupun wisatawan dari luar daerah.</p><p>Berbagai kegiatan menarik diselenggarakan, mulai dari lomba hasil panen, pertunjukan seni tradisional, hingga bazar produk UMKM lokal. Kepala Desa, Bapak Budi Santoso, dalam sambutannya menyampaikan rasa syukurnya atas hasil panen yang melimpah tahun ini dan antusiasme warga dalam menyukseskan acara.</p><p>"Ini adalah wujud syukur kita bersama dan bukti kekompakan warga Desa Bandar. Semoga tahun depan kita bisa menggelar acara yang lebih meriah lagi," ujarnya.</p>',
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
    slug: 'pelatihan-umkm-digital',
    title: 'Tingkatkan Pemasaran, Puluhan Pelaku UMKM Ikuti Pelatihan Digital',
    excerpt: 'Pemerintah desa bekerja sama dengan perguruan tinggi lokal mengadakan pelatihan pemasaran digital untuk para pelaku UMKM.',
    content: '<p>Dalam upaya meningkatkan daya saing produk lokal, Pemerintah Desa Bandar menyelenggarakan pelatihan pemasaran digital. Sebanyak 50 pelaku UMKM dari berbagai sektor mengikuti acara yang diadakan di balai desa.</p><p>Materi yang disampaikan meliputi pemanfaatan media sosial untuk promosi, teknik fotografi produk dengan smartphone, hingga cara berjualan di marketplace. Diharapkan setelah pelatihan ini, para pelaku UMKM dapat memperluas jangkauan pasar mereka dan meningkatkan omzet penjualan.</p>',
    author: 'Tim Redaksi Desa',
    publishedAt: '2024-07-05',
    imageId: 'news-3',
  }
];
