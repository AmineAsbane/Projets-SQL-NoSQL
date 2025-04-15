--  Création de la base de données
CREATE DATABASE IF NOT EXISTS BoutiqueEnLigne;
USE BoutiqueEnLigne;


CREATE TABLE Clients (
    CustomerID INT PRIMARY KEY,
    Country VARCHAR(100)
);

CREATE TABLE Produits (
    StockCode VARCHAR(20) PRIMARY KEY,
    Description VARCHAR(255)
);

CREATE TABLE Commandes (
    InvoiceNo VARCHAR(20) PRIMARY KEY,
    InvoiceDate DATETIME,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Clients(CustomerID)
);

CREATE TABLE Details_Commandes (
    DetailID INT AUTO_INCREMENT PRIMARY KEY,
    InvoiceNo VARCHAR(20),
    StockCode VARCHAR(20),
    Quantity INT,
    UnitPrice DECIMAL(10,2),
    FOREIGN KEY (InvoiceNo) REFERENCES Commandes(InvoiceNo),
    FOREIGN KEY (StockCode) REFERENCES Produits(StockCode)
);


-- Requêtes SQL

--  Analyse des ventes par pays
SELECT 
    c.Country,
    SUM(dc.Quantity * dc.UnitPrice) AS TotalVentes
FROM 
    Clients c
JOIN 
    Commandes co ON c.CustomerID = co.CustomerID
JOIN 
    Details_Commandes dc ON co.InvoiceNo = dc.InvoiceNo
GROUP BY 
    c.Country
ORDER BY 
    TotalVentes DESC;

--  Identification des produits les plus vendus
SELECT 
    p.Description,
    SUM(dc.Quantity) AS QuantiteTotale
FROM 
    Produits p
JOIN 
    Details_Commandes dc ON p.StockCode = dc.StockCode
GROUP BY 
    p.Description
ORDER BY 
    QuantiteTotale DESC
LIMIT 10;

--  Analyse du comportement des clients (fréquence d'achat, panier moyen)
SELECT 
    c.CustomerID,
    COUNT(DISTINCT co.InvoiceNo) AS NombreCommandes,
    AVG(dc.Quantity * dc.UnitPrice) AS PanierMoyen
FROM 
    Clients c
JOIN 
    Commandes co ON c.CustomerID = co.CustomerID
JOIN 
    Details_Commandes dc ON co.InvoiceNo = dc.InvoiceNo
GROUP BY 
    c.CustomerID
ORDER BY 
    NombreCommandes DESC;

--  Détection des tendances saisonnières (ventes par mois)
SELECT 
    MONTH(co.InvoiceDate) AS Mois,
    SUM(dc.Quantity * dc.UnitPrice) AS TotalVentes
FROM 
    Commandes co
JOIN 
    Details_Commandes dc ON co.InvoiceNo = dc.InvoiceNo
GROUP BY 
    Mois
ORDER BY 
    Mois;
