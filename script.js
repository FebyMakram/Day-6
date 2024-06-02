 var x;
 var y;
 var result;

  x=prompt("enter first number");
 document.getElementById("first").innerHTML="First number = "+x
 console.log(x);

  y= prompt("enter second number");
 document.getElementById("second").innerHTML="second number = " +y
 console.log(y);
 

 
 result= Number(x)*Number(y) ;
 document.getElementById("math").innerHTML=x+"*"+y+"="+result
 document.getElementById("result").innerHTML= "The result is "+ result
 console.log(result);

