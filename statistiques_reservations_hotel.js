use HotelReservationSystem; // Créer ou utiliser la base de données

db.createCollection('Reservations'); // Créer la collection "Reservations"

// Importation des données depuis un fichier CSV
// mongoimport --db HotelReservationSystem --collection Reservations --type csv --file tourism_data.csv --headerline

// a. Analyse des réservations par pays
db.Reservations.aggregate([
    {
        $group: {
            _id: "$Country", 
            totalReservations: { $sum: 1 } 
        }
    },
    {
        $sort: { totalReservations: -1 } 
    }
]);

// b. Identification des chambres les plus réservées
db.Reservations.aggregate([
    {
        $group: {
            _id: "$RoomType", 
            totalBookings: { $sum: 1 } 
        }
    },
    {
        $sort: { totalBookings: -1 } 
    }
]);

// c. Analyse des réservations selon les saisons
db.Reservations.aggregate([
    {
        $project: {
            month: { $month: "$ReservationDate" }, 
            totalAmount: "$TotalPrice" 
        }
    },
    {
        $group: {
            _id: "$month", 
            totalSales: { $sum: "$totalAmount" } 
        }
    },
    {
        $sort: { _id: 1 } 
    }
]);

// d. Analyse des clients les plus fréquents
db.Reservations.aggregate([
    {
        $group: {
            _id: "$CustomerID", 
            totalBookings: { $sum: 1 } 
        }
    },
    {
        $sort: { totalBookings: -1 } 
    },
    {
        $limit: 10 
    }
]);

// Créer un index sur la colonne "ReservationDate" pour accélérer les requêtes basées sur la date de réservation
db.Reservations.createIndex({ ReservationDate: 1 });

// Créer un index sur la colonne "Country" pour accélérer les requêtes de filtrage par pays
db.Reservations.createIndex({ Country: 1 });

// Créer un index sur la colonne "RoomType" pour optimiser les requêtes sur les types de chambres
db.Reservations.createIndex({ RoomType: 1 });
