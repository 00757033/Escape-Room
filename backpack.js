$(document).ready(function(){
    $("#backpack").mousedown(function(){
      $("#backpackpic").toggle(function(){
      });
    });
    var inner ='';
    inner ='<table  border="2" width="400" height="600">';
    inner +='<tr><th colspan = "4" height="10">backpack</th></tr>';
    inner +='<tr rowspan = "2" id="backpackpic" class="backpackpic" >';
    inner +='<td height="100" id="td0"></td>';
    inner +='<td height="100" id="td1"></td>';
    inner +='<td height="100" id="td2"></td>';
    inner +='<td height="100" id="td3"></td>';
    inner +='</tr>';
    inner +='<tr rowspan = "2"><td colspan = "4"></td> </tr>';
    inner +='</table>';
    $("#leftdiv").html(inner);
  });
  