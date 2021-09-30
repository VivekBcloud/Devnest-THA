import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import { useModalContext } from "../App";

const Login = () => {
  const [role, setRole] = useState("user");
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const { data, setData, setShowModal } = useModalContext();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    role === "user"
      ? axios
          .post("http://localhost:8080/passport/login-user", userData, {
            headers: { "Access-Control-Allow-Origin": "*" },
          })
          .then((res) => {
            if (res.status === 200) {
              setData(res.data.message);
              console.log("login success");
              setShowModal(true);
            } else {
              console.log(res);
            }
          })
          .catch((err) => {
            console.error(err.message);
            setData(err.message);
            setShowModal(true);
          })
      : axios
          .post("http://localhost:8080/passport/login-admin", userData)
          .then((res) => {
            if (res.status === 200) {
              setData(res.data.message);
              console.log("login success");
              setShowModal(true);
            } else {
              console.log(res);
            }
          })
          .catch((err) => {
            console.log(err);

            setData(err.message);
            setShowModal(true);
          });
  };
  // console.log(userData, role);

  return (
    <motion.form
      className="input-box"
      onSubmit={handleSubmit}
      key="login"
      initial={{ opacity: 0, rotateY: "180deg" }}
      animate={{ opacity: 1, rotateY: "0deg" }}
      exit={{ opacity: 0, rotateY: "180deg" }}
    >
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        <input
          type="radio"
          name="role"
          value="user"
          onChange={() => setRole("user")}
        />
        <label style={{ position: "relative" }}>user</label>
        <input
          type="radio"
          name="role"
          value="admin"
          onChange={() => setRole("admin")}
        />
        <label style={{ position: "relative" }}>admin</label>
      </div>
      <button>Login</button>
    </motion.form>
  );
};

export default Login;
