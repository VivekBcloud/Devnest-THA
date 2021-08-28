import { motion } from "framer-motion";
import React from "react";
import "../styles/contactStyle.scss";
//type
type contactType = {
  contact: {
    name: string;
    img: string;
  };
};
//variants
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Contacts = () => {
  const ContactCard = ({ contact }: contactType) => {
    return (
      <motion.div
        variants={item}
        className="contact-card"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 1,
        }}
      >
        <div className="profile">
          <span
            className="profile-pic"
            style={{
              backgroundImage: `url(${contact.img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></span>
          <p>{contact.name}</p>
        </div>
      </motion.div>
    );
  };

  const contactData = [
    {
      name: "Me",
      img: "https://images.unsplash.com/photo-1548366086-7f1b76106622?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=324&q=80",
    },
    {
      name: "Me from past",
      img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "Me from future",
      img: "https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=378&q=80",
    },
    {
      name: "Me from another dimension",
      img: "https://images.unsplash.com/photo-1503777119540-ce54b422baff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
    },
    {
      name: "Me from heaven",
      img: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "Me from hell",
      img: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
    },
    {
      name: "Me from nowhere",
      img: "https://images.unsplash.com/photo-1559624989-7b9303bd9792?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
  ];
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="contact-container"
    >
      <h3>CONTACTS</h3>
      {contactData.length === 0 ? (
        <div className="no-contact">No new contact</div>
      ) : (
        <div className="contact-list">
          {contactData.map((contact, idx) => (
            <ContactCard contact={contact} key={idx} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Contacts;
