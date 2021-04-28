// Changer la taille d'un élément 

// $ --> JQuery() permet de transformer l'élément en objet JQuery


$(document).ready(function(){
    $('#image').dblclick(function(){
        $(this).css("width", "500px");
    });
});



//OR méthode animate() --> prend la taille précisée avec un effet



// En JS vanilla, on aurait :
/*
let image = document.getElementById("image");
image.addEventListener("dblclick", () => {
    image.style.width = "500px";
});
*/