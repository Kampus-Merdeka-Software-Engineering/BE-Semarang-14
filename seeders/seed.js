// import sequelize
const sequelize = require('../config/db_config');

// import model
const Course = require('../model/courses.model');
const Peserta = require('../model/peserta.model');
const Pesan = require('../model/pesan.model');
const Subscription = require('../model/subscription.model');
const Testimonial = require('../model/testimonial.model');

// drop table if exists and create table
(async () => {
    await Course.drop();
    await Peserta.drop();
    await Pesan.drop();
    await Subscription.drop();
    await Testimonial.drop();
}
)();

// create table if not exists
(async () => {
    await Course.sync();
    await Peserta.sync();
    await Pesan.sync();
    await Subscription.sync();
    await Testimonial.sync();
    
})();

// Seeder data Course
const courseSeeds = [
    {
        id: 'C001',
        nama: 'UI/UX Design',
        deskripsi_singkat: 'UI/UX Design dapat membantu peserta mempersiapkan diri untuk berkarir di industri desain digital yang terus berkembang dan memberikan pemahaman yang mendalam tentang bagaimana menciptakan pengalaman pengguna yang luar biasa di dunia digital.',
        deskripsi_panjang: `
        Kursus UI/UX Design adalah program pelatihan yang dirancang khusus untuk membekali peserta dengan pemahaman mendalam dan keterampilan yang diperlukan untuk sukses di dunia desain digital. <br> 
        Dalam kursus ini, peserta akan diajarkan bagaimana menciptakan pengalaman pengguna yang luar biasa di lingkungan digital, dengan fokus khusus pada antarmuka pengguna (UI) dan desain pengalaman pengguna (UX). <br>
        Berikut adalah rangkaian hal yang akan Anda pelajari dan lakukan selama kursus UI/UX Design:
        <ol>
        <li>Pengenalan UI/UX</li>
        <li>Prototyping dan Desain Wireframe </li>
        <li>Memperkenalkan Alat Desain</li>
        <li>Portofolio dan Presentasi</li>
        </ol>
        `,
        photo: 'course-image.png',
        rating: 9.8,
        harga: 4000000,
        jumlah_peserta: 100,
    },
    {
        id: 'C002',
        nama: 'Software Engineering',
        deskripsi_singkat: 'Kejar salah satu karir paling tangguh di bidang Teknologi sebagai Insinyur Perangkat Lunak dengan pemahaman komprehensif tentang pengembangan web front-end hingga back-end.',
        deskripsi_panjang: `
        Kursus Software Engineering adalah suatu program pelatihan yang bertujuan untuk mempersiapkan peserta dengan pengetahuan, keterampilan, dan pemahaman yang komprehensif dalam pengembangan perangkat lunak. <br>
        Dalam kursus ini, peserta akan diarahkan untuk mencapai salah satu karier paling tangguh dan menjanjikan di dunia teknologi, yaitu menjadi seorang Insinyur Perangkat Lunak yang mampu mengelola seluruh spektrum pengembangan perangkat lunak, mulai dari sisi front-end hingga back-end. <br>
        Berikut adalah rangkaian hal yang akan Anda pelajari dan lakukan selama kursus Rekayasa Perangkat Lunak:
        <ol>
        <li>Dasar-dasar Pemrograman</li>
        <li>Pengembangan Front-End</li>
        <li>Pengembangan Back-End</li>
        <li>Pengembangan Aplikasi Web Full-Stack</li>
        <li>Proyek-proyek Praktis</li>
        </ol>
        `,
        photo: 'course-image2.png',
        rating: 9.9,
        harga: 5000000,
        jumlah_peserta: 80,
    },
    {
        id: 'C003',
        nama: 'Data Analyst',
        deskripsi_singkat: 'Manfaatkan dengan sebaik-baiknya keahlian Anda dalam analisis data, pola pikir bisnis, dan keterampilan komunikasi untuk menghadapi tantangan bisnis yang kompleks.',
        deskripsi_panjang: `
        Kursus Data Analyst adalah program pelatihan yang dirancang khusus untuk membekali peserta dengan keterampilan dan pengetahuan yang diperlukan untuk menjadi seorang profesional yang sukses di bidang analisis data. <br>
        Dalam kursus ini, Anda akan dibimbing untuk mengembangkan kemampuan analisis data yang kuat, pola pikir bisnis yang terarah, serta keterampilan komunikasi yang efektif untuk menjawab pertanyaan bisnis yang kompleks dengan menggunakan data sebagai alat utama.<br>
        Berikut adalah beberapa hal yang akan Anda pelajari dan lakukan selama kursus Data Analyst:
        <ol>
        <li>Analisis Data Mendalam</li>
        <li>Pemahaman Bisnis</li>
        <li>Visualisasi Data</li>
        <li>Machine Learning</li>
        <li>Proyek-proyek Praktis</li>
        <li>Menggunakan Alat Analisis Data</li>
        </ol>
        `,
        photo: 'course-image3.png',
        rating: 9.8,
        harga: 2000000,
        jumlah_peserta: 120,
    },
    {
        id: 'C004',
        nama: 'Desain Grafis',
        deskripsi_singkat: 'bergabunglah dalam kursus desain grafis kami. <br> Mari bersama-sama menjelajahi kreativitas dan mengasah keterampilan desain grafis kita bersama instruktur ahli dalam lingkungan yang inspiratif.',
        deskripsi_panjang: `
        Kursus Desain Grafis adalah peluang luar biasa untuk memasuki dunia desain yang penuh kreativitas dan mengasah keterampilan desain grafis Anda.<br>
        Dalam kursus ini, kami akan mengajak Anda untuk memperdalam pemahaman tentang desain grafis, mengembangkan bakat kreatif Anda, dan mengasah keterampilan Anda bersama instruktur yang ahli dalam lingkungan yang penuh inspirasi.<br>
        Berikut adalah rangkaian hal yang akan Anda pelajari dan alami selama kursus Desain Grafis:
        <ol>
        <li>Pengantar ke Desain Grafis</li>
        <li>Prinsip-prinsip Desain</li>
        <li>Alat Desain</li>
        <li>Etika Desain Grafis</li>
        <li>Presentasi dan Portofolio</li>
        </ol>
        `,
        photo: 'course-image4.png',
        rating: 9.8,
        harga: 3000000,
        jumlah_peserta: 100,
    },
    {
        id: 'C005',
        nama: 'AI untuk Produksi Video',
        deskripsi_singkat: 'Kursus AI kami yang khusus dirancang untuk membantu Anda mengubah cara Anda memproduksi video! <br> Mari pelajari cara memanfaatkan kecerdasan buatan untuk meningkatkan efisiensi, kreativitas, dan kualitas dalam pembuatan video Anda.',
        deskripsi_panjang: `
        Kursus AI untuk Produksi Video adalah sebuah perjalanan eksplorasi yang menakjubkan dirancang khusus untuk membekali Anda dengan pengetahuan dan keterampilan yang diperlukan untuk mengubah cara Anda memproduksi video. <br>
        Di dunia yang semakin berkembang pesat, teknologi kecerdasan buatan (AI) telah menjadi kunci dalam meningkatkan efisiensi, kreativitas, dan kualitas dalam pembuatan video.<br>
        Berikut adalah rangkaian hal yang akan Anda pelajari dan alami selama kursus AI untuk Produksi Video:
        <ol>
        <li>Pengenalan ke AI dalam Produksi Video</li>
        <li>Analisis Data Video</li>
        <li>Pengeditan Video Otomatis</li>
        <li>Enhancement Visual</li>
        <li>Personalisasi Konten</li>
        <li>Proyek-proyek Praktis</li>
        </ol>
        `,
        photo: 'course-image5.png',
        rating: 9.8,
        harga: 2000000,
        jumlah_peserta: 110,
    },
    {
        id: 'C006',
        nama: 'Digital Marketing',
        deskripsi_singkat: 'Mari kita eksplorasi bersama strategi pemasaran online terbaru, alat-alat digital, dan praktik terbaik <br> untuk meraih kesuksesan dalam dunia pemasaran di era digital.',
        deskripsi_panjang: 
        `
        Kursus Digital Marketing adalah sebuah perjalanan mendalam yang akan membawa Anda ke dalam dunia yang dinamis dan terus berkembang dari pemasaran online di era digital.<br>
        Ini adalah kesempatan unik untuk meraih pemahaman yang mendalam tentang strategi pemasaran terkini.<br>
        Berikut adalah rangkaian hal yang akan Anda pelajari dan alami selama kursus Digital Marketing:
        <ol>
        <li>Pengantar ke Digital Marketing</li>
        <li>Pemahaman Konsumen Digital</li>
        <li>Pemahaman Konsumen Digital</li>
        <li>Strategi Pemasaran Digital</li>
        <li>Media Sosial</li>
        <li>Tren Terbaru</li>
        </ol>
        `,
        photo: 'course-image6.png',
        rating: 9.8,
        harga: 1500000,
        jumlah_peserta: 80,
    }
];

