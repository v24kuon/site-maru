import { useState, useEffect } from 'react';
import { PostStateType } from '../types';

const useEstate = (url: string) => {
  const [PostResults, setResults] = useState<PostStateType>({
    postLink: '',
    postTitle: '',
    postImage: '',
  });
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults({
          postLink: data[0].link,
          postTitle: data[0].title.rendered,
          postImage: data[0].thumbnail_url,
        });
      })
      .catch(() =>
        alert(
          '物件情報が読み込みませんでした。しばらく時間をおいてから再度お試しください。',
        ),
      );
  }, [url]);

  return { PostResults };
};

export default useEstate;
