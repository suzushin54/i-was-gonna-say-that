import React, {useState} from 'react';
import Button from '@/components/atoms/Button';
import styles from './AddPhraseForm.module.css';

const AddPhraseForm: React.FC = () => {
  const [phraseData, setPhraseData] = useState({scene: '', phrase: '', tags: ''});

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/phrases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          scene: phraseData.scene,
          phrase: phraseData.phrase,
          tags: phraseData.tags.split(',').map(tag => tag.trim())
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Phrase added successfully');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target as HTMLInputElement | HTMLTextAreaElement;
    setPhraseData({ ...phraseData, [id]: value });
  };

  return (
    <form>
      <h2>New Phrase</h2>
      <div className={styles.formGroup}>
        <label htmlFor="scene" className={styles.label}>Scene:</label>
        <input
          type="text"
          id="scene"
          className={styles.input}
          value={phraseData.scene}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phrase" className={styles.label}>Phrase:</label>
        <textarea
          id="phrase"
          className={styles.textarea}
          rows={3}
          value={phraseData.phrase}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="tags" className={styles.label}>Tags:</label>
        <input
          type="text"
          id="tags"
          className={styles.input}
          value={phraseData.tags}
          onChange={handleInputChange}
        />
      </div>
      <Button text="Save" onClick={handleSubmit} variant="primary" />
    </form>
  );
};

export default AddPhraseForm;
