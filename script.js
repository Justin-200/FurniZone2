function start(){

    document.getElementById("loader").style.display="none";

    document.getElementById("con").style.display="block";

    

}

setTimeout(start,5000);

function hide(){

    document.getElementById("full-page").style.display="block";

    document.getElementById("con").style.display="none";

    document.getElementById("body").style.position="relative";

}

setTimeout(hide,24500);

function open_nav(){

    document.getElementById("nav").style.display="block";

    document.getElementById("slider").style.filter="brightness(100%)"

    

    

}

function close(){

    document.getElementById("nav").style.display="none";

}
