-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: ngelesco
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.19.04.2

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
-- Table structure for table `articlecategories`
--

DROP TABLE IF EXISTS `articlecategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articlecategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `articleId` (`articleId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `articlecategories_ibfk_1` FOREIGN KEY (`articleId`) REFERENCES `articles` (`id`),
  CONSTRAINT `articlecategories_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articlecategories`
--

LOCK TABLES `articlecategories` WRITE;
/*!40000 ALTER TABLE `articlecategories` DISABLE KEYS */;
INSERT INTO `articlecategories` VALUES (1,6,1,'2019-11-29 17:33:46','2019-11-29 17:33:46'),(2,6,2,'2019-11-29 17:33:46','2019-11-29 17:33:46'),(3,6,7,'2019-11-29 17:33:46','2019-11-29 17:33:46'),(4,6,3,'2019-11-29 17:33:46','2019-11-29 17:33:46'),(5,7,3,'2019-11-29 17:38:18','2019-11-29 17:38:18');
/*!40000 ALTER TABLE `articlecategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_0900_ai_ci,
  `author` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `articleDate` datetime DEFAULT NULL,
  `banner` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (6,'4 Hobi yang Dapat Menghasilkan Uang','    <p><br></p><p>Di zaman yang serba canggih ini, kita memiliki banyak pilihan untuk menekuni hal yang kita sukai alias menikmati hobi sembari juga mencari penghasilan dari hobi tersebut. Sudah banyak orang-orang yang menghasilkan uang dari hobi mereka, dan bisa jadi sekarang giliranmu. Yuk, intip dulu apa saja hobi yang bisa menghasilkan uang di masa kini!</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/PQuil1575023423465.jpg\"></p><p><br></p><h2>Fotograpi</h2><p>Bagi orang-orang yang suka dengan dunia fotografi, memotret selain bisa dijadikan hobi, bisa juga dijadikan profesi yang menghasilkan uang, baik itu menjadi profesi utama, atau bahkan profesi sampingan yang bisa dilakukan saat akhir pekan. Untuk menjadi fotografer profesional, kamu jelas harus mengerti teknis mengambil foto dan jenis kamera apa yang sebaiknya digunakan. Kalau sudah bisa menguasai teknik fotografi dengan baik dan ingin menambah penghasilan, kamu bisa mengorbitkan diri untuk menjadi fotografer yang sesuai dengan spesialisasimu, seperti <em>wedding photography, food photography, baby photography,</em> dan masih banyak lagi! Pssst… uang jajan kamu bisa nambah banyak lho kalau pilih kerjaan sampingan jadi fotografer!&nbsp;</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/PQuil1575023559843.jpg\"></p><p><br></p><h2>Tata Rias</h2><p>Untuk sebagian besar orang, make-up merupakan benda wajib yang tak bisa dipisahkan dari kehidupan sehari-hari. Make-up bisa menjadi <em>booster</em> untuk kepercayaan dirimu karena kamu tampil lebih <em>outstanding</em> dengan sapuan riasan wajah. Di zaman sekarang, banyak orang yang mendapatkan penghasilan dari hobi mereka bermake-up, entah itu jadi <em>beauty influencer </em>di Instagram atau Youtube, atau menjadi <em>Make Up Artist</em> yang sangat dibutuhkan di acara-acara besar seperti wisuda atau pernikahan. Jadi selain hobi, keahlian bermake-up juga bisa dipakai untuk menambah pundi-pundi saldo ATM kamu. Menyenangkan, bukan?</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/PQuil1575023582265.jpg\"></p><p><br></p><p><strong>Memasak</strong></p><p>Sudah bukan rahasia lagi kalau hobi memasak juga bisa menghasilkan uang.&nbsp;</p><p>Kalau kamu memiliki keahlian memasak, entah itu memasak makanan berat atau <em>pastry</em>, keahlian kamu pasti akan terus bisa terpakai, mengingat masyarakat negara kita ini senang sekali mengadakan hajatan, hehehe. Kalau mau menjadikan hobi memasakmu sebagai salah satu penambah penghasilan, kamu bisa coba-coba dulu dengan menawarkan jasamu menyediakan makanan untuk acara pengajian komplek yang diadakan tetanggamu. Dan dengan kekuatan <em>word of mouth </em>(WOM), percayalah keahlian kamu akan semakin diketahui banyak orang dan membuat penghasilanmu semakin bertambah!</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/PQuil1575023613443.jpg\"></p><p><br></p><h2>E-sport</h2><p>Kalau Mama Papamu masih suka marah-marah lihat kamu main <em>game</em> melulu, coba beritahu mereka baik-baik kalau main <em>game</em> sekarang justru malah menghasilkan banyak uang. Lihat <em>gamers</em> yang sudah berhasil seperti Pewdiepie yang kekayaannya bisa beli iPhone 11 Pro bertruk-truk. Hehehe. Dengan keahlian main <em>game</em>, kamu bisa ikut turnamen <em>gaming</em> yang hadiahnya nggak main-main! Selain itu, kamu bisa ‘menjual’ keahlianmu di <em>game-game</em> yang kamu mainkan supaya memudahkan orang lain <em>achieve</em> level tertentu. Enak banget kan, hobi yang dulunya sering bikin kamu dimarahin, sekarang justru jadi sumber penghasilan kamu yang paling besar!</p><p><br></p><p>Nah, hobi-hobi yang dapat menghasilkan uang seperti yang sudah dijelaskan di atas, dapat kamu perdalam lagi supaya kamu tambah mahir menekuni hobi yang kamu sukai tersebut. Salah satu cara untuk memperdalam hobimu adalah dengan mengikuti kelas dari ngeles.co, dimana kamu dapat memilih kelas sesuai dengan hobimu, dengan materi yang dibawakan oleh para mentor yang ahli di bidangnya. Dijamin, kamu akan lebih mahir menguasai hobimu setelah mengikuti kelas tersebut, dan pada akhirnya, kamu siap menjadikan hobimu sebagai sumber pendapatan yang menambah uang jajanmu!&nbsp;</p><p><br></p><p>Jadi, ayo sign up sekarang untuk mendapatkan informasi kelas yang akan datang!</p><p><br></p><p><br></p>','Y','2019-11-11 07:00:00',NULL,'2019-11-29 17:33:46','2019-11-29 17:33:46'),(7,'4 Tips Upgrade Penampilanmu di 2020','        <p>Meskipun kita mengenal kalimat ‘<em>Don’t judge a book by its cover</em>’, tapi jelas, hal itu jangan menjadi justifikasi untuk tidak menjaga penampilan, ya. Tampil dengan <em>look </em>yang <em>presentable</em> dalam aktivitas sehari-hari juga merupakan hal yang penting, loh. Dengan tampil dengan rapi dan <em>fresh</em>, orang lain juga akan merasa nyaman berinteraksi dengan diri kita. Dan jelas, kita pun akan merasa nyaman menjadi diri sendiri.&nbsp;</p><p>Berikut ini adalah 4 cara untuk meng<em>upgrade</em> penampilanmu agar tampil rapi dan segar:</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/PQuil1575023856140.jpg\"></p><p><br></p><p><strong>Jaga Kebersihan</strong></p><p>Kebersihan menempati urutan nomor satu dalam penampilanmu. Dengan kondisi tubuh yang bersih, kamu akan merasa lebih nyaman beraktivitas dan berinteraksi dengan orang-orang di lingkunganmu. Jadi, memakai pakaian yang sudah dicuci bersih (Jangan pernah <em>side A-side B </em>ya hehehe) dan menjaga kebersihan tubuh dengan mandi sehari dua kali adalah kewajiban yang tak boleh kamu tinggalkan. Selain itu, sempatkan juga cuci muka di jam makan siang agar wajahmu selalu bersih dan segar!</p><p><br></p><p>Join Ngeles.co</p><p><br></p><p><br></p>','Z','2019-11-11 07:00:00',NULL,'2019-11-29 17:38:18','2019-11-29 17:38:18');
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
  `name` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Beauty','/default/category/beauty.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(2,'Cooking & Baking','/default/category/cooking.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(3,'Academic','/default/category/art-craft.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(4,'Health & Fitness','/default/category/health-fitness.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(5,'Youtube','/default/category/youtuber.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55'),(6,'Photography & Videography','/default/category/photography.jpg','2019-11-27 22:25:55','2019-11-27 22:25:55');
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
  `name` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `googleUrl` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `pictureUrl` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
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
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20191126030632-create-user.js'),('20191126030824-create-user-interest.js'),('20191126031048-create-location.js'),('20191126031317-create-article.js'),('20191126031413-create-category.js'),('20191129025855-create-article-category.js');
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
  `email` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `subscribeList` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinterests`
--

LOCK TABLES `userinterests` WRITE;
/*!40000 ALTER TABLE `userinterests` DISABLE KEYS */;
INSERT INTO `userinterests` VALUES (1,'rezardiansyah1997@gmail.com','Cooking & Baking,Dance','2019-11-29 20:37:59','2019-11-29 20:37:59'),(2,'rezamusashi@gmail.com','Photography & Videography,Beauty,Youtube,Writing','2019-11-29 20:40:22','2019-11-29 20:40:22'),(3,'rezardiansyah1997@gmail.com','Photography & Videography,Beauty,E-Sport,Dance','2019-11-29 21:15:02','2019-11-29 21:15:02'),(4,'yuvensenverd@gmail.com','E-Sport,Health & Fitness,Youtube,Art & Craft','2019-12-01 06:39:57','2019-12-01 06:39:57'),(5,'yuvensenverd@yahoo.com','Beauty,Love & Romance,Cooking & Baking,Art & Craft,Dota','2019-12-03 15:35:39','2019-12-03 15:35:39'),(6,'re@gmail.com','Beauty,Academic,Youtube,Cooking & Baking,Health & Fitness,Photography & Videography','2019-12-05 10:22:14','2019-12-05 10:22:14');
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
  `firstName` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `googleId` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `facebookId` varchar(255) COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `isVerified` int(11) NOT NULL DEFAULT '0',
  `role` varchar(45) COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'User',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Reza','Ardi','rezamusashi@gmail.com','0',NULL,NULL,'7620d61c62555fa07b57b4a79e924e3aa0ae652988667040f0f5cde837cd3df0',1,'User','2019-11-29 21:36:48','2019-11-29 21:36:48'),(2,'yuvens','liem','yuvensenverd@gmail.com','0',NULL,'0e8aef9ab9e95331394c3dd1730f8a5de580309abb92c86ac8daf0a80fa1f7c1',NULL,1,'Admin','2019-12-01 06:38:25','2019-12-01 06:38:25'),(3,'Aldino','Rahman','aldinorahman36@gmail.com','0',NULL,'ad8dbac6412ca1cbee5eb5a221b1968a03d4f0e8720fb2255bc0bf204e1b060e',NULL,1,'User','2019-12-01 13:12:52','2019-12-01 13:12:52'),(4,'Gita','Novia','itzme1611_gj@yahoo.com','0',NULL,NULL,'6a49cbfeb9b9245b3709980df954137809d3397188435cee935f26a38dde9240',1,'Admin','2019-12-03 13:41:01','2019-12-03 13:41:01'),(5,'Salma','Adilah Putri','salmaputri1355@gmail.com','085887057434','98c8678f0b205dd44f87d98a3237b6aa9e7b9f3919b0127c80600d20c8b9176d',NULL,NULL,0,'User','2019-12-03 14:44:35','2019-12-03 14:44:35'),(6,'Salma','Adilah','putrisalmaadilah@yahoo.co.id','0',NULL,NULL,'f5641c15bccd7dc03e8bab1d77d29a700281a661e87f1e0f2841f832e646a167',1,'Admin','2019-12-03 15:36:48','2019-12-03 15:36:48'),(7,'Alya','Qonita','alya_qonita@yahoo.com','081219601021','383bd1c75b40603f853afdde6a147fa671eb43dbe4cbbe3b621f7ed536fdab1e',NULL,NULL,1,'User','2019-12-03 17:44:04','2019-12-03 19:27:54'),(8,'Reza','Ardiansyah','rezamusica97@gmail.com','081291316834','3f7ee71e31c4af25d6f6586db24a53924d962796c139637a22df700792aa9e7b',NULL,NULL,0,'Admin','2019-12-03 20:07:42','2019-12-03 20:07:42');
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

-- Dump completed on 2019-12-05 16:09:55
