const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Restaurants.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) 
        console.error(err.message);

    console.log('connection successful');
});

//creating a table
db.run(
    /*
  `CREATE TABLE Restaurant (
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT
  );

  `CREATE TABLE Menu (
    id INTEGER NOT NULL PRIMARY KEY,
    title TEXT,
    restaurant_id INTEGER NOT NULL,
    FOREIGN KEY(restaurant_id) REFERENCES Restaurant(id)
  `
    INSERT INTO Menu(id, title, restaurant_id) VALUES
    (1, 'Pizzas', 1),
    (2, 'Pastas', 1),
    (3, 'Desserts', 1),
    (4, 'Wines', 1),
    (5, 'Stir-fries', 2),
    (6, 'Dumplings', 2),
    (7, 'Desserts', 2),
    (8, 'Drinks', 2),
    (9, 'Burritos', 3),
    (10, 'Favourites', 3),
    (11, 'Desserts', 3),
    (12, 'Mojitos', 3),
    (13, 'Steaks', 4),
    (14, 'Desserts', 4),
    (15, 'Wines', 4);
  );`

 `
  CREATE TABLE MenuItem (
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT,
    price INTEGER,
    menu_id INTEGER NOT NULL,
    FOREIGN KEY(menu_id) REFERENCES Menu(id)
  );
*/`
INSERT INTO MenuItem(name, price, menu_id) VALUES
("Cheese pizza", 6, 1),
("Meat feast pizza", 8, 1),
("Marinara", 9, 2),
("Bolognese", 7, 2),
("Carbonara", 8, 2),
("Tiramisu", 4, 3),
("Red wine", 7, 4),
("White wine", 7, 4),
("Mushroom stir-fry", 5, 5),
("Chinese style stir-fry", 6, 5),
("Veggie gyoza", 5.5, 6),
("Pork gyoza", 6.5, 6),
("Almond jelly", 3.5, 7),
("Green tea", 2.5, 8),
("Oolong tea", 2.5, 8),
("3 beans burrito", 6, 9),
("Guacamole burrito", 7, 9),
("Nachos", 5.5, 10),
("Quesadillas", 7.5, 10),
("Enchilladas", 8.5, 10),
("Churros", 5, 11),
("Traditional mojito", 4.5, 12),
("Strawberry mojito", 4.5, 12),
("Passion fruit mojito", 4.5, 12),
("Sirloin", 20, 13),
("Fruit salad", 10, 14), 
("Red wine 10 years", 15, 15),
("Red wine 20 years", 45, 15);
`
);
/*
db.run(sql, (err) => {
    if (err) 
        return console.error(err.message);

    console.log('new values inserted');
});
*/
const sql = 'SELECT * FROM MenuItem';

db.all(sql, [], (err, rows) => {
    if (err) 
        return console.error(err.message);
    rows.forEach((row) => {
        console.log(row);
    });
});


db.close((err) => {
    if (err) return console.error(err.message);
});