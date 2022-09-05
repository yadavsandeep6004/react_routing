import React from "react";
import { MdDehaze, MdClose } from "react-icons/md";
import Modal from "react-modal";
import MobileNavbar from "../MobileNavbar";
import "./style.css";

const customStyles = {
  content: {
    top: "0",
    right: "0",
    left: "60%",
    height: "100vh",
    maxWidth: "300px"
  }
};

Modal.setAppElement("#root");

const AppModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="appmodal">
      <MdDehaze onClick={openModal} className='open'/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div ref={(_subtitle) => (subtitle = _subtitle)} className="close">
          <MdClose onClick={closeModal} />
        </div>

        <MobileNavbar />
      </Modal>
    </div>
  );
};

export default AppModal;
