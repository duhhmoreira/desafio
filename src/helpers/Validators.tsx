export const validateEmail = (inputValue: string): boolean => {
  const expression = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return expression.test(String(inputValue).toLowerCase())
}

export const validatePassword = ( inputValue: string): boolean => {
  const regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 
  return regex.exec(inputValue) && inputValue.length < 8 ? false : true;
}

export const validateSamePassword = ( password: string, confirmpassword: string) : boolean =>{
  return password === confirmpassword;
}

//TODO validaDocument

export const validate = (values: any): any => {
  const errors:any = {};
  const requiredFields = [
    'name',
    'document',
    'email',
    'password',
    'confirmPassword'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Campo Obrigatório'
    }
  })
  if(values.email && validateEmail(values.email))  errors.email = "E-mail inválido";
  if(values.password && validatePassword(values.email))  errors.email = "Senha deve conter no mínimo 8 digitos sendo 1 caractere em maiúsculo, 1 número e 1 caractere especial!";
  if(values.password && values.confirmPassword ){
    if(validateSamePassword(values.password, values.confirmPassword )){
      errors.email= "Senhas não conferem";
      errors.confirmPassword = "Senhas não conferem";
    } ;
  }

  return errors;
}