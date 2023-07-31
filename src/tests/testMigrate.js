const sequelize = require('../utils/connection');
require('../models')

const main = async() => {
    try{
        // Acciones a ejecutar antes de los tests
        sequelize.sync();
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();