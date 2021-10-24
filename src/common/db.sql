CREATE TABLE `Discount`
(
 `DiscountId` int Auto_increment NOT NULL ,
 `rebaja`          int NOT NULL ,

PRIMARY KEY (`DiscountId`)
);

CREATE TABLE `ProductCategory`
(
 `CategoryId` int Auto_increment NOT NULL ,
 `Name`       varchar(45) NOT NULL ,

PRIMARY KEY (`CategoryId`)
);


CREATE TABLE `Product`
(
 `ProductId`  int NOT NULL AUTO_INCREMENT ,
 `Name`       varchar(50) NOT NULL ,
 `CategoryId` int NOT NULL ,
 `UnitPrice`  decimal(12,2) NULL ,
 `Image`      json NOT NULL ,
 `DiscountId` int NULL ,

PRIMARY KEY (`ProductId`),
UNIQUE KEY `AK1_Product_SupplierId_ProductName` (`Name`),
KEY `fkIdx_123` (`CategoryId`),
CONSTRAINT `FK_121` FOREIGN KEY `fkIdx_123` (`CategoryId`) REFERENCES `ProductCategory` (`CategoryId`),
KEY `fkIdx_192` (`DiscountId`),
CONSTRAINT `FK_190` FOREIGN KEY `fkIdx_192` (`DiscountId`) REFERENCES `Discount` (`DiscountId`)
) 

CREATE TABLE `Customer`
(
 `CustomerId` int NOT NULL AUTO_INCREMENT ,
 `Name`       varchar(40) NULL ,
 `Phone`      varchar(20) NULL ,
 `Email`      varchar(40) NOT NULL ,
 `Password`   varchar(72) NOT NULL ,

PRIMARY KEY (`CustomerId`),
UNIQUE KEY `AK1_Customer_CustomerName` (`Name`)
) 

CREATE TABLE `Carrito`
(
 `Quantity`   int NOT NULL ,
 `ProductId`  int NOT NULL ,
 `CustomerId` int NOT NULL ,

PRIMARY KEY (`ProductId`, `CustomerId`),
KEY `fkIdx_151` (`ProductId`),
CONSTRAINT `FK_149` FOREIGN KEY `fkIdx_151` (`ProductId`) REFERENCES `Product` (`ProductId`),
KEY `fkIdx_168` (`CustomerId`),
CONSTRAINT `FK_166` FOREIGN KEY `fkIdx_168` (`CustomerId`) REFERENCES `Customer` (`CustomerId`)
);

CREATE TABLE `Order`
(
 `OrderId`     int NOT NULL AUTO_INCREMENT ,
 `OrderNumber` varchar(10) NULL ,
 `TotalAmount` decimal(12,2) NOT NULL ,
 `OrderDate` datetime NOT NULL ,
 `CustomerId`  int NOT NULL ,

PRIMARY KEY (`OrderId`),
UNIQUE KEY `AK1_Order_OrderNumber` (`OrderNumber`),
KEY `FK_Order_CustomerId_Customer` (`CustomerId`),
CONSTRAINT `FK_Order_CustomerId_Customer` FOREIGN KEY `FK_Order_CustomerId_Customer` (`CustomerId`) REFERENCES `Customer` (`CustomerId`)
) 

CREATE TABLE `OrderItem`
(
 `UnitPrice` decimal(12,2) NOT NULL ,
 `Quantity`  int NOT NULL ,
 `OrderId`   int NOT NULL ,
 `ProductId` int NOT NULL ,

PRIMARY KEY (`OrderId`, `ProductId`),
KEY `FK_OrderItem_OrderId_Order` (`OrderId`),
CONSTRAINT `FK_OrderItem_OrderId_Order` FOREIGN KEY `FK_OrderItem_OrderId_Order` (`OrderId`) REFERENCES `Order` (`OrderId`),
KEY `FK_OrderItem_ProductId_Product` (`ProductId`),
CONSTRAINT `FK_OrderItem_ProductId_Product` FOREIGN KEY `FK_OrderItem_ProductId_Product` (`ProductId`) REFERENCES `Product` (`ProductId`)
)


