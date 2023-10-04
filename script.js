

let input1= document.querySelector("#input1");
let input2= document.querySelector("#input2");
let btn= document.querySelector("button");
let formula = document.querySelector(".formula-display h2");


function selectOption(){
 let option = document.getElementById("temp").value;  
 if(option=="Celsius to Fahrenheit"){
      
   input1.setAttribute("placeholder" , "Celsius");
     input2.setAttribute("placeholder" , "Fahrenheit");
     input2.value="";
     btn.onclick=function(e){
      let list="";
          let f1 = (parseFloat(input1.value) * 9) / 5 + 32;
          input2.value = parseFloat(f1.toFixed(2)); 
           list+=`<h2>Formula - <span> ${input1.value} * 9 / 5 + 32 = ${input2.value}</span></h2>`  
          document.querySelector(".formula-display").innerHTML= list;         
  
  }
}
  else if(option=="Fahrenheit to Celsius"){
   input1.setAttribute("placeholder" , "Fahrenheit");
   input2.setAttribute("placeholder" , "Celsius");
   input2.value="";
   btn.onclick=function(e){
       let list="";
       let c1 = ((parseFloat(
           input1.value) - 32) * 5) / 9;
       input2.value = parseFloat(c1.toFixed(2));  
       list+=`<h2>Formula - <span> ${input1.value} -32 * 5 / 9 = ${input2.value}</span></h2>`  
       document.querySelector(".formula-display").innerHTML= list;  

}
}
else if(option=="Celsius to  Kelvin"){
   input1.setAttribute("placeholder" , "Celsius");
     input2.setAttribute("placeholder" , "Kelvin");
     input2.value="";
     btn.onclick=function(e){
       let list="";
     let k1 = (parseFloat(input1.value) + 273.15);
     input2.value = parseFloat(k1.toFixed(2));
     list+=`<h2>Formula - <span> ${input1.value} + 273.15 = ${input2.value}</span></h2>`  
       document.querySelector(".formula-display").innerHTML= list;  
     }
}
else if(option=="Fahrenheit to Kelvin"){
   input1.setAttribute("placeholder" , "Fahrenheit");
   input2.setAttribute("placeholder" , "Kalvin");
   input2.value="";
   btn.onclick=function(e){
       let list="";
   let k2 = (parseFloat(
       input1.value) - 32) * 5 / 9 + 273.15;
   input2.value = parseFloat(k2.toFixed(2));
   list+=`<h2>Formula - <span> ${input1.value} -32 * 5 / 9 + 273.15 = ${input2.value}</span></h2>`  
       document.querySelector(".formula-display").innerHTML= list;  
}
}
else if(option=="Kelvin to Celsius"){
   input1.setAttribute("placeholder" , "Kelvin");
   input2.setAttribute("placeholder" , "Celsius");
   input2.value="";
   btn.onclick=function(e){
       let list="";
   let c2 = (parseFloat(input1.value) - 273.15);
       input2.value = parseFloat(c2.toFixed(2));
       list+=`<h2>Formula - <span> ${input1.value} - 273.15 = ${input2.value}</span></h2>`  
       document.querySelector(".formula-display").innerHTML= list;  
   }
}
else if(option=="Kelvin to Fahrenheit"){
   input1.setAttribute("placeholder" , "Kelvin");
     input2.setAttribute("placeholder" , "Fahrenheit");
     input2.value="";
     btn.onclick=function(e){
       let list="";
     let f2 = (parseFloat(
       input1.value) - 273.15) * 9 / 5 + 32;
   input2.value = parseFloat(f2.toFixed(2));
   list+=`<h2>Formula - <span> ${input1.value} * 9 / 5 +32= ${input2.value}</span></h2>`  
       document.querySelector(".formula-display").innerHTML= list;  
}
}
else{
   alert("Choose right Option....")
}
}
