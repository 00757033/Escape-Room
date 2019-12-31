$(document).ready(function () {
  create_backpack();
  for (var i = 0, j = 0; i < localStorage.length; i++) {
    $(localStorage.getItem(localStorage.key(i))).html("<img src=" + localStorage.key(i) + " height='90'" + " width='150'></img>");
  }
  add_backpack();
  information();
  computer();
  $("#calculate").hide();
  $("#calculate").hide();
  $("#leftdiv").hide();
  computer_show();
  $("#lediv1").mousedown(function () {
    $("#leftdiv").toggle(function () {
      if ($("#backpack").html() == "關閉背包")
        $("#backpack").html("開啟背包");
      else
        $("#backpack").html("關閉背包");
    });
  });
  button_click_show();
});
function create_backpack() {
  var inner = '';
  inner = '<table  border="0" width="500" height="550" id="backpackpic" class="backpackpic">';
  inner += '<tr><td colspan = "4" height="10">書包</td></tr>';
  inner += '<tr rowspan = "2"   >';
  inner += '<th height="90"  width="150" id="td0"></th>';
  inner += '<th height="90"  width="150" id="td1"></th>';
  inner += '<th height="90"  width="150" id="td2"></th>';
  inner += '</tr>';
  inner += '<tr rowspan = "2"  >';
  inner += '<th height="90"  width="150" id="td3"></th>';
  inner += '<th height="90"  width="150" id="td4"></th>';
  inner += '<th height="90"  width="150" id="td5"></th>';
  inner += '</tr>';
  inner += '<tr rowspan = "2"><th colspan = "4" id="td6"></th> </tr>';
  inner += '</table>';
  $("#leftdiv").html(inner);
}
function information() {
  var message = '';
  message = '<p id="backpack" class="backpack" >開啟背包</p>';
  $("#lediv1").html(message);
  var message = '';
  message = '<p id="coun" class="coun" >開啟計算機</p>';
  $("#lediv2").html(message);
}
function tobackpack(img) {
  var check = 0;
  for (var i = 0, j = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) == img)
      check = 1;
  }
  if (!check) {
    for (var i = 0; i < 6; i++) {
      if ($("#td" + i).html() == '') {
        $("#td" + i).html("<img src=" + img + " height='90'" + " width='160'></img>");
        localStorage.setItem(img, "#td" + i);
        break;
      }
    }
  }
  restart();
}
function computer_show() {
  var local = location.pathname.split('/');
  if (local[local.length - 1] != "first.html") {
    $("#coun").css("color", "gray");
  }
  $("#lediv1").mouseenter(function () {
    $("#lediv1").css("cursor", "pointer");
  });
  $("#lediv2").mouseenter(function () {
    if (local[local.length - 1] == "first.html")
      $("#lediv2").css("cursor", "pointer");
    else
      $("#lediv2").css("cursor", "default");
  });
  $("#lediv2").mousedown(function () {
    if (local[local.length - 1] == "first.html") {
      $("#calculate").toggle(function () {
        if ($("#coun").html() == "關閉計算機")
          $("#coun").html("開啟計算機");
        else
          $("#coun").html("關閉計算機");
      });
    }
  });
}

var answer = 0;
var lastvalue = 0;
var op = "+";
var lastop = "+";
var newnumber = true;
function input(digit) {
  $("#cal").append(digit);
  if (op == "=")
    clearall();
  if ((!newnumber) && (document.calc.result.value != "0"))
    document.calc.result.value += eval(digit);
  else
    document.calc.result.value = "" + eval(digit);
  console.log(document.calc.result.value);
  newnumber = false;
}

function clearnow() {
  $("#cal").html("");
  document.calc.result.value = "_";
  newnumber = true;
  
}

function clearall() {
  answer = 0;
  lastop = "+";
  op = "+";
  clearnow();
}

function operate(operation) {

  $("#cal").append(operation);
  if ((newnumber != true) || (op == " = ")) {
    answer = "" + answer;

    if ((operation != "=") && (op != "=")) {
      lastvalue = document.calc.result.value;
      lastop = op;
      answer = eval(answer + lastop + lastvalue);
      document.calc.result.value = answer;
    }
    else if (operation == "=") {
      if (op != "=") {
        lastop = op;
        lastvalue = document.calc.result.value;
      }
      answer = eval(answer + lastop + lastvalue);
      document.calc.result.value = answer;
    }
    newnumber = true;
  }
  op = operation;
  if ((op == " = ")) {
    $("#cal").append(answer);
    console.log($("#cal").text(), answer);
  }
}

