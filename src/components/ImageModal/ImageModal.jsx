import Modal from "react-modal";
const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div>
          <img src={imageUrl} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
