import React from 'react';
import LoginForm from '../../components/LoginForm';
import { Welcome, CodeAndCooking, MainLogin } from '../../styles';

function Login() {
  return (
    <MainLogin>
      <Welcome>Bem vindo ao</Welcome>
      <CodeAndCooking>Code And Cooking</CodeAndCooking>
      <LoginForm />
    </MainLogin>
  );
}

export default Login;