function change() {
  answer = -1 * document.calc.result.value;
  document.calc.result.value = answer;
}

function point() {
  if (!newnumber) {
    number = document.calc.result.value;
    if (number.indexOf('.') == -1)
      document.calc.result.value += ".";
    console.log(document.calc.result);
  }
}

function computer() {
  var calcinner;
  calcinner = '<form name="calc" >' + '<div align="center" id="calculate"> ' + '<center> ';
  calcinner += '<p id="cal"></p>';
  calcinner += '<table border="1" bordercolor="#808000" cellpadding="0">';
  calcinner += '<tr>';
  calcinner += '<td colspan="5"><input type="text" size="14" name="result" value="_" onFocus="blur()"></td></tr>';
  calcinner += '<tr>';
  calcinner += '<td><input type="button"  id="ban1" name="1" value=" 1 " onClick="input(this.value)"></input></td>' +
    '<td><input type="button" name="2"   id="ban2" value=" 2 " onClick="input(this.value)"></input></td>' +
    '<td><input type="button" name="3"   id="ban3" value=" 3 " onClick="input(this.value)"></input></td>' +
    '<td><input type="button" name="CE"   id="op0"value=" CE " onClick="clearall()"></input></td>' +
    '<td><input type="button" name="C"  id="op1" value=" C " onClick="clearnow()"></input></td></tr>';
  calcinner += '<tr>';
  calcinner += '<td><input type="button" id="ban4" name="4" value=" 4 " onClick="input(this.value)"></input></td>' +
    '<td><input type="button" name="5"  id="ban5" value=" 5 " onClick="input(this.value)"></input></td>' +
    '<td><input type="button" name="6"   id="ban6" value=" 6 " onClick="input(this.value)"></input></td>' +
    '<td><input type="button" name="sing" id="op3" value=" +/- " onClick="change()"></input></td>' +
    '<td><input type="button" name="="  id="op2"value=" = " onClick="operate(this.value)"></input></td></tr>';
  calcinner += '<tr>';
  calcinner += '<td><input type="button" id="ban7" name="7" id="num" value=" 7 " onClick="input(this.value)"></input></td>' +
    '<td><input type="button" name="8"  id="ban8" value=" 8 " onClick="input(this.value)"></input></td>' +
    '<td><input type="button" name="9" id="ban9" value=" 9 " onClick="input(this.value)"></input></td>' +
    '<td><input type="button" name="+" id="op4"  value=" + " onClick="operate(this.value)"></input></td>' +
    '<td><input type="button" name="-"  id="op5" value=" - " onClick="operate(this.value)"></input></td></tr>';
  calcinner += '<tr>';
  calcinner += '<td colspan="2"><input type="button" name="0" id="ban0" value=" 0 " onClick="input(this.value)">' +
    '<td><input type="button" name="."  id="op0" value=" . " onClick="point()"></td>' +
    '<td><input type="button" name="*" id="op6"  value=" * " onClick="operate(this.value)"></td>' +
    '<td><input type="button" name="/" id="op7"  value=" / " onClick="operate(this.value)"></input></td></tr>';
  calcinner += '</table>' + '</center>' + '</div>' + ' </form> ';
  $("#rightdiv").html(calcinner);
}
function button_click_show() {
  for (var i = 0; i <= 1; i++)
    $("#op" + i).click(function () {
      console.log("click");
      for (var j = 0; j <= 9; j++) {
        $("#ban" + j).attr("disabled", false);
        if (j >= 2 && j <= 7)
          $("#op" + j).attr("disabled", false);
      }
    });
    $("#op" + 2).click(function () {
      console.log("click");
      for (var j = 0; j <= 9; j++) {
        $("#ban" + j).attr("disabled", true);
        if (j >= 2 && j <= 7)
          $("#op" + j).attr("disabled", true);
      }
    });
}
function add_backpack() {
  for (let i = 0; i <= 5; i++) {
    $("#td" + i).click(function () {
      for (var j = 0; j < localStorage.length; j++) {
        if (localStorage.getItem(localStorage.key(j)) == "#td" + i)
        { 
          $("#td6").html("<img src=" + localStorage.key(j) + " height='240'" + " width='480'"+ "data-zoom-image = "+localStorage.key(j)+" ></img>");
        }
    }
    });
  }
}
function restart() {
  for (var i = 0, j = 0; i < localStorage.length; i++) {
    $(localStorage.getItem(localStorage.key(i))).html("<img src=" + localStorage.key(i) + " height='90'" + " width='150'></img>");
  }
}

