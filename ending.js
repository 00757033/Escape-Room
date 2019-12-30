function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    if(e.target.getAttribute("id") == "img_0"){  
        if ((x > 670 && x < 725) && (y > 505 && y < 550))  {
            var choice = 2;
            for(var i = 0; i<localStorage.length; i++){
                console.log("i is "+i+" and localstorage is "+localStorage.key(i));
                if ((localStorage.key(i) === "./backpack/coffe_blue.jpg") || (localStorage.key(i) === "./backpack/coffe_black.jpg")) {
                    choice = 1;
                    break;
                }
            }
            if(choice==2){
                $("#topdiv").text("點擊右下角箭頭以進行對話");
                e.target.setAttribute("id", "img_1");
                e.target.setAttribute("class", "img_1");
            }
            else{
                $("#topdiv").text("選擇選項回話以進行對話");
                e.target.setAttribute("id", "img_4");
                e.target.setAttribute("class", "img_4");
            }
        }
    }

    else if(e.target.getAttribute("id") == "img_1"){     
        console.log("img_1");
        if ((x > 670 && x < 725) && (y > 505 && y < 550))  {  
            $("#topdiv").text("選擇選項回話以進行對話");
            e.target.setAttribute("id", "img_2");
            e.target.setAttribute("class", "img_2");
        }
    }

    else if(e.target.getAttribute("id") == "img_2"){      
        console.log("img_2");
        if ((x > 300 && x < 600) && (y > 440 && y < 490))  {
            $("#topdiv").html("再點擊及可回到五樓大廳<br>至三樓販賣機購買");
            e.target.setAttribute("id", "img_2_5");
            e.target.setAttribute("class", "img_2_5"); 
        }  
        if((x > 300 && x < 600) && (y > 490 && y < 520))  {
            $("#topdiv").text("選擇選項回話以進行對話");
            e.target.setAttribute("id", "img_3");
            e.target.setAttribute("class", "img_3"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_2_5"){ 
        console.log("img_2_5"); 
        if ((x > 670 && x < 725) && (y > 505 && y < 550))  {
            localStorage.setItem("con_fif", 1);
            window.location.href='fifth.html'
        }
    }

    else if(e.target.getAttribute("id") == "img_3"){  
        console.log("img_3");
        if ((x > 280 && x < 590) && (y > 410 && y < 445))  {
            $("#topdiv").html("再點擊及可回到五樓大廳<br>請至三樓販賣機購買");
            e.target.setAttribute("id", "img_2_5");
            e.target.setAttribute("class", "img_2_5"); 
        }
    }

    else if(e.target.getAttribute("id") == "img_4"){  
        console.log("img_4");
        if ((x > 300 && x < 600) && (y > 400 && y < 430))  {
            var tmp = 0;
            for(var i = 0; i<localStorage.length; i++){
                if(localStorage.key(i)==="./backpack/fire_extinguisher.jpg"){
                    tmp = 1;
                    break;
                }
            }
            if(tmp==1){
                $("#topdiv").text("選擇選項回話以進行對話");
                e.target.setAttribute("id", "img_9");
                e.target.setAttribute("class", "img_9"); 
            }
            else{
                $("#topdiv").text("");
                e.target.setAttribute("id", "img_ending_1");
                e.target.setAttribute("class", "img_ending_1");
            }
        }  
        if((x > 300 && x < 600) && (y > 450 && y < 480))  {
            $("#topdiv").text("選擇選項回話以進行對話");
            e.target.setAttribute("id", "img_5");
            e.target.setAttribute("class", "img_5"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_5"){  
        console.log("img_5");
        if ((x > 300 && x < 600) && (y > 410 && y < 440))  {
            $("#topdiv").text("選擇選項回話以進行對話");
            e.target.setAttribute("id", "img_6");
            e.target.setAttribute("class", "img_6"); 
        }  
        if((x > 300 && x < 600) && (y > 450 && y < 480))  {
            $("#topdiv").text("選擇選項回話以進行對話");
            e.target.setAttribute("id", "img_11");
            e.target.setAttribute("class", "img_11"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_6"){  
        console.log("img_6");
        if ((x > 300 && x < 600) && (y > 410 && y < 480))  {
            $("#topdiv").text("點擊右下角箭頭以進行對話");
            e.target.setAttribute("id", "img_7");
            e.target.setAttribute("class", "img_7"); 
        }  
        if((x > 300 && x < 600) && (y > 490 && y < 520))  {
            $("#topdiv").text("選擇選項回話以進行對話");
            e.target.setAttribute("id", "img_ending_2");
            e.target.setAttribute("class", "img_ending_2"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_7"){  
        console.log("img_7");
        if ((x > 670 && x < 725) && (y > 505 && y < 550))  {
            $("#topdiv").text("點擊右下角箭頭以進行對話");
            e.target.setAttribute("id", "img_8");
            e.target.setAttribute("class", "img_8"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_8"){          
        console.log("img_8");
        if ((x > 670 && x < 725) && (y > 505 && y < 550))  {
            $("#topdiv").text("點擊右下角箭頭以進行對話");
            e.target.setAttribute("id", "img_ending_3");
            e.target.setAttribute("class", "img_ending_3"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_9"){  
        console.log("img_9");
        if ((x > 300 && x < 400) && (y > 440 && y < 480))  {
            $("#topdiv").text("");
            e.target.setAttribute("id", "img_ending_4");
            e.target.setAttribute("class", "img_ending_4"); 
        }  
        if((x > 300 && x < 400) && (y > 490 && y < 520))  {
            $("#topdiv").text("");
            e.target.setAttribute("id", "img_ending_1");
            e.target.setAttribute("class", "img_ending_1"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_11"){  
        console.log("img_11");
        if ((x > 300 && x < 600) && (y > 410 && y < 440))  {
            $("#topdiv").text("");
            e.target.setAttribute("id", "img_6");
            e.target.setAttribute("class", "img_6"); 
        }  
        if((x > 300 && x < 600) && (y > 440 && y < 500))  {
            $("#topdiv").text("");
            e.target.setAttribute("id", "img_ending_2");
            e.target.setAttribute("class", "img_ending_2"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_ending_1"){  
        console.log("ending_1");
        if ((x > 670 && x < 725) && (y > 505 && y < 550))  {
            $("#topdiv").text("歡迎再來玩一次~");
            e.target.setAttribute("id", "img_end");
            e.target.setAttribute("class", "img_end_1"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_ending_2"){  
        console.log("ending_2");
        if ((x > 670 && x < 725) && (y > 505 && y < 550))  {
            $("#topdiv").text("歡迎再來玩一次~");
            e.target.setAttribute("id", "img_end");
            e.target.setAttribute("class", "img_end_2"); 
        }  
    }
    
    else if(e.target.getAttribute("id") == "img_ending_3"){  
        console.log("ending_3");
        if ((x > 670 && x < 725) && (y > 505 && y < 550))  {
            $("#topdiv").text("歡迎再來玩一次~");
            e.target.setAttribute("id", "img_end");
            e.target.setAttribute("class", "img_end_3"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_ending_4"){  
        console.log("ending_4");
        if ((x > 670 && x < 725) && (y > 505 && y < 550))  {
            $("#topdiv").text("歡迎再來玩一次~");
            e.target.setAttribute("id", "img_end");
            e.target.setAttribute("class", "img_end_4"); 
        }  
    }

    else if(e.target.getAttribute("id") == "img_end"){
        console.log(x+" "+y); 
        if ((x > 535 && x < 750) && (y > 380 && y < 450))  {
            //開始頁面
        }  
        else if ((x > 535 && x < 750) && (y > 480 && y < 550))  {            
            window.location.href='https://www.google.com.tw/'
        }  

    }
}