import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Button from '@/components/atoms/Button';
import styles from './Modal.module.css';

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({isOpen, onClose}) => {
  const [phraseData, setPhraseData] = useState({scene: '', phrase: '', tags: ''});

  const handleSubmit = () => {
    // TODO: データ送信処理を実装する
    console.log(phraseData);

    // 処理が完了したらモーダルを閉じる
    onClose();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target as HTMLInputElement | HTMLTextAreaElement;
    setPhraseData({ ...phraseData, [id]: value });
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>新規フレーズ追加</h2>
        <div className={styles.formGroup}>
          <label htmlFor="scene" className={styles.label}>シーン:</label>
          <input
            type="text"
            id="scene"
            className={styles.input}
            value={phraseData.scene}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phrase" className={styles.label}>フレーズ:</label>
          <textarea
            id="phrase"
            className={styles.textarea}
            rows={3}  // 行数を指定
            value={phraseData.phrase}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tags" className={styles.label}>タグ:</label>
          <input
            type="text"
            id="tags"
            className={styles.input}
            value={phraseData.tags}
            onChange={handleInputChange}
          />
        </div>
        <Button text="保存" onClick={handleSubmit} variant="primary" />
        <Button text="閉じる" onClick={onClose} variant="secondary" />
      </div>
    </div>,
    document.body
  );
};

export default ModalComponent;
