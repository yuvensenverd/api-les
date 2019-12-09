-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: ngelesco
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articlecategories`
--

LOCK TABLES `articlecategories` WRITE;
/*!40000 ALTER TABLE `articlecategories` DISABLE KEYS */;
INSERT INTO `articlecategories` VALUES (1,1,1,'2019-12-06 10:16:38','2019-12-06 10:16:38'),(2,1,2,'2019-12-06 10:16:38','2019-12-06 10:16:38'),(3,1,3,'2019-12-06 10:16:38','2019-12-06 10:16:38'),(4,1,4,'2019-12-06 10:16:38','2019-12-06 10:16:38'),(5,1,5,'2019-12-06 10:16:38','2019-12-06 10:16:38'),(6,1,6,'2019-12-06 10:16:38','2019-12-06 10:16:38'),(7,2,1,'2019-12-06 10:35:13','2019-12-06 10:35:13');
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
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `author` varchar(255) DEFAULT NULL,
  `articleDate` datetime DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'6 Hobi yang Dapat Menghasilkan Uang','<p>Di zaman yang serba canggih ini, kita memiliki banyak pilihan untuk menekuni hal yang kita sukai alias menikmati hobi sembari juga mencari penghasilan dari hobi tersebut. Sudah banyak orang-orang yang menghasilkan uang dari hobi mereka, dan bisa jadi sekarang giliranmu. Yuk, intip dulu apa saja hobi yang bisa menghasilkan uang di masa kini!</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/fotografi-k3tkout0.jpg\" width=\"657\" style=\"\"></p><h2><strong>Fotografi</strong></h2><p>Bagi orang-orang yang suka dengan dunia fotografi, memotret selain bisa dijadikan hobi, bisa juga dijadikan profesi yang menghasilkan uang, baik itu menjadi profesi utama, atau bahkan profesi sampingan yang bisa dilakukan saat akhir pekan. Untuk menjadi fotografer profesional, kamu jelas harus mengerti teknis mengambil foto dan jenis kamera apa yang sebaiknya digunakan. Kalau sudah bisa menguasai teknik fotografi dengan baik dan ingin menambah penghasilan, kamu bisa mengorbitkan diri untuk menjadi fotografer yang sesuai dengan spesialisasimu, seperti <em>wedding photography, food photography, baby photography,</em> dan masih banyak lagi! Pssst… uang jajan kamu bisa nambah banyak lho kalau pilih kerjaan sampingan jadi fotografer!</p><p><br></p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/makeup-k3tkq075.jpg\" width=\"657\" style=\"\"></p><h2><strong>Make-up&nbsp;</strong></h2><p>Untuk sebagian besar orang, make-up merupakan benda wajib yang tak bisa dipisahkan dari kehidupan sehari-hari. Make-up bisa menjadi <em>booster</em> untuk kepercayaan dirimu karena kamu tampil lebih <em>outstanding</em> dengan sapuan riasan wajah. Di zaman sekarang, banyak orang yang mendapatkan penghasilan dari hobi mereka bermake-up, entah itu jadi <em>beauty influencer </em>di Instagram atau Youtube, atau menjadi <em>Make Up Artist</em> yang sangat dibutuhkan di acara-acara besar seperti wisuda atau pernikahan. Jadi selain hobi, keahlian bermake-up juga bisa dipakai untuk menambah pundi-pundi saldo ATM kamu. Menyenangkan, bukan?</p><p><br></p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/cooking-k3tkqj6b.jpg\" width=\"656\" style=\"\"></p><h2><strong>Memasak</strong></h2><p>Sudah pada tahu kan kalau hobi memasak juga bisa menghasilkan uang?</p><p>Kalau kamu memiliki keahlian memasak, entah itu memasak makanan berat atau <em>pastry</em>, keahlian kamu pasti akan terus bisa terpakai, mengingat masyarakat negara kita ini senang sekali mengadakan hajatan, hehehe. Kalau mau menjadikan hobi memasakmu sebagai salah satu penambah penghasilan, kamu bisa coba-coba dulu dengan menawarkan jasamu menyediakan makanan untuk acara pengajian komplek yang diadakan tetanggamu. Dan dengan kekuatan <em>word of mouth </em>(WOM), percayalah keahlian kamu akan semakin diketahui banyak orang dan membuat penghasilanmu semakin bertambah!</p><p><br></p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/academic-k3tkr45m.jpg\" width=\"657\" style=\"\"></p><h2><strong>Belajar</strong></h2><p>Iya, belajar! Buat kamu-kamu yang \'kesurupan\' Maudy Ayunda alias hobi banget belajar, hobimu ini juga bisa menghasilkan uang loh! Hobi belajar membuat pengetahuanmu bertambah, dan pengetahuan itu bisa kamu salurkan dengan menjadi tutor bagi mereka-mereka yang membutuhkan ilmu. Kamu bisa menjadi tutor les di waktu senggangmu dan... boom! Uang jajan kamu nambah, deh! Selain jadi pintar karena kamu semakin mengasah ilmu pengetahuanmu setiap harinya, kamu juga bermanfaat bagi orang lain, dan yang penting juga, mendapatkan <em>income</em>.</p><p><br></p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/health-k3tkrmjk.jpg\" width=\"658\" style=\"\"></p><h2><strong>Healthy Living</strong></h2><p>Kamu-kamu yang punya <em>concern</em> akan gaya hidup sehat seperti memasak makanan sehat, olahraga, yoga, senam, dan diet sehat bisa juga loh menjadikan kesukaan kalian akan gaya hidup tersebut menjadi sumber pendapatan, baik pendapatan utama maupun tambahan. Kalian bisa jadi <em>chef</em> khusus makanan sehat dan instruktur gym, yoga, atau senam. Atau kalau tidak mau terikat waktu, kalian bisa punya <em>channel</em> di media sosial yang khusus membahas gaya hidup sehat, jadi konten kalian bisa di-<em>update</em> sesuai dengan waktu luang yang kalian miliki. Semua itu bisa menghasilkan pendapatan loh! Yuk, dicoba!</p><p><br></p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/youtube-k3tks9c4.jpg\" width=\"661\" style=\"\"></p><h2><strong>Membuat Konten di Youtube</strong></h2><p>Apa setiap membuka Youtube, kamu familiar dengan kata-kata, \"Hey, Guys! Jadi hari ini aku mau...\"? Kalau iya, kamu juga bisa coba untuk buat <em>channel</em> Youtubemu sendiri, loh. Hobimu bisa kamu jadikan konten di Youtube, baik itu <em>review</em> makanan, sampai DIY. Kamu bisa menjadikan Youtube sebagai sarana untuk memperluas <em>networking</em> sehingga bila <em>subscriber</em>mu semakin bertambah, kamu bisa mendapatkan uang dari Youtube. Kamu tentu familiar dengan nama-nama Youtuber besar dengan jutaan <em>subscriber </em>seperti Raditya Dika, bukan tidak mungkin loh kalau kamu menekuni hobimu di Youtube, kamu juga bisa menyusul seperti itu, selama kontenmu bukan plagiat dan tidak penuh <em>prank</em> yang merugikan orang, ya. Jadi, hobimu bisa tersalurkan, dompetmu juga menebal!</p><p><br></p><p>Nah, hobi-hobi yang dapat menghasilkan uang seperti yang sudah dijelaskan di atas, dapat kamu perdalam lagi supaya kamu tambah mahir menekuni hobi yang kamu sukai tersebut. Salah satu cara untuk memperdalam hobimu adalah dengan mengikuti kelas dari ngeles.co, dimana kamu dapat memilih kelas sesuai dengan hobimu, dengan materi yang dibawakan oleh para mentor yang ahli di bidangnya. Dijamin, kamu akan lebih mahir menguasai hobimu setelah mengikuti kelas tersebut, dan pada akhirnya, kamu siap menjadikan hobimu sebagai sumber pendapatan yang menambah uang jajanmu!&nbsp;</p><p>&nbsp;</p><p>Jadi, ayo sign up sekarang untuk mendapatkan informasi kelas yang akan datang!</p><p><br></p>','Evin','2019-12-06 07:00:00','/post/blog/6-Hobi-yang-Dapat-Menghasilkan-Uang-k3ws6ea6.jpg','2019-12-06 10:16:38','2019-12-06 10:16:38','6-hobi-yang-dapat-menghasilkan-uang-15a8d1e25811e74de9a5e6fa453a5c0a'),(2,'4 Tips Upgrade Penampilanmu di 2020','<p>Meskipun kita mengenal kalimat ‘<em>Don’t judge a book by its cover</em>’, tapi jelas, hal itu jangan menjadi justifikasi untuk tidak menjaga penampilan, ya. Tampil dengan <em>look </em>yang <em>presentable</em> dalam aktivitas sehari-hari juga merupakan hal yang penting, loh. Dengan tampil dengan rapi dan <em>fresh</em>, orang lain juga akan merasa nyaman berinteraksi dengan diri kita. Dan jelas, kita pun akan merasa nyaman menjadi diri sendiri.&nbsp;</p><p>Berikut ini adalah 4 cara untuk meng<em>upgrade</em> penampilanmu agar tampil rapi dan segar:</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/bubble-k3tlh4a5.jpg\" width=\"508\" style=\"\"></p><h2><strong>Jaga Kebersihan</strong></h2><p>Kebersihan menempati urutan nomor satu dalam penampilanmu. Dengan kondisi tubuh yang bersih, kamu akan merasa lebih nyaman beraktivitas dan berinteraksi dengan orang-orang di lingkunganmu. Jadi, memakai pakaian yang sudah dicuci bersih (Jangan pernah <em>side A-side B </em>ya hehehe) dan menjaga kebersihan tubuh dengan mandi sehari dua kali adalah kewajiban yang tak boleh kamu tinggalkan. Selain itu, sempatkan juga cuci muka di jam makan siang agar wajahmu selalu bersih dan segar!</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/water-k3tlhndg.jpg\" width=\"507\" style=\"\"></p><h2><strong>Banyak Minum Air Putih</strong></h2><p>Sudah bukan rahasia lagi kalau air putih memiliki banyak khasiat untuk menyehatkan tubuh dan merawat kesehatan kulit. Dengan minum banyak air putih, kamu bisa membuang racun-racun di dalam tubuhmu sehingga akan tercermin dengan kondisi kulit yang sehat dan terlihat segar. Jadi, sering-seringlah minum air putih, dari mulai bangun tidur sampai menjelang tidur. Oh, dan kurang-kurangin ya minum boba atau minuman manis lainnya, agar tubuhmu senantiasa sehat dan kulitmu makin glowing secara alami.</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/clothes-k3tli3mb.jpg\" width=\"504\" style=\"\"></p><h2><strong>Pilih Pakaian Bermodel Simpel dan Nyaman</strong></h2><p>Untuk aktivitas sehari-hari, pilihlah pakaian yang modelnya simpel dan nyaman kamu kenakan. Tidak perlu mengenakan pakaian yang terlalu ‘ramai’ dengan hiasan seperti manik-manik atau pita-pita kalau kamu sedang tidak menghadiri acara khusus. <em>Mix and match</em> warna juga boleh banget kamu lakukan, ada banyak rekomendasi <em>mix and match </em>warna baju yang dapat kamu cari sesuai dengan seleramu di internet. Simpel namun kece bukan hal yang mustahil kok, Guys!</p><p><br></p><p><img src=\"https://api.ngeles.co/post/blog/girlmakeup-k3tlikpl.jpg\" width=\"503\" style=\"cursor: nesw-resize;\"></p><h2><strong>Pakai <em>Make-up</em> yang Sesuai dengan Jenis Wajahmu</strong></h2><p>Untuk membuat penampilanmu lebih prima, kamu juga bisa banget tambahkan riasan wajah alias <em>make-up</em> yang menonjolkan fitur-fitur terbaik di wajahmu. Tapi perlu diingat, jenis wajah dan warna kulit setiap orang berbeda-beda, <em>make-up</em> yang terlihat bagus di wajah sahabatmu belum tentu cocok dengan kondisi wajahmu. Bisa jadi <em>foundation</em> yang bagus banget di wajahnya, saat kamu pakai malah jadi abu-abu. Atau lipstik yang di kamu warnanya <em>pink </em>cantik, di temanmu malah jadi merah cabe. Jadi, kamu butuh keahlian untuk mengetahui jenis <em>make-up </em>apa yang cocok dengan tipe wajahmu.&nbsp;</p><p><br></p><p>Kalau belum punya keahlian itu gimana? Oh, jangan sedih! Kamu bisa meng<em>upgrade</em> pengetahuan kamu tentang bagaimana cara memakai <em>make-up,</em> sesuai jenis wajah masing-masing, dengan cara ikut kelas <em>Beauty</em> di Ngeles.co! Dengan pengajar profesional, kamu akan mendapatkan tidak hanya pengetahuan tentang <em>make-up</em> secara mendalam, tapi juga kesempatan untuk memiliki koneksi sebanyak-banyaknya dengan para profesional di bidang <em>make-up!</em> Selain kamu jadi makin tahu caranya mempercantik diri dan meng<em>upgrade</em> penampilanmu menjadi semakin menarik, kamu juga dapat kesempatan untuk memulai karier menjadi <em>Make Up Artist.</em> Siapa tahu suatu saat nanti kamu bisa merias wajah artis idolamu? <em>Who knows!</em></p><p><br></p><p>Jadi, tunggu apa lagi, <em>start to #InvestInYou</em>, <em>upgrade your skill, upgrade your look</em>, <em>and make your first move to enter the amazing world of make-up!</em></p><p><br></p><p><br></p>','Evin','2019-12-06 07:00:00','/post/blog/4-Tips-Upgrade-Penampilanmu-di-2020-k3ws1fvo.jpg','2019-12-06 10:35:13','2019-12-06 10:35:13','4-tips-upgrade-penampilanmu-di-2020-16b8d1e25811e74de9a5e6fa578a5c0a');
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
  `image` varchar(255) DEFAULT NULL,
  `info` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Beauty','/default/category/beauty.jpg','<p><p>Dengan mentor yang berpengalaman di bidang kecantikan, selain kamu mendapatkan ilmu baru dalam merias wajah, kamu pun memiliki kesempatan untuk memperluas jejaring di dunia kecantikan, dimana skill make-upmu bisa teraplikasikan dalam cakupan yang lebih luas.</p><p>Jadi, jangan lewatkan kesempatan untuk #InvestInYou dan bergabunglah di ngeles.co!</p></p>','2019-11-27 22:25:55','2019-11-27 22:25:55'),(2,'Cooking & Baking','/default/category/cooking.jpg','<p><p>Selain teknik memasak dan membuat kue, kamu juga dapat memperdalam pengetahuan mengenai bahan-bahan apa saja yang sebaiknya digunakan dalam masakan atau kue, dimana kamu bisa mendapatkannya, dan berapa rincian harganya. Semua itu akan disampaikan oleh chef yang andal di bidang memasak atau membuat kue, jadi kamu akan mendapatkan ilmu langsung dari ahlinya.</p><p>Ayo tingkatkan skill memasak atau membuat kuemu di ngeles.co #InvestInYou!</p></p>','2019-11-27 22:25:55','2019-11-27 22:25:55'),(3,'Academic','/default/category/academic-01.jpg','<p><p>Bersama dengan para guru yang berpengalaman di bidangnya, kamu akan dibimbing menganalisis dan memecahkan soal-soal dengan cara praktis yang mungkin tidak diajarkan di sekolah.</p><p>Pintar itu hebat. Cerdas itu luar biasa. Asah kecerdasanmu bersama ngeles.co #InvestInYou</p></p>','2019-11-27 22:25:55','2019-11-27 22:25:55'),(4,'Health & Fitness','/default/category/health-fitness.jpg','<p><p>Bersama dengan mentor yang akan selalu memotivasi, mari cari tahu jenis makanan yang sesuai dengan kebutuhan nutrisi tubuhmu. Cari tahu juga kegiatan olahraga yang menjadi minatmu di ngeles.co.</p><p>Ayo komitmen menjalani gaya hidup sehatmu bersama ngeles.co! #InvestInYou</p></p>','2019-11-27 22:25:55','2019-11-27 22:25:55'),(5,'Youtube','/default/category/youtuber.jpg','<p><p>Di ngeles.co kamu akan mempelajari berbagai skills guna mengoptimalkan segala aktivitasmu di platform YouTube. Kursus ini tidak hanya diperuntukkan bagi yang ingin menjadi youtuber saja, namun buat  para pebisnis yang ingin menggunakan youtube dalam aktivitas usaha, ada baiknya kamu mengambil kursus ini.</p></p>','2019-11-27 22:25:55','2019-11-27 22:25:55'),(6,'Photography & Videography','/default/category/photography.jpg','<p><p>Di ngeles.co, Kamu akan dibimbing langsung oleh para profesional di bidang fotografi. Kamu juga akan diajari mulai dari dasar hingga dapat memperoleh foto menarik. Selain itu, akan ada praktik dari teori yang sudah diperoleh di awal. Gimana, menarik bukan?</p></p>','2019-11-27 22:25:55','2019-11-27 22:25:55');
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
INSERT INTO `sequelizemeta` VALUES ('20191126030632-create-user.js'),('20191126030824-create-user-interest.js'),('20191126031048-create-location.js'),('20191126031317-create-article.js'),('20191126031413-create-category.js'),('20191129025855-create-article-category.js'),('20191206023345-add-column-slug-article.js');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinterests`
--

