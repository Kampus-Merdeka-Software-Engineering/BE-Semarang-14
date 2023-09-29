-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2023 at 08:24 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `learn4u`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id_course` char(4) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `photo` varchar(45) NOT NULL,
  `deskripsi_singkat` tinytext DEFAULT NULL,
  `deskripsi_panjang` longtext DEFAULT NULL,
  `rating` decimal(3,2) NOT NULL,
  `harga` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id_course`, `nama`, `photo`, `deskripsi_singkat`, `deskripsi_panjang`, `rating`, `harga`) VALUES
('C001', 'UI/UX Design', '', 'UI/UX Design dapat membantu peserta mempersiapkan diri untuk berkarir di industri desain digital yang terus berkembang dan memberikan pemahaman yang mendalam tentang bagaimana menciptakan pengalaman pengguna yang luar biasa di dunia digital.', NULL, '9.80', 4000000),
('C002', 'Software Engineering', '', 'Kejar salah satu karir paling tangguh di bidang Teknologi sebagai Insinyur Perangkat Lunak dengan pemahaman komprehensif tentang pengembangan web front-end hingga back-end.', NULL, '9.90', 5000000),
('C003', 'Data Analyst', '', 'Gunakan keahlian analisis data, pola pikir bisnis, dan keterampilan komunikasi Anda serta jawab pertanyaan bisnis yang kompleks dengan data.', NULL, '9.80', 2000000),
('C004', 'Desain Grafis', '', 'Yuk, bergabunglah dalam kursus desain grafis kami! Mari bersama-sama menjelajahi kreativitas dan mengasah keterampilan desain grafis kita bersama instruktur ahli dalam lingkungan yang inspiratif.', NULL, '9.80', 3000000),
('C005', 'AI Untuk Produksi Video', '', 'Ayo, jadilah bagian dari kursus AI kami yang khusus dirancang untuk membantu Anda mengubah cara Anda memproduksi video! Mari pelajari cara memanfaatkan kecerdasan buatan untuk meningkatkan efisiensi, kreativitas, dan kualitas dalam pembuatan video Anda.', NULL, '9.80', 2000000),
('C006', 'Digital Marketing', '', 'Ayo, jadilah bagian dari kursus digital marketing kami! Mari kita eksplorasi bersama strategi pemasaran online terbaru, alat-alat digital, dan praktik terbaik untuk meraih kesuksesan dalam dunia pemasaran di era digital.', NULL, '9.80', 1500000);

-- --------------------------------------------------------

--
-- Table structure for table `pesan`
--

CREATE TABLE `pesan` (
  `id_pesan` bigint(20) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `subject` mediumtext NOT NULL,
  `pesan` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `peserta`
--

CREATE TABLE `peserta` (
  `id_peserta` bigint(20) NOT NULL,
  `id_course` char(4) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `no_hp` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `id_subscription` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `joined_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id_testimonial` bigint(20) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `photo` varchar(45) NOT NULL,
  `testimonial` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id_course`),
  ADD UNIQUE KEY `id_course_UNIQUE` (`id_course`);

--
-- Indexes for table `pesan`
--
ALTER TABLE `pesan`
  ADD PRIMARY KEY (`id_pesan`);

--
-- Indexes for table `peserta`
--
ALTER TABLE `peserta`
  ADD PRIMARY KEY (`id_peserta`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`id_subscription`),
  ADD UNIQUE KEY `id_subscription_UNIQUE` (`id_subscription`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id_testimonial`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pesan`
--
ALTER TABLE `pesan`
  MODIFY `id_pesan` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `peserta`
--
ALTER TABLE `peserta`
  MODIFY `id_peserta` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscription`
--
ALTER TABLE `subscription`
  MODIFY `id_subscription` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id_testimonial` bigint(20) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
