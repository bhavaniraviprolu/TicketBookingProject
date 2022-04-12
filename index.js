var data1="";
 const validateForm1 = function () {

    var x = document;

    const from = x.getElementById("from");
    const to = x.getElementById("to");
    const departdate = x.getElementById("depart");
    const returndate = x.getElementById("return");
    const selflight = x.getElementById("selflight");
    const flightclass = x.getElementById("class");
 
      
    if (from.value == ""){ 
        document.getElementById('errorname1').innerHTML="Select From field";  
        return false; 
    }
    else
    {
        
        document.getElementById('errorname1').innerHTML="";  
    }

    if (to.value == ""){ 
        document.getElementById('errorname2').innerHTML="Select To Field";  
        return false; 
    }
    else
    {
        document.getElementById('errorname2').innerHTML="";  
    }

    if (departdate.value == ""){ 
        document.getElementById('errorname3').innerHTML="Select DepartDate";  
        departdate.focus(); 
        return false; 
    }
    else
    {
        document.getElementById('errorname3').innerHTML="";  
    }

    if (returndate.value == ""){ 
        if(returndate.disabled == false)
        {
          document.getElementById('errorname4').innerHTML="Select ReturnDate";  
          returndate.focus(); 
          return false; 
        }
        else
        {
            document.getElementById('errorname4').innerHTML="";
        }
    }
    else
    {
        document.getElementById('errorname4').innerHTML="";  
    }

    if (selflight.value == ""){ 
        document.getElementById('errorname5').innerHTML="Select Flight";  
        selflight.focus(); 
        return false; 
    }
    else
    {
        document.getElementById('errorname5').innerHTML="";  
    }

    if (flightclass.value == ""){ 
        document.getElementById('errorname6').innerHTML="Select Class";  
        flightclass.focus(); 
        return false; 
    }
    else
    {
        document.getElementById('errorname6').innerHTML=""; 
         
    }
    
    data1 = `From : ${from.value} To : ${to.value} Dapart : ${departdate.value} Return : ${returndate.value}`;
    
        
        localStorage.setItem("storageName",data1);
} 

console.log(data1);

function disablereturn()
{
    document.getElementById("return").disabled = true;
}

function enablereturn()
{
    document.getElementById("return").disabled = false;
}

const bookingformvalidation = function () {
    var x = document;
    const passenger1 = x.getElementById("passenger1");
    const gender1 = x.getElementsByName("gender1");
    const age1 = x.getElementById("age1");
    const passenger2 = x.getElementById("passenger2");
    const gender2 = x.getElementsByName("gender2");
    const age2 = x.getElementById("age2");
    const child = x.getElementById("child");
    const gender3 = x.getElementsByName("gender3");
    const age3 = x.getElementById("age3");
    const email = x.getElementById("email");
    const mobile = x.getElementById("mobile");
    const address = x.getElementById("address");
    const food_preference = x.getElementById("food_preference");
    const payment_selection = x.getElementById("payment_selection");
    
   /*passenger1*/
    if (passenger1.value == ""){ 
        document.getElementById('errorname1').innerHTML="Enter Full Name";  
        passenger1.focus(); 
        return false; 
    }
    else if(passenger1.value.length < 5){
        document.getElementById('errorname1').innerHTML="More Than 5 Chars";  
        passenger1.focus(); 
        return false;
    }
    else{
       document.getElementById('errorname1').innerHTML="";
    }

    if (gender1[0].checked || gender1[1].checked){ 
        document.getElementById('errorgender1').innerHTML="";
       
    }
    else{
        document.getElementById('errorgender1').innerHTML="Select Gender";  
        return false; 
       
    }

    if (age1.value == ""){ 
        document.getElementById('errorage1').innerHTML="Enter age";  
        age1.focus(); 
        return false; 
    }
    else{
       document.getElementById('errorage1').innerHTML="";
    }
    /*passenger2*/
    if (passenger2.value == ""){ 
        document.getElementById('errorname2').innerHTML="Enter Full Name";  
        passenger2.focus(); 
        return false; 
    }
    else if(passenger2.value.length < 5){
        document.getElementById('errorname2').innerHTML="More Than 5 Chars";  
        passenger2.focus(); 
        return false;
    }
    else{
       document.getElementById('errorname2').innerHTML="";
    }

    if (gender2[0].checked || gender2[1].checked){ 
        document.getElementById('errorgender2').innerHTML="";
    }
    else{
        document.getElementById('errorgender2').innerHTML="Select Gender";  
        return false;
       
    }

    if (age2.value == ""){ 
        document.getElementById('errorage2').innerHTML="Enter age";  
        age2.focus(); 
        return false; 
    }
    else{
       document.getElementById('errorage2').innerHTML="";
    }
    /*child*/
    if (child.value == ""){ 
        document.getElementById('errorname3').innerHTML="Enter Full Name";  
        child.focus(); 
        return false; 
    }
    else if(child.value.length < 5){
        document.getElementById('errorname1').innerHTML="More Than 5 Chars";  
        child.focus(); 
        return false;
    }
    else{
       document.getElementById('errorname3').innerHTML="";
    }

    if (gender3[0].checked || gender3[1].checked){ 
        document.getElementById('errorgender3').innerHTML="";  
        
    }
    else{
       document.getElementById('errorgender3').innerHTML="Select Gender";
       return false; 
    }

    if (age3.value == ""){ 
        document.getElementById('errorage3').innerHTML="Enter age";  
        age3.focus(); 
        return false; 
    }
    else{
       document.getElementById('errorage3').innerHTML="";
    }
    

    /*email number*/

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

    if (email.value == ""){ 
        document.getElementById('errorname4').innerHTML="Enter EmailId";  
        email.focus(); 
        return false; 
    }
    else if(!email.value.match(mailformat))
    {
        document.getElementById('errorname4').innerHTML="Sholud be in mail format";
        email.focus();
        return false;    
    }
    else
    {
        document.getElementById('errorname4').innerHTML="";
    
    }

    console.log(mobile.value.length);
    
    /*contact number*/
    if (mobile.value == ""){ 
        document.getElementById('errorname5').innerHTML="Enter Mobile#";  
        mobile.focus();
        return false; 
    }
    else{
        document.getElementById('errorname5').innerHTML="";
    }

    /*address*/
    if (address.value == ""){ 
        document.getElementById('errorname6').innerHTML="Enter Address";  
        address.focus(); 
        return false; 
    }
    else{
       document.getElementById('errorname6').innerHTML="";
    }
    
    /*Food preference*/
    if (food_preference.value == ""){ 
        
        document.getElementById('errorname7').innerHTML="Select Food";  
        food_preference.focus();
        return false; 
    }
    else{
        
       document.getElementById('errorname7').innerHTML="";
    }
    /*Payment*/
    if (payment_selection.value == ""){ 
        document.getElementById('errorname8').innerHTML="Select Payment";
        payment_selection.focus();
        return false; 
    }
    else{
       document.getElementById('errorname8').innerHTML="";
    }
   
    var data = `Passenger1:${passenger1.value}   Passenger2:${passenger2.value}   Child:${child.value}   Email:${email.value}  Mobile#:${mobile.value}`
    
   const data2 = localStorage.getItem("storageName");
  
 
   window.alert(`Congrats Your ticket has been booked  ${data2}  ${data}`);
} 

