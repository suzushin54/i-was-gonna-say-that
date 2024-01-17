"use server";

export async function searchServerAction(formData: FormData) {
  console.log('検索クエリ:', formData.get('query'));
  console.log('searchServerActionが呼び出されました。'); // ログ

  // ... 以降の処理
  // 動作確認用のダミーデータを返却
  return {
    phrases: [
      "Phrase 1",
      "Phrase 2",
      "Phrase 3"
    ]
  };
}
