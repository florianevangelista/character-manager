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

function putCharacter(name, shortdesc, img, desc, id ) {
    try {axios.put("https://character-database.becode.xyz/characters/"+id,{
    name : name,
    shortDescription : shortdesc,
    description : desc,
    image : img
    })}
        catch(error){
            console.error(error);
        };
}

function deleteCharacter(id) {
    try {axios.delete("https://character-database.becode.xyz/characters/"+id)}
        catch(error){
            console.error(error);
        };
    setTimeout(function(){window.location.href = "../../index.html";},600);   
}
