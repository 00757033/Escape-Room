$(document).ready(function () {
    localStorage.setItem("mac_code",0);
});

function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
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
            $("#topdiv").text("debug囉~");
            e.target.setAttribute("id", "code_f");
            e.target.setAttribute("class", "code_f");
            //if(localStorage.getItem("mac_code")==0)
                $("#topdiv").text("debug囉~");
        }
    }
    else if(e.target.getAttribute("id") == "code_f"){     
        if ((x > 525 && x < 685) && (y > 400 && y < 685)) {
            e.target.setAttribute("id", "result_f");
            e.target.setAttribute("class", "result_f");
        }
        else if ((x >= 65 && x <= 275) && (y >= 265 && y <= 280))  {
            set_text(e);
        }
    }
    else if(e.target.getAttribute("id") == "code_t"){     
        if ((x > 525 && x < 685) && (y > 400 && y < 685)) {
            e.target.setAttribute("id", "result_t");
            e.target.setAttribute("class", "result_t");
            $("#topdiv").text("再點擊即可回到二樓大廳");
        }
    }
    else if(e.target.getAttribute("id") == "result_f"){ 
        e.target.setAttribute("id", "code_f");
        e.target.setAttribute("class", "code_f");
    }
    else if(e.target.getAttribute("id") == "result_t"){ 
        window.location.href='second.html'
    }
}

function set_text(e){
    var inner = "<input id = 'ans' type = 'text' placeholder = '請輸入正確的code' class = 'text_answer'>";
    inner += "<input id = 'ans_b' type = 'button' value = '確認輸入' class = 'button_text'>";
    document.getElementById("code_f").innerHTML = inner;
    document.getElementById("ans_b").addEventListener("click", check_ans, false);
}

function check_ans(){
    var result = document.getElementById("ans").value;
    if( (result === "arr[j]=arr[i];")   ||
        (result === "arr[j] = arr[i] ;")||
        (result === "arr[j] = arr[i];") || 
        (result === "arr[j] =arr[i];")  ||
        (result === "arr[j] =arr[i] ;") ||
        (result === "arr[j]= arr[i];")  ||
        (result === "arr[j]= arr[i] ;") ){
        $("#topdiv").text("恭喜你成功了~ 試著編譯看看吧");
        var tmp = document.getElementById("code_f");
        tmp.setAttribute("id", "code_t");
        tmp.setAttribute("class", "code_t");        
        document.getElementById("code_t").innerHTML = "";
        localStorage.setItem("mac_code",1);
    }
    else{        
        $("#topdiv").text("加油！ 再試試看吧");
    }
}