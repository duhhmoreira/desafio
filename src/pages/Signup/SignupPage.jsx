import React, { useState } from 'react'
import { Button, FormControl, IconButton, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "./SignupPageStyle.scss";
import { cpfMask } from '../../helpers/Maks';


const SignupPage = () => {
  const [user, setUser] = useState({
    name: '',
    document: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  });

  const { name, email, password, confirmPassword, cpf } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

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

/*    registerUser({
      name,
      email,
      password,
      cpf,
    });
 */
  };



  return (
    <div className="signup">
        <FormControl className="form">
          <TextField required  type="text" id="name" label="Nome completo" handleChange={handleChange} />
          <TextField required type="email" id="email" label="E-mail" handleChange={handleChange} />
          <TextField required type="text" id="document" mask={cpfMask}  label="CPF (somente números)" handleChange={handleChange} />
          <div>
          <TextField required type={user.showPassword ? 'text' : 'password'} 
          id="password"  label="Senha" handleChange={handleChange} />
          <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {user.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
              
              </div>
              <div>
              <TextField required type={user.showConfirmPassword ? 'text' : 'password'} 
              id="confirmPassword" label="Confirmar Senha" handleChange={handleChange} />

                <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {user.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                  </div>

          <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
          </FormControl>
    </div>
  )
}

export default SignupPage;
