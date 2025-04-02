import useNews from '../hook/useNews';

const RemodelingNews = () => {
  const { NewsResults } = useNews(
    'https://www.marufuku-kyoto.jp//wp-json/custom/v2/news',
  );

  return (
    <div className="mb-3">
      <p className="bg-[#5b7f6e] text-white inline-block font-medium px-2 py-1 mb-1">
        リフォーム
      </p>
      {NewsResults.map((news) => (
        <div key={news.id}>
          <a href={news.url} className="flex gap-x-4 flex-col sm:flex-row mb-1">
            <p>{news.date.slice(0, 10)}</p>
            <p>{news.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};
export default RemodelingNews;
