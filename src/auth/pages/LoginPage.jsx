import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value)

  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 0) return;
    setInputValue(inputValue);

  }

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login(inputValue);

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={onInputChange}
        />


        <button
          className="btn btn-primary"
          onClick={onLogin}
        >
          Login
        </button>


      </form>

    </div>
  )
}
