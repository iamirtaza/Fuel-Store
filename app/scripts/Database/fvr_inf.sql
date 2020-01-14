-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 05, 2020 at 08:01 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fvr_inf`
--

-- --------------------------------------------------------

--
-- Table structure for table `alerts`
--

DROP TABLE IF EXISTS `alerts`;
CREATE TABLE `alerts` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL,
  `alert_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alerts`
--

INSERT INTO `alerts` (`id`, `talent_id`, `alert_name`) VALUES
(1, 1, '9');

-- --------------------------------------------------------

--
-- Table structure for table `badges`
--

DROP TABLE IF EXISTS `badges`;
CREATE TABLE `badges` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `badge_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `badges`
--

INSERT INTO `badges` (`id`, `user_id`, `badge_id`) VALUES
(1, 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `talent_id`, `category_name`) VALUES
(1, 1, '7');

-- --------------------------------------------------------

--
-- Table structure for table `email`
--

DROP TABLE IF EXISTS `email`;
CREATE TABLE `email` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `email`
--

INSERT INTO `email` (`id`, `talent_id`, `email`) VALUES
(1, 1, '6');

-- --------------------------------------------------------

--
-- Table structure for table `gigs`
--

DROP TABLE IF EXISTS `gigs`;
CREATE TABLE `gigs` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL,
  `gig_link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gigs`
--

INSERT INTO `gigs` (`id`, `talent_id`, `gig_link`) VALUES
(1, 1, '5');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL,
  `note` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `talent_id`, `note`) VALUES
(1, 1, '4');

-- --------------------------------------------------------

--
-- Table structure for table `social_profile`
--

DROP TABLE IF EXISTS `social_profile`;
CREATE TABLE `social_profile` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL,
  `fuel_profile` varchar(255) NOT NULL,
  `fuel_store` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `linkedin` varchar(255) NOT NULL,
  `blog` varchar(255) NOT NULL,
  `twitch` varchar(255) NOT NULL,
  `dribble` varchar(255) NOT NULL,
  `behance` varchar(255) NOT NULL,
  `other` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `social_profile`
--

INSERT INTO `social_profile` (`id`, `talent_id`, `fuel_profile`, `fuel_store`, `instagram`, `youtube`, `twitter`, `facebook`, `linkedin`, `blog`, `twitch`, `dribble`, `behance`, `other`) VALUES
(1, 1, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL,
  `tag_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `talent_id`, `tag_name`) VALUES
(1, 1, '2');

-- --------------------------------------------------------

--
-- Table structure for table `talent`
--

DROP TABLE IF EXISTS `talent`;
CREATE TABLE `talent` (
  `id` int(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `talent_type` varchar(255) NOT NULL,
  `vetted` int(255) NOT NULL DEFAULT 0,
  `tier` varchar(255) DEFAULT NULL,
  `talent_id` varchar(255) DEFAULT NULL,
  `persona` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `talent`
--

INSERT INTO `talent` (`id`, `name`, `phone`, `email`, `bio`, `photo`, `talent_type`, `vetted`, `tier`, `talent_id`, `persona`) VALUES
(1, 'jjj', 'kkk', 'kkk', 'jjj', 'jjj', 'jjj', 0, '0', 'jjj', 'jjj'),
(2, 'jjj', 'kkk', '[0:{\"sss\"},1:{\"sssas\"}] ', 'jjj', 'jjj', 'jjj', 0, '0', 'jjj', 'jjj'),
(3, 'jjj', 'kkk', NULL, 'jjj', 'jjj', 'jjj', 0, '0', 'jjj', 'jjj');

-- --------------------------------------------------------

--
-- Table structure for table `talent_list`
--

DROP TABLE IF EXISTS `talent_list`;
CREATE TABLE `talent_list` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `link_sharing` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'hasan', '1234'),
(2, '2', '2');

-- --------------------------------------------------------

--
-- Table structure for table `work`
--

DROP TABLE IF EXISTS `work`;
CREATE TABLE `work` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL DEFAULT 0,
  `photo1` varchar(255) DEFAULT NULL,
  `photo2` varchar(255) DEFAULT NULL,
  `photo3` varchar(255) DEFAULT NULL,
  `photo5` varchar(255) DEFAULT NULL,
  `photo6` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `work`
--

INSERT INTO `work` (`id`, `talent_id`, `photo1`, `photo2`, `photo3`, `photo5`, `photo6`) VALUES
(1, 1, '1', '1', '1', '1', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alerts`
--
ALTER TABLE `alerts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `badges`
--
ALTER TABLE `badges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gigs`
--
ALTER TABLE `gigs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_profile`
--
ALTER TABLE `social_profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `talent`
--
ALTER TABLE `talent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `talent_list`
--
ALTER TABLE `talent_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `work`
--
ALTER TABLE `work`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alerts`
--
ALTER TABLE `alerts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `badges`
--
ALTER TABLE `badges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `email`
--
ALTER TABLE `email`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gigs`
--
ALTER TABLE `gigs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `social_profile`
--
ALTER TABLE `social_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `talent`
--
ALTER TABLE `talent`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `talent_list`
--
ALTER TABLE `talent_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `work`
--
ALTER TABLE `work`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
