import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999, // Set the highest possible z-index value
    padding: '20px', // Add padding around the content
    borderRadius: '8px', // Add border radius to the modal
    maxWidth: '800px', // Set a maximum width for the modal
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Customize the overlay background color if needed
    zIndex: 9999, // Set the highest possible z-index value
  },
};

Modal.setAppElement('#__next');

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={onRequestClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#888',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
      </div>
      <div style={{ margin: '20px 0' }}>
        <img src={imageUrl} alt='Image' style={{ width: '100%' }} />
      </div>
    </Modal>
  );
};

export default ImageModal;
