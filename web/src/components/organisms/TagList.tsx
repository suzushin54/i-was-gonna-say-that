"use client";

import React, { useEffect, useState } from 'react';
import styles from './SceneList.module.css';
import { Tag } from '@/types/tag';

export const TagList: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch('http://localhost:4000/tags');
      const data = await response.json();
      setTags(data);
    };

    fetchTags();
  }, []);

  return (
    <table className={styles.sceneTable}>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        {/*<th>CreatedAt</th>*/}
        {/*<th>UpdatedAt</th>*/}
      </tr>
      </thead>
      <tbody>
      {tags.map(tag => (
        <tr key={tag.id}>
          <td>{tag.id}</td>
          <td>{tag.tag}</td>
          {/*<td>{formatDate(scene.createdAt)}</td>*/}
          {/*<td>{formatDate(scene.updatedAt)}</td>*/}
        </tr>
      ))}
      </tbody>
    </table>
  );
};
