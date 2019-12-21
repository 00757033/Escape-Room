function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="secondfloor"){
        if((x>6 && x<105 )&&(y>125 && y<420)){
            e.target.setAttribute("class", "stair2to3_1");
            e.target.setAttribute("id", "stair2to3_1");
        }
        else if((x>485 && x<750 )&&(y>100 && y<400)){
            e.target.setAttribute("class", "secondfloor_1");
            e.target.setAttribute("id", "secondfloor_1");
        }
    }
    else if (e.target.getAttribute("id")=="secondfloor_1") {
        if (((x > 85 && x < 135) && (y > 185 && y < 220)) || ((x > 1 && x < 95) && (y > 165 && y < 420))) {
            e.target.setAttribute("class", "road");
            e.target.setAttribute("id", "road");
            setTimeout(classroom, 1000);
            ////window.location.href='machine.html'
        }
        else if((x > 110 && x < 185) && (y > 320 && y < 415)){
            e.target.setAttribute("class", "Fire_Extinguisher");
            e.target.setAttribute("id", "Fire_Extinguisher");
        }
        else if((x > 300 && x <625) && (y > 180 && y < 400)){
            e.target.setAttribute("class", "elevator");
            e.target.setAttribute("id", "elevator");
        }
    }
    else if (e.target.getAttribute("id")=="Fire_Extinguisher"|| e.target.getAttribute("id")=="elevator"){
        e.target.setAttribute("class", "secondfloor_1");
        e.target.setAttribute("id", "secondfloor_1");
    }
    else if (e.target.getAttribute("id")=="stair2to3_1"){
        e.target.setAttribute("class", "stair2to3_2");
        e.target.setAttribute("id", "stair2to3_2");
    }
    else if (e.target.getAttribute("id")=="class201"||
    e.target.getAttribute("id")=="class203"||
    e.target.getAttribute("id")=="class210A"|| 
    e.target.getAttribute("id")=="class210B"||
    e.target.getAttribute("id")=="class212"){
        e.target.setAttribute("class", "secondfloor");
        e.target.setAttribute("id", "secondfloor");
    }
    else if (e.target.getAttribute("id") == "stair2to3_2"){
        window.location.href='third.html';
    }
}
function classroom() {
        var classr = window.prompt("輸入教室號碼:"); 
        if(classr=="201"){
            document.getElementById("road").setAttribute("id", "class201");
            document.getElementById("class201").setAttribute("class", "class201");
        } 
        else if(classr=="203"){
            document.getElementById("road").setAttribute("id", "class203");
            document.getElementById("class203").setAttribute("class", "class203");         
        } 
        else if(classr=="205"){
            document.getElementById("road").setAttribute("id", "class205");
            document.getElementById("class205").setAttribute("class", "class205");
         
        } 
        else if(classr=="210A"){
            document.getElementById("road").setAttribute("id", "class210A");
            document.getElementById("class210A").setAttribute("class", "class210A");
         
        } 
        else if(classr=="210B"){
            document.getElementById("road").setAttribute("id", "class210B");
            document.getElementById("class210B").setAttribute("class", "class210B");
        } 
        else if(classr=="212"){
            document.getElementById("road").setAttribute("id", "class212");
            document.getElementById("class212").setAttribute("class", "class212");
        } 
        else{
            alert("輸入錯誤");
            document.getElementById("road").setAttribute("id", "secondfloor");
            document.getElementById("secondfloor").setAttribute("class", "secondfloor");
        }
}