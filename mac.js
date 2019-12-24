function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    if(e.target.getAttribute("id") == "class205"){   
        if ((x > 270 && x < 380) && (y > 230 && y < 330))  {
            e.target.setAttribute("id", "mac_5");
            e.target.setAttribute("class", "mac");
        }
    }
    else if(e.target.getAttribute("id") == "mac_5"){     
        if ((x > 80 && x < 570) && (y > 20 && y < 350))  {
            e.target.setAttribute("id", "screen");
            e.target.setAttribute("class", "screen");
        }
    }
    else if(e.target.getAttribute("id") == "screen"){    
        if ((x > 530 && x < 580) && (y > 170 && y < 250))  {
            e.target.setAttribute("id", "code_f");
            e.target.setAttribute("class", "code_f");
        }
    }
    else if(e.target.getAttribute("id") == "code_f"){        
        console.log(x,y);
        if ((x > 30 && x < 215) && (y > 200 && y < 220))  {
            set_text(e);
        }
    }
    else{   
        e.target.setAttribute("class", "class205");
        e.target.setAttribute("id", "class205");
    }
}

function set_text(e){
    console.log("in set_text");
    var inner = "<div class = 'text_answer'><input id = 'ans' type = 'text' placeholder = '請輸入正確的code'></div>";
    inner += "<div class = 'button_text'><input id = 'ans_b' type = 'button' value = '確認輸入'></div>";
    console.log(inner);
    document.getElementById("code_f").innerHTML = inner;
}

function check_ans(){
    var result = document.getElementById("ans").value;
    console.log("result is "+result);
    var inner = "<div class = 'text_answer'><input id = 'ans' type = 'text' placeholder = '請輸入正確的code'></div>";
    inner += "<div class = 'button_text'><input id = 'ans_b' type = 'button' value = '確認輸入'></div>";
    if((result === "arr[j]=arr[i]") || (result === "arr[j] = arr[i]")){
        inner += ""
    }
    else{
        inner += "<div class = 'result_list_f'>更改錯誤</div>"
    }
    document.getElementById("onmachine").innerHTML = inner;
}