import navbarLogo from '../images/navbar_logo.webp';

const Navbar = () => (
  <header className="px-1 sm:px-5 pt-3 pb-2 sticky top-0 bg-white z-10">
    <div>
      <a href="https://marufukusansyou.co.jp/">
        <img src={navbarLogo} alt="ヘッダーロゴ" className="inline-block" />
      </a>
    </div>
    <h1 className="max-w-screen-2xl mx-auto text-gray-600 text-center sm:text-left text-xs sm:text-base ">
      まるふく産商株式会社 | 住宅販売・リノベーション・建築・不動産
    </h1>
  </header>
);

export default Navbar;
