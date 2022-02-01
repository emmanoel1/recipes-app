import React from 'react';
import LoginForm from '../../components/LoginForm';
import { Welcome, CodeAndCooking } from '../../styles';

function Login() {
  return (
    <div>
      <Welcome>Bem vindo ao</Welcome>
      <CodeAndCooking>Code And Cooking</CodeAndCooking>
      <LoginForm />
    </div>
  );
}

export default Login;
