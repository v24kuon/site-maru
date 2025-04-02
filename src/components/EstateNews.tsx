import useNews from '../hook/useNews';

const EstateNews = () => {
  const { NewsResults } = useNews(
    'https://marufukusansyou.com/wp-json/custom/v2/news',
  );

  return (
    <div className="mb-3">
      <p className="bg-gray-600 text-white inline-block font-medium px-2 py-1 mb-1">
        不動産情報
      </p>
      {NewsResults.map((news) => (
        <div key={news.id}>
          <a href={news.url} className="flex gap-x-4 flex-col sm:flex-row">
            <p className="whitespace-nowrap">{news.date.slice(0, 10)}</p>
            <p>{news.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default EstateNews;
