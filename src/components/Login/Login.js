import React from 'react';
import './Login.css';
import CustomInput from './CustomInput/CustomInput';
import ButtonPrimaryWide from './ButtonPrimaryWide/ButtonPrimaryWide';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {
        emailError: '',
        passwordError: '',
      },
    };
  }

  onChange = (e) => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  validate = () => {
    let emailError = '';
    let passwordError = '';

    if (!this.state.email.includes("@nu.edu.kz")) {
      emailError = 'Неверная электронная почта';
    }

    if (this.state.password.length < 8 || !this.state.password) {
      passwordError = 'Пароль должен содержать не менее 8 символов';
    }

    if (emailError || passwordError) {
      const errors = { ...this.state.errors };
      errors.emailError = emailError;
      errors.passwordError = passwordError;
      this.setState({ errors });
      return false;
    }

    return true;
  };

  onKeyDown = (event) => {
    console.log(event);
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.handleSubmit(event);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const userData = {
        email: this.state.email,
        password: this.state.password,
      };
    }
  };

  render() {
    return (
      <div class="Login">

        {this.state.errors.emailError ? (
          <p
            style={{ color: '#E14A4A' }}
            className='sign__in__input__name'
          >
            {this.state.errors.emailError}
          </p>
        ) : (
            <p className='sign__in__input__name'>Электронный адрес</p>
          )}
        <CustomInput
          name='email'
          style={{ marginBottom: 20 }}
          type='text'
          placeholder='Введите ваш электронный адрес'
          value={this.state.email}
          onChange={(e) => this.onChange(e)}
          onKeyDown={(e) => this.onKeyDown(e)}
        />
        <div className='row d-flex justify-content-between'>
          {this.state.errors.passwordError ? (
            <p
              style={{ marginLeft: 58, color: '#E14A4A' }}
              className='sign__in__input__name'
            >
              {this.state.errors.passwordError}
            </p>
          ) : (
              <p
                style={{ marginLeft: 58 }}
                className='sign__in__input__name'
              >
                Пароль
                  </p>
            )}
        </div>

        <CustomInput
          name='password'
          style={{ marginBottom: 24 }}
          type='password'
          placeholder='Введите Пароль'
          value={this.state.password}
          onChange={(e) => this.onChange(e)}
          onKeyDown={(e) => this.onKeyDown(e)}
        />

        <div className='d-flex justify-content-center login_button_wrapper'>
          <ButtonPrimaryWide
            name='Войти'
            onClick={(e) => this.handleSubmit(e)}
          />
        </div>
      </div>
    );
  }
}

export default Login;
