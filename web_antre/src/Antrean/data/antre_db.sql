-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2024 at 08:02 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `antre_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `profile_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `created _at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`profile_id`, `email`, `username`, `password`, `created _at`) VALUES
(1, 'judgmentkazzy@yahoo.com', 'kazzy', 'dod1968', '2024-01-14 18:05:04'),
(2, 'dmc@gmail,com', 'pizzaNguns', 'HAAA', '2024-01-14 18:06:02'),
(3, 'luigi@gmail.com', 'Green Mario', 'mariohelp', '2024-01-14 18:07:05');

-- --------------------------------------------------------

--
-- Table structure for table `restos`
--

CREATE TABLE `restos` (
  `resto_id` int(11) NOT NULL,
  `img` varchar(500) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `esWaktu` int(50) NOT NULL,
  `keramaian` varchar(20) NOT NULL,
  `kategori` varchar(20) NOT NULL,
  `rating` int(5) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `jarak` varchar(50) NOT NULL,
  `dsc` varchar(500) NOT NULL,
  `jadwal` varchar(500) NOT NULL,
  `kontak` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restos`
--

INSERT INTO `restos` (`resto_id`, `img`, `nama`, `esWaktu`, `keramaian`, `kategori`, `rating`, `alamat`, `jarak`, `dsc`, `jadwal`, `kontak`) VALUES
(1, 'https://imgsrv2.voi.id/p14rzr-vobXD8QkF9EbdNVf1xQhM_cLa2HYIEnmWqNM/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNTE3ODQvMjAyMjAzMzAyMzQ1LW1haW4uY3JvcHBlZF8xNjQ4NjU4NzU2LmpwZw.jpg', 'Cafe Caffein', 3, 'sepi', 'terdekat', 4, 'Jalan Durian No.34', '350m', 'Cafe Caffeine adalah kafe trendi yang populer di Medan dengan suasana modern dan berkelas, menawarkan berbagai pilihan kopi terbaik dan sering mengadakan acara seni yang menarik.', 'Hari Biasa: 08.00-22.00<br>Sabtu: 10.00-00.00<br>Minggu: 10.00-23.00', 'No. Telp:<br>(061) 823 233 3232<br><br>Media Sosial:<br>@cafecafeine<br>@cafecaffeine_official<br>@cafecaffeinecafe'),
(2, 'https://wisatamilenial.com/wp-content/uploads/2023/02/Review-House-of-Brew-Medan-Image-From-@thelcocoffee.jpg', 'House Of Brew', 15, 'sedang', 'populer', 5, 'Jl. Tangguk Bongkar I No.52a, Tegal Sari Mandala II, Kec. Medan Denai, Kota Medan, Sumatera Utara 20', '1km', 'House Of Brew - Happy to Celebrate Every Moment with U <3', 'Hari Biasa: 10.00-23.30<br>Sabtu: 10.00-00.00<br>Minggu: 10.00-00.00', 'No. Telp:<br>0821-6855-8838<br><br>Media Sosial:<br>@houseofbrew.id<br>@houseofbrew_id<br>@houseofbrew_ofc'),
(3, 'https://10619-2.s.cdn12.com/rests/original/104_515904329.jpg', 'Liu\'s Garden', 25, 'ramai', 'populer', 3, 'Thamrin Plaza, Thamrin Plaza Lantai 5, Jl. M. H. Thamrin No. 75R, Sei Rengas II, Medan, Kota Medan, ', '500m', 'Dimsum, Suki & Chinese Cuisine Specialist', 'Hari Biasa: 11.00-21.45<br>Sabtu: 11.00-21.45<br>Minggu: 11.00-21.45', 'No. Telp:<br>(061) 7354916<br><br>Media Sosial:<br>@nelayanrestaurant<br>@nelayanrestaurantofc<br>@nelayanrestaurant.id');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`profile_id`);

--
-- Indexes for table `restos`
--
ALTER TABLE `restos`
  ADD PRIMARY KEY (`resto_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `restos`
--
ALTER TABLE `restos`
  MODIFY `resto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