// Seeder data Peserta
const pesertaSeeds = [
    {
        id_course: 'C001',
        nama: 'Nita',
        email: 'nita@gmail.com',
        no_hp: '081234567890',
        photo: 'user1.jpg',
    },
    {
        id_course: 'C002',
        nama: 'Alex',
        email: 'alex@gmail.com',
        no_hp: '081234567891',
        photo: 'user2.jpg',
    },
    {
        id_course: 'C003',
        nama: 'Christian',
        email: 'chris@gmail.com',
        no_hp: '081234567892',
    }
]

// Seeder data Testimonial
const testiSeeds = [
    {
        id_peserta: 1,
        testimoni: `“Saya sangat bersyukur telah bergabung dengan Learn4U,
        dan saya merasa bahwa keputusan ini telah membantu saya meningkatkan pengetahuan saya.
        Terima kasih Learn4U atas semua yang telah Anda lakukan untuk membantu saya mencapai tujuan belajar saya!”`,
    },
    {
        id_peserta: 2,
        testimoni: `“Saya sangat merekomendasikan Learn4U!!
        kepada siapa pun yang ingin memperdalam pengetahuan dan keterampilan mereka. 
        Ini adalah investasi yang sangat berharga untuk masa depan Anda!.”`,
    },
    {
        id_peserta: 3,
        testimoni: 'Sangat membantu dan memudahkan dalam memahami Data Analyst',
    }
];

// Sync model to database
sequelize.sync()
    .then(async () => {
        // Course Seeder
        await Course.destroy({ where: {} }); // delete all existing rows in the "Course" table
        await Course.bulkCreate(courseSeeds); // seed new course data to database

        // Peserta Seeder
        await Peserta.destroy({ where: {} }); // delete all existing rows in the "Peserta" table
        await Peserta.bulkCreate(pesertaSeeds); // seed new peserta data to database

        // Testimonial Seeder
        await Testimonial.destroy({ where: {} }); // delete all existing rows in the "Testimonial" table
        await Testimonial.bulkCreate(testiSeeds); // seed new testimonial data to database

        // End Process
        process.exit(0); // Exit with success
    })
    .catch((err) => {
        console.error('Error:', err);
        process.exit(1); // Exit with error
    });