-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2020 at 09:45 PM
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
  `alert_name` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alerts`
--

INSERT INTO `alerts` (`id`, `talent_id`, `alert_name`, `date`) VALUES
(77, 47, 'sad', '1'),
(78, 47, 'sa', '2'),
(79, 48, 'sa', '3'),
(80, 48, 'sad', '4');

-- --------------------------------------------------------

--
-- Table structure for table `badges`
--

DROP TABLE IF EXISTS `badges`;
CREATE TABLE `badges` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL,
  `badge_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `badges`
--

INSERT INTO `badges` (`id`, `talent_id`, `badge_id`) VALUES
(47, 47, 3),
(48, 47, 5),
(49, 48, 1),
(50, 48, 2);

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
(23, 47, 'Web Designer'),
(24, 47, 'Web Designer'),
(25, 48, 'Web Designer'),
(26, 48, 'Web Designer');

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
(79, 47, 'ss'),
(80, 47, '99'),
(81, 48, 'ss'),
(82, 48, '99');

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
(20, 47, 'bbbbb'),
(21, 47, 'aaaaa'),
(22, 47, 'bbbbb'),
(23, 48, 'aaaaa'),
(24, 48, 'bbbbb'),
(25, 48, 'bbbbb');

-- --------------------------------------------------------

--
-- Table structure for table `social_profile`
--

DROP TABLE IF EXISTS `social_profile`;
CREATE TABLE `social_profile` (
  `id` int(11) NOT NULL,
  `talent_id` int(11) NOT NULL,
  `fuel_profile` varchar(255) DEFAULT NULL,
  `fuel_store` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `blog` varchar(255) DEFAULT NULL,
  `twitch` varchar(255) DEFAULT NULL,
  `dribble` varchar(255) DEFAULT NULL,
  `behance` varchar(255) DEFAULT NULL,
  `other` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `social_profile`
--

INSERT INTO `social_profile` (`id`, `talent_id`, `fuel_profile`, `fuel_store`, `instagram`, `youtube`, `twitter`, `facebook`, `linkedin`, `blog`, `twitch`, `dribble`, `behance`, `other`) VALUES
(10, 47, 'aa', 'asa', 'ku', 'sa', 'sha', 'https://www.facebook.com/syed.irtaza.9', 'aks', NULL, 'nana', NULL, 'asa', 'kak'),
(11, 48, 'aa', 'asa', 'ku', 'sa', 'sha', 'https://www.facebook.com/syed.irtaza.9', 'aks', NULL, 'nana', NULL, 'asa', 'kak');

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
(12, 45, 'aaaaaaa'),
(13, 45, 'bbbbbbb'),
(14, 46, 'aaaaaaa'),
(15, 46, 'bbbbbbb'),
(16, 47, 'aaaaaaa'),
(17, 47, 'bbbbbbb'),
(18, 48, 'aaaaaaa'),
(19, 48, 'bbbbbbb');

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
  `bio` text DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `talent_type` varchar(255) NOT NULL,
  `vetted` int(255) NOT NULL DEFAULT 0,
  `tier` varchar(255) DEFAULT NULL,
  `talent_id` varchar(255) DEFAULT NULL,
  `persona` varchar(255) DEFAULT NULL,
  `recommended_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `talent`
--

INSERT INTO `talent` (`id`, `name`, `phone`, `email`, `bio`, `photo`, `talent_type`, `vetted`, `tier`, `talent_id`, `persona`, `recommended_by`) VALUES
(47, 'hasan', '2222', NULL, ' I am a highly creative Producer with experience\r\n                            developing Integrated strategies for brands and\r\n                            entertainment partners. My clients have included\r\n                            American Express OPEN,', 'ss', 'i', 1, '2', '09', 'ss', 'Ali'),
(48, 'hasan', '2222', NULL, ' I am a highly creative Producer with experience\r\n                            developing Integrated strategies for brands and\r\n                            entertainment partners. My clients have included\r\n                            American Express OPEN,', 'ss', 'i', 1, '2', '998', 'ss', 'Ali');

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
  `photo4` varchar(255) NOT NULL,
  `photo5` varchar(255) DEFAULT NULL,
  `photo6` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `work`
--

INSERT INTO `work` (`id`, `talent_id`, `photo1`, `photo2`, `photo3`, `photo4`, `photo5`, `photo6`) VALUES
(8, 47, 'https://file.mockplus.com/image/2018/02/fda8ffd9-5cef-48d7-b5e7-079e83fae4fe.png', 'https://colorlib.com/wp/wp-content/uploads/sites/2/smartly-own-simple-theme-for-designers.jpg', 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2019/04/15553080452.jpg', 'https://i.ytimg.com/vi/GKRQC4fLNHs/maxresdefault.jpg', 'https://static.wixstatic.com/media/17178275bfff4ddbaa68d4d627a5af76.jpg', 'https://bootstraptaste.com/wp-content/uploads/dekha-creative-portfolio-bootstrap-html-template.jpg'),
(9, 48, 'sja', 'sjsa', 'sja', 'sjaja', 'sjaa', 'sna');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `badges`
--
ALTER TABLE `badges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `email`
--
ALTER TABLE `email`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `gigs`
--
ALTER TABLE `gigs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `social_profile`
--
ALTER TABLE `social_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `talent`
--
ALTER TABLE `talent`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
