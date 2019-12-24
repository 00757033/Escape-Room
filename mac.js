function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y,e.target.getAttribute("id"));
    if(e.target.getAttribute("id") == "class205"){   
        if ((x > 290 && x < 405) && (y > 250 && y < 355))  {
            $("#topdiv").text("點擊電腦螢幕");
            e.target.setAttribute("id", "mac_5");
            e.target.setAttribute("class", "mac");
        }
    }
    else if(e.target.getAttribute("id") == "mac_5"){     
        if ((x > 80 && x < 570) && (y > 20 && y < 350))  {
            $("#topdiv").text("點擊檔案");
            e.target.setAttribute("id", "screen");
            e.target.setAttribute("class", "screen");
        }
    }
    else if(e.target.getAttribute("id") == "screen"){    
        if ((x > 565 && x <625) && (y > 185 && y < 260))  {
            $("#topdiv").text("點擊錯誤的程式碼");
            e.target.setAttribute("id", "code_f");
            e.target.setAttribute("class", "code_f");
        }
    }
    else if(e.target.getAttribute("id") == "code_f"){           
        if ((x > 55 && x <= 230) && (y > 220 && y < 240))  {
            set_text(e);
            check_ans();
        }
    }
}

function set_text(e){
    console.log("in set_text");
    var inner = "<input id = 'ans' type = 'text' placeholder = '請輸入正確的code' class = 'text_answer'>";
    inner += "<input id = 'ans_b' type = 'button' value = '確認輸入' class = 'button_text'>";
    console.log(inner);
    document.getElementById("code_f").innerHTML = inner;
}

function check_ans(){
    var result = document.getElementById("ans").value;
    console.log("result is "+result);
    var inner = "<div class = 'text_answer'><input id = 'ans' type = 'text' placeholder = '請輸入正確的code'></div>";
    inner += "<div class = 'button_text'><input id = 'ans_b' type = 'button' value = '確認輸入'></div>";
    if((result === "arr[j]=arr[i];") || (result === "arr[j] = arr[i];")){
        inner += ""
        window.alert("輸入正確");
    }
    else{
        inner += "<div class = 'result_list_f'>更改錯誤</div>"
    }
    document.getElementById("onmachine").innerHTML = inner;
}