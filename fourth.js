function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="fourthfloor"){
        if((x>0 && x<90) &&(y>120 && y<400)){
            e.target.setAttribute("class", "stair");
            e.target.setAttribute("id", "stair");
        }
        else if((x>110 && x<340) &&(y>120 && y<355)
            || (x>95 && x<115) &&(y>160 && y<185)){
            e.target.setAttribute("class", "left");
            e.target.setAttribute("id", "left");
        }
        else if((x>345 && x<625) &&(y>125 && y<355)
            || (x>630 && x<640) &&(y>150 && y<175)){
            e.target.setAttribute("class", "right");
            e.target.setAttribute("id", "right");
        }
    }
    else if (e.target.getAttribute("id")=="stair"){
        if((x>0 && x<385) &&(y>120 && y<520)){
            e.target.setAttribute("class", "stair4to3_1");
            e.target.setAttribute("id", "stair4to3_1");
        }
        else{
            e.target.setAttribute("class", "stair4to5_1");
            e.target.setAttribute("id", "stair4to5_1");
        }
    }
    else if (e.target.getAttribute("id")=="stair4to3_1"){
        if((x>590 && x<750) &&(y>0 && y<560)){
            e.target.setAttribute("class", "stair");
            e.target.setAttribute("id", "stair");
        }
        else{
            e.target.setAttribute("class", "stair4to3_2");
            e.target.setAttribute("id", "stair4to3_2");
        }
    }
    else if (e.target.getAttribute("id")=="stair4to3_2"){
        window.location.href='third.html';
    }
    else if (e.target.getAttribute("id")=="stair4to5_1"){
       if((x>0 && x<170) &&(y>156 && y<560)){
            e.target.setAttribute("class", "stair");
            e.target.setAttribute("id", "stair");
        }
        else{
            e.target.setAttribute("class", "stair4to5_2");
            e.target.setAttribute("id", "stair4to5_2");
        }
    }
    else if (e.target.getAttribute("id")=="stair4to5_2"){
        window.location.href='fifth.html';
    }
    else if (e.target.getAttribute("id")=="left"){
        if((x>0 && x<70) &&(y>85 && y<565) &&
            !((x>55 && x<175) && (y>130 && y<210))){
            e.target.setAttribute("class", "stair");
            e.target.setAttribute("id", "stair");
        }
        else{
        e.target.setAttribute("class", "left_road");
        e.target.setAttribute("id", "left_road");
        }
    }
    else if (e.target.getAttribute("id")=="left_road"){
        if((x>175 && x<300) &&(y>340 && y<490)){
            e.target.setAttribute("class", "trash_can");
            e.target.setAttribute("id", "trash_can");
        }
        else{
        e.target.setAttribute("class", "fourthfloor");
        e.target.setAttribute("id", "fourthfloor");
    }
    }else if (e.target.getAttribute("id")=="trash_can"){
        e.target.setAttribute("class", "left_road");
        e.target.setAttribute("id", "left_road");
    }
    else if (e.target.getAttribute("id")=="right"){
        e.target.setAttribute("class", "right_road");
        e.target.setAttribute("id", "right_road");
    }
    else if (e.target.getAttribute("id")=="right_road"){
        if((x>150 && x<310) &&(y>260 && y<505)){
            e.target.setAttribute("class", "table");
            e.target.setAttribute("id", "table");
        }
        else{
        e.target.setAttribute("class", "fourthfloor");
        e.target.setAttribute("id", "fourthfloor");
        }
    }
    else if (e.target.getAttribute("id")=="table"){
        e.target.setAttribute("class", "right_road");
        e.target.setAttribute("id", "right_road");
    }
    /*else if(e.target.getAttribute("id")=="trash_can" 
    || e.target.getAttribute("id")=="rest_area_table"
    || e.target.getAttribute("id")=="rest_area_chair"){
    e.target.setAttribute("class", "rest_area");
    e.target.setAttribute("id", "rest_area");
    }*/
}