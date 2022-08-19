import LinkImage1 from '../images/link_image1.webp';
import LinkImage2 from '../images/link_image2.webp';
import LinkImage3 from '../images/link_image3.webp';
import LinkImage4 from '../images/link_image4.webp';
import LinkImage5 from '../images/link_image5.webp';

const LinkImage = () => (
  <div className="container mx-auto py-4 text-center">
    <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mb-4 text-gray-500">
      京丹後の住宅・リフォーム・不動産の
      <br className="sm:hidden" />
      ご相談は、まるふく産商へ
    </h2>
    <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center p-4">
      <a href="http://www.marufuku-kyoto.jp/">
        <img src={LinkImage1} alt="リンクロゴ画像1" />
      </a>
      <a href="https://renovation.marufuku-kyoto.jp/">
        <img src={LinkImage2} alt="リンクロゴ画像2" />
      </a>
      <a href="https://marufukusansyou.com/figure/building/">
        <img src={LinkImage3} alt="リンクロゴ画像3" />
      </a>
      <a href="https://marufukusansyou.com/rent/">
        <img src={LinkImage4} alt="リンクロゴ画像4" />
      </a>
      <a href="https://marufukusansyou.com/">
        <img src={LinkImage5} alt="リンクロゴ画像5" />
      </a>
    </div>
  </div>
);

export default LinkImage;
