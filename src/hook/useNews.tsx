import { useState, useEffect } from 'react';
import { NewsStateType } from '../types';

const useNews = (url: string) => {
  const [NewsResults, setNews] = useState<NewsStateType>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(() =>
        alert(
          'ニュースが読み込みませんでした。しばらく時間をおいてから再度お試しください。',
        ),
      );
  }, [url]);

  return { NewsResults };
};

export default useNews;
