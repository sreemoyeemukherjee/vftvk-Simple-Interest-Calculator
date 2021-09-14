// Computes the simple interest
function compute()
{
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var year = new Date().getFullYear()+parseInt(years);
        if(checkdata() == true)
        {
        var interest = principal * years * rate /100;
        document.getElementById("result").innerHTML="\<br\> If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%.\</mark\>\<br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
        }
}
// Updates the value next to the Rate slider dynamically
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
// Validates Principal input box
function checkdata(){
      //Create reference to the input element we want to validate
      var principal = document.getElementById("principal");
      
      //Check if principal field is zero or negative values
      if(principal.value <= 0){
            alert("Enter a positive number");
            principal.focus();
            return false;
      }
     //If all is well return true.
      return true;
}