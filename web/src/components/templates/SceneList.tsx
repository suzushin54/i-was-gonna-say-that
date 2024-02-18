"use client";

import React, { useEffect, useState } from 'react';
import styles from './SceneList.module.css';
import { Scene } from '@/types/scene';
import { formatDate } from '@/helper/formatDate';

export const SceneList: React.FC = () => {
  const [scenes, setScenes] = useState<Scene[]>([]);

  useEffect(() => {
    const fetchScenes = async () => {
      const response = await fetch('http://localhost:4000/scenes');
      const data = await response.json();
      setScenes(data);
    };

    fetchScenes();
  }, []);

  return (
    <table className={styles.sceneTable}>
      <thead>
      <tr>
        <th>ID</th>
        <th>Scene Name</th>
        <th>Note</th>
        <th>CreatedAt</th>
        <th>UpdatedAt</th>
      </tr>
      </thead>
      <tbody>
      {scenes.map(scene => (
        <tr key={scene.id}>
          <td>{scene.id}</td>
          <td>{scene.name}</td>
          <td>{scene.note}</td>
          <td>{formatDate(scene.createdAt)}</td>
          <td>{formatDate(scene.updatedAt)}</td>
        </tr>
      ))}
      </tbody>
    </table>

  );
};
