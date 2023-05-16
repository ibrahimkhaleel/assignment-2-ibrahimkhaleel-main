DROP TABLE IF EXISTS cars;
BEGIN TRANSACTION;
CREATE TABLE cars (
Name TEXT NOT NULL,
Model TEXT NOT NULL,
ID INTEGER PRIMARY KEY,
Description TEXT,
Color TEXT,
Company TEXT
);
INSERT INTO cars (Name, Model, ID, Description, Color, Company) VALUES ('Toyota Camry', '2021', 1, 'Sedan with advanced safety features', 'Silver', 'Toyota');
INSERT INTO cars (Name, Model, ID, Description, Color, Company) VALUES ('Honda Civic', '2022', 2, 'Compact car with great fuel efficiency', 'Blue', 'Honda');
INSERT INTO cars (Name, Model, ID, Description, Color, Company) VALUES ('Ford Mustang', '2023', 3, 'Muscle car with powerful performance', 'Red', 'Ford');
INSERT INTO cars (Name, Model, ID, Description, Color, Company) VALUES ('Chevrolet Cruze', '2022', 4, 'Economical and stylish compact car', 'White', 'Chevrolet');
INSERT INTO cars (Name, Model, ID, Description, Color, Company) VALUES ('BMW 3 Series', '2021', 5, 'Luxury sedan with sporty performance', 'Black', 'BMW');
INSERT INTO cars (Name, Model, ID, Description, Color, Company) VALUES ('Mercedes-Benz C-Class', '2023', 6, 'Premium sedan with elegant design', 'Gray', 'Mercedes-Benz');
INSERT INTO cars (Name, Model, ID, Description, Color, Company) VALUES ('Audi A4', '2022', 7, 'Sophisticated sedan with advanced technology', 'Silver', 'Audi');
INSERT INTO cars (Name, Model, ID, Description, Color, Company) VALUES ('Nissan Rogue', '2023', 8, 'Versatile SUV with spacious interior', 'Blue', 'Nissan');


COMMIT;