const axios = require('axios').default;

(async ()=>{
    await axios.get('https://character-database.becode.xyz/characters').then((response)=>{console.log(response)});
})();

