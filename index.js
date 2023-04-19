alert ("elija 2 numeros y el programa le dira cual numero es mayor");
let num1 = prompt ("ingrese el primer numero");
let num2 = prompt ("ingrese el segundo numero");

const calcularmayor = ()=>{
       if (num1 >= num2 )
       document.write ("el numero " + num1 +" es mayor que " + num2)
   
   else if (num2 >= num1){
      document.write ("el numero " + num2 + " es mayor que " + num1)
   }
   
   
}
calcularmayor ();

