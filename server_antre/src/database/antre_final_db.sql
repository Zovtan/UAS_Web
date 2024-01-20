-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2024 at 06:28 PM
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
-- Database: `antre_final_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `profile_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `noHp` varchar(20) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(3000) NOT NULL,
  `created _at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`profile_id`, `email`, `noHp`, `username`, `password`, `created _at`) VALUES
(33, 'test3', '1233', 'tester3', '$2b$10$QwdFE1jwo6qB/GZPHQ7qwu68IU8i00Xf5eclRdDSkdC4/p0te2vkC', '2024-01-19 18:14:39'),
(34, 'rifan@gmail.com', '911', 'Rifan', '$2b$10$Nv6Xp8N8FxabP.CXktKzSOiIM/RXSd36KhFpQC8DASOlCSvrjyI42', '2024-01-19 18:29:24'),
(35, 'a', 'a', 'a', '$2b$10$fvuqqF4X9PCPCtF1fAeku.6xhZCrHucs9jC41ORohkrSYtPGE4BRS', '2024-01-19 18:55:11'),
(36, 'tester@gmail.com', '8881312', 'uippp', '$2b$10$fXgnSdkwy47Ran3c205kmevkQLVgkvYIAzEgX5etv.qfYr1.tqiKG', '2024-01-20 14:36:00');

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
  `alamat` varchar(150) NOT NULL,
  `jarak` varchar(50) NOT NULL,
  `dsc` varchar(500) NOT NULL,
  `jadwal` text NOT NULL,
  `kontak` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restos`
--

