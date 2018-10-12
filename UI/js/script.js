function validateLoginForm(){
    let error = [];
    error.push(validatePassword());
    error.push(validateEmail());
    if(error.includes("hasError")){
        return false;
    }else{
        return true; 
    }  
} 
function validatePassword(){
    let input = document.getElementById('password').value;
    if(input.length > 5 && input.length < 11){
        document.getElementById('password').classList.remove('invalid');
        document.getElementById('passwordError').style.display = 'none';
    }else{
        document.getElementById('password').classList.add('invalid');
        document.getElementById('passwordError').style.display = 'block';
        return "hasError";
    }
}

function validateEmail(){
    let input = document.getElementById('email');
    if(input.value.match(/\S+@\S+\.\S+/)){
        input.classList.remove('invalid');
        document.getElementById('emailError').style.display = 'none';
    }else{
        input.classList.add('invalid');
        document.getElementById('emailError').style.display = 'block';
        return "hasError";
    }
}
