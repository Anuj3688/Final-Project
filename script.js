function aboutvis(){
    document.getElementById("abfunc").style = "display:flex";
    
}

function aboutvisd() {
    document.getElementById("abfunc").style = "display:none;";
}

function contactvis() {
    document.getElementById("cofunc").style = "display:block";
}
function contactvisd() {
    document.getElementById("cofunc").style = "display:none";
}


function oabout() {
    window.open("C:\Users\anuj1\OneDrive\Desktop\WEWA2\Projects\Final Project\aboutus.html");
}

function ocontact() {
    window.open("C:\Users\anuj1\OneDrive\Desktop\WEWA2\Projects\Final Project\contact.html");
}

function openfull(x) {
    var idans  = "SQL"+x;
    var h = document.getElementById(idans).style.height;
    document.getElementById(idans).style = "height:unset";
}