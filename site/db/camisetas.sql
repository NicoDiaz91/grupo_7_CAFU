{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf840
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 CREATE TABLE IF NOT EXISTS `Products` (\
   `id` INT AUTO_INCREMENT,\
   `name` VARCHAR NOT NULL,\
   `price` INT NOT NULL,\
   `description` VARCHAR NOT NULL,\
   `image` VARCHAR NOT NULL,\
   `stock` INT NOT NULL,\
   `brand_id` INT NOT NULL,\
   `league_id` INT NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
CREATE TABLE IF NOT EXISTS `Brands` (\
   `id` INT AUTO_INCREMENT,\
   `name` VARCHAR NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
CREATE TABLE IF NOT EXISTS `Leagues` (\
   `id` INT AUTO_INCREMENT,\
   `name` VARCHAR NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
CREATE TABLE IF NOT EXISTS `Users` (\
   `id` INT AUTO_INCREMENT,\
   `firstName` VARCHAR NOT NULL,\
   `lastName` VARCHAR NOT NULL,\
   `email` VARCHAR NOT NULL,\
   `password` VARCHAR NOT NULL,\
   `image_id` INT,\
   `role_id` INT NOT NULL,\
   `country_id` INT NOT NULL,\
   `province_id` INT NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`),\
   UNIQUE KEY unique_email (email)\
);\
\
CREATE TABLE IF NOT EXISTS `Images` (\
   `id` INT AUTO_INCREMENT,\
   `name` VARCHAR NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
CREATE TABLE IF NOT EXISTS `Roles` (\
   `id` INT AUTO_INCREMENT,\
   `name` VARCHAR NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
CREATE TABLE IF NOT EXISTS `Countrys` (\
   `id` INT AUTO_INCREMENT,\
   `name` VARCHAR NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
CREATE TABLE IF NOT EXISTS `Provinces` (\
   `id` INT AUTO_INCREMENT,\
   `name` INT NOT NULL,\
   `country_id` INT NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
CREATE TABLE IF NOT EXISTS `Carts` (\
   `id` INT AUTO_INCREMENT,\
   `total` INT NOT NULL,\
   `user_id` INT NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
CREATE TABLE IF NOT EXISTS `cartProduct` (\
   `id` INT AUTO_INCREMENT,\
   `product_id` INT NOT NULL,\
   `subtotal` INT NOT NULL,\
   `cart_id` INT NOT NULL,\
   `state_id` INT NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
CREATE TABLE IF NOT EXISTS `States` (\
   `id` INT AUTO_INCREMENT,\
   `state` INT NOT NULL,\
   `createdAt` TIMESTAMP,\
   `updatedAt` TIMESTAMP,\
   `deletedAt` TIMESTAMP,\
   PRIMARY KEY (`id`)\
);\
\
ALTER TABLE `Products` ADD CONSTRAINT `Products_fk_0_brand_id` FOREIGN KEY (brand_id) REFERENCES `Brands`(`id`) ;\
ALTER TABLE `Products` ADD CONSTRAINT `Products_fk_0_league_id` FOREIGN KEY (league_id) REFERENCES `Leagues`(`id`) ;\
ALTER TABLE `Users` ADD CONSTRAINT `Users_fk_0_image_id` FOREIGN KEY (image_id) REFERENCES `Images`(`id`) ;\
ALTER TABLE `Users` ADD CONSTRAINT `Users_fk_0_role_id` FOREIGN KEY (role_id) REFERENCES `Roles`(`id`) ;\
ALTER TABLE `Users` ADD CONSTRAINT `Users_fk_0_country_id` FOREIGN KEY (country_id) REFERENCES `Countrys`(`id`) ;\
ALTER TABLE `Users` ADD CONSTRAINT `Users_fk_0_province_id` FOREIGN KEY (province_id) REFERENCES `Provinces`(`id`) ;\
ALTER TABLE `Provinces` ADD CONSTRAINT `Provinces_fk_0_country_id` FOREIGN KEY (country_id) REFERENCES `Countrys`(`id`) ;\
ALTER TABLE `Carts` ADD CONSTRAINT `Carts_fk_0_user_id` FOREIGN KEY (user_id) REFERENCES `Users`(`id`) ;\
ALTER TABLE `cartProduct` ADD CONSTRAINT `cartProduct_fk_0_product_id` FOREIGN KEY (product_id) REFERENCES `Products`(`id`) ;\
ALTER TABLE `cartProduct` ADD CONSTRAINT `cartProduct_fk_0_cart_id` FOREIGN KEY (cart_id) REFERENCES `Carts`(`id`) ;\
ALTER TABLE `cartProduct` ADD CONSTRAINT `cartProduct_fk_0_state_id` FOREIGN KEY (state_id) REFERENCES `States`(`id`) ;\
}