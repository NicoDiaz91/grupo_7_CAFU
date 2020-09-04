-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-08-2020 a las 16:44:35
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cafudb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Nike'),
(2, 'New Balance'),
(3, 'Adidas'),
(4, 'Puma'),
(5, 'Hummel'),
(6, 'Umbro'),
(7, 'Kappa'),
(8, 'Joma'),
(9, 'Jako');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cartproduct`
--

CREATE TABLE `cartproduct` (
  `id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `carts_id` int(11) NOT NULL,
  `states_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorys`
--

CREATE TABLE `categorys` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorys`
--

INSERT INTO `categorys` (`id`, `name`) VALUES
(1, 'Titular'),
(2, 'Suplente'),
(3, 'Entrenamiento'),
(4, 'Coleccion'),
(5, 'Pre Venta'),
(6, 'Edicion Limitada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countrys`
--

CREATE TABLE `countrys` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `countrys`
--

INSERT INTO `countrys` (`id`, `name`) VALUES
(1, 'Argentina'),
(2, 'Brasil'),
(3, 'Uruguay'),
(4, 'Bolivia'),
(5, 'Chile'),
(6, 'Paraguay'),
(7, 'Peru'),
(8, 'Colombia'),
(9, 'Venezuela'),
(10, 'Ecuador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `leagues`
--

CREATE TABLE `leagues` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `leagues`
--

INSERT INTO `leagues` (`id`, `name`) VALUES
(1, 'Argentina'),
(2, 'Italia'),
(3, 'España'),
(4, 'Alemaña'),
(5, 'Inglaterra'),
(6, 'EEUU'),
(7, 'Mundiales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(50) NOT NULL,
  `stock` int(11) NOT NULL,
  `brands_id` int(11) NOT NULL,
  `leagues_id` int(11) NOT NULL,
  `categorys_id` int(11) NOT NULL,
  `seasons_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `image`, `stock`, `brands_id`, `leagues_id`, `categorys_id`, `seasons_id`) VALUES
(1, 'Boca Juniors', 3000, 'boca.jpg', 100, 3, 1, 1, 4),
(2, 'Riber Plate', 2000, 'riber.jpg', 70, 3, 1, 1, 4),
(3, 'Racing Club', 2300, 'racing.jpg', 40, 7, 1, 1, 4),
(4, 'CA Independiente', 2100, 'independiente.jpg', 57, 4, 1, 1, 4),
(5, 'Velez Sasrsfield', 1900, 'velez.jpg', 62, 7, 1, 1, 3),
(6, 'Liverpool FC', 2400, 'Liverpool.jpg', 71, 2, 5, 1, 4),
(7, 'Manchester United', 2700, 'manred.jpg', 29, 3, 5, 1, 4),
(8, 'Manchester City', 2200, 'mancity.jpg', 33, 4, 5, 1, 4),
(9, 'Chelsea FC', 2800, 'chelsea.jpg', 82, 1, 5, 1, 4),
(10, 'Tottenham FC', 2500, 'tottenham.jpg', 72, 1, 5, 1, 5),
(11, 'Juventus FC', 3200, 'Juventus.jpg', 94, 3, 2, 1, 3),
(12, 'Milan FC', 2900, 'milan.jpg', 64, 4, 2, 1, 3),
(13, 'Inter de Milan', 2860, 'inter.jpg', 49, 1, 2, 1, 3),
(14, 'Napoli FC', 2520, 'napoli.jpg', 49, 7, 2, 1, 4),
(15, 'Roma FC', 2180, 'roma.jpg', 88, 1, 2, 1, 4),
(16, 'Barcelona FC', 3500, 'Barcelona.jpg', 98, 1, 3, 1, 4),
(17, 'Real Madrid', 3200, 'realmadrid.jpg', 79, 3, 3, 1, 4),
(18, 'Villarreal FC', 2850, 'villarreal.jpg', 43, 8, 3, 1, 4),
(19, 'Atletico de Madrid', 2700, 'atleticomadrid.jpg', 70, 1, 3, 1, 4),
(20, 'Sevilla FC', 2200, 'sevilla.jpg', 52, 1, 3, 1, 4),
(21, 'Bayern Munchen', 3200, 'Bayern.jpg', 91, 3, 4, 1, 4),
(22, 'Borussia Dortmund', 2900, 'borussia.jpg', 31, 4, 4, 1, 4),
(23, 'Leipzig FC', 2700, 'leipzig.jpg', 52, 1, 4, 1, 4),
(24, 'Borussia Monchengladbach', 2650, 'monchen.jpg', 81, 4, 4, 1, 4),
(25, 'Bayern Leverkusen', 2830, 'leverkusen.jpg', 60, 9, 4, 1, 4),
(26, 'Argentina', 3200, 'Argentina.jpg', 55, 3, 7, 1, 4),
(27, 'Francia', 3300, 'francia.jpg', 29, 1, 7, 1, 4),
(28, 'Brasil', 3450, 'brasil.jpg', 43, 1, 7, 1, 4),
(29, 'Belgica', 3000, 'belgica.jpg', 63, 3, 7, 1, 4),
(30, 'Holanda', 3100, 'holanda.jpg', 39, 1, 7, 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provinces`
--

CREATE TABLE `provinces` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `countrys_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `provinces`
--

INSERT INTO `provinces` (`id`, `name`, `countrys_id`) VALUES
(1, 'Buenos Aires', 1),
(2, 'Santa Fe', 1),
(3, 'Cordoba', 1),
(4, 'Entre Rios', 1),
(5, 'Santa Cruz', 1),
(6, 'Corrientes', 1),
(7, 'Misiones', 1),
(8, 'San Luis', 1),
(9, 'San Juan', 1),
(10, 'Mendoza', 1),
(11, 'Salta', 1),
(12, 'Jujuy', 1),
(13, 'Chaco', 1),
(14, 'Formosa', 1),
(15, 'Santiago del Estero', 1),
(16, 'Tucuman', 1),
(17, 'Chubut', 1),
(18, 'Tierra del Fuego', 1),
(19, 'La Pampa', 1),
(20, 'Neuquen', 1),
(21, 'Catamarca', 1),
(22, 'La Rioja', 1),
(23, 'Minas Gerais', 2),
(24, 'Bahia', 2),
(25, 'Santa Catarina', 2),
(26, 'Estado de Panama', 2),
(27, 'Goiás', 2),
(28, 'Estado de Sao Paulo', 2),
(29, 'Ceará', 2),
(30, 'Rio Grande del Sur', 2),
(31, 'Amazonas', 2),
(32, 'Pernambuco', 2),
(33, 'Pará', 2),
(34, 'Paraíba', 2),
(35, 'Mato Grosso', 2),
(36, 'Rio Grande del Norte', 2),
(37, 'Espirito Santo', 2),
(38, 'Sergipe', 2),
(39, 'Piauí', 2),
(40, 'Maranhao', 2),
(41, 'Alagoas', 2),
(42, 'Rondonia', 2),
(43, 'Amapá', 2),
(44, 'Tocantin', 2),
(45, 'Mato Grosso del Sur', 2),
(46, 'Estado de Rio de Janeiro', 2),
(47, 'Acre', 2),
(48, 'Roraima', 2),
(49, 'Artigas', 3),
(50, 'Cerro Largo', 3),
(51, 'Durazno', 3),
(52, 'Florida', 3),
(53, 'Maldonado', 3),
(54, 'Paysandú', 3),
(55, 'Rivera', 3),
(56, 'Salto', 3),
(57, 'Canelones', 3),
(58, 'Soriano', 3),
(59, 'Treinta y Tres', 3),
(60, 'Colonia', 3),
(61, 'Flores', 3),
(62, 'Lavalleja', 3),
(63, 'Montevideo', 3),
(64, 'Rio Negro', 3),
(65, 'Rocha', 3),
(66, 'San José', 3),
(67, 'Tacuarembó', 3),
(68, 'Pando', 4),
(69, 'Chuquisaca', 4),
(70, 'La Paz', 4),
(71, 'Cochabamba', 4),
(72, 'Oruro', 4),
(73, 'Potosí', 4),
(74, 'Tarija', 4),
(75, 'Santa Cruz', 4),
(76, 'Beni', 4),
(77, 'Arica y Parinacota', 5),
(78, 'Tarapacá', 5),
(79, 'Antofagasta', 5),
(80, 'Atacama', 5),
(81, 'Coquimbo', 5),
(82, 'Valparaiso', 5),
(83, 'Santiago', 5),
(84, 'Libertador O Higgins', 5),
(85, 'Maule', 5),
(86, 'Ñuble', 5),
(87, 'Biobío', 5),
(88, 'La Araucania', 5),
(89, 'Los Rios', 5),
(90, 'Los Lagos', 5),
(91, 'Aysen del Campo', 5),
(92, 'Magallanes', 5),
(93, 'Distrito Capital', 6),
(94, 'Concepcion', 6),
(95, 'San Pedro', 6),
(96, 'Cordillera', 6),
(97, 'Guairá', 6),
(98, 'Caaguazú', 6),
(99, 'Caazapá', 6),
(100, 'Itapúa', 6),
(101, 'Misiones', 6),
(102, 'Paraguari', 6),
(103, 'Alto Paraná', 6),
(104, 'Central', 6),
(105, 'Ñeembucú', 6),
(106, 'Amambay', 6),
(107, 'Canindeyu', 6),
(108, 'Presidente Hayes', 6),
(109, 'Alto Paraguay', 6),
(110, 'Boquerón', 6),
(111, 'Amazonas', 7),
(112, 'Ancash', 7),
(113, 'Apurimac', 7),
(114, 'Arequipa', 7),
(115, 'Ayacucho', 7),
(116, 'Cajamarca', 7),
(117, 'Callao', 7),
(118, 'Cusco', 7),
(119, 'Huancavelica', 7),
(120, 'Huanuco', 7),
(121, 'Ica', 7),
(122, 'Junín', 7),
(123, 'La Libertad', 7),
(124, 'Lambayeque', 7),
(125, 'Lima', 7),
(126, 'Loreto', 7),
(127, 'Ucayali', 7),
(128, 'Madre de Dios', 7),
(129, 'Moquegua', 7),
(130, 'Pasco', 7),
(131, 'Piura', 7),
(132, 'Puno', 7),
(133, 'San Martín', 7),
(134, 'Tacna', 7),
(135, 'Tumbes', 7),
(136, 'Amazonas', 8),
(137, 'Antioquia', 8),
(138, 'Arauca', 8),
(139, 'Atlántico', 8),
(140, 'Bogotá', 8),
(141, 'Bolívar', 8),
(142, 'Bocayá', 8),
(143, 'Caldas', 8),
(144, 'Caquetá', 8),
(145, 'Casanare', 8),
(146, 'Cauca', 8),
(147, 'Cesar', 8),
(148, 'Chocó', 8),
(149, 'Cordoba', 8),
(150, 'Cundinamarca', 8),
(151, 'Guainía', 8),
(152, 'Guaviare', 8),
(153, 'Huila', 8),
(154, 'La Guajíra', 8),
(155, 'Magdalena', 8),
(156, 'Meta', 8),
(157, 'Nariño', 8),
(158, 'Norte de Santander', 8),
(159, 'Putumayo', 8),
(160, 'Quindío', 8),
(161, 'Risaralda', 8),
(162, 'San Andres y Providencia', 8),
(163, 'Santander', 8),
(164, 'Sucre', 8),
(165, 'Tolima', 8),
(166, 'Valle de Cauca', 8),
(167, 'Vaupés', 8),
(168, 'Vichada', 8),
(169, 'Amazonas', 9),
(170, 'Anzoátegui', 9),
(171, 'Apure', 9),
(172, 'Barinas', 9),
(173, 'Aragua', 9),
(174, 'Bolívar', 9),
(175, 'Carabobo', 9),
(176, 'Cojedes', 9),
(177, 'Delta Amacuro', 9),
(178, 'Falcón', 9),
(179, 'Distrito Capital', 9),
(180, 'Guárico', 9),
(181, 'Lara', 9),
(182, 'Mérida', 9),
(183, 'Miranda', 9),
(184, 'Monagas', 9),
(185, 'Nueva Esparta', 9),
(186, 'Portuguesa', 9),
(187, 'Táchira', 9),
(188, 'Sucre', 9),
(189, 'La Guáira', 9),
(190, 'Trujillo', 9),
(191, 'Yaracuy', 9),
(192, 'Zulia', 9),
(193, 'Galápagos', 10),
(194, 'Esmeraldas', 10),
(195, 'Manabí', 10),
(196, 'Los Rios', 10),
(197, 'Santa Elena', 10),
(198, 'Guayas', 10),
(199, 'Santo Domingo', 10),
(200, 'El Oro', 10),
(201, 'Azuay', 10),
(202, 'Bolívar', 10),
(203, 'Cañar', 10),
(204, 'Carchi', 10),
(205, 'Cotopaxi', 10),
(206, 'Chimborazo', 10),
(207, 'Imbabura', 10),
(208, 'Loja', 10),
(209, 'Pichincha', 10),
(210, 'Tungurahua', 10),
(211, 'Morona Santiago', 10),
(212, 'Napo', 10),
(213, 'Orellana', 10),
(214, 'Pastaza', 10),
(215, 'Sucumbios', 10),
(216, 'Zamora Chinchipe', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'user'),
(9, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seasons`
--

CREATE TABLE `seasons` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `seasons`
--

INSERT INTO `seasons` (`id`, `name`) VALUES
(1, 'Historica'),
(2, 'Campeon'),
(3, '2020-2021'),
(4, '2019-2020'),
(5, '2018-2019'),
(6, '2017-2018'),
(7, '2016-2017'),
(8, '2015-2016');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `state` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `images_id` int(11) NOT NULL,
  `roles_id` int(11) NOT NULL,
  `countrys_id` int(11) NOT NULL,
  `provinces_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cartProduct_fk_0_products_id` (`products_id`),
  ADD KEY `cartProduct_fk_0_carts_id` (`carts_id`),
  ADD KEY `cartProduct_fk_0_states_id` (`states_id`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Carts_fk_0_users_id` (`users_id`);

--
-- Indices de la tabla `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `countrys`
--
ALTER TABLE `countrys`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `leagues`
--
ALTER TABLE `leagues`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Products_fk_0_brands_id` (`brands_id`),
  ADD KEY `Products_fk_0_leagues_id` (`leagues_id`),
  ADD KEY `Products_fk_0_categorys_id` (`categorys_id`),
  ADD KEY `Products_fk_0_seasons_id` (`seasons_id`);

--
-- Indices de la tabla `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Provinces_fk_0_countrys_id` (`countrys_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `seasons`
--
ALTER TABLE `seasons`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_email` (`email`),
  ADD KEY `Users_fk_0_images_id` (`images_id`),
  ADD KEY `Users_fk_0_roles_id` (`roles_id`),
  ADD KEY `Users_fk_0_countrys_id` (`countrys_id`),
  ADD KEY `Users_fk_0_provinces_id` (`provinces_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `countrys`
--
ALTER TABLE `countrys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `leagues`
--
ALTER TABLE `leagues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=217;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `seasons`
--
ALTER TABLE `seasons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  ADD CONSTRAINT `cartProduct_fk_0_carts_id` FOREIGN KEY (`carts_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `cartProduct_fk_0_products_id` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `cartProduct_fk_0_states_id` FOREIGN KEY (`states_id`) REFERENCES `states` (`id`);

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `Carts_fk_0_users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `Products_fk_0_brands_id` FOREIGN KEY (`brands_id`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `Products_fk_0_categorys_id` FOREIGN KEY (`categorys_id`) REFERENCES `categorys` (`id`),
  ADD CONSTRAINT `Products_fk_0_leagues_id` FOREIGN KEY (`leagues_id`) REFERENCES `leagues` (`id`),
  ADD CONSTRAINT `Products_fk_0_seasons_id` FOREIGN KEY (`seasons_id`) REFERENCES `seasons` (`id`);

--
-- Filtros para la tabla `provinces`
--
ALTER TABLE `provinces`
  ADD CONSTRAINT `Provinces_fk_0_countrys_id` FOREIGN KEY (`countrys_id`) REFERENCES `countrys` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `Users_fk_0_countrys_id` FOREIGN KEY (`countrys_id`) REFERENCES `countrys` (`id`),
  ADD CONSTRAINT `Users_fk_0_images_id` FOREIGN KEY (`images_id`) REFERENCES `images` (`id`),
  ADD CONSTRAINT `Users_fk_0_provinces_id` FOREIGN KEY (`provinces_id`) REFERENCES `provinces` (`id`),
  ADD CONSTRAINT `Users_fk_0_roles_id` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
