-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: ngeles
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
-- Dumping data for table `articlecategories`
--

--
-- Dumping data for table `categories`
--



--
-- Dumping data for table `userinterests`
--

LOCK TABLES `userinterests` WRITE;
/*!40000 ALTER TABLE `userinterests` DISABLE KEYS */;
INSERT INTO `userinterests` VALUES (1,'vinskatanjung@gmail.com','Photography & Videography','Murid','2019-12-06 09:52:34','2019-12-19 14:48:04'),(2,'intanagustia10@gmail.com','Cooking & Baking','Murid','2019-12-10 21:08:28','2019-12-10 21:08:28'),(3,'dannovita@yahoo.com','Beauty','Murid','2019-12-10 21:09:02','2019-12-10 21:09:02'),(4,'sukarni@suranto.bpkpenaburjakarta.or.id','Cooking & Baking,Health & Fitness','Murid','2019-12-10 21:09:36','2019-12-10 21:09:36'),(5,'gitanovia@hotmail.com','Cooking & Baking','Murid','2019-12-17 09:44:24','2019-12-17 09:44:24'),(6,'salmaputri1355@gmail.com','Beauty','Murid','2019-12-17 14:04:21','2019-12-18 15:43:51'),(7,'paramitafadila26@gmail.com','Cooking & Baking,Menulis cerita','Murid','2019-12-18 10:18:39','2019-12-18 10:18:39'),(8,'hatimtiakii@gmail.com','Beauty,Photography & Videography,Cooking & Baking','Murid','2019-12-18 11:47:24','2019-12-18 11:47:24'),(9,'test@gmail.com','Beauty','Murid','2019-12-18 16:14:44','2019-12-18 16:14:44'),(10,'dasdas@gmail.com','Academic','Guru','2019-12-18 16:16:41','2019-12-18 16:16:41'),(11,'d@gmail.com','Academic','Guru','2019-12-18 16:25:19','2019-12-18 16:25:19'),(12,'purwahartono@gmail.com','Academic','Guru','2019-12-19 06:06:22','2019-12-19 06:06:22');
/*!40000 ALTER TABLE `userinterests` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2019-12-24 13:41:57
