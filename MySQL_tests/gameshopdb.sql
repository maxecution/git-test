-- create and switch to DB
CREATE SCHEMA `gameshopdb`;

USE `gameshopdb`;

-- creating DB tables
CREATE TABLE Games (
    GameID INT PRIMARY KEY,
    Title VARCHAR(100),
    Genre VARCHAR(50),
    Platform VARCHAR(50),
    ReleaseDate DATE,
    Developer VARCHAR(100),
    Publisher VARCHAR(100),
    Price DECIMAL(10 , 2 ),
    StockQuantity INT,
    Rating VARCHAR(10),
    CoverImage BLOB
);

CREATE TABLE Suppliers (
    SupplierID INT PRIMARY KEY,
    SupplierName VARCHAR(100) NOT NULL,
    ContactName VARCHAR(100),
    ContactEmail VARCHAR(100),
    PhoneNumber VARCHAR(15),
    Address VARCHAR(255),
    City VARCHAR(100),
    State VARCHAR(50),
    PostalCode VARCHAR(10)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    SupplierID INT,
    OrderDate DATE NOT NULL,
    TotalAmount DECIMAL(10 , 2 ) NOT NULL,
    Status VARCHAR(50) NOT NULL,
    FOREIGN KEY (SupplierID)
        REFERENCES Suppliers (SupplierID)
);

CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY,
    OrderID INT,
    GameID INT,
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(10 , 2 ) NOT NULL,
    FOREIGN KEY (OrderID)
        REFERENCES Orders (OrderID),
    FOREIGN KEY (GameID)
        REFERENCES Games (GameID)
);

-- display tables
DESCRIBE `Games`;
DESCRIBE `Suppliers`;
DESCRIBE `Orders`;
DESCRIBE `OrderItems`;


-- seeding DB tables

INSERT INTO `gameshopdb`.`Games` (GameID, Title, Genre, Platform, ReleaseDate, Developer, Publisher, Price, StockQuantity, Rating, CoverImage)
VALUES
(1, 'The Legend of Zelda: Breath of the Wild', 'Adventure', 'Nintendo Switch', '2017-03-03', 'Nintendo', 'Nintendo', 59.99, 100, 'E10+', NULL),
(2, 'God of War', 'Action', 'PlayStation 4', '2018-04-20', 'Santa Monica Studio', 'Sony Interactive Entertainment', 49.99, 150, 'M', NULL),
(3, 'Red Dead Redemption 2', 'Action-Adventure', 'PlayStation 4', '2018-10-26', 'Rockstar Games', 'Rockstar Games', 59.99, 200, 'M', NULL),
(4, 'Super Mario Odyssey', 'Platform', 'Nintendo Switch', '2017-10-27', 'Nintendo', 'Nintendo', 59.99, 120, 'E10+', NULL),
(5, 'Cyberpunk 2077', 'RPG', 'PC', '2020-12-10', 'CD Projekt', 'CD Projekt', 59.99, 90, 'M', NULL);

INSERT INTO `gameshopdb`.`Suppliers` (SupplierID, SupplierName, ContactName, ContactEmail, PhoneNumber, Address, City, State, PostalCode)
VALUES
(1, 'Game Distributors Inc.', 'John Doe', 'john.doe@gamedist.com', '123-456-7890', '1234 Elm Street', 'Los Angeles', 'CA', '90001'),
(2, 'Video Game Supply Co.', 'Jane Smith', 'jane.smith@vgamesupply.com', '987-654-3210', '5678 Maple Avenue', 'New York', 'NY', '10001'),
(3, 'Gamer World', 'Bill Johnson', 'bill.johnson@gamerworld.com', '555-123-4567', '9101 Oak Road', 'Chicago', 'IL', '60601'),
(4, 'Console and More', 'Sara Davis', 'sara.davis@consolemore.com', '444-789-1234', '1112 Pine Street', 'Seattle', 'WA', '98101'),
(5, 'Digital Delights', 'Mike Brown', 'mike.brown@digitaldelights.com', '333-456-7890', '1314 Cedar Lane', 'Miami', 'FL', '33101');

INSERT INTO `gameshopdb`.`Orders` (OrderID, SupplierID, OrderDate, TotalAmount, Status)
VALUES
(1, 1, '2023-01-15', 599.90, 'Completed'),
(2, 2, '2023-02-20', 749.85, 'Pending'),
(3, 3, '2023-03-10', 1199.80, 'Completed'),
(4, 4, '2023-04-05', 899.85, 'Cancelled'),
(5, 5, '2023-05-18', 299.95, 'Completed');

INSERT INTO `gameshopdb`.`OrderItems` (OrderItemID, OrderID, GameID, Quantity, UnitPrice)
VALUES
(1, 1, 1, 10, 59.99),
(2, 1, 2, 5, 49.99),
(3, 2, 3, 15, 59.99),
(4, 3, 4, 20, 59.99),
(5, 3, 5, 10, 59.99),
(6, 4, 1, 5, 59.99),
(7, 4, 2, 10, 49.99),
(8, 5, 3, 5, 59.99),
(9, 5, 4, 3, 59.99),
(10, 5, 5, 2, 59.99);

-- display table data
SELECT * FROM `gameshopdb`.`Games`;
SELECT * FROM `gameshopdb`.`Suppliers`;
SELECT * FROM `gameshopdb`.`Orders`;
SELECT * FROM `gameshopdb`.`OrderItems`;

