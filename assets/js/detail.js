let url = new URL(location.href);
let id = url.searchParams.get("id");

(async () => {
    let character = await getCharacterById(id);

    document.getElementById("nameOfCharacter").innerHTML = character.name;
    document.getElementById("secondName").innerHTML = character.name;
    document.getElementById("description").innerHTML = "Description : " + character.description;
    document.getElementById("idOfCharacter").innerHTML = "Id : " + character.id;
    
    if(character.image == undefined) {
        document.getElementById("image").innerHTML = `<img src="../images/noImage.png" width="450px" height="450px">`;
    } else {
        document.getElementById("image").innerHTML = `<img src="data:image/jpeg;base64, ${character.image}" width="750px" height="450px">`;
    }
})();

const deleteFunc = () => {
    deleteCharacter(id);
}