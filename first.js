var hint_times = 0;
function clickpic(e) {
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x, y);
    if (e.target.getAttribute("id") == "firstfloor") {
        if ((x > 450 && x < 570) && (y > 210 && y < 375)) {
            e.target.setAttribute("id", "coin");
            e.target.setAttribute("class", "coin");
            if(e.target.getAttribute("id")=="coin"){
                set_button(e);
            }
            ////window.location.href='machine.html'
        }
<<<<<<< HEAD
<<<<<<< HEAD
        else if ((x > 115 && x < 160) && (y > 10 && y < 250)) {
            document.getElementById("onmachine").innerHTML = "";
=======
        else if ((x > 3 && x <50) && (y > 20 && y < 325)) {
>>>>>>> 8566b684189f22f57429eef44885c229a5762713
=======
        else if ((x > 3 && x <50) && (y > 20 && y < 325)) {
>>>>>>> 8566b684189f22f57429eef44885c229a5762713
            e.target.setAttribute("class", "list");
            e.target.setAttribute("id", "list");
            ////window.location.href='machine.html'
        }
<<<<<<< HEAD
<<<<<<< HEAD
        else if ((x > 210 && x < 260) && (y > 208 && y < 260)) {
            document.getElementById("onmachine").innerHTML = "";
=======
        else if ((x > 140 && x < 195) && (y > 300 && y < 365)) {
>>>>>>> 8566b684189f22f57429eef44885c229a5762713
=======
        else if ((x > 140 && x < 195) && (y > 300 && y < 365)) {
>>>>>>> 8566b684189f22f57429eef44885c229a5762713
            e.target.setAttribute("class", "trash_can");
            e.target.setAttribute("id", "trash_can");
            ////window.location.href='machine.html'
        }
<<<<<<< HEAD
<<<<<<< HEAD
        else if ((x > 320 && x < 410) && (y > 305 && y < 338)) {
            document.getElementById("onmachine").innerHTML = "";
            e.target.setAttribute("class", "information");
            e.target.setAttribute("id", "information");
        }
        else if ((x > 546 && x < 575) && (y > 170 && y < 200)) {
            document.getElementById("onmachine").innerHTML = "";
            e.target.setAttribute("class", "lightcontrol");
            e.target.setAttribute("id", "lightcontrol");
        }
        else if ((x > 600 && x < 680) && (y > 134 && y < 312)) {
            document.getElementById("onmachine").innerHTML = "";
=======
        else if ((x > 280 && x < 420) && (y > 435 && y < 490)) {
            e.target.setAttribute("class", "information");
            e.target.setAttribute("id", "information");
        }
        else if ((x > 680 && x < 750) && (y > 170 && y < 455)) {
>>>>>>> 8566b684189f22f57429eef44885c229a5762713
=======
        else if ((x > 280 && x < 420) && (y > 435 && y < 490)) {
            e.target.setAttribute("class", "information");
            e.target.setAttribute("id", "information");
        }
        else if ((x > 680 && x < 750) && (y > 170 && y < 455)) {
>>>>>>> 8566b684189f22f57429eef44885c229a5762713
            e.target.setAttribute("class", "stair1");
            e.target.setAttribute("id", "stair1");
        }
    }
    else if (e.target.getAttribute("id") == "stair1") {
        document.getElementById("onmachine").innerHTML = "";
        e.target.setAttribute("class", "stair2");
        e.target.setAttribute("id", "stair2");
    }
    else if (e.target.getAttribute("id") == "stair2"){
        window.location.href='second.html';
    }
    else {
        document.getElementById("onmachine").innerHTML = "";
        e.target.setAttribute("class", "firstfloor");
        e.target.setAttribute("id", "firstfloor");
    }
}

function set_button(e){
    var inner = "<div class = 'button_where'><input id = 'where' type = 'button' value = '我不在這裡'></div>";
    inner += "<div class = 'button_hint'><input id = 'hint' type = 'button' value = '我需要提示'></div>";
    inner += "<div class = 'button_text'><input id = 'ans_b' type = 'button' value = '確認輸入'></div>";
    inner += "<div class = 'text_answer'><input id = 'ans' type = 'text' placeholder = '限輸入英文'></div>";
    document.getElementById("onmachine").innerHTML = inner;
    document.getElementById("where").addEventListener("click", place_hint, false);
    document.getElementById("hint").addEventListener("click", hints, false);
    document.getElementById("ans_b").addEventListener("click", check_ans, false);
}

function place_hint(e){
    console.log("in place_hints");
    var tmp = document.getElementById("coin");
    tmp.setAttribute("class", "coin_1");
}

function hints(){
    console.log("in hints");
    hint_times++;
    var inner = "<div class = 'hint_list'>";
    if(hint_times >= 1){
        inner += "提示一: <br>";
    }
    if(hint_times >= 2){
        inner += "提示二: <br>";
    }
    if(hint_times >= 3){
        inner += "提示三: <br>";
        inner += "<div class = 'button_giveup'><input id = 'button_giveup' type = 'button' value = '我放棄了QQ'></div>"
    }
    inner += "</div>";
    document.getElementById("onmachine").innerHTML = inner;
    document.getElementById("button_giveup").addEventListener("click", giveup, false);
}

function giveup(){
    var inner = "<div class = 'hint_list_1'><br>iMac</div>";
    document.getElementById("onmachine").innerHTML = inner;
}

function check_ans(){
    var result = document.getElementById("ans").value;
    console.log("result is "+result);
    var inner = "";
    if(result === "iMac"){
        inner = "<div class = 'result_list_t'>正確</div>"
    }
    else{
        inner = "<div class = 'result_list_f'>錯誤</div>"
    }
    document.getElementById("onmachine").innerHTML = inner;
}