interface IValidation {
    password: string;
}

export const Validation = (values:IValidation) => {
    let error = {
        password: "",
    };
    const password_pattern = /^(?=.*[!@#$%^&*])/
 
     if(!password_pattern.test(values.password)) {
       error.password = "Password should contain at least one symbol"
    } else {
       error.password = ""
    }
    return error;
 }
 
 