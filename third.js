function clickpic(e){
    var x=e.offsetX;
    var y=e.offsetY;
    console.log(x,y);
    if(e.target.getAttribute("id")=="thirdfloor"){
        if((x>0 && x<50) && (y>185 && y<450)){
            e.target.setAttribute("class", "stair3to4_1");
            e.target.setAttribute("id", "stair3to4_1");
        }
        else if((x>75 && x<300)&& (y>180 && y<420)){
            e.target.setAttribute("class", "left");
            e.target.setAttribute("id", "left");
        }
        else if((x>350 && x<630)&& (y>180 && y<420)){
            e.target.setAttribute("class", "right");
            e.target.setAttribute("id", "right");
        }
    }
    else if(e.target.getAttribute("id")=="stair3to4_1"){
        e.target.setAttribute("class", "stair3to4_2");
        e.target.setAttribute("id", "stair3to4_2");
    }
    else if(e.target.getAttribute("id")=="stair3to4_2"){
        window.location.href='fourth.html';
    }
    else if(e.target.getAttribute("id")=="right_road"){
        e.target.setAttribute("class", "thirdfloor");
        e.target.setAttribute("id", "thirdfloor");
    }
    else if(e.target.getAttribute("id")=="left"){
        if((x>5 && x<78) && (y>105 && y<450)){
            e.target.setAttribute("class", "stair3to4_1");
            e.target.setAttribute("id", "stair3to4_1");
        }
        else{
        e.target.setAttribute("class", "left_road");
        e.target.setAttribute("id", "left_road");
    }
    }
    else if(e.target.getAttribute("id")=="left_road"){
        e.target.setAttribute("class", "rest_area");
        e.target.setAttribute("id", "rest_area");
    }
    else if(e.target.getAttribute("id")=="rest_area"){
        if((x>180 && x<268) && (y>220 && y<280)){
            e.target.setAttribute("class", "rest_area_ac");
            e.target.setAttribute("id", "rest_area_ac");
        }
        else if((x>605 && x<740) && (y>255 && y<420)){
            e.target.setAttribute("class", "rest_area_chair");
            e.target.setAttribute("id", "rest_area_chair");
        }
        else if((x>5 && x<110) && (y>145 && y<465)){
            e.target.setAttribute("class", "coin_machine");
            e.target.setAttribute("id", "coin_machine");
        }
    }
    else if(e.target.getAttribute("id")=="rest_area_ac" 
        || e.target.getAttribute("id")=="rest_area_chair"){
        e.target.setAttribute("class", "rest_area");
        e.target.setAttribute("id", "rest_area");
    }
    else if(e.target.getAttribute("id")=="right"){
        e.target.setAttribute("class", "right_road");
        e.target.setAttribute("id", "right_road");
    }
}