
const chuck = require('./chuck.js');

(async () => {

    const line = await chuck.getChuckNorrisFact();
    console.log(line);        

})();
