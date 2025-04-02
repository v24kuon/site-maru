const Footer = () => (
  <div className="bg-black text-white py-12">
    <div className="container mx-auto flex justify-between gap-4 flex-wrap mb-8 px-4">
      <div>
        <p className="mb-4">サイトマップ</p>
        <ul className="list-disc pl-8">
          <li>
            <a href="http://www.marufuku-kyoto.jp/">
              まるふく産商 ホームページ
            </a>
          </li>
          <li>
            <a href="https://www.marufuku-kyoto.jp/">建築・リフォーム</a>
          </li>
          <li>
            <a href="https://renovation.marufuku-kyoto.jp/">リノベーション</a>
          </li>
          <li>
            <a href="https://marufukusansyou.com/">不動産検索</a>
          </li>
        </ul>
      </div>
      <div>
        <p>
          まるふく産商株式会社
          <br />
          [本社]
          <br />
          〒629-3101
          <br />
          京都府京丹後市網野町網野747
          <br />
          TEL 0772-72-0570&ensp;FAX 0772-72-4331
          <br />
          <br />
          Copyright © まるふく産商株式会社 <br className="sm:hidden" />
          All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
