import { motion } from "framer-motion";
import React from "react";
//style
import "../styles/requestStyle.scss";

type reqType = {
  req: string;
};
const Request = () => {
  const reqData: string[] = [
    "Me from the Future",
    "Me from the Past",
    "Me from another dimension",
  ];
  const RequestCard = ({ req }: reqType) => {
    return (
      <div className="req-card">
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
          <button className="accept-btn">Accept</button>
          <button className="decline-btn">Decline</button>
        </div>
      </div>
    );
  };
  return (
    <motion.div
      initial={{ x: 70, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
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
