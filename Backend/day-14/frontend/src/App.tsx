import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Modal from "./components/Modal";
import Signup from "./components/Signup";
const modalContext = createContext({});
function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [logInMode, setLogInMode] = useState(true);
  const selectorVariant = {
    login: {
      y: 2,
    },
    signup: {
      y: "105%",
    },
  };
  const selectorTextVariant = {
    login: {
      opacity: 0.2,
    },
    signup: {
      opacity: 1,
    },
  };
  return (
    <modalContext.Provider value={{ setShowModal, showModal, data, setData }}>
      <div className="App">
        {showModal && <Modal data={data} />}
        <div className="option-bar">
          <div>
            <motion.div
              variants={selectorTextVariant}
              animate={!logInMode ? "login" : "signup"}
            >
              Login
            </motion.div>
            <motion.div
              variants={selectorTextVariant}
              animate={logInMode ? "login" : "signup"}
            >
              SignUp
            </motion.div>
          </div>
          <motion.div
            className="option-container"
            onClick={() => setLogInMode(!logInMode)}
          >
            <motion.div
              variants={selectorVariant}
              animate={logInMode ? "login" : "signup"}
              initial={{
                x: 3,
              }}
              className="option-selector"
            ></motion.div>
          </motion.div>
        </div>
        <div className="form-field">
          <div className="login-container">
            <AnimatePresence>
              {logInMode ? <Login /> : <Signup />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </modalContext.Provider>
  );
}
export const useModalContext = () => useContext(modalContext);
export default App;
