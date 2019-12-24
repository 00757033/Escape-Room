function clickpic(e){
    var x=e.offsetX;
    var y=e.offsetY;
    console.log(x,y);
    if(e.target.getAttribute("id")=="thirdfloor"){
        if((x>0 && x<50) && (y>185 && y<450)){
            e.target.setAttribute("class", "stair3to4_1");
            e.target.setAttribute("id", "stair3to4_1");
            $("#topdiv").text("再次點擊前往四樓");
        }
        else if((x>75 && x<300)&& (y>180 && y<420)){
            e.target.setAttribute("class", "left");
            e.target.setAttribute("id", "left");
            $("#topdiv").text("左邊道路");
        }
        else if((x>350 && x<630)&& (y>180 && y<420)){
            e.target.setAttribute("class", "right");
            e.target.setAttribute("id", "right");
            $("#topdiv").text("右邊道路");
        }
    }
    else if(e.target.getAttribute("id")=="stair3to4_1"){
        e.target.setAttribute("class", "stair3to4_2");
        e.target.setAttribute("id", "stair3to4_2");
        $("#topdiv").text("再次點擊前往四樓");
    }
    else if(e.target.getAttribute("id")=="stair3to4_2"){
        window.location.href='fourth.html';
    }
    else if(e.target.getAttribute("id")=="right_road"){
        if((x>322 && x<438) && (y>195 && y<305))
            window.alert("走道盡頭摟!\n按下確認到三樓大廳");
            e.target.setAttribute("class", "thirdfloor");
            e.target.setAttribute("id", "thirdfloor");
            $("#topdiv").text("三樓大廳");
    }
    else if(e.target.getAttribute("id")=="left"){
        if((x>5 && x<78) && (y>105 && y<450)){
            e.target.setAttribute("class", "stair3to4_1");
            e.target.setAttribute("id", "stair3to4_1");
            $("#topdiv").text("點擊四周");
        }
        else if((x>410 && x<=470) && (y>225 && y<290)){
        e.target.setAttribute("class", "left_road");
        e.target.setAttribute("id", "left_road");
        $("#topdiv").html("左邊道路<br> 試著點擊四周");
        }
    }
    else if(e.target.getAttribute("id")=="left_road"){
        if((x>285 && x<=435) && (y>145 && y<300)){
        $("#topdiv").text("三樓休息區");
        e.target.setAttribute("class", "rest_area");
        e.target.setAttribute("id", "rest_area");
        }
    }
    else if(e.target.getAttribute("id")=="rest_area"){
        if((x>195 && x<295) && (y>250 && y<=310)){
            e.target.setAttribute("class", "rest_area_ac");
            e.target.setAttribute("id", "rest_area_ac");
            $("#topdiv").text("這裡沒有東西");
        }
        else if((x>=645 && x<800) && (y>=290 && y<=440)){
            e.target.setAttribute("class", "rest_area_chair");
            e.target.setAttribute("id", "rest_area_chair");
            $("#topdiv").text("這裡沒有東西");
        }
        else if((x>0 && x<135) && (y>120 && y<=445)){
            $("#topdiv").text("三樓販賣機");
            e.target.setAttribute("class", "coin_machine");
            e.target.setAttribute("id", "coin_machine");
        }
    }
    else if(e.target.getAttribute("id")=="rest_area_ac" 
        || e.target.getAttribute("id")=="rest_area_chair"){
            $("#topdiv").text("三樓休息區");
        e.target.setAttribute("class", "rest_area");
        e.target.setAttribute("id", "rest_area");
    }
    else if(e.target.getAttribute("id")=="right"){
        if((x>335 && x<440) && (y > 200 && y<300))
        {
            e.target.setAttribute("class", "right_road");
            e.target.setAttribute("id", "right_road");
        }
    }
}