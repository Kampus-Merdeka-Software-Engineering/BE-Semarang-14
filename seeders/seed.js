// import sequelize
const sequelize = require('../config/db_config');

// import model
const Course = require('../model/courses.model');
const Peserta = require('../model/peserta.model');

// drop table if exists and create table
(async () => {
    await Course.drop();
    await Peserta.drop();
}
)();

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
        deskripsi_panjang: 'Kursus UI/UX Design adalah program pelatihan yang dirancang khusus untuk membekali peserta dengan pemahaman mendalam dan keterampilan yang diperlukan untuk sukses di dunia desain digital. <br> Ini adalah langkah awal yang penting bagi mereka yang ingin mempersiapkan diri untuk berkarir di industri desain digital yang terus berkembang. <br> Dalam kursus ini, peserta akan diajarkan bagaimana menciptakan pengalaman pengguna yang luar biasa di lingkungan digital, dengan fokus khusus pada antarmuka pengguna (UI) dan desain pengalaman pengguna (UX).\n\nBerikut adalah rangkaian hal yang akan Anda pelajari dan lakukan selama kursus UI/UX Design:\n\n- Pengenalan UI/UX\n- Prototyping dan Desain Wireframe\n- Memperkenalkan Alat Desain\n- Portofolio dan Presentasi',
        photo: '',
        rating: 9.8,
        harga: 4000000,
        jumlah_peserta: 100,
    },
    {
        id: 'C002',
        nama: 'Software Engineering',
        deskripsi_singkat: 'Kejar salah satu karir paling tangguh di bidang Teknologi sebagai Insinyur Perangkat Lunak dengan pemahaman komprehensif tentang pengembangan web front-end hingga back-end.',
        deskripsi_panjang: 'Kursus Rekayasa Perangkat Lunak adalah suatu program pelatihan yang bertujuan untuk mempersiapkan peserta dengan pengetahuan, keterampilan, dan pemahaman yang komprehensif dalam pengembangan perangkat lunak. <br> Dalam kursus ini, peserta akan diarahkan untuk mencapai salah satu karier paling tangguh dan menjanjikan di dunia teknologi, yaitu menjadi seorang Insinyur Perangkat Lunak yang mampu mengelola seluruh spektrum pengembangan perangkat lunak, mulai dari sisi front-end hingga back-end. <br> \n\nBerikut adalah rangkaian hal yang akan Anda pelajari dan lakukan selama kursus Rekayasa Perangkat Lunak:\n\n- Dasar-dasar Pemrograman\n- Pengembangan Front-End\n- Pengembangan Back-End\n- Pengembangan Aplikasi Web Full-Stack\n- Proyek-proyek Praktis',
        photo: '',
        rating: 9.9,
        harga: 5000000,
        jumlah_peserta: 80,
    },
    {
        id: 'C003',
        nama: 'Data Analyst',
        deskripsi_singkat: 'Gunakan keahlian analisis data, pola pikir bisnis, dan keterampilan komunikasi Anda serta jawab pertanyaan bisnis yang kompleks dengan data.',
        deskripsi_panjang: 'Kursus Data Analyst adalah program pelatihan yang dirancang khusus untuk membekali peserta dengan keterampilan dan pengetahuan yang diperlukan untuk menjadi seorang profesional yang sukses di bidang analisis data. <br> Dalam kursus ini, Anda akan dibimbing untuk mengembangkan kemampuan analisis data yang kuat, pola pikir bisnis yang terarah, serta keterampilan komunikasi yang efektif untuk menjawab pertanyaan bisnis yang kompleks dengan menggunakan data sebagai alat utama.<br>\n\n Berikut adalah beberapa hal yang akan Anda pelajari dan lakukan selama kursus Data Analyst:\n\n- Analisis Data Mendalam\n- Pemahaman Bisnis\n- Visualisasi Data\n- Machine Learning\n- Proyek-proyek Praktis\n- Menggunakan Alat Analisis Data',
        photo: '',
        rating: 9.8,
        harga: 2000000,
        jumlah_peserta: 120,
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