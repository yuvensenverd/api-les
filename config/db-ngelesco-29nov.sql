-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ngelescodum
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `articleDate` datetime NOT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (2,'4 CARA BEBAS DARI BEBAN \"SALAH AMBIL JURUSAN\"','<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also asd the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, Reza and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ?</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574927847342.jpg\" width=\"994\" style=\"\"></p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574927914206.jpg\" width=\"884\" style=\"cursor: nwse-resize;\"></p><p><br></p>','Reza Ardiansyah','2019-12-12 07:00:00',15,'2019-11-28 14:59:52','2019-11-28 14:59:52'),(3,'4 CARA BEBAS DARI BEBAN \"SALAH AMBIL JURUSAN\"','<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also asd the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, Reza and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ?</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574927847342.jpg\" width=\"996\" style=\"cursor: nesw-resize;\"></p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><p><br></p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574927914206.jpg\" width=\"1260\" style=\"\"></p><p><br></p><p><br></p><p><br></p><p><br></p>','Reza Ardiansyah','2019-12-12 07:00:00',15,'2019-11-28 15:08:16','2019-11-28 15:08:16'),(4,'4 Tips Upgrade Penampilanmu di 2020','<p>Meskipun kita mengenal kalimat ‘<em>Don’t judge a book by its cover</em>’, tapi jelas, hal itu jangan menjadi justifikasi untuk tidak menjaga penampilan, ya. Tampil dengan <em>look </em>yang <em>presentable</em> dalam aktivitas sehari-hari juga merupakan hal yang penting, loh. Dengan tampil dengan rapi dan <em>fresh</em>, orang lain juga akan merasa nyaman berinteraksi dengan diri kita. Dan jelas, kita pun akan merasa nyaman menjadi diri sendiri.&nbsp;</p><p>Berikut ini adalah 4 cara untuk meng<em>upgrade</em> penampilanmu agar tampil rapi dan segar:</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574931119907.jpeg\" width=\"1088\" style=\"\"></p><p><br></p><h2>Jaga Kebersihan</h2><p><br></p><p>Kebersihan menempati urutan nomor satu dalam penampilanmu. Dengan kondisi tubuh yang bersih, kamu akan merasa lebih nyaman beraktivitas dan berinteraksi dengan orang-orang di lingkunganmu. Jadi, memakai pakaian yang sudah dicuci bersih (Jangan pernah <em>side A-side B </em>ya hehehe) dan menjaga kebersihan tubuh dengan mandi sehari dua kali adalah kewajiban yang tak boleh kamu tinggalkan. Selain itu, sempatkan juga cuci muka di jam makan siang agar wajahmu selalu bersih dan segar!</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574931196525.jpg\" width=\"1088\" style=\"\"></p><p><br></p><h2>Banyak Minum Air Putih</h2><p><br></p><p>Sudah bukan rahasia lagi kalau air putih memiliki banyak khasiat untuk menyehatkan tubuh dan merawat kesehatan kulit. Dengan minum banyak air putih, kamu bisa membuang racun-racun di dalam tubuhmu sehingga akan tercermin dengan kondisi kulit yang sehat dan terlihat segar. Jadi, sering-seringlah minum air putih, dari mulai bangun tidur sampai menjelang tidur. Oh, dan kurang-kurangin ya minum boba atau minuman manis lainnya, agar tubuhmu senantiasa sehat dan kulitmu makin glowing secara alami.</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574931254275.jpg\" width=\"1089\" style=\"\"></p><h2><br></h2><h2>Pilih Pakaian Bermodel Simpel dan Nyaman</h2><p><br></p><p>Untuk aktivitas sehari-hari, pilihlah pakaian yang modelnya simpel dan nyaman kamu kenakan. Tidak perlu mengenakan pakaian yang terlalu ‘ramai’ dengan hiasan seperti manik-manik atau pita-pita kalau kamu sedang tidak menghadiri acara khusus. <em>Mix and match</em> warna juga boleh banget kamu lakukan, ada banyak rekomendasi <em>mix and match </em>warna baju yang dapat kamu cari sesuai dengan seleramu di internet. Simpel namun kece bukan hal yang mustahil kok, Guys!</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574931354291.jpg\" width=\"1088\" style=\"cursor: nwse-resize;\"></p><p><br></p><h2>Pakai <em>Make-up</em> yang Sesuai dengan Jenis Wajahmu</h2><p><br></p><p>Untuk membuat penampilanmu lebih prima, kamu juga bisa banget tambahkan riasan wajah alias <em>make-up</em> yang menonjolkan fitur-fitur terbaik di wajahmu. Tapi perlu diingat, jenis wajah dan warna kulit setiap orang berbeda-beda, <em>make-up</em> yang terlihat bagus di wajah sahabatmu belum tentu cocok dengan kondisi wajahmu. Bisa jadi <em>foundation</em> yang bagus banget di wajahnya, saat kamu pakai malah jadi abu-abu. Atau lipstik yang di kamu warnanya <em>pink </em>cantik, di temanmu malah jadi merah cabe. Jadi, kamu butuh keahlian untuk mengetahui jenis <em>make-up </em>apa yang cocok dengan tipe wajahmu.&nbsp;</p><p>Kalau belum punya keahlian itu gimana? Oh, jangan sedih! Kamu bisa meng<em>upgrade</em> pengetahuan kamu tentang bagaimana cara memakai <em>make-up,</em> sesuai jenis wajah masing-masing, dengan cara ikut kelas <em>Beauty</em> di Ngeles.co! Dengan pengajar profesional, kamu akan mendapatkan tidak hanya pengetahuan tentang <em>make-up</em> secara mendalam, tapi juga kesempatan untuk memiliki koneksi sebanyak-banyaknya dengan para profesional di bidang <em>make-up!</em> Selain kamu jadi makin tahu caranya mempercantik diri dan meng<em>upgrade</em> penampilanmu menjadi semakin menarik, kamu juga dapat kesempatan untuk memulai karier menjadi <em>Make Up Artist.</em> Siapa tahu suatu saat nanti kamu bisa merias wajah artis idolamu? <em>Who knows!</em></p><p><br></p><p>Jadi, tunggu apa lagi, <em>start to #InvestInYou</em>, <em>upgrade your skill, upgrade your look</em>, <em>and make your first move to enter the amazing world of make-up!</em></p>','Reza Ardiansyah','1998-11-28 07:00:00',10,'2019-11-28 15:56:18','2019-11-28 15:56:18'),(5,'4 Hobi yang Dapat Menghasilkan Uang','<p>Di zaman yang serba canggih ini, kita memiliki banyak pilihan untuk menekuni hal yang kita sukai alias menikmati hobi sembari juga mencari penghasilan dari hobi tersebut. Sudah banyak orang-orang yang menghasilkan uang dari hobi mereka, dan bisa jadi sekarang giliranmu. Yuk, intip dulu apa saja hobi yang bisa menghasilkan uang di masa kini!</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574931771721.jpg\" width=\"1087\" style=\"\"></p><p><br></p><h2>Fotografi</h2><p><br></p><p>Bagi orang-orang yang suka dengan dunia fotografi, memotret selain bisa dijadikan hobi, bisa juga dijadikan profesi yang menghasilkan uang, baik itu menjadi profesi utama, atau bahkan profesi sampingan yang bisa dilakukan saat akhir pekan. Untuk menjadi fotografer profesional, kamu jelas harus mengerti teknis mengambil foto dan jenis kamera apa yang sebaiknya digunakan. Kalau sudah bisa menguasai teknik fotografi dengan baik dan ingin menambah penghasilan, kamu bisa mengorbitkan diri untuk menjadi fotografer yang sesuai dengan spesialisasimu, seperti <em>wedding photography, food photography, baby photography,</em> dan masih banyak lagi! Pssst… uang jajan kamu bisa nambah banyak lho kalau pilih kerjaan sampingan jadi fotografer! </p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574931818380.jpg\" width=\"1088\" style=\"\"></p><p><br></p><h2>Make-Up</h2><p><br></p><p>Untuk sebagian besar orang, make-up merupakan benda wajib yang tak bisa dipisahkan dari kehidupan sehari-hari. Make-up bisa menjadi <em>booster</em> untuk kepercayaan dirimu karena kamu tampil lebih <em>outstanding</em> dengan sapuan riasan wajah. Di zaman sekarang, banyak orang yang mendapatkan penghasilan dari hobi mereka bermake-up, entah itu jadi <em>beauty influencer </em>di Instagram atau Youtube, atau menjadi <em>Make Up Artist</em> yang sangat dibutuhkan di acara-acara besar seperti wisuda atau pernikahan. Jadi selain hobi, keahlian bermake-up juga bisa dipakai untuk menambah pundi-pundi saldo ATM kamu. Menyenangkan, bukan?</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574932007941.jpg\" width=\"1095\" style=\"\"></p><p><br></p><h2>Memasak</h2><p><br></p><p>Sudah bukan rahasia lagi kalau hobi memasak juga bisa menghasilkan uang.&nbsp;</p><p>Kalau kamu memiliki keahlian memasak, entah itu memasak makanan berat atau <em>pastry</em>, keahlian kamu pasti akan terus bisa terpakai, mengingat masyarakat negara kita ini senang sekali mengadakan hajatan, hehehe. Kalau mau menjadikan hobi memasakmu sebagai salah satu penambah penghasilan, kamu bisa coba-coba dulu dengan menawarkan jasamu menyediakan makanan untuk acara pengajian komplek yang diadakan tetanggamu. Dan dengan kekuatan <em>word of mouth </em>(WOM), percayalah keahlian kamu akan semakin diketahui banyak orang dan membuat penghasilanmu semakin bertambah!</p><p><br></p><p><img src=\"http://localhost:2020/post/blog/PQuil1574932073587.jpeg\" width=\"1088\" style=\"\"></p><p><br></p><h2>E-Sport</h2><p><br></p><p>Kalau Mama Papamu masih suka marah-marah lihat kamu main <em>game</em> melulu, coba beritahu mereka baik-baik kalau main <em>game</em> sekarang justru malah menghasilkan banyak uang. Lihat <em>gamers</em> yang sudah berhasil seperti Pewdiepie yang kekayaannya bisa beli iPhone 11 Pro bertruk-truk. Hehehe. Dengan keahlian main <em>game</em>, kamu bisa ikut turnamen <em>gaming</em> yang hadiahnya nggak main-main! Selain itu, kamu bisa ‘menjual’ keahlianmu di <em>game-game</em> yang kamu mainkan supaya memudahkan orang lain <em>achieve</em> level tertentu. Enak banget kan, hobi yang dulunya sering bikin kamu dimarahin, sekarang justru jadi sumber penghasilan kamu yang paling besar!</p><p><br></p><p>Nah, hobi-hobi yang dapat menghasilkan uang seperti yang sudah dijelaskan di atas, dapat kamu perdalam lagi supaya kamu tambah mahir menekuni hobi yang kamu sukai tersebut. Salah satu cara untuk memperdalam hobimu adalah dengan mengikuti kelas dari ngeles.co, dimana kamu dapat memilih kelas sesuai dengan hobimu, dengan materi yang dibawakan oleh para mentor yang ahli di bidangnya. Dijamin, kamu akan lebih mahir menguasai hobimu setelah mengikuti kelas tersebut, dan pada akhirnya, kamu siap menjadikan hobimu sebagai sumber pendapatan yang menambah uang jajanmu!&nbsp;</p><p><br></p><p>Jadi, ayo sign up sekarang untuk mendapatkan informasi kelas yang akan datang!</p><p><br></p><p><br></p>','Reza Ardiansyah','1998-11-28 07:00:00',8,'2019-11-28 16:08:44','2019-11-28 16:08:44'),(6,'Test123','<p>Di zaman yang serba canggih ini, kita memiliki banyak pilihan untuk menekuni hal yang kita sukai alias menikmati hobi sembari juga mencari penghasilan dari hobi tersebut. Sudah banyak orang-orang yang menghasilkan uang dari hobi mereka, dan bisa jadi sekarang giliranmu. Yuk, intip dulu apa saja hobi yang bisa menghasilkan uang di masa kini!</p><p><br></p><p>	<img src=\"http://localhost:2020/post/blog/PQuil1574935913389.jpeg\" width=\"371\" style=\"display: block; margin: auto; cursor: nesw-resize;\"></p>','aT','1999-11-11 07:00:00',8,'2019-11-28 17:16:31','2019-11-28 17:16:31');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (8,'Photography & Videography','/default/category/photography.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(9,'Cooking & Baking','/default/category/cooking.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(10,'Beauty','/default/category/beauty.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(11,'Art & Craft','/default/category/art-craft.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(12,'Youtube','/default/category/youtuber.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(13,'Health & Fitness','/default/category/health-fitness.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(14,'E-Sport','/default/category/esport.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(15,'Business & Enterpreneurship','/default/category/business.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(16,'Love & Romance','/default/category/love-romance.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `googleUrl` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `pictureUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20191126030632-create-user.js'),('20191126030824-create-user-interest.js'),('20191126031048-create-location.js'),('20191126031317-create-article.js'),('20191126031413-create-category.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinterests`
--

DROP TABLE IF EXISTS `userinterests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userinterests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `subscribeList` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinterests`
--

LOCK TABLES `userinterests` WRITE;
/*!40000 ALTER TABLE `userinterests` DISABLE KEYS */;
INSERT INTO `userinterests` VALUES (1,'reza@gmail.com','Photography & Videography,Beauty,Dance','2019-11-28 10:51:47','2019-11-28 10:51:47');
/*!40000 ALTER TABLE `userinterests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `googleId` varchar(255) DEFAULT NULL,
  `facebookId` varchar(255) DEFAULT NULL,
  `isVerified` int(11) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (17,'Reza','Ardi','rezamusashi@gmail.com','0',NULL,NULL,'7620d61c62555fa07b57b4a79e924e3aa0ae652988667040f0f5cde837cd3df0',1,'2019-11-27 22:25:55','2019-11-27 22:25:55'),(18,'Reza','Iansyah','rezamusashi@gmail.com','0',NULL,'8d49f7d18ca6aabc54b411488abf2a754eada933d19b598c113c6e3af920342e',NULL,1,'2019-11-28 10:54:37','2019-11-28 10:54:37'),(19,'Reza','Ardiansyah','rezardiansyah1997@gmail.com','081122223333','3f7ee71e31c4af25d6f6586db24a53924d962796c139637a22df700792aa9e7b',NULL,NULL,0,'2019-11-28 12:10:40','2019-11-28 12:10:40');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-29  9:44:06
