var checkpaper = 0, checkmechine = false, tabulation = 0, stairs = 0;
function clickpic(e) {
    var x = event.offsetX;
    var y = event.offsetY;
    document.getElementById("demo").innerHTML = x + " " + y;
    console.log(x,y);
    if (e.target.getAttribute("id")=="secondfloor") {
        if (((x > 175 && x < 206) && (y > 130 && y < 150)) || ((x > 110 && x < 175) && (y > 113 && y < 290))) {
            e.target.setAttribute("class", "road");
            e.target.setAttribute("id", "road");
            setTimeout(classroom, 1000);
            ////window.location.href='machine.html'
            tabulation = true;
        }
        else if((x > 195 && x < 245) && (y > 224 && y < 286)){
            e.target.setAttribute("class", "Fire_Extinguisher");
            e.target.setAttribute("id", "Fire_Extinguisher");
        }
        else if((x > 330 && x <550) && (y > 128 && y < 280)){
            e.target.setAttribute("class", "elevator");
            e.target.setAttribute("id", "elevator");
        }
    }
    else if (e.target.getAttribute("id")=="Fire_Extinguisher"|| e.target.getAttribute("id")=="elevator"){
        e.target.setAttribute("class", "secondfloor");
            e.target.setAttribute("id", "secondfloor");
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