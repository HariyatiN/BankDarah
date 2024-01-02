-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 30, 2023 at 04:30 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bankdarah`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `nama` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` longtext NOT NULL,
  `foto` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `nama`, `email`, `password`, `foto`, `created_at`, `updated_at`) VALUES
(16, 'putra', 'putra@gmail.com', '$2y$12$xJMwL6EA/7gjv3eH5V8yheu8rMf1/R0I33eSUFUnOa6SjWK.FV4HG', 'app/admin/$2y$12$fsO40RpwlQJXe/XGJPKeyedkMa92TXswdtxIAxVsG27VAPFGZhVhW.jpg', '2023-12-22 10:41:13', '2023-12-22 10:41:13'),
(19, 'bujai', 'bujai1@gmail.com', '$2y$12$.tvp28M8e3tIUVmTIWLBoePlqTjKAIxYlP3A9wpRJ55MaTRKuqT4O', 'app/admin/$2y$12$UWk66DSno4r5yLzAqz4Qf.XTyKwfLpZWuf1BUAN03UpwlLxUbHSGG.jpg', '2023-12-30 07:57:42', '2023-12-30 07:57:42');

-- --------------------------------------------------------

--
-- Table structure for table `darah`
--

CREATE TABLE `darah` (
  `id` int NOT NULL,
  `produk_id` int DEFAULT NULL,
  `A` int DEFAULT NULL,
  `B` int DEFAULT NULL,
  `O` int DEFAULT NULL,
  `AB` int DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `darah`
--

INSERT INTO `darah` (`id`, `produk_id`, `A`, `B`, `O`, `AB`, `created_at`, `updated_at`) VALUES
(16, 1, 22, 33, 22, 22, '2023-12-22 16:25:10', '2023-12-22 09:32:32'),
(17, 2, 33, 344, 33, 33, '2023-12-22 16:27:23', '2023-12-22 09:32:54'),
(18, 3, 22, NULL, 22, 22, '2023-12-22 16:28:22', '2023-12-22 09:34:00');

-- --------------------------------------------------------

--
-- Table structure for table `donor`
--

CREATE TABLE `donor` (
  `id` int NOT NULL,
  `pendonor_id` int NOT NULL,
  `darah_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `donor`
--

INSERT INTO `donor` (`id`, `pendonor_id`, `darah_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2023-12-06 12:42:37', '2023-12-06 12:42:37');

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int NOT NULL,
  `judul` varchar(100) NOT NULL,
  `thumbnail` varchar(100) NOT NULL,
  `deskripsi` longtext NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `judul`, `thumbnail`, `deskripsi`, `created_at`, `updated_at`) VALUES
(2, 'Jisoo debut solo', 'app/info/$2y$12$aFCZvoW.z4mQDcwGslCd2.UyMBLxRFiyJqnQeDmFKRM6bbCOPUTnW.png', 'absagsassjhvasvjasva safsafstas s ffafsgajgsauyuygsvuyagsuyafuysfatfsytatfs', '2023-11-21 06:25:14', '2023-11-21 06:25:14'),
(3, 'Generasi Muda Mulai Berkurang Minat Sejarah, Siapa yang Salah?', 'app/info/$2y$12$j.9Qxk.0XLOUeQ5vQHSPTek9nxqlFcj6hhkokUDN5B/GyBWRagYuC.png', 'asgsyugustsrytysrcs65ese65sesse545s5s5s5sssdtsrdtrsdsdsddsdsrdsdrddsdsrdsdddd', '2023-11-21 07:19:23', '2023-11-21 07:19:23'),
(6, 'Generasi Muda Mulai Berkurang Minat Sejarah, Siapa yang Salah?', 'app/info/$2y$12$oAtrBqpFl5sB/b/oPsOMSO4TLyEio2BmxcUoBQV4zkJm9F48SnF7O.png', 'aku anak sehat', '2023-11-22 06:13:03', '2023-11-22 06:13:03'),
(7, 'Dibutuhkan golongan darah ajbshuygt6tsdda mangeak', 'app/info/$2y$12$5gOFRc0UQN1/P2.nQhRK..mCAK4fPx26mL9CK1GHYJGi9WEjRd3L..jpg', 'Dibutuhkan golongan darah O- sebanyak 3 kantong untuk pasien di rumah sakit Fatima korban kecelakaan', '2023-11-22 19:36:36', '2023-11-23 00:08:08'),
(8, 'event donor darah', 'app/info/$2y$12$Zy/BiG2M0Yuio4h5J4fmNeGEi7VoGZe4c3iTraOwNoAgHR.GdrZ6i.jpg', 'lorem ipsum bvlalaanaibysg sgusvftf uygausats6arskb sbdhbd s7gaas7tytftft6fasatsta6csrasraysavsasa\r\nashbhasuyayggdvatdtatdffsfdyusdsnnaj sayababiagafafSFS', '2023-11-23 00:10:06', '2023-12-20 10:38:36');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(3, '2023_12_22_154221_create_produk_tables', 2),
(4, '2023_12_22_154515_create_produk', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pendonor`
--

CREATE TABLE `pendonor` (
  `id` int NOT NULL,
  `nama` varchar(100) NOT NULL,
  `jk` varchar(50) NOT NULL,
  `tlp` varchar(15) NOT NULL,
  `alamat` longtext NOT NULL,
  `gol_darah` varchar(50) NOT NULL,
  `kode_p` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` longtext NOT NULL,
  `foto` varchar(100) NOT NULL,
  `total_donor` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pendonor`
--

INSERT INTO `pendonor` (`id`, `nama`, `jk`, `tlp`, `alamat`, `gol_darah`, `kode_p`, `password`, `foto`, `total_donor`, `created_at`, `updated_at`) VALUES
(8, 'Hariyati Ningsih', 'Perempuan', '0896853743277', 'Jl. Sepakat', 'A+', '827382', '$2y$12$4um8ZFMpJ1ROsSHWULY0ROiMtxkGglxdn.ciuy8pZ6sHYfKpcXRY6', 'app/pendonor/$2y$12$n/6.A//wY6hKGJmw/e1You.Kx4/Ktx9awpCPtSrCBEVyugAb4pSiq.jpg', NULL, '2023-12-06 02:20:55', '2023-12-06 02:31:51'),
(10, 'tes', 'perempuan', '08542524238', 'njbsusvyscscsafcahagvava', 'O', '8262232445', '123444555435', 'pendonor_photos/Y2HfO7J0lGoleJ0IEl41ieWMWhO3A6zRrDTJPx3n.jpg', NULL, '2023-12-06 02:49:58', '2023-12-06 02:49:58'),
(11, 'tes2', 'perempuan', '08542524238', 'sayaaa', 'O', '8262232445', '123444555435', 'pendonor_photos/j62Q4i4ydcXB9PV3TOto7h6D6xsXMwWCIQoQqwkj.jpg', NULL, '2023-12-06 02:52:26', '2023-12-06 02:52:26'),
(17, 'tes8', 'perempuan', '08542524238', 'sayaaa', 'O', '8262232445', '123444555435', 'pendonor_photos/jRu2lxXV36ETjDcHtNOYfamI6T8Fy80dm9x2bqGE.jpg', NULL, '2023-12-06 03:06:06', '2023-12-06 03:06:06');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` bigint UNSIGNED NOT NULL,
  `produk` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `produk`, `created_at`, `updated_at`) VALUES
(1, 'WB', '2023-12-22 09:08:41', '2023-12-22 09:08:41'),
(2, 'TC', NULL, NULL),
(3, 'PRC', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `darah`
--
ALTER TABLE `darah`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `donor`
--
ALTER TABLE `donor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `pendonor`
--
ALTER TABLE `pendonor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `darah`
--
ALTER TABLE `darah`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `donor`
--
ALTER TABLE `donor`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pendonor`
--
ALTER TABLE `pendonor`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
