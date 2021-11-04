const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./restaurants.sqlite');

try {
    db.serialize(function () { 

    let stmt;

        try {
            stmt = db.prepare(`INSERT INTO RESTAURANTS (name, imagelink) VALUES (?, ?)`);
            stmt.run('Bayroot', 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/England/Brighton/brighton-restaurants-hotel-du-vin-bistro.jpg');
        } finally {
            // release resources 
            stmt.finalize();
        }

        // select the rows and print them out
        db.each("SELECT * FROM Restaurants",
            function (err, rows) {  
                console.log(rows);  
            }
        );
    });
} finally {
    // release resources 
    db.close();  
}