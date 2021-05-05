// Déclaration et initialisation d'une variable i --> compteur
let i = 0;

$(function(){ 
    // Au clic du bouton dispslayInc...
    $('#displayInc').click(function(){
        // On incrémente i
        i++; 
        // On affiche dans l'input la valeur de i incrémentée à chaque clic --> méthode val(paramètre)
        $('#inputCounter').val(i);
    });

    // Au clic du bouton displayDec...
    $('#displayDec').click(function(){
        // On décrémente i
        i--; 
        // On affiche dans l'input la valeur de i décrémentée à chaque clic --> méthode val(paramètre)
        $('#inputCounter').val(i);
    });

    // Au clic du bouton resetButton...
    $('#resetButton').click(function(){
        // On affiche une valeur vide
        $('#inputCounter').val('');
        // On remet le compteur à 0
        i = 0;
    });
});