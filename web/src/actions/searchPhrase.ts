"use server";

export async function searchServerAction(formData: FormData) {

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
