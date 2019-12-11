function clickpic(e) {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x, y);
    if (e.target.getAttribute("id") == "firstfloor") {
        if ((x > 450 && x < 510) && (y > 158 && y < 290)) {
            e.target.setAttribute("id", "coin");
            e.target.setAttribute("class", "coin");
            ////window.location.href='machine.html'
        }
        else if ((x > 115 && x < 160) && (y > 10 && y < 250)) {
            e.target.setAttribute("class", "list");
            e.target.setAttribute("id", "list");
            ////window.location.href='machine.html'
        }
        else if ((x > 210 && x < 260) && (y > 208 && y < 260)) {
            e.target.setAttribute("class", "trash_can");
            e.target.setAttribute("id", "trash_can");
            ////window.location.href='machine.html'
        }
        else if ((x > 320 && x < 410) && (y > 305 && y < 338)) {
            e.target.setAttribute("class", "information");
            e.target.setAttribute("id", "information");
        }
        else if ((x > 546 && x < 575) && (y > 170 && y < 200)) {
            e.target.setAttribute("class", "lightcontrol");
            e.target.setAttribute("id", "lightcontrol");
        }
        else if ((x > 600 && x < 680) && (y > 134 && y < 312)) {
            e.target.setAttribute("class", "stair1");
            e.target.setAttribute("id", "stair1");
        }
    }
    else if (e.target.getAttribute("id") == "stair1") {
        e.target.setAttribute("class", "stair2");
        e.target.setAttribute("id", "stair2");
    }
    else {
        e.target.setAttribute("class", "firstfloor");
        e.target.setAttribute("id", "firstfloor");
    }
}