LOCK TABLES `userinterests` WRITE;
/*!40000 ALTER TABLE `userinterests` DISABLE KEYS */;
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
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Reza','Ardi','rezamusashi@gmail.com','0',NULL,NULL,'7620d61c62555fa07b57b4a79e924e3aa0ae652988667040f0f5cde837cd3df0',1,'User','2019-11-29 21:36:48','2019-11-29 21:36:48'),(2,'yuvens','liem','yuvensenverd@gmail.com','0',NULL,'0e8aef9ab9e95331394c3dd1730f8a5de580309abb92c86ac8daf0a80fa1f7c1',NULL,1,'Admin','2019-12-01 06:38:25','2019-12-01 06:38:25'),(3,'Aldino','Rahman','aldinorahman36@gmail.com','0',NULL,'ad8dbac6412ca1cbee5eb5a221b1968a03d4f0e8720fb2255bc0bf204e1b060e',NULL,1,'User','2019-12-01 13:12:52','2019-12-01 13:12:52'),(4,'Gita','Novia','itzme1611_gj@yahoo.com','0',NULL,NULL,'6a49cbfeb9b9245b3709980df954137809d3397188435cee935f26a38dde9240',1,'Admin','2019-12-03 13:41:01','2019-12-03 13:41:01'),(5,'Salma','Adilah Putri','salmaputri1355@gmail.com','085887057434','98c8678f0b205dd44f87d98a3237b6aa9e7b9f3919b0127c80600d20c8b9176d',NULL,NULL,0,'User','2019-12-03 14:44:35','2019-12-03 14:44:35'),(6,'Salma','Adilah','putrisalmaadilah@yahoo.co.id','0',NULL,NULL,'f5641c15bccd7dc03e8bab1d77d29a700281a661e87f1e0f2841f832e646a167',1,'Admin','2019-12-03 15:36:48','2019-12-03 15:36:48'),(7,'Alya','Qonita','alya_qonita@yahoo.com','081219601021','383bd1c75b40603f853afdde6a147fa671eb43dbe4cbbe3b621f7ed536fdab1e',NULL,NULL,1,'User','2019-12-03 17:44:04','2019-12-03 19:27:54'),(8,'Reza','Ardiansyah','rezamusica97@gmail.com','081291316834','3f7ee71e31c4af25d6f6586db24a53924d962796c139637a22df700792aa9e7b',NULL,NULL,0,'Admin','2019-12-03 20:07:42','2019-12-03 20:07:42'),(9,'hisbu','Lab','lab.hisbu@gmail.com','0',NULL,'c239ccac413c8b16c1a717d47d3d6ea6b314f0e23b097959beb6c51c11531921',NULL,1,'User','2019-12-06 09:51:20','2019-12-06 09:51:20'),(10,'a','a','hisbu.4@gmail.com','1','047d839b1a5ce10cb8d1cbcae65ffd0cb19d8473f3b4220a8e21aa923eb97d20',NULL,NULL,0,'User','2019-12-06 09:55:20','2019-12-06 09:55:20');
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

-- Dump completed on 2019-12-09 14:01:04
