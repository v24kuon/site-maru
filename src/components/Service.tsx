import ServiceImage1 from '../images/service_logo1.webp';
import ServiceImage2 from '../images/service_logo2.webp';

const Service = () => (
  <div className="container mx-auto px-4 py-12">
    <h2 className="font-black text-xl mb-8">SERVICE</h2>
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
      <a
        href="https://renovation.marufuku-kyoto.jp/"
        className="justify-self-start"
      >
        <img src={ServiceImage1} alt="サービスロゴ画像1" />
      </a>
      <a href="https://marufukusansyou.com/" className="justify-self-start">
        <img src={ServiceImage2} alt="サービスロゴ画像2" />
      </a>
    </div>
  </div>
);

export default Service;
