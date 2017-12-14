
const db = require('./models');

(async () => {

    rows = await db.users.findAll();
    rows.forEach((row) => {
        console.log(`${row.name} (${row.email}): Pizza - ${row.fav_pizza}, Space Invaders - ${row.space_invaders}`);
    });

})();
