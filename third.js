function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x, y);
    if (e.target.getAttribute("id") == "thirdfloor") {
        if ((x > 0 && x < 50) && (y > 185 && y < 450)) {
            e.target.setAttribute("class", "stair3to4_1");
            e.target.setAttribute("id", "stair3to4_1");
            $("#topdiv").text("再次點擊前往四樓");
        }
        else if ((x > 75 && x < 300) && (y > 180 && y < 420)) {
            e.target.setAttribute("class", "left");
            e.target.setAttribute("id", "left");
            $("#topdiv").text("左邊道路");
        }
        else if ((x > 350 && x < 630) && (y > 180 && y < 420)) {
            e.target.setAttribute("class", "right");
            e.target.setAttribute("id", "right");
            $("#topdiv").text("右邊道路");
        }
    }
    else if (e.target.getAttribute("id") == "stair3to4_1") {
        e.target.setAttribute("class", "stair3to4_2");
        e.target.setAttribute("id", "stair3to4_2");
        $("#topdiv").text("再次點擊前往四樓");
    }
    else if (e.target.getAttribute("id") == "stair3to4_2") {
        window.location.href = 'fourth.html';
    }
    else if (e.target.getAttribute("id") == "right_road") {
        if ((x > 322 && x < 438) && (y > 195 && y < 305))
            window.alert("走道盡頭摟!\n按下確認到三樓大廳");
        e.target.setAttribute("class", "thirdfloor");
        e.target.setAttribute("id", "thirdfloor");
        $("#topdiv").text("三樓大廳");
    }
    else if (e.target.getAttribute("id") == "left") {
        if ((x > 5 && x < 78) && (y > 105 && y < 450)) {
            e.target.setAttribute("class", "stair3to4_1");
            e.target.setAttribute("id", "stair3to4_1");
            $("#topdiv").text("點擊四周");
        }
        else if ((x > 410 && x <= 470) && (y > 225 && y < 290)) {
            e.target.setAttribute("class", "left_road");
            e.target.setAttribute("id", "left_road");
            $("#topdiv").html("左邊道路<br> 試著點擊四周");
        }
    }
    else if (e.target.getAttribute("id") == "left_road") {
        if ((x > 285 && x <= 435) && (y > 145 && y < 300)) {
            $("#topdiv").text("三樓休息區");
            e.target.setAttribute("class", "rest_area");
            e.target.setAttribute("id", "rest_area");
        }
    }
    else if (e.target.getAttribute("id") == "rest_area") {
        if ((x > 195 && x < 295) && (y > 250 && y <= 310)) {
            e.target.setAttribute("class", "rest_area_ac");
            e.target.setAttribute("id", "rest_area_ac");
            $("#topdiv").text("這裡沒有東西");
        }
        else if ((x >= 645 && x < 800) && (y >= 290 && y <= 440)) {
            e.target.setAttribute("class", "rest_area_chair");
            e.target.setAttribute("id", "rest_area_chair");
            $("#topdiv").text("這裡沒有東西");
        }
        else if ((x > 0 && x < 135) && (y > 120 && y <= 445)) {
            buttom();
            $("#topdiv").text("三樓販賣機");
            e.target.setAttribute("class", "coin_machine");
            e.target.setAttribute("id", "coin_machine");
            if(localStorage.getItem("./backpack/coffe_blue.jpg"))
            $("#topdiv").text("已獲得一杯咖啡1");
            if(localStorage.getItem("./backpack/coffe_black.jpg"))
            $("#topdiv").text("已獲得一杯咖啡2");
            if(localStorage.getItem("./backpack/money.jpg"))
            $("#topdiv").text("試者去四樓找線索");
        }
    }
    else if (e.target.getAttribute("id") == "rest_area_ac"
        || e.target.getAttribute("id") == "rest_area_chair") {
        $("#topdiv").text("三樓休息區");
        e.target.setAttribute("class", "rest_area");
        e.target.setAttribute("id", "rest_area");
    }
    else if (e.target.getAttribute("id") == "right") {
        if ((x > 335 && x < 440) && (y > 200 && y < 300)) {
            e.target.setAttribute("class", "right_road");
            e.target.setAttribute("id", "right_road");
        }
    }
    else if( e.target.getAttribute("id")=="coin_machine" ){
        e.target.setAttribute("class", "thirdfloor");
        e.target.setAttribute("id", "thirdfloor");
    }
}
function buttom() {
    var buttom;
    buttom += '<table border="1" bordercolor="#808000" cellpadding="0" id="buttom_coin">';
    buttom += '<tbody width=100px>';
    buttom += '<tr>';
    buttom += '<td colspan="3" id="buttominf"></td>';
    buttom += '<tr>';
    buttom +=   '<td><input type="button"  name="1" value="1" onClick="but(this.value)"></input></td>' +
                '<td><input type="button" name="2"   value="2" onClick="but(this.value)"></input></td>' +
                '<td><input type="button" name="3"    value="3" onClick="but(this.value)"></input></td></tr>';
    buttom += '<tr>';
    buttom +=   '<td><input type="button"  name="4" value="4" onClick="but(this.value)"></input></td>' +
                '<td><input type="button" name="5"   value="5" onClick="but(this.value)"></input></td>' +
                '<td><input type="button" name="6"   value="6" onClick="but(this.value)"></input></td></tr>';
    buttom += '<tr>';
    buttom +=   '<td><input type="button" id="ban7"  value="7" onClick="but(this.value)"></input></td>' +
                '<td><input type="button" name="8"  value="8" onClick="but(this.value)"></input></td>' +
                '<td><input type="button" name="9" value="9" onClick="but(this.value)"></input></td></tr>';
    buttom += '<tr>';
    buttom += '<td><input type="button" name="0" value="0" onClick="but(this.value)" ></input></td>';
    buttom += '<td><input type="button"  name="重新" value=" 重新 " onClick="clearr()"></input></td>';
    buttom += '<td><input type="button"  name="確定" value=" 確定 " onClick="check()"></input></td></tr>';
    buttom += ' </tbody></table>';

    $("#rightdiv").html(buttom);
}
function but(value) {
    $("#buttominf").append(value);
}
function check() {
    if ($("#buttominf").html() == "23"){
        if(localStorage.getItem("./backpack/money.jpg")){
            localStorage.setItem("./backpack/coffe_blue.jpg",localStorage.getItem("./backpack/money.jpg"));            
            localStorage.removeItem("./backpack/money.jpg");
            restart();
            $("#topdiv").text("獲得一杯咖啡");
        }
        $("#topdiv").text("去四樓找找看錢幣");
    }
    else if ($("#buttominf").html() == "24"){
        if(localStorage.getItem("./backpack/money.jpg")){
            localStorage.setItem("./backpack/coffe_black.jpg",localStorage.getItem("./backpack/money.jpg"));     
            localStorage.removeItem("./backpack/money.jpg");
            restart();
            $("#topdiv").text("獲得一杯咖啡");
        }
        $("#topdiv").text("去四樓找找看錢幣");
    }
    else
    $("#topdiv").text("輸入錯誤");
}
function clearr() {
    $("#buttominf").html("");
}