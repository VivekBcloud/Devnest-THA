import React, { useState } from "react";

const Signup = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="login-container">
      <form className="input-box" onSubmit={handleSubmit}>
        <div className="info-box">
          <input
            type="text"
            required
            // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            value={userData.email}
            onChange={(e) =>
              setUserData((s) => ({ ...s, email: e.target.value }))
            }
          />
          <label>Email</label>
        </div>
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
        <div className="info-box">
          <input
            type="password"
            required
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData((s) => ({ ...s, confirmPassword: e.target.value }))
            }
          />
          <label>Confirm Password </label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <div
            style={{
              color: "white",
            }}
          >
            Role
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <input type="radio" name="role" value="user" />
            <label style={{ position: "relative" }}>user</label>

            <input type="radio" name="role" value="admin" />
            <label style={{ position: "relative" }}>admin</label>
          </div>
        </div>

        <button>SignUp</button>
      </form>
    </div>
  );
};

export default Signup;
