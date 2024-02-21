import React from 'react';
import Header from '@/components/organisms/Header';
import { SceneList } from '@/components/organisms/SceneList';
import styles from "@/app/page.module.css";

export default function ScenesPage() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <SceneList />
      </div>
    </main>
  );
}
