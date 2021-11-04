const sqlite3 = require('sqlite3').verbose();

const initialise = () => {
    const db = new sqlite3.Database('./restaurants.sqlite');

    try {
        db.serialize(function () { 
            db.run("CREATE TABLE RESTAURANTS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT)");
        });
    } finally { 
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
    }
};

initialise();