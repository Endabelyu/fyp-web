-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2022 at 10:32 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

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
  `instagram` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `instagram`, `github`, `linkedin`, `twitter`, `createdAt`, `updatedAt`, `userId`) VALUES
(7, 'https://instagram.com', 'https://github.com', 'https://linkin.com', 'https://twitter.com', '2022-10-19 08:52:08', '2022-10-19 10:13:28', 7),
(8, NULL, NULL, NULL, NULL, '2022-10-19 09:21:53', '2022-10-19 09:21:53', 8),
(9, NULL, NULL, NULL, NULL, '2022-10-19 10:58:39', '2022-10-19 10:58:39', 9),
(10, NULL, NULL, NULL, NULL, '2022-10-19 10:58:53', '2022-10-19 10:58:53', 10),
(11, NULL, NULL, NULL, NULL, '2022-10-19 10:59:05', '2022-10-19 10:59:05', 11),
(12, NULL, NULL, NULL, NULL, '2022-10-19 10:59:46', '2022-10-19 10:59:46', 12),
(13, NULL, NULL, NULL, NULL, '2022-10-19 11:00:08', '2022-10-19 11:00:08', 13);

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `name`, `email`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 'paijo', 'paijo@gmail.com', 'message', '2022-10-20 08:15:50', '2022-10-20 08:15:50'),
(2, 'ara fa adri', 'arafa.sco@gmail.com', 'uji coba message', '2022-10-20 08:26:59', '2022-10-20 08:26:59'),
(3, 'ara fa adri', 'arafa.sco@gmail.com', 'uji coba message', '2022-10-20 08:27:43', '2022-10-20 08:27:43'),
(4, 'ara fa adri', 'arafa.sco@gmail.com', 'uji coba message', '2022-10-20 08:28:10', '2022-10-20 08:28:10'),
(5, 'ara fa adri', 'arafa.sco@gmail.com', 'coba', '2022-10-20 08:28:47', '2022-10-20 08:28:47');

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
(1, '5410c0eab10bbdc0b65fd867fc9893d3.png', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', '2022-10-19 10:57:59', '2022-10-19 10:57:59', 1);

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
(1, 'Project 1', 'http://localhost:5000/images/5410c0eab10bbdc0b65fd867fc9893d3.png', 'https://github.com/arafa16/fyp-web', '2022-10-19 10:57:59', '2022-10-19 10:57:59', 7);

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
  `updatedAt` datetime NOT NULL,
  `contactId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `bio`, `location`, `refresh_token`, `createdAt`, `updatedAt`, `contactId`) VALUES
(7, 'ara fa adri', 'arafa.sco@gmail.com', '$2b$10$Wp9qh8JCyl5xEGOxB9TxxOnfjQ.XZ3Rkx3D2iuDtDbuOSxv1UJIYS', NULL, NULL, NULL, NULL, '2022-10-19 08:52:08', '2022-10-20 06:45:49', NULL),
(8, 'Cristian', 'crisian@gmail.com', '$2b$10$Cx6fUEpOOoiEKtZr289M7OAKAOl64Y1WpXZtZN.uqBBpVarPa/7l.', NULL, NULL, NULL, NULL, '2022-10-19 09:21:53', '2022-10-19 09:21:53', NULL),
(9, 'Lucas Vasdisk', 'licas.vasdisk@gmail.com', '$2b$10$B0WKEcpyXVXBKa9LbxiW3.iEJErcB0eyR/PBnpbMB24yctaCqImzy', NULL, NULL, NULL, NULL, '2022-10-19 10:58:39', '2022-10-19 10:58:39', NULL),
(10, 'Robert', 'robert@gmail.com', '$2b$10$G7O4yTdeyVBEfW89GdWEOemnAXiiDJRvV8ZhrZbjtxidtNq1D/2b.', NULL, NULL, NULL, NULL, '2022-10-19 10:58:53', '2022-10-19 10:58:53', NULL),
(11, 'Albert', 'albert@gmail.com', '$2b$10$Fx1IJtHuzc15yNnFPUinuew7GvdReVFp9UfOL5vOSP/y6qgfTJ7Uu', NULL, NULL, NULL, NULL, '2022-10-19 10:59:05', '2022-10-19 10:59:05', NULL),
(12, 'Ilyas', 'ilyas@gmail.com', '$2b$10$.jEq9ANJJy8G12wI4FVLTOyydnnrJ0cUqR5RT2MUV1P2hRq0EoaHq', NULL, NULL, NULL, NULL, '2022-10-19 10:59:46', '2022-10-19 10:59:46', NULL),
(13, 'Abu Dabi', 'abu.dabi@gmail.com', '$2b$10$JUA0D896v94Sa/09PscZTeiE5UtSsYer/6blQD6yDvrUlAruQf.I6', NULL, NULL, NULL, NULL, '2022-10-19 11:00:08', '2022-10-19 11:00:08', NULL);

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
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `contactId` (`contactId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`contactId`) REFERENCES `contacts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
