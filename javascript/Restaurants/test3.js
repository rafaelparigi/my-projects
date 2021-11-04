const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./restaurants2.sqlite');

try {
    db.serialize(function () { 

    let stmt;
 
       // try {
            // stmt = db.prepare(`INSERT INTO Restaurant (name) VALUES (?)`);
            // const restaurantArray = ['Italian Kitchen', 'Best Chinese', 'El sombrero', 'Tango tango'];
            // restaurantArray.forEach((restaurant) => stmt.run(restaurant));
            // stmt =db.prepare(`INSERT INTO Menu(id, title, restaurant_id) VALUES (?, ?, ?)`)
            // const menuArray = [
            // [1, 'Pizzas', 1],
            // [2, 'Pastas', 1],
            // [3, 'Desserts', 1],
            // [4, 'Wines', 1],
            // [5, 'Stir-fries', 2],
            // [6, 'Dumplings', 2],
            // [7, 'Desserts', 2],
            // [8, 'Drinks', 2],
            // [9, 'Burritos', 3],
            // [10, 'Favourites', 3],
            // [11, 'Desserts', 3],
            // [12, 'Mojitos', 3],
            // [13, 'Steaks', 4],
            // [14, 'Desserts', 4],
            // [15, 'Wines', 4]
            // ];
            //menuArray.forEach(menu => stmt.run(menu[0], menu[1], menu[2]));
        // } finally {
        //     // release resources 
        //     stmt.finalize();
        // }

        // select the rows and print them out
        db.each("SELECT * FROM Menu",
            function (err, rows) {  
                console.log(rows);  
            }
        );
    });
} finally {
    // release resources 
    db.close();  
}