function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="secondfloor"){
        if((x>10 && x<115 )&&(y>135 && y<460)){
            var correct = 0;
                if(localStorage.getItem("mac_code")==1){
                    e.target.setAttribute("class", "stair2to3_1");
                    e.target.setAttribute("id", "stair2to3_1");
                    $("#topdiv").text("再次點擊前往三樓");
                    localStorage.removeItem("mac_code");
                }
            else
                $("#topdiv").text("需要先解完謎才能去三樓喔");
        }
        else if((x>590 && x<800 )&&(y>55 && y<520)){
            e.target.setAttribute("class", "secondfloor_1");
            e.target.setAttribute("id", "secondfloor_1");
            $("#topdiv").text("點擊四周");
        }
    }
   else if (e.target.getAttribute("id")=="secondfloor_1") {
        if (((x > 90 && x < 140) && (y > 200 && y < 235))
         || ((x > 0 && x <= 95) && (y >= 190 && y < 450))) {
            e.target.setAttribute("class", "road");
            e.target.setAttribute("id", "road");
            $("#topdiv").text("輸入教室號碼");
            setTimeout(classroom, 500);
        }
        else if((x >= 130 && x < 205) && (y > 345 && y <=440)){
            e.target.setAttribute("class", "Fire_Extinguisher");
            e.target.setAttribute("id", "Fire_Extinguisher");
            $("#topdiv").text("再次點擊獲得滅火器一個");
        }
        else if((x > 355 && x <670) && (y > 200 && y < 425)){
            e.target.setAttribute("class", "elevator");
            e.target.setAttribute("id", "elevator");
            $("#topdiv").text("無法搭乘電梯喔");
        }
    }
    else if (e.target.getAttribute("id")=="Fire_Extinguisher"
            || e.target.getAttribute("id")=="elevator"){
        e.target.setAttribute("class", "secondfloor_1");
        e.target.setAttribute("id", "secondfloor_1");
         $("#topdiv").text("回到二樓大廳");
         tobackpack("./backpack/fire_extinguisher.jpg");
    }
    else if (e.target.getAttribute("id")=="stair2to3_1"){
        e.target.setAttribute("class", "stair2to3_2");
        e.target.setAttribute("id", "stair2to3_2");
        $("#topdiv").text("再次點擊前往三樓");
    }
    else if (e.target.getAttribute("id")=="class201"||
        e.target.getAttribute("id")=="class203"||
        e.target.getAttribute("id")=="class210A"|| 
        e.target.getAttribute("id")=="class210B"||
        e.target.getAttribute("id")=="class212"){
        e.target.setAttribute("class", "secondfloor");
        e.target.setAttribute("id", "secondfloor");
        window.alert("無法進入\n 點擊確認 回到二樓大廳");
        $("#topdiv").text("回到二樓大廳");
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
        window.location.href='mac.html'
    } 
    else if(classr=="210A" || classr=="210"){
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
