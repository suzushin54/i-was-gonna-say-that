"use client";

import React, { useState } from 'react';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { searchServerAction } from '@/actions/searchPhrase';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  // const [phrases, setPhrases] = useState([]); // 検索結果を保存する状態
  const [phrases, setPhrases] = useState<string[]>([]); // 状態の型を string[] として指定

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('フォームが送信されました。'); // ログ1
    const formData = new FormData(event.currentTarget);
    console.log('送信されたデータ:', Array.from(formData.entries())); // ログ2
    const result = await searchServerAction(formData);
    console.log('サーバーアクションからの応答:', result); // ログ3
    setPhrases(result.phrases);
    // event.preventDefault(); // デフォルトのフォーム送信を阻止
    // const result = await searchServerAction(new FormData(event.currentTarget));
    // setPhrases(result.phrases); // 検索結果を状態に保存
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name="query"
        />
        <Button text="Search" />
      </form>

      {/* 検索結果の表示 */}
      {phrases.map((phrase, index) => (
        <div key={index}>{phrase}</div>
      ))}
    </div>
  );
};

export default SearchBar;