INSERT INTO `restos` (`resto_id`, `img`, `nama`, `esWaktu`, `keramaian`, `kategori`, `rating`, `alamat`, `jarak`, `dsc`, `jadwal`, `kontak`) VALUES
(1, 'https://imgsrv2.voi.id/p14rzr-vobXD8QkF9EbdNVf1xQhM_cLa2HYIEnmWqNM/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNTE3ODQvMjAyMjAzMzAyMzQ1LW1haW4uY3JvcHBlZF8xNjQ4NjU4NzU2LmpwZw.jpg', 'Cafe Caffein', 3, 'sepi', 'terdekat', 4, 'Jalan Durian No.34', '350m', 'Cafe Caffeine adalah kafe trendi yang populer di Medan dengan suasana modern dan berkelas, menawarkan berbagai pilihan kopi terbaik dan sering mengadakan acara seni yang menarik.', 'Hari Biasa: 08.00-22.00\nSabtu: 10.00-00.00\nMinggu: 10.00-23.00', 'No. Telp:\n(061) 823 233 3232\n\nMedia Sosial:\n@cafecafeine\n@cafecaffeine_official\n@cafecaffeinecafe'),
(2, 'https://wisatamilenial.com/wp-content/uploads/2023/02/Review-House-of-Brew-Medan-Image-From-@thelcocoffee.jpg', 'House Of Brew', 15, 'sedang', 'populer', 5, 'Jl. Tangguk Bongkar I No.52a, Tegal Sari Mandala II, Kec. Medan Denai, Kota Medan, Sumatera Utara 20', '1km', 'House Of Brew - Happy to Celebrate Every Moment with U <3', 'Hari Biasa: 10.00-23.30\nSabtu: 10.00-00.00\nMinggu: 10.00-00.00', 'No. Telp:\n0821-6855-8838\n\nMedia Sosial:\n@houseofbrew.id\n@houseofbrew_id\n@houseofbrew_ofc'),
(3, 'https://10619-2.s.cdn12.com/rests/original/104_515904329.jpg', 'Liu\'s Garden', 25, 'ramai', 'populer', 3, 'Thamrin Plaza, Thamrin Plaza Lantai 5, Jl. M. H. Thamrin No. 75R, Sei Rengas II, Medan, Kota Medan, ', '500m', 'Dimsum, Suki & Chinese Cuisine Specialist', 'Hari Biasa: 11.00-21.45\nSabtu: 11.00-21.45\nMinggu: 11.00-21.45', 'No. Telp:\n(061) 7354916\n\nMedia Sosial:\n@nelayanrestaurant\n@nelayanrestaurantofc\n@nelayanrestaurant.id'),
(4, 'https://akcdn.detik.net.id/community/media/visual/2019/10/29/006387bd-90d2-4c92-896d-4c26bc84b384_43.jpeg?w=250&q=', 'Sushi Tei', 10, 'sedang', 'sponsor', 5, 'Jl. Teuku Daud No.6/12, Madras Hulu, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20152', '1.5km', 'A Good Deal of Sushi', 'Hari Biasa: 10.00-22.00 \nSabtu: 10.00-22.00\nMinggu: 10.00-22.00', 'No. Telp:\n(061)62001101\n\nMedia Sosial:\n@sushitei_medan\n@sushitei.ofc\n@sushitei.id'),
(5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rrjeby_rPyaM3BBSDTxNqcvOuyGZ4sQ1BBG0bkrbwaOF7ibqTsFo7S9I9z2MekYJW2o&usqp=CAU', 'City Ice Cream', 12, 'sedang', 'sponsor', 5, 'Jl. Palang Merah No.114, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20212', '1.2km', 'Sweetening your City life since 2006', 'Hari Biasa: 09.00-22.30\nSabtu: 09.00-22.30\nMinggu: 09.00-22.30', 'No. Telp:\n081368182654\n\nMedia Sosial:\n@officialcityicecream\n@cityicecreamid\n@cityicecream_id'),
(6, 'https://10619-2.s.cdn12.com/rests/original/332_512205521.jpg', 'Purezza Cafe', 8, 'sepi', 'terdekat', 5, 'Jl. Taruma No.15b, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20151', '600m', 'Iconic Florist Cafe in Medan', 'Hari Biasa: 10.00-22.00\nSabtu: 10.00-22.00\nMinggu: 10.00-22.00', 'No. Telp:\n08126077606\n\nMedia Sosial:\n@purezza_cafe\n@ofcpurezzacafe\n@purezzacafe_id'),
(7, 'https://s3-ap-southeast-1.amazonaws.com/atap-main/gallery-full/f68fe87c-c000-48d1-a601-9c2e55d28068/chicken-up-cafe.jpg', 'Bistronomix', 20, 'ramai', 'populer', 2, 'Jl. Perintis Kemerdekaan, Kesawan, Kec. Medan Bar., Kota Medan, Sumatera Utara 20236', '2km', 'Casual eatery serving global fare such as finger foods, pizza & burgers, plus smoothies & mocktails.', 'Hari Biasa: 11.00-01.00\nSabtu: 11.00-03.00\nMinggu: 11.00-03.00', 'No. Telp:\n(061)4561662\n\nMedia Sosial:\n@bistronomix\n@bistronomixmdn\n@bistronomix_mdn'),
(8, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrrH1XiJd9C0nqDA_wTrtE63Hxl1IcpbgR6rtdnZfgsH2byMIAociMnMYKofI7vzbQnU&usqp=CAU', 'The Thirty-Six', 23, 'ramai', 'populer', 5, 'Jl. Multatuli No.36, Hamdan, Kec. Medan Maimun, Kota Medan, Sumatera Utara 20151', '1.7km', 'Speciality Coffee', 'Hari Biasa: 09.00-23.00\nSabtu: 09.00-23.00\nMinggu: 09.00-23.00', 'No. Telp:\n(061)4530970\n\nMedia Sosial:\n@thethirtysix\n@thethirtysixmdn\n@thethirtysixkno'),
(9, 'https://s3.dealjava.com/content/thumb_small/1dd0de3f515bdfd04d5bb1c0e305c281.jpg', 'Harbour 9', 6, 'sepi', 'sponsor', 3, 'Gedung Forum Nine CIMB Niaga Lanta Dasar, Jl. Imam Bonjol No.9,Petisah Tengah', '3.7km', 'Pub plates & cocktails served in relaxed, lofty surrounds with stylish decor & outdoor seating.', 'Hari Biasa: 02.00-23.00\nSabtu: 10.00-23.00\nMinggu: 10.00-23.00', 'No. Telp:\n(061) 4520481\n\nMedia Sosial:\n@harbour9\n@harbour9\n@harbour9.id'),
(10, 'https://adrjbamdqo.cloudimg.io/v7/_wireloca_/532020_08_06182152_sosmed_cafe_abdullah_lubis_5739485798437593487598734.jpg', 'Cafe Abdullah', 9, 'sepi', 'sponsor', 3, 'Jl. Abdullah Lubis No.8-20, Petisah Hulu, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153', '2.4km', 'Instagramable Cafe In Medan', 'Hari Biasa: 11.00-22.00\nSabtu: 11.00-22.00\nMinggu: 11.00-22.00', 'No. Telp:\n(061)42006685\n\nMedia Sosial:\n@sosmedcafe\n@sosmedcafe.id\n@sosmedcafe.mdn'),
(11, 'https://adrjbamdqo.cloudimg.io/v7/_wireloca_/532020_08_06182152_sosmed_cafe_abdullah_lubis_5739485798437593487598734.jpg', 'Starbucks', 5, 'sepi', 'terdekat', 5, 'Thamrin Plaza, Lt.2, Jl. M.H Thamrin No.75R, Sei Rengas I, Kec. Medan Kota', '300m', 'Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availabilit', 'Hari Biasa: 11.00-22.00\nSabtu: 11.00-22.00\nMinggu: 11.00-22.00', 'No. Telp:\n(061) 7362508\n\nMedia Sosial:\n@starbucksindonesia\n@starbucksindonesia\n@starbucks.id'),
(12, 'https://raindreamnlovehome.files.wordpress.com/2020/12/sam_0662-01-1.jpeg?w=1024', 'The Brew Space', 13, 'sedang', 'terdekat', 4, 'Jl. Aipda KS Tubun No.33, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20233', '250m', 'The Havenly Space To Enjoy Coffee', 'Hari Biasa: 08.00-21.00\nSabtu: 08.00-21.00\nMinggu: 08.00-21.00', 'No. Telp:\n(061) 51231891\n\nMedia Sosial:\n@Thebrewingspace\n@Thebrewingspace\n@thebrewingspace'),
(13, 'https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/isdarmady/23vsBTq74K3dBedmu9Wcxxhu4JAqwJUgN9PVVRP6WYWgkiY6aLNK8PnXs7uyJA4LePAqm.jpg', 'Cafe T1311', 23, 'ramai', 'terdekat', 1, 'Jl. Gandhi No.129F, Sei Rengas II, Kec. Medan Area, Kota Medan, Sumatera Utara 20211', '700m', 'Passion in Crafting Excellence We aim to be the best Croissanterie in town and beyond', 'Hari Biasa: 09.00-21.30\nSabtu: 09.00-21.30\nMinggu: 09.00-21.30', 'No. Telp:\n0813-6695-3956\n\nMedia Sosial:\n@t1311.co\n@thirteeneleven\n@t1311.mdn'),
(14, 'https://arsitagx-master-article.s3.ap-southeast-1.amazonaws.com/article-photo/1155/cafe-dan-restoran-2.jpeg', 'LUNA coffee', 3, 'sepi', 'terdekat', 4, 'Jl. Wahidin No.11, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211', '150m', 'Coffee & Toast', 'Hari Biasa: 08.00-22.00\nSabtu: 08.00-22.00\nMinggu: 08.00-22.00', 'No. Telp:\n0813-6695-3956\n\nMedia Sosial:\n@t1311.co\n@thirteeneleven\n@t1311.mdn'),
(15, 'https://assets.grooveapps.com/images/fbd6e5bc-8c35-4bae-bcc5-0c06a2086136/1634202510_DSCF9898.JPG?update=2', 'Prana Cafe', 6, 'sepi', 'terdekat', 3, 'Jl. Wahidin No.5A, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211', '200m', 'No Coffee No Prana, Coffee makes life better', 'Hari Biasa: 09.00-20.00\nSabtu: 09.00-20.00\nMinggu: 09.00-20.00', 'No. Telp:\n0812-6971-3311\n\nMedia Sosial:\n@pranacafe.wahidin\n@pranacafemdn\n@pranacafekno'),
(16, 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/7/18/2ddb5697-2346-4bb7-b1d4-73d07d0e3878.jpg', 'Kopi Konnichiwa', 8, 'sepi', 'terdekat', 5, 'Jl. Aipda KS Tubun No.1, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211', '350m', 'Ready To Served You Japanese Coffee Shop Concept Coffee & Matcha Specialist', 'Hari Biasa: 09.00-20.00\nSabtu: 09.00-20.00\nMinggu: 09.00-20.00', 'No. Telp:\n0812-6971-3311\n\nMedia Sosial:\n@pranacafe.wahidin\n@pranacafemdn\n@pranacafekno'),
(17, 'https://majalah.ottenstatic.com/uploads/2019/09/55FB4D87-58EB-44C8-9E61-8F3BE35CB6EC.jpg', 'D\'Raja Coffee', 7, 'sepi', 'terdekat', 1, 'Jl. Aipda KS Tubun No.117/103, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211', '400m', 'Brewing & Serving Daily', 'Hari Biasa: 08.00-22.00\nSabtu: 08.00-22.00\nMinggu: 08.00-22.00', 'No. Telp:\n0852-1211-7117\n\nMedia Sosial:\n@hubdrajasumatera\n@hubdraja\n@hubdrajamdn'),
(18, 'https://asset.kompas.com/crops/euAY7Se4xZeJZO5RYzViWIncExw=/0x0:0x0/780x390/data/photo/2023/09/27/65140c88112d0.jpg', 'Mie Gacoan', 30, 'ramai', 'populer', 5, 'Jl. Williem Iskandar, Kenangan Baru, Kec. Percut Sei Tuan, Kota Medan, Sumatera Utara', '1km', 'Jagonya Mie Pedas No.1 Di Indoensia', 'Hari Biasa: 09.00-23.00\nSabtu: 09.00-23.00\nMinggu: 09.00-23.00', 'No. Telp:\n0897-9192-129\n\nMedia Sosial:\n@mie.gacoan\n@miegacoanid\n@miegacoan'),
(19, 'https://awsimages.detik.net.id/community/media/visual/2023/01/13/gerai-mixue-di-medan-2_169.jpeg?w=650&q=80', 'Mixue', 28, 'ramai', 'populer', 3, 'Jl. Aipda KS Tubun No.81, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211', '900m', 'Es krim sajian lembut dan minuman teh asal Zhengzhou, Henan, Tiongkok', 'Hari Biasa: 10.00-22.00\nSabtu: 10.00-22.00\nMinggu: 10.00-22.00', 'No. Telp:\n0858-7832-2378\n\nMedia Sosial:\n@mixue.medan\n@mixuemedan\n@mixuekno'),
(20, 'https://upload.crazfood.com/photos/345/1704170920240', 'The Edge', 21, 'ramai', 'populer', 4, 'Jl. S. Parman No.217, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111', '2.2km', 'The best Rooftop Restaurant In Medan', 'Hari Biasa: 04.00-23.00\nSabtu: 04.00-23.00\nMinggu: 04.00-23.00', 'No. Telp:\n0811-6531-599\n\nMedia Sosial:\ncambridgehotelmedan\ncambridgehotelmedan\ncambridgehotelmedan'),
(21, 'https://thecoffeecrowd.co.id/wp-content/uploads/2020/04/MTS-025-scaled.jpg', 'Coffee Crowd', 23, 'ramai', 'populer', 5, 'Thamrin Plaza, Jl. M.H Thamrin No.75R, Sei Rengas I, Kec. Medan Kota, Kota Medan, Sumatera Utara 2021', '250m', 'comfortable place to hangout or or have dinner with your family with an affordable price and tasty food of traditional Medan Indonesia.', 'Hari Biasa: 10.00-22.00\nSabtu: 10.00-22.00\nMinggu: 10.00-22.00', 'No. Telp:\n(061) 7330592\n\nMedia Sosial:\n@thecoffeecrowdofficial\n@thecoffeecrowdofc\n@thecoffeecrowdid'),
(22, 'https://1.bp.blogspot.com/-8wOqf9mT4Jg/XSNIs40RAoI/AAAAAAAACeM/EmeCiZe8Jbc0bpobDHJLeBvKGtWwh8RbACLcBGAs/s1600/wajir%2B-%2B01.jpg', 'Wajir Seafood', 35, 'ramai', 'populer', 3, 'Jl. Kol. Sugiono No.31, A U R, Kec. Medan Maimun, Kota Medan, Sumatera Utara 20212', '1.9km', 'Traditional seafood specialties in a lively restaurant offering unpretentious outdoor dining.', 'Hari Biasa: 04.00-22.00\nSabtu: 04.00-22.00\nMinggu: 11.00-22.00', 'No. Telp:\n(061) 7330592\n\nMedia Sosial:\n@wajir.seafood\n@wajir.seafood\n@wajirseafood.id'),
(23, 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtPviuqLHMJRA92Sh6lmgxHOoAdo_wTrmpzMLVmQookGJHmDGJXQ0y-3c5IvQ3btMUvLzBDtKXiXl3d-7bCmQ0RRRASxgSbqHuu0_KQSuWbhM7OaJOF_yXQBKbnpkxQDMZg9UvzIpU0vDSGYDum0FhU4YHIL-f00woViE7a4kc-X-dEieTJXUOMIt10Q/s4000/20220419_210022.jpg', 'No Brand Cafe', 22, 'ramai', 'populer', 4, 'J K L, Jl. Pandu No.1, A U R, Medan Maimun, Medan City, North Sumatra 20212', '1.4km', 'Fusion Cafe & Patisserie', 'Hari Biasa: 11.00-22.00\nSabtu: 11.00-22.00\nMinggu: 11.00-22.00', 'No. Telp:\n+62819-3062-0282\n\nMedia Sosial:\n@nobrandcafe\n@nobrandcafeid\n@nobrandcafe_mdn'),
(24, 'https://www.centrepoint.co.id/sites/default/files/styles/hero_image_small/public/2021-10/PARADISE%20DYNASTY.jpg?itok=fRcKwu38', 'Paradise Dynasty', 13, 'sedang', 'sponsor', 5, 'Centre Point Mall, Jl. Timor No.7A, Gg. Buntu, Kec. Medan Tim., Kota Medan, Sumatera Utara 20153', '1.1km', 'Legend of Xiao Long Bao', 'Hari Biasa: 10.00-22.00\nSabtu: 10.00-22.00\nMinggu: 10.00-22.00', 'No. Telp:\n08116136662\n\nMedia Sosial:\n@paradisedynastymdn\n@paradisedynastyid\n@paradisedynasty_mdn'),
(25, 'https://lemburkuring.com/wp-content/uploads/2022/04/Picture-4.png', 'Lembur Kuring', 11, 'sedang', 'sponsor', 2, 'Jl. T. Amir Hamzah No.85, Helvetia Tim., Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20124', '4.1km', 'Expansive restaurant offering classic Javanese, Sundanese & seafood dishes, plus a garden & a pond.', 'Hari Biasa: 11.00-22.00\nSabtu: 11.00-22.00\nMinggu: 11.00-22.00', 'No. Telp:\n(061) 8465515\n\nMedia Sosial:\n@lemburkuringmedan\n@lemburkuringmdn\n@ofclemburkuring'),
(26, 'https://1.bp.blogspot.com/-HDUeWmTPkSw/XL7PmJW62OI/AAAAAAAAFo4/_hrSRgI6NTcuws9fE9tyfnLXygCEcfYGwCLcBGAs/s1600/IMG_2653.jpg', 'Resto Kembang', 12, 'sedang', 'sponsor', 4, 'Jl. Medan - Pematang Siantar No.329, Amplas, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara 20148', '10.3km', 'Enjoy your moments with us', 'Hari Biasa: 11.00-21.00\nSabtu: 11.00-21.00\nMinggu: 11.00-21.00', 'No. Telp:\n(061) 42778800\n\nMedia Sosial:\n@restorankembang\n@restorankembangmdn\n@@restorankembangofc'),
(27, 'https://i0.wp.com/makanmana.net/wp-content/uploads/2017/04/budaya-pondok.jpg?fit=1200%2C800&ssl=1', 'Budaya Reston', 14, 'sedang', 'sponsor', 4, 'Jl. Medan - Pematang Siantar, Ujung Serdang, Kec. Tj. Morawa, Kabupaten Deli Serdang, Sumatera Utara 20362', '11km', 'Sophisticated, relaxed venue with outdoor seating serving cocktails & updated local classics', 'Hari Biasa: 08.00-21.00\nSabtu: 08.00-21.00\nMinggu: 11.00-21.00', 'No. Telp:\n(061) 7944333\n\nMedia Sosial:\n@budayaresto\n@budayarestoid\n@budayarestomdn'),
(28, 'https://blogger.googleusercontent.com/img/a/AVvXsEgMZOBx05wxlmj74QhT-HZvVPX_poCQgWy3fBG3GopzUn_FkRcWE7luu6ROll5_65nNB0SBbDwmburT6-61Gx2T9PJjb1oHknNadhuSNCcO8sLtQSPzlW8MPzSAMzBpJWjK05BxFOkGsq67KtmyyYdinBEQNjw2kYgF4I1g7nOwGo-MnneWBmXYRmAI=s16000', 'Koki Sunda', 16, 'sedang', 'sponsor', 2, 'alamat: \"Jl. Hasanuddin No.1, Petisah Hulu, Kec. Medan Baru, Kota Medan, Sumatera Utara 20152\",\r\n', '2.8km', 'Laid-back eatery with a terrace serving classic meat dishes, curries, fish & desserts, plus drinks.', 'Hari Biasa: 11.00-21.00\nSabtu: 11.00-21.00\nMinggu: 11.00-21.00', 'No. Telp:\n(061) 4534302\n\nMedia Sosial:\n@kokisunda\n@kokisunda\n@kokisunda.mdn'),
(29, 'https://halallife.id/media/2021/12/Pondok-Indah-1.jpg', 'Pondok indah', 13, 'sedang', 'sponsor', 4, 'Jl. Hasanuddin No.1, Petisah Hulu, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153', '2.7km', 'HIDANGAN KHAS NUSANTARA', 'Hari Biasa: 11.00-22.00\nSabtu: 11.00-22.00\nMinggu: 11.00-22.00', 'No. Telp:\n(061) 42011999\n\nMedia Sosial:\n@pondokindahresto\n@restopondokindah\n@pondokindah.mdn'),
(30, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tom%27s_Restaurant%2C_NYC.jpg/220px-Tom%27s_Restaurant%2C_NYC.jpg', 'Traders Resto', 10, 'sedang', 'sponsor', 3, 'Jl. Kapten Patimura No.423, Darat, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153', '2.5km', 'We Serve Only The Best Steak in Town', 'Hari Biasa: 11.00-24.00\nSabtu: 11.00-24.00\nMinggu: 11.00-24.00', 'No. Telp:\n(061) 4531881\n\nMedia Sosial:\n@thetradersmedan\n@thetradersmdn\n@thetradersmedan_mdn');

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
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `restos`
--
ALTER TABLE `restos`
  MODIFY `resto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
