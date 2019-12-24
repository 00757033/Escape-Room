function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="fifthfloor"){
        if((x>110 && x<220)&& (y>120 && y<340)){
            e.target.setAttribute("class", "left");
            e.target.setAttribute("id", "left");
            $("#topdiv").html("電機系館<br>試著點擊四周");
        }
        else if((x>590 && x<670)&& (y>125 && y<400)){
            e.target.setAttribute("class", "right");
            e.target.setAttribute("id", "right");
            $("#topdiv").text("試著點擊四周");
        }
        else if((x>0 && x<70)&& (y>150 && y<450)){
            e.target.setAttribute("class", "stair5to4_1");
            e.target.setAttribute("id", "stair5to4_1");
            $("#topdiv").text("往四樓樓梯間");
        }
    }
    else if(e.target.getAttribute("id")=="left"){
        if((x>0 && x<80)&& (y>55 && y<595)){
            e.target.setAttribute("class", "stair5to4_1");
            e.target.setAttribute("id", "stair5to4_1");
            $("#topdiv").text("往四樓樓梯間");
        }
        else if((x>380 && x<425)&& (y>220 && y<265)){
            e.target.setAttribute("class", "left_road");
            e.target.setAttribute("id", "left_road");
            $("#topdiv").text("試著點擊四周");
         }
    }
    else if(e.target.getAttribute("id")=="left_road"){
        if((x>335 && x<435)&& (y>200 && y<310)){
        window.alert("走道盡頭摟!點擊 確定 可回到五樓大廳");
        $("#topdiv").text("五樓大廳");
        e.target.setAttribute("id", "fifthfloor");
        e.target.setAttribute("class", "fifthfloor");
        }
    }
    else if(e.target.getAttribute("id")=="stair5to4_1"){
        e.target.setAttribute("class", "stair5to4_2");
        e.target.setAttribute("id", "stair5to4_2");
        $("#topdiv").text("往四樓樓梯間");
    }
    else if(e.target.getAttribute("id")=="stair5to4_2"){
        window.location.href='fourth.html';
    }
    else if(e.target.getAttribute("id")=="right"){
         if((x>365 && x<430)&& (y>209 && y<280)){
        $("#topdiv").text("怎麼有人坐在這 試著點擊他");
        e.target.setAttribute("class", "right_road_person");
        e.target.setAttribute("id", "right_road_person");
         }
    }
    else if(e.target.getAttribute("id")=="right_road_person"){
        if((x>105 && x<445)&& (y>315 && y<495)){
            window.location.href='dialog.html';
        }
    }
}