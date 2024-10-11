-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 11, 2024 at 08:59 AM
-- Server version: 8.3.0
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam_duty_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
CREATE TABLE IF NOT EXISTS `account` (
  `Account_ID` int NOT NULL,
  `Password` varchar(10) NOT NULL,
  `UserName` text NOT NULL,
  PRIMARY KEY (`Account_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `Admin_ID` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Password` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  PRIMARY KEY (`Admin_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `change_request`
--

DROP TABLE IF EXISTS `change_request`;
CREATE TABLE IF NOT EXISTS `change_request` (
  `ChangeRequest_Id` int NOT NULL,
  `Status` text NOT NULL,
  `Duty_ID` int NOT NULL,
  PRIMARY KEY (`ChangeRequest_Id`),
  KEY `change_fk` (`Duty_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `duty`
--

DROP TABLE IF EXISTS `duty`;
CREATE TABLE IF NOT EXISTS `duty` (
  `Duty_ID` int NOT NULL,
  `Date` date NOT NULL,
  `Time` varchar(10) NOT NULL,
  `Status` varchar(50) NOT NULL,
  `Lecturer_ID` int NOT NULL,
  `Course_ID` int NOT NULL,
  PRIMARY KEY (`Duty_ID`),
  KEY `duty_fk` (`Lecturer_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `email`
--

DROP TABLE IF EXISTS `email`;
CREATE TABLE IF NOT EXISTS `email` (
  `Email_ID` int NOT NULL,
  `Subject` text NOT NULL,
  `Body` text NOT NULL,
  `Account_ID` int NOT NULL,
  PRIMARY KEY (`Email_ID`),
  KEY `email_fk` (`Account_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hod`
--

DROP TABLE IF EXISTS `hod`;
CREATE TABLE IF NOT EXISTS `hod` (
  `Department_ID` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  PRIMARY KEY (`Department_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lecturer`
--

DROP TABLE IF EXISTS `lecturer`;
CREATE TABLE IF NOT EXISTS `lecturer` (
  `Lecturer_ID` int NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Password` varchar(10) NOT NULL,
  `Email` varchar(30) NOT NULL,
  PRIMARY KEY (`Lecturer_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
CREATE TABLE IF NOT EXISTS `report` (
  `Report_ID` int NOT NULL,
  `Duty_ID` int NOT NULL,
  PRIMARY KEY (`Report_ID`),
  KEY `report_fk` (`Duty_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `time_table`
--

DROP TABLE IF EXISTS `time_table`;
CREATE TABLE IF NOT EXISTS `time_table` (
  `Timetable_ID` int NOT NULL,
  `Date` date NOT NULL,
  `Time` int NOT NULL,
  `Course` varchar(50) NOT NULL,
  `Hall` varchar(50) NOT NULL,
  `Admin_ID` int NOT NULL,
  PRIMARY KEY (`Timetable_ID`),
  KEY `FOREIGN` (`Admin_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `voucher`
--

DROP TABLE IF EXISTS `voucher`;
CREATE TABLE IF NOT EXISTS `voucher` (
  `Voucher_ID` int NOT NULL,
  `Duty_ID` int NOT NULL,
  PRIMARY KEY (`Voucher_ID`),
  KEY `voucher_fk` (`Duty_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `change_request`
--
ALTER TABLE `change_request`
  ADD CONSTRAINT `change_fk` FOREIGN KEY (`Duty_ID`) REFERENCES `duty` (`Duty_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `duty`
--
ALTER TABLE `duty`
  ADD CONSTRAINT `duty_fk` FOREIGN KEY (`Lecturer_ID`) REFERENCES `lecturer` (`Lecturer_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `email`
--
ALTER TABLE `email`
  ADD CONSTRAINT `email_fk` FOREIGN KEY (`Account_ID`) REFERENCES `account` (`Account_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_fk` FOREIGN KEY (`Duty_ID`) REFERENCES `duty` (`Duty_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `time_table`
--
ALTER TABLE `time_table`
  ADD CONSTRAINT `FOREIGN` FOREIGN KEY (`Admin_ID`) REFERENCES `admin` (`Admin_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `voucher`
--
ALTER TABLE `voucher`
  ADD CONSTRAINT `voucher_fk` FOREIGN KEY (`Duty_ID`) REFERENCES `duty` (`Duty_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
