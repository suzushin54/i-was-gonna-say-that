import React from 'react';
import Header from '@/components/organisms/Header';
import styles from "@/app/page.module.css";
import {TagList} from "@/components/organisms/TagList";

export default function TagsPage() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <TagList />
      </div>
    </main>
  );
}
