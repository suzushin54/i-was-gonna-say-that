/**
 * 日付文字列を指定されたフォーマットの文字列に変換します。
 * @param dateString - ISO形式の日付文字列
 * @returns フォーマットされた日付文字列
 */
export function formatDate(dateString: string | undefined): string {
  if (!dateString) {
    return '-';
  }

  const date = new Date(dateString);
  const year = date.getFullYear();
  // getMonth() は 0 から始まるため、1 を加える
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}
