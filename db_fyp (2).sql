-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 05, 2022 at 12:53 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fyp`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `url` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `path` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `projectId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `name`, `path`, `createdAt`, `updatedAt`, `projectId`) VALUES
(10, '674aacac9ed1bec4fcd7d2975aa65ce3.png', 'http://127.0.0.1:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', '2022-09-27 04:36:15', '2022-09-27 04:36:15', 12),
(11, '08b804eb3743d24aea055dbd45d8a6ed.jpg', 'http://127.0.0.1:5000/images/08b804eb3743d24aea055dbd45d8a6ed.jpg', '2022-09-27 07:23:32', '2022-09-27 07:23:32', 13),
(12, 'fac4be68be2006e3ee3ea01cd818f364.jpg', 'http://127.0.0.1:5000/images/fac4be68be2006e3ee3ea01cd818f364.jpg', '2022-09-29 10:06:49', '2022-09-29 10:06:49', 14),
(13, 'fac4be68be2006e3ee3ea01cd818f364.jpg', 'http://127.0.0.1:5000/images/fac4be68be2006e3ee3ea01cd818f364.jpg', '2022-09-29 10:10:15', '2022-09-29 10:10:15', 15),
(14, '5410c0eab10bbdc0b65fd867fc9893d3.png', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', '2022-10-04 11:59:08', '2022-10-04 11:59:08', 16),
(15, '5410c0eab10bbdc0b65fd867fc9893d3.png', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', '2022-10-04 12:09:49', '2022-10-04 12:09:49', 17),
(16, '674aacac9ed1bec4fcd7d2975aa65ce3.png', 'http://localhost:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', '2022-10-04 12:15:50', '2022-10-04 12:15:50', 18),
(17, '674aacac9ed1bec4fcd7d2975aa65ce3.png', 'http://localhost:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', '2022-10-04 12:16:10', '2022-10-04 12:16:10', 19),
(18, '08b804eb3743d24aea055dbd45d8a6ed.jpg', 'http://localhost:5000/images/08b804eb3743d24aea055dbd45d8a6ed.jpg', '2022-10-04 12:17:15', '2022-10-04 12:17:15', 20),
(19, '5410c0eab10bbdc0b65fd867fc9893d3.png', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', '2022-10-04 12:19:47', '2022-10-04 12:19:47', 21),
(20, '08b804eb3743d24aea055dbd45d8a6ed.jpg', 'http://localhost:5000/images/08b804eb3743d24aea055dbd45d8a6ed.jpg', '2022-10-04 12:23:24', '2022-10-04 12:23:24', 22),
(21, '674aacac9ed1bec4fcd7d2975aa65ce3.png', 'http://localhost:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', '2022-10-04 12:24:20', '2022-10-04 12:24:20', 23),
(22, '5410c0eab10bbdc0b65fd867fc9893d3.png', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', '2022-10-04 12:32:20', '2022-10-04 12:32:20', 24),
(23, '5410c0eab10bbdc0b65fd867fc9893d3.png', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', '2022-10-04 12:34:28', '2022-10-04 12:34:28', 25),
(24, '5410c0eab10bbdc0b65fd867fc9893d3.png', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', '2022-10-04 12:36:06', '2022-10-04 12:36:06', 26);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `url` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`, `userId`) VALUES
(12, 'Project 2', 'http://127.0.0.1:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', 'https://coba.com', '2022-09-27 04:36:15', '2022-09-27 04:36:15', 6),
(13, 'Project 4', 'http://127.0.0.1:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', 'https://coba.com', '2022-09-27 07:23:32', '2022-09-27 07:23:32', 6),
(14, 'Project 4', 'http://127.0.0.1:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', 'https://erp.com', '2022-09-29 10:06:49', '2022-09-29 10:06:49', 6),
(15, 'Project 6', 'http://127.0.0.1:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', 'https://erp.com', '2022-09-29 10:10:15', '2022-09-29 10:10:15', 6),
(16, 'asdasd', 'http://localhost:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', NULL, '2022-10-04 11:59:08', '2022-10-04 11:59:08', 6),
(17, 'asdasd', 'http://localhost:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', NULL, '2022-10-04 12:09:49', '2022-10-04 12:09:49', 6),
(18, 'asdasdasd', 'http://localhost:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', 'asdasdasd', '2022-10-04 12:15:50', '2022-10-04 12:15:50', 6),
(19, 'asdasdasd', 'http://localhost:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', 'asdasdasd', '2022-10-04 12:16:10', '2022-10-04 12:16:10', 6),
(20, 'project 10', 'http://localhost:5000/images/08b804eb3743d24aea055dbd45d8a6ed.jpg', 'http://project10.com', '2022-10-04 12:17:15', '2022-10-04 12:17:15', 6),
(21, 'asdasdasd', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', 'asdasdasd', '2022-10-04 12:19:47', '2022-10-04 12:19:47', 6),
(22, 'asdasdasdasdasdasd', 'http://localhost:5000/images/08b804eb3743d24aea055dbd45d8a6ed.jpg', 'asdasdasdasdasdasdasd', '2022-10-04 12:23:24', '2022-10-04 12:23:24', 6),
(23, 'Project', 'http://localhost:5000/images/674aacac9ed1bec4fcd7d2975aa65ce3.png', 'http://project.com', '2022-10-04 12:24:20', '2022-10-04 12:24:20', 6),
(24, 'asdasdasd', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', 'asdasdasd', '2022-10-04 12:32:20', '2022-10-04 12:32:20', 6),
(25, 'asdasdasdasdasd', 'http://localhost:5000/images/08b804eb3743d24aea055dbd45d8a6ed.jpg', 'asdasdasdasd', '2022-10-04 12:34:28', '2022-10-04 12:34:28', 6),
(26, 'asdasdasdasd', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', 'asdasdasdasd', '2022-10-04 12:36:06', '2022-10-04 12:36:06', 6);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `bio`, `location`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(6, 'ara fa adri', 'arafa.sco@gmail.com', '$2b$10$EeIIiBakvagz3H7qbYSd1.4E1X6/mDmBBpzbfEa8fx0zaHNVUaYrK', NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsIm5hbWUiOiJhcmEgZmEgYWRyaSIsImVtYWlsIjoiYXJhZmEuc2NvQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMTMtMDktMTFUMDY6NTg6MjUuMDAwWiIsImlhdCI6MTY2NDk2NjQ0NywiZXhwIjoxNjY1MDUyODQ3fQ.wHys-r62f6sq8ySIedKFVMCtXS3DCFXU8nAUNxKfRVA', '2013-09-11 06:58:25', '2022-10-05 10:40:47'),
(7, 'Paijo', 'paijo@gmail.com', '$2b$10$L18ZyCCXKm7PNfJjPHbKqeeHQ.ahOlqd5rYyptvG/7oMXe4x1/S2q', NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsIm5hbWUiOiJQYWlqbyIsImVtYWlsIjoicGFpam9AZ21haWwuY29tIiwiaWF0IjoxNjY0Mjg4NDUyLCJleHAiOjE2NjQzNzQ4NTJ9.Lc7NEoEQGRHM0X94UpznMOkjkik1_tV23gHH8DZxBq8', '2022-09-27 07:13:09', '2022-09-27 14:20:52'),
(9, 'user_baru', 'user_baru@gmial.com', '$2b$10$9wM3CWy1f0UnH1N4dNzhHOQRkLytf6VhHtXl98PgQrYj/42YlSS8a', NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJ1c2VyX2JhcnUiLCJlbWFpbCI6InVzZXJfYmFydUBnbWlhbC5jb20iLCJpYXQiOjE2NjQyODY1ODgsImV4cCI6MTY2NDM3Mjk4OH0.nU_79Mcs7qySkdh2ICtUGQ_tcY7vZ22JYpP1o8USSLE', '2022-09-27 13:49:35', '2022-09-27 13:49:48'),
(10, 'user_anyar', 'user_anyar@gmail.com', '$2b$10$rq.hT2cUlmr.g7Jy9cxw1eMAXKNkCOiZ.a7SX6YlSOa78fE6eNaQq', NULL, NULL, NULL, NULL, '2022-10-04 07:28:26', '2022-10-04 08:06:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectId` (`projectId`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
