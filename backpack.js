$(document).ready(function(){
    $("#backpack").mousedown(function(){
      $("#backpackpic").toggle(function(){
      });
    });
    var inner ='';
    inner ='<table  border="2" width="500" height="600">';
    inner +='<tr><th colspan = "4" height="10">backpack</th></tr>';
    inner +='<tr rowspan = "2" id="backpackpic" class="backpackpic" >';
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
      var answer=0 
      var lastvalue=0 
      var op="+" 
      var lastop="+" 
      var newnumber=true 
       
      function input(digit){ 
      if (op==" = ") 
      clearall() 
      if ((!newnumber)&&(document.calc.result.value!="0")) 
      document.calc.result.value+=eval(digit) 
      else 
      document.calc.result.value=""+eval(digit) 
      newnumber=false 
      } 
       
      function clearnow(){ 
      document.calc.result.value="_" 
      newnumber=true 
      } 
       
      function clearall(){ 
      answer=0 
      lastop="+" 
      op="+" 
      clearnow() 
      } 
       
      function operate(operation){ 
      if ((newnumber!=true)||(op==" = ")) 
      { 
      answer=""+answer 
      if ((operation!=" = ") && (op!=" = ")) 
      { 
      lastvalue=document.calc.result.value 
      lastop=op 
      answer=eval(answer+lastop+lastvalue) 
      document.calc.result.value=answer 
      } 
      else if (operation==" = ") 
      { 
      if (op!=" = ") 
      { 
      lastop=op 
      lastvalue=document.calc.result.value 
      } 
      answer=eval(answer+lastop+lastvalue) 
      document.calc.result.value=answer 
      } 
      newnumber=true 
      } 
      op=operation 
      } 
       
      function change(){ 
      answer=-1*document.calc.result.value 
      document.calc.result.value=answer 
      } 
       
      function point(){ 
      if (!newnumber) 
      { 
      number=document.calc.result.value 
      if (number.indexOf('.')==-1) 
      document.calc.result.value+="." 
      }  
      } 
    
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