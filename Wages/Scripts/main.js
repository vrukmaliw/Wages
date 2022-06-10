const txtName=document.getElementById("name");
const txtHours=document.getElementById("hours");
const txtOutput=document.getElementById("output");

const btnCalculate=document.getElementById("calculate");

btnCalculate.addEventListener("click", calculate);

function calculate()
{
 const hourlyRate=250;

 const name=txtName.value ;
 const hours=Number(txtHours.value) ;
 const takeHome=hourlyRate*hours;
 txtOutput.innerText=`${name} worked ${hours} and the salary is ${takeHome}` ;
}