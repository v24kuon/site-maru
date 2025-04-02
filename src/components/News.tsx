import RenovationNews from './RenovationNews';
import EstateNews from './EstateNews';
import RemodelingNews from './RemodelingNews';

const News = () => (
  <div className="bg-[#efece9] py-8">
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 lg:grid-cols-2 justify-items-center">
      <div>
        <h2 className="font-black text-xl mb-8">NEWS</h2>
        <RenovationNews />
        <EstateNews />
        <RemodelingNews />
      </div>
      <div>
        <iframe
          className="aspect-video max-w-full"
          width="600"
          src="https://www.youtube.com/embed/iqb4sinfCRM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

export default News;
