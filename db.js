const config = require('./knexfile');
const knex = require('knex')(config.development); 

// Querry Db Version

// using promises
// knex.raw('SELECT VERSION()').then(version => {
//     console.log('DB Version',  version);
// }, error => console.log(error));

// using async await
(
    async () => {
        try {
            const version = await knex.raw('SELECT VERSION()');
            console.log(version)
            
        } catch (error) {
            console.log(error);
        }
    }
)();
