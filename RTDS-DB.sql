CREATE TABLE `client` (
  `client_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_firstname` varchar(20) DEFAULT NULL,
  `client_lastname` varchar(20) DEFAULT NULL,
  `client_email` varchar(30) DEFAULT NULL,
  `client_landline` int(11) DEFAULT NULL,
  `client_mobile` int(11) DEFAULT NULL,
  `client_fax` int(11) DEFAULT NULL,
  `client_address` varchar(40) DEFAULT NULL,
  `date_created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `date_updated` DATETIME DEFAULT NULL,
  `public_id` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT FALSE,
  PRIMARY KEY (`client_id`),
  UNIQUE KEY `public_id` (`public_id`)
);

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `public_id` varchar(50) DEFAULT NULL,
  `admin_firstname` varchar(20) DEFAULT NULL,
  `admin_lastname` varchar(20) DEFAULT NULL,
  `admin_email` varchar(30) DEFAULT NULL,
  `last_update` DATETIME DEFAULT NULL,
  `date_created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(100) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT TRUE,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `public_id` (`public_id`)
); 	

CREATE TABLE `service` (
	`service_id`	INTEGER NOT NULL,
	`service_name`	VARCHAR ( 20 ) NOT NULL,
	`service_cat`	VARCHAR ( 20 ) NOT NULL,
	`date_created`	TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`default price`	FLOAT NOT NULL,
	PRIMARY KEY(`service_id`)
);

CREATE TABLE `quotation` (
	`quote_id`	INTEGER NOT NULL AUTO_INCREMENT,
	`client_id`	INTEGER,
	`quote_validity`	DATETIME,
	`date_created`	TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`is_package`	BOOLEAN,
	`quote_status`	VARCHAR ( 8 ),
	`package_id`	VARCHAR ( 11 ),
	`last_updated`	TIMESTAMP,
	`generated_id`	VARCHAR ( 50 ) UNIQUE,
	FOREIGN KEY(`client_id`) REFERENCES `client`(`client_id`),
	CHECK(is_packageIN(0,1)),
	PRIMARY KEY(`quote_id`)
);

CREATE TABLE `quotation_detail` (
	`quote_detail_id`	INTEGER NOT NULL AUTO_INCREMENT,
	`desc`	VARCHAR ( 100 ),
	`qty`	INTEGER,
	`unit_price`	FLOAT,
	`service_id`	INTEGER,
	`quote_id`	INTEGER,
	FOREIGN KEY(`quote_id`) REFERENCES `quotation`(`quote_id`),
	FOREIGN KEY(`service_id`) REFERENCES `service`(`service_id`),
	PRIMARY KEY(`quote_detail_id`)
);

CREATE TABLE `invoice` (
	`invoice_id`	INTEGER NOT NULL AUTO_INCREMENT,
	`invoice_no`	INTEGER NOT NULL,
	`date_created`	TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`quote_id`	INTEGER,
	PRIMARY KEY(`invoice_id`),
	FOREIGN KEY(`quote_id`) REFERENCES `quotation`(`quote_id`)
);
