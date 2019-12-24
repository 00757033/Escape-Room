$(document).ready(function () {
  $("#lediv1").mousedown(function () {
    $("#leftdiv").toggle(function () {
      if ($("#backpack").html() == "關閉背包")
        $("#backpack").html("開啟背包");
      else
        $("#backpack").html("關閉背包");
    });
   });
    $("#lediv2").mousedown(function () {
      $("#rightdiv").toggle(function () {
        if ($("#coun").html() == "關閉計算機")
          $("#coun").html("開啟計算機");
        else
          $("#coun").html("關閉計算機");
      });
    });
    
  
  var inner = '';
  inner = '<table  border="2" width="500" height="550" id="backpackpic" class="backpackpic">';
  inner += '<tr><th colspan = "4" height="10">backpack</th></tr>';
  inner += '<tr rowspan = "2"   >';
  inner += '<td height="90"  width="150" id="td0"></td>';
  inner += '<td height="90"  width="150" id="td1"></td>';
  inner += '<td height="90"  width="150" id="td2"></td>';
  inner += '</tr>';
  inner += '<tr rowspan = "2"  >';
  inner += '<td height="90"  width="150" id="td3"></td>';
  inner += '<td height="90"  width="150" id="td4"></td>';
  inner += '<td height="90"  width="150" id="td5"></td>';
  inner += '</tr>';
  inner += '<tr rowspan = "2"><td colspan = "4" id="td6"></td> </tr>';
  inner += '</table>';
  $("#leftdiv").html(inner);
  console.log(localStorage.length);
  for (var i = 0, j = 0; i < localStorage.length; i++) {
    $(localStorage.getItem(localStorage.key(i))).html("<img src=" + localStorage.key(i) + " height='90'" + " width='150'></img>");
  }
  var message = '';
  message = '<p id="backpack" class="backpack" >關閉背包</p>';
  $("#lediv1").html(message);
  var message = '';
  message = '<p id="coun" class="coun" >關閉計算機</p>';
  $("#lediv2").html(message);
  var calcinner;
 
  $("#td0").click(function () {
    for (var i = 0, j = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i)) == "#td0")
    $("#td6").html("<img src=" + localStorage.key(i) + " height='240'" + " width='480'></img>");
  }
  });
  $("#td0").click(function () {
    for (var i = 0, j = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i)) == "#td0")
    $("#td6").html("<img src=" + localStorage.key(i) + " height='240'" + " width='480'></img>");
  }
  });
  $("#td1").click(function () {
    for (var i = 0, j = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i)) == "#td1")
    $("#td6").html("<img src=" + localStorage.key(i) + " height='240'" + " width='480'></img>");
  }
  });
  $("#td2").click(function () {
    for (var i = 0, j = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i)) == "#td2")
    $("#td6").html("<img src=" + localStorage.key(i) + " height='240'" + " width='480'></img>");
  }
  });
  $("#td3").click(function () {
    for (var i = 0, j = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i)) == "#td3")
    $("#td6").html("<img src=" + localStorage.key(i) + " height='240'" + " width='480'></img>");
  }
  });
  $("#td4").click(function () {
    for (var i = 0, j = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i)) == "#td4")
    $("#td6").html("<img src=" + localStorage.key(i) + " height='240'" + " width='480'></img>");
  }
  });
  $("#td5").click(function () {
    for (var i = 0, j = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i)) == "#td5")
    $("#td6").html("<img src=" + localStorage.key(i) + " height='240'" + " width='480'></img>");
  }
  });

  calcinner='<form name="calc" id="calculate">'+ '<div align="center"> '+'<center> ';
  calcinner+='<p id="cal"></p>';
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
  calcinner += '</table>'+'</center>'+'</div>'+' </form> ';
 
  $("#rightdiv").html(calcinner);

  $("#op2").click(function () {
    for(var i=0;i<=9;i++)
      $("#ban"+i).attr("disabled", true);
      for(var i=2;i<=7;i++)
      $("#op"+i).attr("disabled", true);
  });
  $("#op1").click(function () {
    for(var i=0;i<=9;i++)
      $("#ban"+i).attr("disabled", false);
      for(var i=2;i<=7;i++)
      $("#op"+i).attr("disabled",  false);
  });
  $("#op0").click(function () {
    for(var i=0;i<=9;i++)
      $("#ban"+i).attr("disabled", false);
      for(var i=2;i<=7;i++)
      $("#op"+i).attr("disabled",  false);
  });
});
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
  if((op == " = "))
    {
      $("#cal").append(answer);
      console.log($("#cal").text(),answer);
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