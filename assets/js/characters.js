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