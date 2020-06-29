(async () => {
    var url = new URL(location.href);
    var id = url.searchParams.get("id");

    let character = await getCharacterById(id);

    document.getElementById("nameOfCharacter").innerHTML = character.name;
    document.getElementById("secondName").innerHTML = character.name;
    document.getElementById("description").innerHTML = "Description : " + character.description;
    document.getElementById("idOfCharacter").innerHTML = "Id : " + character.id;
    document.getElementById("image").innerHTML = `<img src="data:image/jpeg;base64, ${character.image}" width="750px" height="450px">`;

    console.log("char", character);
})();
