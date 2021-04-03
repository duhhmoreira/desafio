import React, { useState } from 'react'
import { Button, IconButton, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { validateEmail, validatePassword } from '../../helpers/Validators';
import "./LoginPageStyle.scss";


const LoginPage = () => {

  const [formValid, setFormValid] = useState({
    email: true,
    password: true,
    formValidate: false,
    showPassword: false,
  })

  async function changeLogin() {
 
  }  
  
  function changeSignup() {
 
  }

  const handleShowPassword = () => {
    setFormValid({ ...formValid, showPassword: !formValid.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const validateForm = (field, inputValue) => {
    field === 'email'
      ? setFormValid({ ...formValid, email: validateEmail(field, inputValue) })
      : setFormValid({ ...formValid, password: validatePassword(field, inputValue) });

    if (formValid.email && formValid.password) {
      setFormValid({ ...formValid, formValidate: true });
    }
  }

  return (
    <div className="login">
        <form className="form">
        <img src={require("../../assets/img/logoBoticario.png").default} alt="Logo Boticario" className="logoLogin" />
          <TextField
          required
            InputProps={{
              className: "input"
            }}
            id="email-input"
            label="E-mail"
            onChange={event => validateForm('email', event.target.value)} />
            <div>
          <TextField
          required
            InputProps={{
              className: "input"
            }}
            id="password-input"
            label="Password"
             type={formValid.showPassword ? 'text' : 'password'} 
            autoComplete="current-password"
            onChange={event => validateForm('passwrod', event.target.value)}
          />

              <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {formValid.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
            </div>
          {!formValid.password || !formValid.email && <label>E-mail/Senha Invalida</label>}
          <Button
            disabled={!formValid.formValidate}
            variant="outlined"
            color="primary"
            className="buttonLogin"
            onClick={() => changeLogin()}>
            Login
          </Button>
          <Button
            color="primary"
            className="buttonSignup"
            onClick={() => changeSignup()}>
            Cadastre-se
          </Button>
        </form>
    </div>
  )
}

export default LoginPage;
