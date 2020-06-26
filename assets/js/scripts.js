(function() {
    document.getElementById("newChar").addEventListener("click", function() {
        
        document.getElementById("formNewChar").classList.remove("hide");
    });
    document.getElementById("cancel").addEventListener("click", function() {
        
        document.getElementById("formNewChar").classList.add("hide");
    });
})();