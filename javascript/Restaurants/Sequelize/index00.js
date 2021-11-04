// get the instance of sequelize
const { connection, Restaurant, Menu, MenuItem } = require('./sequelize-connect');

//Runs all the functions
const main = async () => {
    try {
        await start();
        const objects = await createRows();
        await runQueries(objects);
    } catch (error) {
        throw new Error(error.message);
    };
};

const start = async () => {
    await connection.sync({
        logging: false, //don't log everything
        force: true //drop tables each time
    });
};

//run main and log any errors
main().catch(error => console.log(error));



//Creates the rows in the database and returns array of objects
const createRows = async () => {
    //create the objects (and rows)
    const theRestaurant = await Restaurant.create({
        name: 'Italian Kitchen'
    });
    const theMenu = await Menu.create({
        title: 'Pizzas',
    });
    const theMenuItem = await MenuItem.create({
        name: 'cheese pizza',
        price: '6',
    });

    //add the associations (foreign keys). These are sequelize specific functions.
    await theRestaurant.addMenu(theMenu);
    await theMenu.addMenuItem(theMenuItem);

    return [theRestaurant, theMenu, theMenuItem];

    /*
    When an association is defined between two models, the instances of those models gain special methods to interact with their associated counterparts.
    For example, if we have two models, Foo and Bar, and they are associated, their instances will have the following methods/mixins available, depending on the association type:

    Foo.hasOne(Bar)
    fooInstance.getBar()
    fooInstance.setBar()
    fooInstance.createBar()

    Foo.belongsTo(Bar)
    The same ones from Foo.hasOne(Bar):
    fooInstance.getBar()
    fooInstance.setBar()
    fooInstance.createBar()

    Foo.hasMany(Bar)
    fooInstance.getBars()
    fooInstance.countBars()
    fooInstance.hasBar()
    fooInstance.hasBars()
    fooInstance.setBars()
    fooInstance.addBar()
    fooInstance.addBars()
    fooInstance.removeBar()
    fooInstance.removeBars()
    fooInstance.createBar()
*/
};

const runQueries = async (objects) => {
    [theRestaurant, theMenu, theMenuItem] = objects;
    
    /*Finder methods are the ones that generate SELECT queries.

    By default, the results of all finder methods are instances of the model class (as opposed to being just plain JavaScript objects). 
    This means that after the database returns the results, Sequelize automatically wraps everything in proper instance objects. I
    n a few cases, when there are too many results, this wrapping can be inefficient. 
    To disable this wrapping and receive a plain response instead, pass { raw: true } as an option to the finder method.
    The findAll method generates a standard SELECT query which will retrieve all entries 
    from the table (unless restricted by something like a where clause, for example).
    */
    const restaurants = await Restaurant.findAll({});

    console.log(`Found all restaurants: ${JSON.stringify(restaurants)}`);

};