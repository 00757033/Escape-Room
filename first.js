var hint_times = 0;
function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x, y);
    if (e.target.getAttribute("id") == "firstfloor") {
        if ((x > 450 && x < 615) && (y > 225 && y < 415))  {
            e.target.setAttribute("id", "coin");
            e.target.setAttribute("class", "coin");
            $("#topdiv").text("試著回到一樓空間尋找線索");
            if(e.target.getAttribute("id")=="coin"){
                set_button(e);
            }
            ////window.location.href='machine.html'
        }
        else if ((x > 0 && x <51) && (y > 15 && y < 370))  {
            document.getElementById("onmachine").innerHTML = "";
            e.target.setAttribute("class", "list");
            e.target.setAttribute("id", "list");
            $("#topdiv").html("恭喜你找到提示線索<br>再次點擊可將線索收入背包並回到大廳");
            ////window.location.href='machine.html'
        }
        else if ((x > 145 && x < 215) && (y > 315 && y < 390))  {
            document.getElementById("onmachine").innerHTML = "";
            e.target.setAttribute("class", "trash_can");
            e.target.setAttribute("id", "trash_can");
            $("#topdiv").text("哈哈哈被騙了吧");
            ////window.location.href='machine.html'
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
        else  if ((x > 720 && x < 800) && (y > 180 && y < 490)) {
            document.getElementById("onmachine").innerHTML = "";
            e.target.setAttribute("class", "stair1");
            e.target.setAttribute("id", "stair1");
            $("#topdiv").text("再次點擊前往二樓");
        }
    }
    else if (e.target.getAttribute("id") == "stair1") {
        document.getElementById("onmachine").innerHTML = "";
        e.target.setAttribute("class", "stair2");
        e.target.setAttribute("id", "stair2");
        $("#topdiv").text("再次點擊前往二樓");
    }
    else if (e.target.getAttribute("id") == "stair2"){
        window.location.href='second.html';
    }
    else {
        if (e.target.getAttribute("id") == "list")
            tobackpack("./first/list.jpg");
        if (e.target.getAttribute("id") == "information")
            tobackpack("./first/paper.jpg");
        document.getElementById("onmachine").innerHTML = "";
        e.target.setAttribute("class", "firstfloor");
        e.target.setAttribute("id", "firstfloor");
        $("#topdiv").text("試著點擊周遭環境");
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

