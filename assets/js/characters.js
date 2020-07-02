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
            alert("Error");
        };
}

function putCharacter(name, shortdesc, img, desc, id ) {
    try {axios.put("https://character-database.becode.xyz/characters/"+id,{
    name : name,
    shortDescription : shortdesc,
    description : desc,
    image : img
    }).then(()=>{
        window.location.reload();
    })} catch(error){
            console.error(error);
            alert("Error");
        };
}

function deleteCharacter(id) {
    try {axios.delete("https://character-database.becode.xyz/characters/"+id)
        .then(()=>{
            window.location.href = "../../index.html";
        })
    } catch(error){
            console.error(error);
            alert("Error");
        };
}
