-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2021 at 10:55 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `order_food`
--

-- --------------------------------------------------------

--
-- Table structure for table `chitiethoadon`
--

CREATE TABLE `chitiethoadon` (
  `id` int(11) NOT NULL,
  `id_hd` int(11) NOT NULL,
  `don_gia` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tong_gia` int(11) NOT NULL,
  `id_sp` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime(1) NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `danhmuc`
--

CREATE TABLE `danhmuc` (
  `id` int(11) NOT NULL,
  `tendm` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `danhmuc`
--

INSERT INTO `danhmuc` (`id`, `tendm`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(16, 'Pizza', '2021-12-07 16:55:06', '2021-12-07 16:55:06', 0),
(17, 'Mỳ ý', '2021-12-07 16:55:06', '2021-12-07 16:55:06', 0),
(18, 'Salad', '2021-12-07 23:22:19', '2021-12-07 23:36:16', 0),
(19, 'Khai vị', '2021-12-07 23:30:34', '2021-12-07 23:30:34', 0),
(20, 'Thức uống', '2021-12-08 03:34:10', '2021-12-08 03:34:10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `giohang`
--

CREATE TABLE `giohang` (
  `id` int(11) NOT NULL,
  `id_nd` int(11) NOT NULL,
  `id_sp` int(11) NOT NULL,
  `don_gia` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tong_gia` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `giohang`
--

INSERT INTO `giohang` (`id`, `id_nd`, `id_sp`, `don_gia`, `soluong`, `tong_gia`, `createdAt`, `updatedAt`) VALUES
(8, 14, 148, 129000, 1, 129000, '2021-12-10 16:53:13', '2021-12-10 16:53:13');

-- --------------------------------------------------------

--
-- Table structure for table `hinhthucthanhtoan`
--

CREATE TABLE `hinhthucthanhtoan` (
  `id` int(11) NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `id` int(11) NOT NULL,
  `id_nd` int(11) NOT NULL,
  `ngaydathang` datetime NOT NULL,
  `tinhtrangHD` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0,
  `id_thanhtoan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `slug` int(11) NOT NULL,
  `value` varchar(500) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `listaddress`
--

CREATE TABLE `listaddress` (
  `id` int(11) NOT NULL,
  `id_nd` int(11) NOT NULL,
  `diachi` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

CREATE TABLE `nguoidung` (
  `id` int(11) NOT NULL,
  `hoten` varchar(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `refresh_token` text NOT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` tinyint(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dienthoai` varchar(12) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nguoidung`
--

INSERT INTO `nguoidung` (`id`, `hoten`, `username`, `password`, `refresh_token`, `ngaysinh`, `gioitinh`, `email`, `dienthoai`, `admin`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(14, 'Nguyễn Hoàng Việt', 'viet', '$2b$10$aeFsPyBdMrbH80YVjEYx6.eIgzXoDBX6DFgJn/.h4.pBV7KHrRsWS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFkbWluIjowLCJpYXQiOjE2MzkxMjk5NDUsImV4cCI6MTYzOTIxNjM0NX0.4oDF1vgQAgiaEp9azQwqDCGIgv7JSOKuUQtPHrLJtwk', '2000-01-01', 1, 'viet@gmail.com', '0123456789', 0, '2021-12-07 15:22:20', '2021-12-08 17:05:58', 0),
(16, 'Nguyễn Duy Thịnh', 'thinh', '$2b$10$ZsuuwnNsNyDG/JZBf8pBoO4l2wnyfcC917yeTapi5/ZeWQvV70ZeS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImFkbWluIjoxLCJpYXQiOjE2MzkxMjU5MzYsImV4cCI6MTYzOTIxMjMzNn0.MP-VFU0egTJbGiXsNZgwiks9WtVLwjNQPb4nBxOkkjY', '2000-10-16', 1, 'thinh@gmail.com', '0123456789', 1, '2021-12-07 15:33:10', '2021-12-08 17:09:15', 0),
(17, 'Nguyễn Tiến Tài', 'tai', '$2b$10$eyhUi.EXtmviKKb6rQ8ADOVUESPjkG9YKCVElaQ3meZo8nrK3uSee', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImFkbWluIjoxLCJpYXQiOjE2Mzg5NTQ5NDgsImV4cCI6MTYzOTA0MTM0OH0.6ML730j9UX1451vEu8JsGKjvkVNDh6pFTZ1TBV76HlM', '2000-10-20', 1, 'tai@gmail.com', '0123456789', 1, '2021-12-07 15:37:27', '2021-12-08 17:09:29', 0),
(18, 'Thái Văn Nam', 'nam', '$2b$10$yGb6JgSGxAS5zDxRrdp/tujSEHmuu0d0zYEkiNVsP30dZae1HIzi.', '', '2000-12-09', 1, 'nam@gmail.com', '0123456789', 1, '2021-12-08 17:10:14', '2021-12-08 17:10:14', 0),
(19, 'Lê Nguyễn Hoàng Anh', 'hoanganh', '$2b$10$xCL5Jy6xRcYDxJoyLkOcJODxedHgsPm01kW8GlF/mUuhTQkByE4sO', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImFkbWluIjowLCJpYXQiOjE2MzkxMjkzNDYsImV4cCI6MTYzOTIxNTc0Nn0.W9Bb7V-taGpjZFSuBmFiW7wE_TYs7OTIWzKiy7D4vJ0', '2000-01-01', 0, 'hoanganh@gmail.com', '0123456789', 0, '2021-12-10 15:43:01', '2021-12-10 15:43:01', 0);

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `id_hd` int(11) NOT NULL,
  `ratescore` int(11) NOT NULL,
  `comment` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `id` int(11) NOT NULL,
  `tensp` varchar(50) NOT NULL,
  `public_id` text NOT NULL,
  `url` text NOT NULL,
  `size` varchar(1) NOT NULL,
  `chitiet` text NOT NULL,
  `gia` int(11) NOT NULL,
  `id_dm` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted_fg` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`id`, `tensp`, `public_id`, `url`, `size`, `chitiet`, `gia`, `id_dm`, `createdAt`, `updatedAt`, `deleted_fg`) VALUES
(147, 'Pizza Hải Sản Pesto Xanh', 'products/fxvds8nhm0o6on3ezvco', 'https://res.cloudinary.com/order-food/image/upload/v1638931543/products/fxvds8nhm0o6on3ezvco.png', 'M', 'Tôm, cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh', 169000, 16, '2021-12-07 16:55:47', '2021-12-08 09:46:27', 0),
(148, 'Mì Ý thịt bò bằm', 'products/rvxgnrwqcbboc72lzr9n', 'https://res.cloudinary.com/order-food/image/upload/v1638930969/products/rvxgnrwqcbboc72lzr9n.png', 'S', 'Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý', 129000, 17, '2021-12-07 16:55:47', '2021-12-08 09:38:10', 0),
(149, 'Salad Trộn Sốt Caesar', 'products/awae3ae7trhyhasj2tdb', 'https://res.cloudinary.com/order-food/image/upload/v1638931601/products/awae3ae7trhyhasj2tdb.png', 'M', 'Rau tươi trộn với sốt Caesar', 70000, 18, '2021-12-08 00:04:12', '2021-12-08 09:47:19', 0),
(150, 'Gà Zòn Zòn (10 miếng)', 'products/epdweajxyfx7zuw6bcxk', 'https://res.cloudinary.com/order-food/image/upload/v1638931907/products/epdweajxyfx7zuw6bcxk.png', 'L', 'Cánh gà được phủ bởi một lớp bột chiên giòn', 189000, 19, '2021-12-08 09:53:02', '2021-12-08 09:53:02', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mahd` (`id_hd`),
  ADD KEY `idsp` (`id_sp`) USING BTREE;

--
-- Indexes for table `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_nd` (`id_nd`),
  ADD KEY `fk_id_sp` (`id_sp`);

--
-- Indexes for table `hinhthucthanhtoan`
--
ALTER TABLE `hinhthucthanhtoan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idnd` (`id_nd`),
  ADD UNIQUE KEY `id_httt` (`id_thanhtoan`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`slug`);

--
-- Indexes for table `listaddress`
--
ALTER TABLE `listaddress`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idnd` (`id_nd`);

--
-- Indexes for table `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mahd` (`id_hd`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`id`),
  ADD KEY `madm` (`id_dm`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `giohang`
--
ALTER TABLE `giohang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `hinhthucthanhtoan`
--
ALTER TABLE `hinhthucthanhtoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `slug` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `listaddress`
--
ALTER TABLE `listaddress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD CONSTRAINT `chitiethoadon_ibfk_1` FOREIGN KEY (`id_hd`) REFERENCES `hoadon` (`id`),
  ADD CONSTRAINT `chitiethoadon_ibfk_2` FOREIGN KEY (`id_sp`) REFERENCES `sanpham` (`id`);

--
-- Constraints for table `giohang`
--
ALTER TABLE `giohang`
  ADD CONSTRAINT `fk_id_nd` FOREIGN KEY (`id_nd`) REFERENCES `nguoidung` (`id`),
  ADD CONSTRAINT `fk_id_sp` FOREIGN KEY (`id_sp`) REFERENCES `sanpham` (`id`);

--
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`id_nd`) REFERENCES `nguoidung` (`id`),
  ADD CONSTRAINT `hoadon_ibfk_2` FOREIGN KEY (`id_thanhtoan`) REFERENCES `hinhthucthanhtoan` (`id`);

--
-- Constraints for table `listaddress`
--
ALTER TABLE `listaddress`
  ADD CONSTRAINT `listaddress_ibfk_1` FOREIGN KEY (`id_nd`) REFERENCES `nguoidung` (`id`);

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`id_hd`) REFERENCES `hoadon` (`id`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`id_dm`) REFERENCES `danhmuc` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
