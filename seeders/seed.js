// import sequelize
const sequelize = require('../config/db_config');

// import model
const Course = require('../model/course.model');
const Peserta = require('../model/peserta.model');

// drop table if exists
(async () => {
    await Peserta.drop();
    await Course.drop();
})();

// create table if not exists
(async () => {
    await Course.sync();
    await Peserta.sync();
})();

// Seeder data Course
const courseSeeds = [
    {
        id: 'C001',
        nama: 'UI/UX Design',
        deskripsi_singkat: 'UI/UX Design dapat membantu peserta mempersiapkan diri untuk berkarir di industri desain digital yang terus berkembang dan memberikan pemahaman yang mendalam tentang bagaimana menciptakan pengalaman pengguna yang luar biasa di dunia digital.',
        deskripsi_panjang: '',
        photo: '',
        rating: 9.8,
        harga: 4000000,
        jumlah_peserta: 100,
    },
    {
        id: 'C002',
        nama: 'Software Engineering',
        deskripsi_singkat: 'Kejar salah satu karir paling tangguh di bidang Teknologi sebagai Insinyur Perangkat Lunak dengan pemahaman komprehensif tentang pengembangan web front-end hingga back-end.',
        deskripsi_panjang: '',
        photo: '',
        rating: 9.9,
        harga: 5000000,
        jumlah_peserta: 100,
    },
    {
        id: 'C003',
        nama: 'Data Analyst',
        deskripsi_singkat: 'Gunakan keahlian analisis data, pola pikir bisnis, dan keterampilan komunikasi Anda serta jawab pertanyaan bisnis yang kompleks dengan data.',
        deskripsi_panjang: '',
        photo: '',
        rating: 9.8,
        harga: 2000000,
        jumlah_peserta: 100,
    }
];

// Sync model to database
sequelize.sync()
    .then(async () => {
        // Course Seeder
        await Course.destroy({ where: {} }); // delete all existing rows in the "Course" table
        await Course.bulkCreate(courseSeeds); // seed new course data to database

        // End Process
        process.exit(0); // Exit with success
    })
    .catch((err) => {
        console.error('Error:', err);
        process.exit(1); // Exit with error
    });