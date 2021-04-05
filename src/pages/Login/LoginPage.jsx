import React, { useState } from 'react'
import { Link, useHistory  } from "react-router-dom";
import { Button, FormControl, IconButton, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { login } from '../../services/auth';
import "./LoginPageStyle.scss";

const LoginPage = () => {
  let history = useHistory();
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
    error: '',
    showPassword: false,
  })

  const handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = formLogin;
    if (!email || !password) {
      setFormLogin({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        login({ email, password }, history);
      } catch (err) {
        setFormLogin({
          error:
            "E-mail ou senha incorreto"
        });
      }
    }
  };

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.id]: e.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setFormLogin({ ...formLogin, showPassword: !formLogin.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
  <div className="login">
    <FormControl className="form" >
      <img src={require("../../assets/img/logoBoticario.png").default} alt="Logo Boticario" className="logoLogin" />
      {formLogin.error && <p>{formLogin.error}</p>} 
      <TextField
        required
        InputProps={{
        className: "input"
        }}
        id="email"
        label="E-mail"
        onChange={e => handleChange(e)} 
      />
      <div>
        <TextField
          required
          InputProps={{
          className: "input"
          }}
          id="password"
          label="Password"
          type={formLogin.showPassword ? 'text' : 'password'} 
          autoComplete="current-password"
          onChange={e => handleChange(e)} 
        />
        <IconButton
          aria-label="toggle confirm password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
        {formLogin.showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </div>
      <Button
        variant="contained" 
        color="primary"
        type="submit"
        className="buttonLogin"
        onClick={e => handleSignIn(e)}>
        Login
      </Button>
      <Button
        color="primary"
        className="buttonSignup">
          <Link to="/signup" className='link'>Cadastre-se</Link>
      </Button>
    </FormControl>
  </div>
  )
}

export default LoginPage;
