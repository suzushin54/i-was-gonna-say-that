"use client";

import React, { useEffect, useState } from 'react';
import { Scene } from '@/types/scene';

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
    <div>
      <h2>Scene List</h2>
      <ul>
        {scenes.map((scene) => (
          <li key={scene.id}>{scene.name}</li>
        ))}
      </ul>
    </div>
  );
};
