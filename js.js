var flecheHeure = document.getElementById('flecheheure');
var flecheMinute = document.getElementById('flecheminute');
var flecheSeconde = document.getElementById('flecheseconde');

var date = new Date();

var temps = date.getSeconds() + 60 * date.getMinutes() + 3600 * date.getHours();

function rotate() {

    temps++;

    flecheSeconde.style.transform = 'rotate(' + (temps * 6) + 'deg)';
    flecheMinute.style.transform = 'rotate(' + Math.round(temps / 10) + 'deg)';
    flecheHeure.style.transform = 'rotate(' + Math.round(temps / 120) + 'deg)';


    setTimeout(rotate, 1000);

}

rotate();

document.getElementById('Submit').addEventListener("click",

    function () {

    var SubmitHeure = document.getElementById('AlarmeHeure').value;
    var SubmitMinute = document.getElementById('AlarmeMinute').value;


});