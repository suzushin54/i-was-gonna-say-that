import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from './Modal.module.css';

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = (
  {isOpen, onClose, children}
) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: '15px',
            top: '15px',
            backgroundColor: 'transparent',
            color: 'white',
            '&:hover': {
              backgroundColor: '#b00224',
            },
          }}
          size="small"
        >
          <CloseIcon sx={{ fontSize: '16px' }} />
        </IconButton>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalComponent;
