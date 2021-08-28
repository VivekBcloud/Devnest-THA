import { motion } from "framer-motion";
import React from "react";
//style
import "../styles/requestStyle.scss";
//type
type reqType = {
  req: string;
};

//variant
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const Request = () => {
  const reqData: string[] = [
    "Me from the Future",
    "Me from the Past",
    "Me from another dimension",
  ];
  const RequestCard = ({ req }: reqType) => {
    return (
      <motion.div variants={item} className="req-card">
        <div className="profile">
          <span
            className="profile-pic"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></span>
          <p>
            <span>{req} </span>
            wants to add you to friends
          </p>
        </div>
        <div className="btn-container">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.9,
              background: "#000",
            }}
            className="accept-btn"
          >
            Accept
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.9,
              background: "#333",
              color: "#fff",
            }}
            className="decline-btn"
          >
            Decline
          </motion.button>
        </div>
      </motion.div>
    );
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="request-container"
    >
      <h3>REQUEST</h3>
      {reqData.length === 0 ? (
        <div className="no-req">No new friend request</div>
      ) : (
        reqData.map((req, idx) => <RequestCard req={req} key={idx} />)
      )}
    </motion.div>
  );
};

export default Request;
