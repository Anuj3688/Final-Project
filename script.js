// functions for contact and about us hover and inclick
function aboutvis() {
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
  window.open(
    "C:Usersanuj1OneDriveDesktopWEWA2ProjectsFinal Projectaboutus.html"
  );
}

function ocontact() {
  window.open(
    "C:Usersanuj1OneDriveDesktopWEWA2ProjectsFinal Projectcontact.html"
  );
}


var sqls = 0;


// to open the full tab of SQL
function openfull(x , score) {
  var idans = "SQL" + x;
  var h = document.getElementById(idans).style.height;    
  if (document.getElementById(idans).style.height > "86px") {
    document.getElementById(idans).style.height = "86px";

  } else {

    if(document.getElementById(idans).querySelector(".visited").innerText == 0){
        sqls += score;
        document.getElementById(idans).querySelector(".visited").innerText = 1;
        document.getElementById(idans).querySelector(".subheadsco").innerHTML = "Score Boost " + score+"/"+score;
        document.getElementById("sqlscore").innerText = sqls+"/200"
    }

    document.getElementById(idans).style.height = "unset";
  }
}
// if(document.getElementById(idans).getElementsByClassName("visited").innerText == 0){
//     sqls += score;
//     document.getElementById(idans).getElementsByClassName("visited").innerText = 1;
//     document.getElementById("sqlscore").innerText = sqls+"/200"
// }