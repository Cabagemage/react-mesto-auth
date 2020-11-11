import React from "react";
import "../App.css";
import * as Auth from '../utils/Auth';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
        e.preventDefault()
        const {email, password} = this.state;
        this.props.onRegister(email, password)
  }

  render() {
  return (
    <div className="login">
      <h1 className="login__title">Регистрация</h1>
      <form onSubmit={this.handleSubmit} className="login__form">
        <input
        name="email"
        onChange={this.handleChange}
        value={this.state.email}
        className="login__email"
        required
        placeholder="email"></input>
        <input
        name="password"
        onChange={this.handleChange}
        value={this.state.password}
        className="login__password"
        required
        placeholder="пароль"></input>
        <button className="login__button">Зарегистрироваться</button>
      </form>
    </div>
  );
  }
}

export default Register;
