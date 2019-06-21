// berekening van de klok

function clock () {
    var today = new Date(); 
    var hour  = today.getHours();
    var formatDate = today.getHours() + ":" + leadingZero(today.getMinutes()) + ":" + '<span id="seconden">' + leadingZero(today.getSeconds()) + '</span>';
    
    if (hour > 9 && hour < 18) {
        //tussen 9u en 18u komt er een zon
        document.getElementById('zonnemaan-img').src = 'sun.png'; 
    } else {
        //overige tijden een man
        document.getElementById('zonnemaan-img').src = 'moon.png';
    }
    
    document.getElementById('tijd').innerHTML = formatDate; 
}

//Toevoegen van een 0 voor de secondes

function leadingZero (number) {
    
    if (number < 10) {
        return '0'+number;
    } else {
        return number;
    }
};


// berekening van de datum

var today = new Date();

var maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

var formatDate = today.getDate() + " " + maanden[today.getMonth()] + " " + today.getFullYear();

document.getElementById('datum').innerHTML = formatDate;


//animatie tijd en activering

var timeline = new TimelineMax({repeat : -1});

function updateStopwatch(){
    clock();
}

window.onload = function(){
    
    timeline.call(updateStopwatch)
    .from('#tijd', 0.3, { top: -100, ease: Circ.easeOut })
    .to('#tijd', 0.7, { opacity: 0});
}


