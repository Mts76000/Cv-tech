-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 29 jan. 2024 à 10:45
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `wp_cvtech`
--

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_diploma`
--

CREATE TABLE `wp_cvtech_diploma` (
  `id` int(11) NOT NULL,
  `idResume` int(11) NOT NULL,
  `diplomaName` varchar(110) NOT NULL,
  `diplomaStart` datetime NOT NULL,
  `diplomaEndYear` datetime DEFAULT NULL,
  `diplomastatus` varchar(50) NOT NULL,
  `school` varchar(250) NOT NULL,
  `schoolLocation` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_driving_license`
--

CREATE TABLE `wp_cvtech_driving_license` (
  `id` int(11) NOT NULL,
  `dlName` varchar(110) NOT NULL,
  `dlObtainedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_hard_skill`
--

CREATE TABLE `wp_cvtech_hard_skill` (
  `id` int(11) NOT NULL,
  `hsName` varchar(110) NOT NULL,
  `hsDetail` varchar(110) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_hobbies`
--

CREATE TABLE `wp_cvtech_hobbies` (
  `id` int(11) NOT NULL,
  `idResume` int(11) NOT NULL,
  `hobbieName` varchar(110) NOT NULL,
  `hobbieDetails` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_identity`
--

CREATE TABLE `wp_cvtech_identity` (
  `id` int(11) NOT NULL,
  `idResume` int(11) NOT NULL,
  `firstName` varchar(110) NOT NULL,
  `lastName` varchar(110) NOT NULL,
  `location` varchar(250) NOT NULL,
  `email` varchar(110) DEFAULT NULL,
  `phoneNumber` int(15) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_language`
--

CREATE TABLE `wp_cvtech_language` (
  `id` int(11) NOT NULL,
  `language` varchar(50) NOT NULL,
  `languageSkill` varchar(110) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_other`
--

CREATE TABLE `wp_cvtech_other` (
  `id` int(11) NOT NULL,
  `idResume` int(11) NOT NULL,
  `otherName` varchar(110) NOT NULL,
  `otherDetails` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_picture`
--

CREATE TABLE `wp_cvtech_picture` (
  `id` int(11) NOT NULL,
  `idResume` int(11) NOT NULL,
  `picture` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_professional_experience`
--

CREATE TABLE `wp_cvtech_professional_experience` (
  `id` int(11) NOT NULL,
  `idResume` int(11) NOT NULL,
  `peName` varchar(110) NOT NULL,
  `pePositionHeld` varchar(110) NOT NULL,
  `peStart` datetime NOT NULL,
  `peEnd` datetime DEFAULT NULL,
  `peLocation` varchar(110) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_resume`
--

CREATE TABLE `wp_cvtech_resume` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_resume_driving_license`
--

CREATE TABLE `wp_cvtech_resume_driving_license` (
  `idResume` int(11) NOT NULL,
  `idDl` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_resume_hard_skill`
--

CREATE TABLE `wp_cvtech_resume_hard_skill` (
  `idResume` int(11) NOT NULL,
  `idHs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_resume_language`
--

CREATE TABLE `wp_cvtech_resume_language` (
  `idResume` int(11) NOT NULL,
  `idLanguage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_resume_social_network`
--

CREATE TABLE `wp_cvtech_resume_social_network` (
  `idResume` int(11) NOT NULL,
  `idSn` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_resume_soft_skill`
--

CREATE TABLE `wp_cvtech_resume_soft_skill` (
  `idResume` int(11) NOT NULL,
  `idSs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_social_network`
--

CREATE TABLE `wp_cvtech_social_network` (
  `id` int(11) NOT NULL,
  `snName` varchar(110) NOT NULL,
  `snLink` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `wp_cvtech_soft_skill`
--

CREATE TABLE `wp_cvtech_soft_skill` (
  `id` int(11) NOT NULL,
  `ssName` varchar(110) NOT NULL,
  `ssDetail` varchar(110) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `wp_cvtech_diploma`
--
ALTER TABLE `wp_cvtech_diploma`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_driving_license`
--
ALTER TABLE `wp_cvtech_driving_license`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_hard_skill`
--
ALTER TABLE `wp_cvtech_hard_skill`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_hobbies`
--
ALTER TABLE `wp_cvtech_hobbies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_identity`
--
ALTER TABLE `wp_cvtech_identity`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_language`
--
ALTER TABLE `wp_cvtech_language`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_other`
--
ALTER TABLE `wp_cvtech_other`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_picture`
--
ALTER TABLE `wp_cvtech_picture`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_professional_experience`
--
ALTER TABLE `wp_cvtech_professional_experience`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_resume`
--
ALTER TABLE `wp_cvtech_resume`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_resume_hard_skill`
--
ALTER TABLE `wp_cvtech_resume_hard_skill`
  ADD PRIMARY KEY (`idResume`);

--
-- Index pour la table `wp_cvtech_social_network`
--
ALTER TABLE `wp_cvtech_social_network`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `wp_cvtech_soft_skill`
--
ALTER TABLE `wp_cvtech_soft_skill`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `wp_cvtech_diploma`
--
ALTER TABLE `wp_cvtech_diploma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_driving_license`
--
ALTER TABLE `wp_cvtech_driving_license`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_hard_skill`
--
ALTER TABLE `wp_cvtech_hard_skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_hobbies`
--
ALTER TABLE `wp_cvtech_hobbies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_identity`
--
ALTER TABLE `wp_cvtech_identity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_language`
--
ALTER TABLE `wp_cvtech_language`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_other`
--
ALTER TABLE `wp_cvtech_other`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_picture`
--
ALTER TABLE `wp_cvtech_picture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_professional_experience`
--
ALTER TABLE `wp_cvtech_professional_experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_resume`
--
ALTER TABLE `wp_cvtech_resume`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_social_network`
--
ALTER TABLE `wp_cvtech_social_network`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `wp_cvtech_soft_skill`
--
ALTER TABLE `wp_cvtech_soft_skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
