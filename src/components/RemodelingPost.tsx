import useRemodeling from '../hook/useRemodeling';

const RemodelingPost = () => {
  const { RemodelingResults } = useRemodeling(
    'https://www.marufuku-kyoto.jp/wp-json/wp/api/post',
  );

  return (
    <div className="bg-[#fdfbfa] py-12">
      <div className="container mx-auto p-4">
        <h2 className="font-black text-xl mb-8">
          RENOVATION WORKS
          <span className="pl-2 font-black text-xs">-施工事例-</span>
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mb-4">
          {RemodelingResults.map((post) => (
            <div key={post.id}>
              <a href={post.url} className="w-full">
                <img
                  src={post.thumbnail}
                  alt="リフォームサムネイル"
                  className="w-full sm:h-64 max-h-full"
                />
                <p>{post.title}</p>
              </a>
            </div>
          ))}
        </div>
        <p className="text-right">
          <a href="https://www.marufuku-kyoto.jp/">&gt;More</a>
        </p>
      </div>
    </div>
  );
};

export default RemodelingPost;
