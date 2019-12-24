$(document).ready(function(){
    $("p").mousedown(function(){
      $("#leftdiv").toggle();
    });
    var inner ='';
    inner ='<table  border="2" width="500" height="550" id="backpackpic" class="backpackpic">';
    inner +='<tr><th colspan = "4" height="10">backpack</th></tr>';
    inner +='<tr rowspan = "2"   >';
    inner +='<td height="120"  width="166" id="td0"></td>';
    inner +='<td height="120"  width="166" id="td1"></td>';
    inner +='<td height="120"  width="166" id="td2"></td>';
    inner +='</tr>';
    inner +='<tr rowspan = "2" id="backpackpic" class="backpackpic" >';
    inner +='<td height="120"  width="166" id="td3"></td>';
    inner +='<td height="120"  width="166" id="td4"></td>';
    inner +='<td height="120"  width="166" id="td5"></td>';
    inner +='</tr>';
    inner +='<tr rowspan = "2"><td colspan = "4"></td> </tr>';
    inner +='</table>';
    $("#leftdiv").html(inner);
      console.log(localStorage.length);
      for (var i = 0, j = 0; i < localStorage.length; i++) {
        $(localStorage.getItem(localStorage.key(i))).html("<img src="+localStorage.key(i)+" height='166'"+" width='125'></img>");
      }
    var message='';
    message='<p id="backpack" class="backpack" ><em>backpack</em></p>';
      $("#lediv").html(message);
});
function tobackpack(img){
  var check=0;
  for (var i = 0, j = 0; i < localStorage.length; i++) {
    if (localStorage.key(i)==img) 
      check=1;
      console.log()
  }
  if(!check){
    for(var i=0;i<6;i++){  
    if ($("#td"+i).html() ==''){
      $("#td"+i).html("<img src="+img+" height='166'"+" width='125'></img>");
      localStorage.setItem(img, "#td"+i);
      break;
    }
  }
}               
}