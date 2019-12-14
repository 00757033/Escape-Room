function clickpic(e) {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x, y);
    if (e.target.getAttribute("id") == "firstfloor") {
        if ((x > 450 && x < 570) && (y > 210 && y < 375)) {
            e.target.setAttribute("id", "coin");
            e.target.setAttribute("class", "coin");
            ////window.location.href='machine.html'
        }
        else if ((x > 3 && x <50) && (y > 20 && y < 325)) {
            e.target.setAttribute("class", "list");
            e.target.setAttribute("id", "list");
            ////window.location.href='machine.html'
        }
        else if ((x > 140 && x < 195) && (y > 300 && y < 365)) {
            e.target.setAttribute("class", "trash_can");
            e.target.setAttribute("id", "trash_can");
            ////window.location.href='machine.html'
        }
        else if ((x > 280 && x < 420) && (y > 435 && y < 490)) {
            e.target.setAttribute("class", "information");
            e.target.setAttribute("id", "information");
        }
        else if ((x > 680 && x < 750) && (y > 170 && y < 455)) {
            e.target.setAttribute("class", "stair1");
            e.target.setAttribute("id", "stair1");
        }
    }
    else if (e.target.getAttribute("id") == "stair1") {
        e.target.setAttribute("class", "stair2");
        e.target.setAttribute("id", "stair2");
    }
    else if (e.target.getAttribute("id") == "stair2"){
        window.location.href='second.html';
    }
    else {
        e.target.setAttribute("class", "firstfloor");
        e.target.setAttribute("id", "firstfloor");
    }
}