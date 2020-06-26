(async ()=>{
    await axios.get('https://character-database.becode.xyz/characters')
        .then((response)=>{
            let html = "";
            response.data.map(x=>{ html +=
                `
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <a href="blue-features-single.html" class="features-small-item">
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
                `   
                // console.log("data:image/jpeg;base64,"+x.image);
            })
            document.getElementById("parent").innerHTML = html;
        });
})();

