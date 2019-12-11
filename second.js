var checkpaper = 0, checkmechine = false, tabulation = 0, stairs = 0;
function clickpic(e) {
    var x = event.offsetX;
    var y = event.offsetY;
    document.getElementById("demo").innerHTML = x + " " + y;
    console.log(x,y);
    if (!checkmechine && !tabulation && !stairs) {
        if (((x > 175 && x < 206) && (y > 130 && y < 150)) || ((x > 110 && x < 175) && (y > 113 && y < 290))) {
            e.target.setAttribute("class", "road");
            e.target.setAttribute("id", "road");
            setTimeout(classroom, 1000);
            ////window.location.href='machine.html'
            tabulation = true;
        }
        /*else if ((x > 600 && x < 680) && (y > 134 && y < 312)) {
            e.target.setAttribute("class", "stair1");
            e.target.setAttribute("id", "stair1");
        }
        else if (e.target.getAttribute("id") == "stair1") {
            e.target.setAttribute("class", "stair2");
            e.target.setAttribute("id", "stair2");
            stairs = true;
        }*/
    }
    /*else {
        e.target.setAttribute("class", "secondfloor");
        checkmechine = false;
        tabulation = false;
        stairs = false;
    }*/

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
            document.getElementById("road").setAttribute("id", "secondfloor");
            document.getElementById("secondfloor").setAttribute("class", "secondfloor");
            
        }
}