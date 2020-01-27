

var exp = '', number, decimal, equal, operator;
var textview = document.getElementById('brojevi');
var rezview = document.getElementById('rezultat');

function insertNum(num){
   if(equal) {
       exp = num;
       textview.value = exp;
       number = true;
       equal = false;
   }
   else {
       exp = textview.value + num;
       textview.value = exp;
       number = true;
   }
   if(operator) decimal = false;
}

function insertOp(op){
    textview.value = exp + op;
    operator = true;
    equal = false;
    
}

function insertDec(){
    if(number && !decimal){
        textview.value = exp + '.';
        decimal = true;
        operator = false;
    }
}

function equalTo(){
    if (exp) {
        exp = eval (exp);
        rezview.value = exp;
        decimal = false;
        number = false;
    }
}

function clearEvr(){
    exp = '';
    textview.value = exp;
    rezview.value = exp;
    decimal = false;
}

function backSpc(){
    exp = textview.value;
    exp = exp.substring(0, exp.length-1);
    textview.value= exp;
}

function sql(){
        exp = Math.sqrt(exp);
        rezview.value = exp;
}

function procent (){
    exp = exp/100;
    rezview.value = exp;
}