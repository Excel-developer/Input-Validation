function checked(){
    let validate3 = document.getElementById('awesome').value
    let pattern3 =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let validate4 = document.getElementById('amazing').value
    let pattern4 =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
    let a = true
    if(pattern3.test(validate3)){
         document.getElementById('Check3').innerText = 'Valid Email Address'
    }else {
         document.getElementById('Check3').innerText = 'Email Address must be in the standard format'
          a = false
          
    }
    
    if(pattern4.test(validate4)){
         document.getElementById('Check4').innerText = 'Valid Password'
    }else {
         document.getElementById('Check4').innerText = 'Paasword must be 8 characters, contain a special character, have a number, have at least one uppercase letter and one lowercase'
         a = false
         
    }

    if(a === true){
      alert('Login Successful')
      open ('index.html')
    }
}

