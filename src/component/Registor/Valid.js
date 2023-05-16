export default function Valid(value){
    const error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(value.name === ""){
        error.name = "Name is Required";
    }
  
    if(value.email === ""){
        error.email = "Email is Required";
    }
   
    else if(!email_pattern.test(value.email)){
        error.email = "Email is Not correct";
    }
    if(value.password ===""){
       error.password ="Password is Required";
    }else if(!password_pattern.test(value.password)){
        error.password = "Password is Not correct"
}
return error;
}