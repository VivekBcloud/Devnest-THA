import { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="login-container">
      <form className="input-box" onSubmit={handleSubmit}>
        <div className="info-box">
          <input
            type="text"
            required
            value={userData.username}
            onChange={(e) =>
              setUserData((s) => ({ ...s, username: e.target.value }))
            }
          />
          <label>Username </label>
        </div>
        <div className="info-box">
          <input
            type="password"
            required
            value={userData.password}
            onChange={(e) =>
              setUserData((s) => ({ ...s, password: e.target.value }))
            }
          />
          <label>Password </label>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
