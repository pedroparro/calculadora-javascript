function calc(val) {
   document.getElementById("calc-input").value +=val;
}calc(val);

function result() {
    var x = document.getElementById("calc-input").value;
    var y = eval(x);

    document.getElementById("calc-input").value = y;
}result();

function clr(){
    document.getElementById("calc-input").value = "";
}clr();