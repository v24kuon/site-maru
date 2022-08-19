import { useState, useEffect } from 'react';
import { RemodelingStateType } from '../types';

const useRemodeling = (url: string) => {
  const [RemodelingResults, setRemodeling] = useState<RemodelingStateType>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRemodeling(data))
      .catch(() =>
        alert(
          '投稿が読み込みませんでした。しばらく時間をおいてから再度お試しください。',
        ),
      );
  }, [url]);

  return { RemodelingResults };
};

export default useRemodeling;
