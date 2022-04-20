import app from "./app.js";
import {sequelize} from './database/database.js'

// import './models/Task.js'
// import './models/Project.js'
// Al importar el modelo Project en el index y utilizando el metodo sequelize.sync() 
// este nos crea una tabla projects en la base de datos


async function main() {

    try {

        //await sequelize.sync({ alter: true});
        await sequelize.sync({ force: false });
        app.listen(3000, () => {
            console.log('Server is listening on port', 3000);
        });
        
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
}

main()
