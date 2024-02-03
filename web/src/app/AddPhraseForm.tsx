import React, { useEffect, useState } from 'react';
import TagSelect from '@/components/molecules/TagSelect';
import Button from '@/components/atoms/Button';
import { Tag } from '@/types/tag'
import styles from './AddPhraseForm.module.css';

const AddPhraseForm: React.FC = () => {
  const [registeredTags, setRegisteredTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('http://localhost:4000/tags');
        const registeredTag: Tag[] = await response.json();
        setRegisteredTags(registeredTag);
      } catch (error) {
        console.error('Failed to fetch tags:', error);
      }
    };
    fetchTags();
  }, []);


  const [phraseData, setPhraseData] = useState({
    sceneName: '',
    phrase: '',
    japaneseTranslation: '',
    tags: ''
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/phrases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sceneName: phraseData.sceneName,
          phrase: phraseData.phrase,
          japaneseTranslation: phraseData.japaneseTranslation,
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
    const {id, value} = event.target as HTMLInputElement | HTMLTextAreaElement;
    setPhraseData({...phraseData, [id]: value});
  };

  return (
    <form>
      <h2>New Phrase</h2>
      <div className={styles.formGroup}>
        <label htmlFor="scene" className={styles.label}>Scene:</label>
        <input
          type="text"
          id="sceneName"
          className={styles.input}
          value={phraseData.sceneName}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="tags" className={styles.label}>Tags:</label>
        <TagSelect
          registeredTags={registeredTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
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
        <label htmlFor="japaneseTranslation" className={styles.label}>Japanese Translation:</label>
        <textarea
          id="japaneseTranslation"
          className={styles.textarea}
          rows={3}
          value={phraseData.japaneseTranslation}
          onChange={handleInputChange}
        />
      </div>
      <Button text="Save" onClick={handleSubmit} variant="primary" />
    </form>
  );
};

export default AddPhraseForm;
