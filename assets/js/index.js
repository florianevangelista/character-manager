(async () => {
    let characters = await getListOfCharacters();
    let html = "";
    
    characters.map((x) => {
        html += `
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <a href="assets/pages/detail.html?id=${x.id}" class="features-small-item">
                <div class="icon">
                    <img src="data:image/jpeg;base64, ${x.image}" width="100px" height="100px">
                </div>
                <h5>${x.name}</h5>
                <p>${x.shortDescription}</p>
                <div class="button">
                    <i class="fa fa-chevron-right"></i>
                </div>
            </a>
            <div class="item-bg"></div>
        </div>
        `;
    });

    document.getElementById("parent").innerHTML = html;
})();