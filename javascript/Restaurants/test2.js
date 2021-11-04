const sqlite3 = require('sqlite3').verbose();

const initialise = () => {
    const db = new sqlite3.Database('./restaurants2.sqlite');

    try {
        db.serialize(function () { 
            db.run(
              `CREATE TABLE Restaurant (
                id INTEGER NOT NULL PRIMARY KEY,
                name TEXT
              );`
            );
            db.run(
                `CREATE TABLE Menu (
                id INTEGER NOT NULL PRIMARY KEY,
                title TEXT,
                restaurant_id INTEGER NOT NULL,
                FOREIGN KEY(restaurant_id) REFERENCES Restaurant(id)
              );`
            );
              
            db.run(
                `CREATE TABLE MenuItem (
                id INTEGER NOT NULL PRIMARY KEY,
                name TEXT,
                price INTEGER,
                menu_id INTEGER NOT NULL,
                FOREIGN KEY(menu_id) REFERENCES Menu(id)
              );`
            );
        });
    } finally { 
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
    };
};
initialise();