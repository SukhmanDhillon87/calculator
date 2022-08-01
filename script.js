function addValue(){
    // get the operands value
    a=Number(document.mycalculator.input_a.value);  
    b=Number(document.mycalculator.input_b.value); 
     // parse to integer. You can use: parseInt(input, 10);
     var a1=parseInt(a,10);
     var b1=parseInt(b, 10);
    
     c=a1+b1;  
     var x = a1 + "+" + b1 + "=" + c;
     document.getElementById("output").innerHTML = x;
     console.log(x);
     
}


function mulValue(){

    a=Number(document.mycalculator.input_a.value);  
    b=Number(document.mycalculator.input_b.value); 
     // parse to integer. You can use: parseInt(input, 10);
     var a1=parseInt(a,10);
     var b1=parseInt(b, 10);
    
     c=a1*b1;  
     var x = a1 + "*" + b1 + "=" + c;
     document.getElementById("output").innerHTML = x;
     console.log(x);
      
 
 
}

function divValue(){
     
    
    a=Number(document.mycalculator.input_a.value);  
    b=Number(document.mycalculator.input_b.value); 
     // parse to integer. You can use: parseInt(input, 10);
     var a1=parseInt(a,10);
     var b1=parseInt(b, 10);
    
     c=a1/b1;  
     var x = a1 + "/" + b1 + "=" + c;
     document.getElementById("output").innerHTML = x;
     console.log(x);
     

}
function Clear()
   {  
   document.getElementById('input_a').value = "";
   document.getElementById('input_b').value = "";
   document.getElementById('output').value = "";
   }
