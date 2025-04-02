import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../images/slide1.webp';
import slide2 from '../images/slide2.webp';
import slide3 from '../images/slide3.webp';
import spSlide1 from '../images/sp_slide1.webp';
import spSlide2 from '../images/sp_slide2.webp';
import spSlide3 from '../images/sp_slide3.webp';

const Top = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 2000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <picture>
          <source srcSet={slide1} media="(min-width: 768px)" />
          <img src={spSlide1} alt="スライダー" className="w-full" />
        </picture>
      </div>
      <div>
        <picture>
          <source srcSet={slide2} media="(min-width: 768px)" />
          <img src={spSlide2} alt="スライダー" className="w-full" />
        </picture>
      </div>
      <div>
        <picture>
          <source srcSet={slide3} media="(min-width: 768px)" />
          <img src={spSlide3} alt="スライダー" className="w-full" />
        </picture>
      </div>
    </Slider>
  );
};

export default Top;
