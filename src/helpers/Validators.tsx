export const validateEmail = (inputValue: string): boolean => {
  const expression = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return expression.test(String(inputValue).toLowerCase())
}

export const validatePassword = ( inputValue: string): boolean => {
  const regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 
  return regex.exec(inputValue) ? false : true;
}

export const validateSamePassword = ( password: string, confirmpassword: string) : boolean =>{
  return password === confirmpassword;
}

export const validateCPF = (strCPF : string): boolean => {
  let soma;
  var resto;
  soma = 0;
  if (strCPF === "00000000000") return false;

  for (var i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11))  resto = 0;
  if (resto !== parseInt(strCPF.substring(9, 10)) ) return false;

  soma = 0;
  for (var i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11))  resto = 0;
  if (resto !== parseInt(strCPF.substring(10, 11) ) ) return false;
  return true;
}

export const validateFormSignup = (id: string, value: any): object => {
  const errors:any = {};
  if(id === 'email' && validateEmail(value))  errors.email = "E-mail inválido";
  if(id === 'document' && validateCPF(value))  errors.document = "CPF inválido";
  if(id === 'password' && validatePassword(value))  errors.password = "Senha deve conter no mínimo 8 digitos sendo 1 caractere em maiúsculo, 1 número e 1 caractere especial.";
  return errors;
}