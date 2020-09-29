-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2016 a las 16:34:52
-- Versión del servidor: 10.1.10-MariaDB
-- Versión de PHP: 7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `datatables`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `cargo` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `fecha_de_ingreso` date NOT NULL,
  `salario_bruto_anual` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`id`, `nombre`, `apellido`, `cargo`, `ciudad`, `fecha_de_ingreso`, `salario_bruto_anual`) VALUES
(1, 'Tiger', 'Nixon', 'System Architect', 'Edinburgh', '2011-04-25', 320800.00),
(2, 'Garrett', 'Winters', 'Accountant', 'Tokyo', '2011-07-25', 170750.00),
(3, 'Ashton', 'Cox', 'Junior Technical Author', 'San Francisco', '2009-01-12', 86000.00),
(4, 'Cedric', 'Kelly', 'Senior Javascript Developer', 'Edinburgh', '2012-03-29', 433060.00),
(5, 'Airi', 'Satou', 'Accountant', 'Tokyo', '2008-11-28', 162700.00),
(6, 'Brielle', 'Williamson', 'Integration Specialist', 'New York', '2012-12-02', 372000.00),
(7, 'Herrod', 'Chandler', 'Sales Assistant', 'San Francisco', '2012-08-06', 137500.00),
(8, 'Rhona', 'Davidson', 'Integration Specialist', 'Tokyo', '2010-10-14', 327900.00),
(9, 'Colleen', 'Hurst', 'Javascript Developer', 'San Francisco', '2009-09-15', 205500.00),
(10, 'Sonya', 'Frost', 'Software Engineer', 'Edinburgh', '2008-12-13', 103600.00),
(11, 'Jena', 'Gaines', 'Office Manager', 'London', '2008-12-19', 90560.00),
(12, 'Quinn', 'Flynn', 'Support Lead', 'Edinburgh', '2013-03-03', 342000.00),
(13, 'Charde', 'Marshall', 'Regional Director', 'San Francisco', '2008-10-16', 470600.00),
(14, 'Haley', 'Kennedy', 'Senior Marketing Designer', 'London', '2012-12-18', 313500.00),
(15, 'Tatyana', 'Fitzpatrick', 'Regional Director', 'London', '2010-03-17', 385750.00),
(16, 'Michael', 'Silva', 'Marketing Designer', 'London', '2012-11-27', 198500.00),
(17, 'Paul', 'Byrd', 'Chief Financial Officer (CFO)', 'New York', '2010-06-09', 725000.00),
(18, 'Gloria', 'Little', 'Systems Administrator', 'New York', '2009-04-10', 237500.00),
(19, 'Bradley', 'Greer', 'Software Engineer', 'London', '2012-10-13', 132000.00),
(20, 'Dai', 'Rios', 'Personnel Lead', 'Edinburgh', '2012-09-26', 217500.00),
(21, 'Jenette', 'Caldwell', 'Development Lead', 'New York', '2011-09-03', 345000.00),
(22, 'Yuri', 'Berry', 'Chief Marketing Officer (CMO)', 'New York', '2009-06-25', 675000.00),
(23, 'Caesar', 'Vance', 'Pre-Sales Support', 'New York', '2011-12-12', 106450.00),
(24, 'Doris', 'Wilder', 'Sales Assistant', 'Sidney', '2010-09-20', 85600.00),
(25, 'Angelica', 'Ramos', 'Chief Executive Officer (CEO)', 'London', '2009-10-09', 1200000.00),
(26, 'Gavin', 'Joyce', 'Developer', 'Edinburgh', '2010-12-22', 92575.00),
(27, 'Jennifer', 'Chang', 'Regional Director', 'Singapore', '2010-11-14', 357650.00),
(28, 'Brenden', 'Wagner', 'Software Engineer', 'San Francisco', '2011-06-07', 206850.00),
(29, 'Fiona', 'Green', 'Chief Operating Officer (COO)', 'San Francisco', '2010-03-11', 850000.00),
(30, 'Shou', 'Itou', 'Regional Marketing', 'Tokyo', '2011-08-14', 163000.00),
(31, 'Michelle', 'House', 'Integration Specialist', 'Sidney', '2011-06-02', 95400.00),
(32, 'Suki', 'Burks', 'Developer', 'London', '2009-10-22', 114500.00),
(33, 'Prescott', 'Bartlett', 'Technical Author', 'London', '2011-05-07', 145000.00),
(34, 'Gavin', 'Cortez', 'Team Leader', 'San Francisco', '2008-10-26', 235500.00),
(35, 'Martena', 'Mccray', 'Post-Sales support', 'Edinburgh', '2011-03-09', 324050.00),
(36, 'Unity', 'Butler', 'Marketing Designer', 'San Francisco', '2009-12-09', 85675.00),
(37, 'Howard', 'Hatfield', 'Office Manager', 'San Francisco', '2008-12-16', 164500.00),
(38, 'Hope', 'Fuentes', 'Secretary', 'San Francisco', '2010-02-12', 109850.00),
(39, 'Vivian', 'Harrell', 'Financial Controller', 'San Francisco', '2009-02-14', 452500.00),
(40, 'Timothy', 'Mooney', 'Office Manager', 'London', '2008-12-11', 136200.00),
(41, 'Jackson', 'Bradshaw', 'Director', 'New York', '2008-09-26', 645750.00),
(42, 'Olivia', 'Liang', 'Support Engineer', 'Singapore', '2011-02-03', 234500.00),
(43, 'Bruno', 'Nash', 'Software Engineer', 'London', '2011-05-03', 163500.00),
(44, 'Sakura', 'Yamamoto', 'Support Engineer', 'Tokyo', '2009-08-19', 139575.00),
(45, 'Thor', 'Walton', 'Developer', 'New York', '2013-08-11', 98540.00),
(46, 'Finn', 'Camacho', 'Support Engineer', 'San Francisco', '2009-07-07', 87500.00),
(47, 'Serge', 'Baldwin', 'Data Coordinator', 'Singapore', '2012-04-09', 138575.00),
(48, 'Zenaida', 'Frank', 'Software Engineer', 'New York', '2010-01-04', 125250.00),
(49, 'Zorita', 'Serrano', 'Software Engineer', 'San Francisco', '2012-06-01', 115000.00),
(50, 'Jennifer', 'Acosta', 'Junior Javascript Developer', 'Edinburgh', '2013-02-01', 75650.00),
(51, 'Cara', 'Stevens', 'Sales Assistant', 'New York', '2011-12-06', 145600.00),
(52, 'Hermione', 'Butler', 'Regional Director', 'London', '2011-03-21', 356250.00),
(53, 'Lael', 'Greer', 'Systems Administrator', 'London', '2009-02-27', 103500.00),
(54, 'Jonas', 'Alexander', 'Developer', 'San Francisco', '2010-07-14', 86500.00),
(55, 'Shad', 'Decker', 'Regional Director', 'Edinburgh', '2008-11-13', 183000.00),
(56, 'Michael', 'Bruce', 'Javascript Developer', 'Singapore', '2011-06-27', 183000.00),
(57, 'Donna', 'Snider', 'Customer Support', 'New York', '2011-01-25', 112000.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
