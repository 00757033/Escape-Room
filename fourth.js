function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="fourthfloor"){
        if((x>0 && x<115) &&(y>120 && y<440)){
            e.target.setAttribute("class", "stair");
            e.target.setAttribute("id", "stair");
            $("#topdiv").html("四樓樓梯<br>可選擇往上,或往下,或點擊其他位置,回到四樓");
        }
        else if((x>115 && x<215) &&(y>90 && y<375)
            || (x>100 && x<125) &&(y>=170 && y<200)){
                $("#topdiv").html("電機系館<br>試著點擊四周");
            e.target.setAttribute("class", "left");
            e.target.setAttribute("id", "left");
        }
        else if((x>=610 && x<=670) &&(y>=90 && y<375)
            || (x>630 && x<640) &&(y>150 && y<175)){
                $("#topdiv").html("資工系館<br>試著點擊四周");
            e.target.setAttribute("class", "right");
            e.target.setAttribute("id", "right");
        }
        /*else if((x>=255 && x<=315) &&(y>175 && y<330){
            //左邊教室
        }*/
        /*else if((x>365 && x<440) &&(y>175 && y<330){
            //左邊教室
        }*/
        
    }
    else if (e.target.getAttribute("id")=="stair"){
        if((x>0 && x<345) &&(y>145 && y<550)){
            e.target.setAttribute("class", "stair4to3_1");
            e.target.setAttribute("id", "stair4to3_1");
            $("#topdiv").html("你正在往下走 可選擇往上 或往下 或點擊其他位置回到四樓");
        }
        else if((x>=55 && x<500) &&(y>0 && y<=175)
               ||(x>340 && x<=485) &&(y>0 && y<465)
               ||(x>445 && x<=720) &&(y>0 && y<465) ) {
            $("#topdiv").text("四樓往五樓的樓梯");
            e.target.setAttribute("class", "stair4to5_1");
            e.target.setAttribute("id", "stair4to5_1");
        }
        else{
            $("#topdiv").text("回到四樓");
            e.target.setAttribute("class", "fourthfloor");
            e.target.setAttribute("id", "fourthfloor");
        }
    }
    else if (e.target.getAttribute("id")=="stair4to3_1"){
        if((x>=635 && x<=800) &&(y>0 && y<585)){
            $("#topdiv").text("回到四樓樓梯");
            e.target.setAttribute("class", "stair");
            e.target.setAttribute("id", "stair");
        }
        else if((x>265 && x<=665) &&(y>75 && y<=445)
                || (x>0 && x<710) &&(y>270 && y<590)){
            $("#topdiv").text("再次點擊前往三樓 可選擇往上");
            e.target.setAttribute("class", "stair4to3_2");
            e.target.setAttribute("id", "stair4to3_2");
        }
    }
    else if (e.target.getAttribute("id")=="stair4to3_2"){
        if((x>420 && x<=800) &&(y>0 && y<370)){
            e.target.setAttribute("class", "stair3to4_2");
            e.target.setAttribute("id", "stair3to4_2");
            $("#topdiv").text("三樓往四樓樓梯");
        }
        else
            window.location.href='third.html';
    }
    else if (e.target.getAttribute("id")=="stair3to4_2"){
        if((x>215 && x<685) &&(y>0 && y<590)){
            e.target.setAttribute("class", "fourthfloor");
            e.target.setAttribute("id", "fourthfloor");
            $("#topdiv").text("回到四樓");
        }
        else if((x>0 && x<230) &&(y>210 && y<=590)){
            e.target.setAttribute("class", "stair4to3_2");
            e.target.setAttribute("id", "stair4to3_2");
            $("#topdiv").text("往三樓樓梯");
        }
    }
    else if (e.target.getAttribute("id")=="stair4to5_1"){
       if((x>0 && x<165) &&(y>=170 && y<590)){
            e.target.setAttribute("class", "stair4to3_1");
            e.target.setAttribute("id", "stair4to3_1");
            $("#topdiv").text("四樓往三樓樓梯");
        }
        else if((x>105 && x<700) &&(y>5 && y<590)){
            e.target.setAttribute("class", "stair4to5_2");
            e.target.setAttribute("id", "stair4to5_2");
            $("#topdiv").text("四樓往五樓樓梯");
        }
    }
    else if (e.target.getAttribute("id")=="stair4to5_2"){
        if((x>0 && x<215) &&(y>240 && y<300)){
            e.target.setAttribute("class", "stair5to4_2");
            e.target.setAttribute("id", "stair5to4_2");
            $("#topdiv").text("五樓往四樓樓梯");
        }
        else if((x>240 && x<715) &&(y>5 && y<=590))
        window.location.href='fifth.html';
    }
    else if (e.target.getAttribute("id")=="left"){
        if((x>0 && x<70) &&(y>105 && y<600)){
            $("#topdiv").text("樓梯");
            e.target.setAttribute("class", "stair");
            e.target.setAttribute("id", "stair");
        }
        else if((x>330 && x<=430) &&(y>220 && y<=430)){
            $("#topdiv").html("電機系館<br>試著點擊四周會有意外驚喜");
            e.target.setAttribute("class", "left_road");
            e.target.setAttribute("id", "left_road");
        }
    }
    else if (e.target.getAttribute("id")=="left_road"){
        if((x>=185 && x<=300) &&(y>395 && y<=510)){
            $("#topdiv").html("垃圾桶裡沒有東西<br>再次點擊回到電機系館");
            e.target.setAttribute("class", "trash_can");
            e.target.setAttribute("id", "trash_can");
        }
        else if((x>320 && x<415) &&(y>205 && y<310)){
            $("#topdiv").text("四樓大廳");
            window.alert("按下確認回到到四樓大廳");
        e.target.setAttribute("class", "fourthfloor");
        e.target.setAttribute("id", "fourthfloor");
        }
    }
    else if (e.target.getAttribute("id")=="trash_can"){
         $("#topdiv").html("沒找到任何東西");
        e.target.setAttribute("class", "left_road");
        e.target.setAttribute("id", "left_road");
    }
    else if (e.target.getAttribute("id")=="right"){
        if((x>305 && x<415) &&(y>205 && y<325)){
        e.target.setAttribute("class", "right_road");
        e.target.setAttribute("id", "right_road");
        $("#topdiv").text("尋找錢幣");
        }
    }
    else if (e.target.getAttribute("id")=="right_road"){
        if((x>=155 && x<340) &&(y>270 && y<510)){
            $("#topdiv").text("點擊錢幣");
            e.target.setAttribute("class", "table_with_money");
            e.target.setAttribute("id", "table_with_money");
        }
        else if((x>320 && x<420) &&(y>200 && y<310)){
            $("#topdiv").text("四樓大廳");
            window.alert("走道盡頭摟!\n按下確認到四樓大廳");
            e.target.setAttribute("class", "fourthfloor");
            e.target.setAttribute("id", "fourthfloor");
        }
    }
    else if (e.target.getAttribute("id")=="table_with_money"){
        $("#topdiv").html("恭喜撿到二十元<br>點擊任意處回到四樓大廳");
        e.target.setAttribute("class", "table");
        e.target.setAttribute("id", "table");
        tobackpack("./fourth/table_with_money.jpg");
    }
    else if (e.target.getAttribute("id")=="table"){
        $("#topdiv").text("四樓大廳");
        e.target.setAttribute("class", "fourthfloor");
         e.target.setAttribute("id", "fourthfloor");
    }
}