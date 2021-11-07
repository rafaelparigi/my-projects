//Here we are scoping the routes out for all urls that begin with restaurants

const { Restaurant, Menu } = require('../sequelize-connect');
const express = require('express');

 //creates a new instance of a router object
 const router = express.Router();

 router.post('/', async (req, res) => {
    try {
        //create a row in the database using sequelize create method
        const restaurant = await Restaurant.create(req.body);

        //201 created a resource
        res.redirect('/restaurants');
    } catch(e) {
        res.status(400).send(e.message);
    }
});

// this route returns HTML for all the restaurants
router.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.render('restaurant/restaurant-list', { restaurants });
});

//this route returns HTML to create a new restaurant
router.get('/create', async (req, res) => {
    res.render('restaurant/create-restaurant');
});

//this route returns HTML to update a restaurant
router.get('/:id/update', async (req, res) => {
    const restaurant = await Restaurant.findOne({where: {id: req.params.id}});
    res.render('restaurant/update-restaurant', { restaurant });
});

router.put('/:id', async (req, res) => {
    try {
        const restaurantId = req.params.id;
        await Restaurant.update({name: req.body.name, imagelink: req.body.imagelink}, {where: {id: restaurantId}});
        res.render('restaurant/restaurant-list');
    } catch(e) {
        res.status(400).send(e.message);
    };
});

router.delete('/:id', async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const restaurantToDelete = await Restaurant.destroy({where: {id: restaurantId}});
        res.status(201).send('deleted restaurant with ID ' + restaurantId);
    } catch(e) {
        res.status(400).send(e.message);
    };
});

router.post('/:restaurant_id/menus', async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({where: {id: req.params.restaurant_id}});
        if (restaurant) {
            const menu = await Menu.create(req.body);
            await restaurant.addMenu(menu);
            res.redirect(`/restaurants/${req.params.restaurant_id}/menus`);
        } else {
            res.status(400).send(`${req.params.restaurant_id} does not exist`);
        }
    } catch(error) {
        res.status(400).send(error.message);
    }
});

router.get('/:id/menus', async (req, res) => {
    const menus = await Menu.findAll({where: {RestaurantId: req.params.id}});
    const resto_id = req.params.id;
    res.render('menu/menu-list', { menus, resto_id });
});

router.get('/:id/menus/create', async (req, res) => {
    const menus = await Menu.findAll({where: {RestaurantId: req.params.id}});
    const resto_id = req.params.id;
    res.render('menu/create-menu', { menus, resto_id });
});

router.delete('/:restaurant_id/menus/:menu_id', async (req, res) => {
    try {
        await Menu.destroy({where: {id: req.params.menu_id, RestaurantId: req.params.restaurant_id}});
        res.status(201).send('deleled menu with ID ' + req.params.menu_id);
    } catch(e) {
        res.status(400).send(e.message);
    };
});

module.exports = router;