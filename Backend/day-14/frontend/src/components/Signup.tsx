import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useModalContext } from "../App";

const Signup = () => {
  const { data, setData, setShowModal } = useModalContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    role === "user"
      ? axios
          .post("http://localhost:8080/passport/register-user", userData)
          .then((res) => {
            if (res.status === 200) {
              setData(res.data.message);
              setShowModal(true);
            } else {
              console.log(res);
            }
          })
          .catch((err) => {
            setData(err.message);
            setShowModal(true);
            console.error(err);
          })
      : axios
          .post("http://localhost:8080/passport/register-user", userData)
          .then((res) => {
            if (res.status === 200) {
              setData(res.data.message);
              setShowModal(true);
            } else {
              console.log(res);
            }
          })
          .catch((err) => {
            setData(err.message);
            setShowModal(true);
          });
  };
  const [role, setRole] = useState("user");
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
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
          value={userData.name}
          onChange={(e) => setUserData((s) => ({ ...s, name: e.target.value }))}
        />
        <label>Name </label>
      </div>
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
      </div>

      <button>SignUp</button>
    </motion.form>
  );
};

export default Signup;
