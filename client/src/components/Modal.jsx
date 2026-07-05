function Modal({ children, onClose }) {
  return (
    <div
      className="modalOverlay"
      onClick={onClose}
    >
      <div
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="closeBtn"
          onClick={onClose}
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;