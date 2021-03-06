import React, { useState } from 'react'
import { Button, FormControl, IconButton, TextField } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "./SignupPageStyle.scss";
import { registerUser } from '../../services/auth';
import { validateEmail, validatePassword, validateCPF, validateSamePassword } from '../../helpers/Validators';

const SignupPage = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: '',
    document: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  });

  const [formValid, setFormValid] = useState({})

  const handleChange = (e) => {
    validateForm(e.target.id, e.target.value);
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = (field, inputValue) => {
    field === 'email' && setFormValid({ ...formValid, email: !validateEmail(inputValue) })
    field === 'document' && setFormValid({ ...formValid, document: !validateCPF(inputValue) })
    field === 'password' && setFormValid({ ...formValid, password: validatePassword(inputValue) })
    field === 'confirmPassword' && setFormValid({ ...formValid, confirmPassword: !validateSamePassword(user.password, inputValue) })

    if (formValid.email && formValid.password) {
      setFormValid({ ...formValid, formValidate: true });
    }
  }

  const handleClickShowPassword = () => {
    setUser({ ...user, showPassword: !user.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setUser({ ...user, showConfirmPassword: !user.showConfirmPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, document, email, password } = user;



    registerUser({
      'name': name,
      'document': document,
      'email': email,
      'password': password,
    }, history);
  };

  return (
    <div className="signup">
      <FormControl className="formSignup" valida>
        <TextField required type="text" id="name" label="Nome completo" onBlur={handleChange} />
        <TextField required type="email" id="email" label="E-mail" onBlur={handleChange} />
        {formValid.email && <label className="errorLabel">E-mail Invalido</label>}
        <TextField 
        required 
        type="text" 
        id="document"  
        label="CPF (somente n??meros)" 
        onBlur={handleChange}
        onInput = {(e) =>{
          e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)}}
        />
        {formValid.document && <label className="errorLabel">CPF Invalido</label>}
        <div>
          <TextField required type={user.showPassword ? 'text' : 'password'}
            id="password" label="Senha" onBlur={handleChange} />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {user.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
          {formValid.password && <label className="errorLabel">Senha Invalida, digite uma senha com os parametros corretos.</label>}
        </div>
        <div>
          <TextField required type={user.showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword" label="Confirmar Senha" onBlur={handleChange} />
          <IconButton
            aria-label="toggle confirm password visibility"
            onClick={handleClickShowConfirmPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {user.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
          {formValid.confirmPassword && <label className="errorLabel">Senhas diferentes</label>}
        </div>
        <p className="passwordType">*Senha deve conter no m??nimo 8 digitos sendo 1 caractere em mai??sculo, 1 n??mero e 1 caractere especial. </p>
        <Button type="submit" variant="contained" color="primary" className="buttonSignup" onClick={onSubmit}>Cadastrar</Button>
        <Button
          color="primary"
          className="buttonSignup">
          <Link to="/">Voltar</Link>
        </Button>
      </FormControl>
    </div>
  )
}

export default SignupPage;
