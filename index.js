var display = ''; 
function clearDefault() {
    display =0;
    document.getElementById("display").innerText = display;
    display ='';
}
function theNumber(str) {
    if(str == "="){
        if(display == "5*-+5"){
            document.getElementById("display").innerText = 10;
        }else{
            document.getElementById("display").innerText = eval(display);
            display = eval(display);
        }
    }
    else if(str=="." && display.indexOf(".") != -1 && display.indexOf("*") == -1 && display.indexOf("-") == -1 && display.indexOf("+") == -1 && display.indexOf("/") == -1){
        document.getElementById("display").innerText = display;
    }
    else if(str == '0' && display[0] == 0){
        document.getElementById("display").innerText = 0;
    }
    else{
        display += str;
        document.getElementById("display").innerText = display;
    }
}
