function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    if(e.target.getAttribute("id") == "class205"){        
        console.log("5");
        if ((x > 270 && x < 380) && (y > 230 && y < 330))  {
            console.log("7");
            e.target.setAttribute("id", "mac_5");
            e.target.setAttribute("class", "mac");
        }
    }
    else if(e.target.getAttribute("id") == "mac_5"){        
        console.log(x,y);
        if ((x > 80 && x < 570) && (y > 20 && y < 350))  {
            e.target.setAttribute("id", "screen");
            e.target.setAttribute("class", "screen");
        }
    }
    else{   
        e.target.setAttribute("class", "class205");
        e.target.setAttribute("id", "class205");
    }
}