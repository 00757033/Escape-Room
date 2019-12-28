var hint_times = 0;
var correct = 0;
var hint = 0;
var enter = 0;
var inmachine = 0;

function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    if ((e.target.getAttribute("id") == "firstfloor")) {
        if ((x > 450 && x < 615) && (y > 225 && y < 415) && check()) {
            inmachine = 1;
            if (hint == 0) {
                e.target.setAttribute("id", "coin");
                e.target.setAttribute("class", "coin");
            }
            else {
                e.target.setAttribute("id", "coin_1");
                e.target.setAttribute("class", "coin_1");
            }
            $("#topdiv").text("要先解完題才能離開喔");
            if (e.target.getAttribute("id") == "coin") {
                set_button(e);
            }
        }
        else if ((x > 0 && x < 51) && (y > 15 && y < 370)) {
            document.getElementById("onmachine").innerHTML = "";
            e.target.setAttribute("class", "list");
            e.target.setAttribute("id", "list");
            $("#topdiv").html("恭喜你找到提示線索<br>再次點擊可將線索收入背包並回到大廳");
        }
        else if ((x > 145 && x < 215) && (y > 315 && y < 390)) {
            document.getElementById("onmachine").innerHTML = "";
            e.target.setAttribute("class", "trash_can");
            e.target.setAttribute("id", "trash_can");
            $("#topdiv").text("哈哈哈被騙了吧");
        }
        else if ((x > 280 && x < 455) && (y > 460 && y < 515)) {
            document.getElementById("onmachine").innerHTML = "";
            e.target.setAttribute("class", "information");
            e.target.setAttribute("id", "information");
            $("#topdiv").html("恭喜你找到提示線索<br>再次點擊可將線索收入背包並回到大廳");

        }
        else if ((x > 546 && x < 575) && (y > 170 && y < 200)) {
            document.getElementById("onmachine").innerHTML = "";
            e.target.setAttribute("class", "lightcontrol");
            e.target.setAttribute("id", "lightcontrol");
        }
        else if ((x > 720 && x < 800) && (y > 180 && y < 490)) {
            if (correct == 1) {
                document.getElementById("onmachine").innerHTML = "";
                e.target.setAttribute("class", "stair1");
                e.target.setAttribute("id", "stair1");
                $("#topdiv").text("再次點擊前往二樓");
            }
            else {
                $("#topdiv").html("請先解開謎題<br>試著點擊周圍吧");
            }
        }
    }
    else if (e.target.getAttribute("id") == "stair1") {
        document.getElementById("onmachine").innerHTML = "";
        e.target.setAttribute("class", "stair2");
        e.target.setAttribute("id", "stair2");
        $("#topdiv").text("再次點擊前往二樓");
    }
    else if (e.target.getAttribute("id") == "stair2") {
        window.location.href = 'second.html';
    }
    else if ((hint_times >= 1) || (enter == 1)) {
        console.log("hint_times is "+hint_times+" while enter is "+enter);
        if ((e.target.getAttribute("id") == "coin") || (e.target.getAttribute("id") == "coin_1")) {
            if (correct == 1) {
                document.getElementById("onmachine").innerHTML = "";
                if (hint == 0) {
                    var tmp = document.getElementById("coin");
                }
                else {
                    var tmp = document.getElementById("coin_1");
                }
                tmp.innerHTML = "";
                e.target.setAttribute("class", "firstfloor");
                e.target.setAttribute("id", "firstfloor");
                inmachine = 0;
                enter = 0;
                hint_times = 0;
                $("#topdiv").text("可以前往二樓囉~");
            }
            document.getElementById("onmachine").innerHTML = "";
        }
    }
    else
    {   if (e.target.getAttribute("id") == "list"){
            tobackpack("./backpack/list.jpg");
        }
        if (e.target.getAttribute("id") == "information")
            tobackpack("./backpack/paper.jpg");
        document.getElementById("onmachine").innerHTML = "";
        if (inmachine == 0) {
            e.target.setAttribute("class", "firstfloor");
            e.target.setAttribute("id", "firstfloor");
            $("#topdiv").text("請試著點擊周遭環境");
        }
    }
}

function check() {
    var tools = 0;
    for (var i = 0; i < localStorage.length; i++) {
        console.log("i is " + i + " " + localStorage.key(i));
        if (localStorage.key(i) === "./backpack/paper.jpg") {
            tools++;
            console.log("tools++ paper");
        }
        else if (localStorage.key(i) === "./backpack/list.jpg") {
            tools++;
            console.log("tools++ list");
        }
    }
    if (tools < 2) {
        $("#topdiv").text("請先找到線索再來解題");
        return false;
    }
    return true;
}

function set_button(e) {
    var inner = "";
    var tmp;
    console.log("83");
    if (hint == 0) {
        tmp = document.getElementById("coin");
    }
    else {
        tmp = document.getElementById("coin_1");
    }
    inner += "<input id = 'where' type = 'button' value = '我不在這裡' class = 'button_where'>";
    inner += "<input id = 'hint' type = 'button' value = '我需要提示' class = 'button_hint'>";
    inner += "<input id = 'ans_b' type = 'button' value = '確認輸入' class = 'button_text'>";
    inner += "<input id = 'ans' type = 'text' placeholder = '限輸入英文' class = 'text_answer'>";
    console.log(tmp);
    tmp.innerHTML = inner;
    if (hint == 0) {
        document.getElementById("where").addEventListener("click", place_hint, false);
    }
    document.getElementById("hint").addEventListener("click", hints, false);
    document.getElementById("ans_b").addEventListener("click", check_ans, false);
}

function place_hint(e) {
    console.log("90");
    hint++;
    var tmp = document.getElementById("coin");
    tmp.setAttribute("class", "coin_1");
    tmp.setAttribute("id", "coin_1");
}

function hints() {
    //var tmp;
    //if(hint==0){
    // tmp = document.getElementById("coin");
    //}
    //else{
    //tmp = document.getElementById("coin_1");
    //}
    tmp = document.getElementById("onmachine");
    //console.log("in hints");
    hint_times++;
    var inner = "<div class = 'hint_list'>";
    if (hint_times >= 1) {
        inner += "提示一: <br>";
    }
    if (hint_times >= 2) {
        inner += "提示二: <br>";
    }
    if (hint_times >= 3) {
        inner += "提示三: <br>";
        inner += "<div class = 'button_giveup'><input id = 'button_giveup' type = 'button' value = '我放棄了QQ'></div>"
    }
    inner += "</div>";
    tmp.innerHTML = inner;
    //console.log("hint_times is " + hint_times);
    if (hint_times >= 3) {
        document.getElementById("button_giveup").addEventListener("click", giveup, false);
    }
}

function giveup() {
    var inner = "<div class = 'hint_list_1'><br>iMac</div>";
    document.getElementById("onmachine").innerHTML = inner;
}

function check_ans() {
    enter = 1;
    var result = document.getElementById("ans").value;
    console.log("result is " + result);
    var inner = "";
    if (result === "iMac") {
        inner = "<div class = 'result_list_t'>AC</div>"
        correct = 1;
    }
    else {
        inner = "<div class = 'result_list_f'>WA</div>"
    }
    document.getElementById("onmachine").innerHTML = inner;
}

