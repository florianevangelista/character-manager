function getListOfCharacters() {
    return axios.get('https://character-database.becode.xyz/characters')
        .then((response)=>{
            return response.data;
        });
}

function getCharacterById(id) {
    return axios.get(`https://character-database.becode.xyz/characters/${id}`)
        .then((response)=>{
            return response.data;
        });
}

function postCharacter(name, shortdesc, img, desc ) {
    try {axios.post("https://character-database.becode.xyz/characters/",{
    name : name,
    shortDescription : shortdesc,
    description : desc,
    image : img
    })}
        catch(error){
            console.error(error);
        };
}
