// import model
const Course = require('../model/course.model');

// seed data course
(async () => {
    await Course.create({
        id: 'C001',
        nama: 'UI/UX Design',
        deskripsi_singkat: 'UI/UX Design dapat membantu peserta mempersiapkan diri untuk berkarir di industri desain digital yang terus berkembang dan memberikan pemahaman yang mendalam tentang bagaimana menciptakan pengalaman pengguna yang luar biasa di dunia digital.',
        deskripsi_panjang: '',
        rating: 9.8,
        harga: 4000000,
        photo: '',
    });
    await Course.create({
        id: 'C002',
        nama: 'Software Engineering',
        deskripsi_singkat: 'Kejar salah satu karir paling tangguh di bidang Teknologi sebagai Insinyur Perangkat Lunak dengan pemahaman komprehensif tentang pengembangan web front-end hingga back-end.',
        deskripsi_panjang: '',
        rating: 9.9,
        harga: 5000000,
        photo: '',
    });
    await Course.create({
        id: 'C003',
        nama: 'Data Analyst',
        deskripsi_singkat: 'Gunakan keahlian analisis data, pola pikir bisnis, dan keterampilan komunikasi Anda serta jawab pertanyaan bisnis yang kompleks dengan data.',
        deskripsi_panjang: '',
        rating: 9.8,
        harga: 2000000,
        photo: '',
    });
})();