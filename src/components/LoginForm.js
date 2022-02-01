import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../styles';

function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const validateForm = () => {
      const minCaracters = 6;
      if (userEmail.includes('@')
      && userEmail.includes('.com')
      && userPassword.length > minCaracters) {
        setDisableBtn(false);
      } else {
        setDisableBtn(true);
      }
    };
    validateForm();
  }, [userEmail, userPassword]);

  const submitForm = (event) => {
    event.preventDefault();
    const localStorageEmail = {
      email: userEmail,
    };

    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(localStorageEmail));

    history.push('/foods');
  };

  return (
    <Form>
      <input
        name="email"
        type="email"
        placeholder="Enter your email address"
        data-testid="email-input"
        value={ userEmail }
        onChange={ ({ target }) => setUserEmail(target.value) }
      />
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        data-testid="password-input"
        value={ userPassword }
        onChange={ ({ target }) => setUserPassword(target.value) }
      />
      <button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ disableBtn }
        onClick={ submitForm }
      >
        Login
      </button>
    </Form>
  );
}

export default LoginForm;
