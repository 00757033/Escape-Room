function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="fifthfloor"){
        if((x>100 && x<330)&& (y>100 && y<380)){
            e.target.setAttribute("class", "left");
            e.target.setAttribute("id", "left");
        }
        else if((x>375 && x<630)&& (y>110 && y<380)){
            e.target.setAttribute("class", "right");
            e.target.setAttribute("id", "right");
        }
        else if((x>0 && x<95)&& (y>125 && y<440)){
            e.target.setAttribute("class", "stair5to4_1");
            e.target.setAttribute("id", "stair5to4_1");
        }
    }
    else if(e.target.getAttribute("id")=="left"){
        if((x>0 && x<200)&& (y>20 && y<560)){
            e.target.setAttribute("class", "stair5to4_1");
            e.target.setAttribute("id", "stair5to4_1");
        }
        else{
            e.target.setAttribute("class", "left_road");
            e.target.setAttribute("id", "left_road");
         }
    }
    else if(e.target.getAttribute("id")=="left_road"){
        e.target.setAttribute("class", "fifthfloor");
        e.target.setAttribute("id", "fifthfloor");
    }
    else if(e.target.getAttribute("id")=="stair5to4_1"){
        e.target.setAttribute("class", "stair5to4_2");
        e.target.setAttribute("id", "stair5to4_2");
    }
    else if(e.target.getAttribute("id")=="stair5to4_2"){
        window.location.href='fourth.html';
    }
    else if(e.target.getAttribute("id")=="right"){
        e.target.setAttribute("class", "right_road_person");
        e.target.setAttribute("id", "right_road_person");
    }
    else if(e.target.getAttribute("id")=="right_road_person"){
        if((x>110 && x<400)&& (y>300 && y<490)){
            window.location.href='dialog.html';
        }
        else{
            e.target.setAttribute("class", "fifthfloor");
            e.target.setAttribute("id", "fifthfloor");
         }
    }
}