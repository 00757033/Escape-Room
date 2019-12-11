var idcount = 0;
var checkpaper = 0, checkmechine = false,tabulation=0,stairs=0;
/*function createtable() {
    var tbody = document.getElementById("tbody");
    console.log(tbody)
    for (let i = 0; i < 36; i++) {
        var row = document.createElement("tr");
        for (let j = 0; j < 27; j++) {
            var col = document.createElement("td");
            col.setAttribute("id", "Tic-" + idcount);
            idcount++;
            row.appendChild(col);
        }
        tbody.appendChild(row);
    }
    for (var i = 0; i < 9; i++) {
        document.getElementById("Tic-" + i).innerHTML = ' ';
    }
}*/
function clickpaper() {
    document.getElementById("paper").style.display = "block";
    var pap = document.getElementById("paper");
    if (checkpaper % 2 == 1) {
        pap.setAttribute("src", "00.png");
        pap.setAttribute("class", "information");
    }
    else {
        pap.setAttribute("src", "紙.png");
        pap.setAttribute("class", "paper");
    }
    checkpaper++;
}
function clickpic(e) {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(checkmechine,tabulation,stairs)
    if (!checkmechine  &&!tabulation && !stairs  ){
    if ((x > 450 && x < 510) && (y > 158 && y < 290)) {
        document.getElementById("paper").style.display = "none";
            e.target.setAttribute("class", "coin");
            ////window.location.href='machine.html'
        checkmechine=true;
    }
     else if ((x > 115 && x < 160) && (y > 10 && y < 250)){
        document.getElementById("paper").style.display = "none";
            e.target.setAttribute("class", "list");
            e.target.setAttribute("id", "list");
            ////window.location.href='machine.html'
            tabulation=true;
    }
    else if ((x > 600 && x < 680) && (y > 134 && y < 312)){
        document.getElementById("paper").style.display = "none";
        e.target.setAttribute("class", "stair1");
        e.target.setAttribute("id", "stair1");
    }
    else if(e.target.getAttribute("id")=="stair1"){
        document.getElementById("paper").style.display = "none";
        e.target.setAttribute("class", "stair2");
        e.target.setAttribute("id", "stair2");
        stairs=true;
    }
}
    else{
        document.getElementById("paper").style.display = "block";
        e.target.setAttribute("class", "firstfloor");
        checkmechine=false;
        tabulation=false;
        stairs=false;
    }
    document.getElementById("demo").innerHTML = x + " " + y;
}
function start() {
    clickpaper();
}
document.getElementById("paper").addEventListener("click", clickpaper, false);
window.addEventListener("load", start, false);