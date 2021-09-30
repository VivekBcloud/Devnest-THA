import { useModalContext } from "../App";
import "../styles/modal.css";
const Modal = () => {
  const { data, setShowModal } = useModalContext();
  return (
    <div className="modal-container">
      <button onClick={() => setShowModal(false)}>close</button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Modal;
