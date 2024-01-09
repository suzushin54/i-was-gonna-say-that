import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>新規フレーズ追加</h2>
        <form>
          <div>
            <label htmlFor="scene">シーン:</label>
            <input type="text" id="scene" name="scene" />
          </div>
          <div>
            <label htmlFor="phrase">フレーズ:</label>
            <input type="text" id="phrase" name="phrase" />
          </div>
          <div>
            <label htmlFor="tags">タグ:</label>
            <input type="text" id="tags" name="tags" />
          </div>
          <button type="submit">保存</button>
          <button type="button" onClick={onClose}>閉じる</button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ModalComponent;
