

function check(){
    let validate = document.getElementById('good').value
    let pattern =  /^[A-Za-z]+(?: [A-Za-z]+)*$/;  
    let validate2 = document.getElementById('great').value
    let pattern2 =  /^[A-Za-z][A-Za-z _]{2,15}$/;
    let validate3 = document.getElementById('better').value
    let pattern3 =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let validate4 = document.getElementById('bad').value
    let pattern4 =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
    let confirmPassword = document.getElementById('worse').value;
    let a = true

    if(validate === ''){
     document.getElementById('Check').innerText = 'Please fill in details'
     a = false
    }else if(pattern.test(validate)){
        document.getElementById('Check').innerText = 'Valid Full Name'
        a = true
    }else{
        document.getElementById('Check').innerText = 'Full Name can only Include Letters'
         document.getElementById('Check').style.color = 'red'
        a = false
        
    }
       
         
    


    if(validate2 === ''){
         document.getElementById('Check2').innerText = 'Please fill in details'
         a = false
    }else if(pattern2.test(validate2)){    
         document.getElementById('Check2').innerText = 'Valid User Name'
         a = true
    }else{
        document.getElementById('Check2').innerText = 'User Name must be between 3 to 16 characters and cannot include numbers'
         document.getElementById('Check2').style.color = 'red'
        a = false
        
    }
   
    
    if(validate3 === ''){
         document.getElementById('Check3').innerText = 'Please fill in details'
         a = false
    }else if(pattern3.test(validate3)){
          document.getElementById('Check3').innerText = 'Valid Email Address'
          a = true
    }else{
         document.getElementById('Check3').innerText = 'Email Address must be in standard format'
         document.getElementById('Check3').style.color = 'red'
         a = false
         
    }

    if(validate4 === ''){
     document.getElementById('Check4').innerText = 'Please fill in details'
     a = false
    }else if(pattern4.test(validate4)){
      document.getElementById('Check4').innerText = 'Valid Password'
      a = true
    }else{
     document.getElementById('Check4').innerText =  'Paasword must be 8 characters, contain a special character, have a number, have at least one uppercase letter and one lowercase'
     document.getElementById('Check4').style.color = 'red'
     a = false
     
   }

    
   
   if(confirmPassword === ''){
     document.getElementById('Check5').innerText = 'Please fill in details'
     a = false
    }else if(confirmPassword === validate4 ){
      document.getElementById('Check5').innerText = 'Passwords Match'
      a = true
    }else{
     document.getElementById('Check5').innerText =  'Passwords do not match'
     document.getElementById('Check5').style.color = 'red'
     a = false
     
   }
    

    if(a === true){
        alert('Registration Succesful! Redirecting to login...')
        open ('index3.html')
    }
    



}
