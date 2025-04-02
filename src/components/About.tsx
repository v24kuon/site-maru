import AboutImage from '../images/about_image1.webp';

const About = () => (
  <div className="py-12">
    <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mb-12 text-center text-gray-500">
      会社概要
    </h2>
    <div className="container mx-auto p-4">
      <div className="lg:w-3/4 xl:w-3/5 bg-[#f5f4f4] grid gap-4 grid-cols-4 sm:grid-cols-5 mx-auto py-12 text-sm sm:text-base mb-12">
        <p className="sm:col-start-2 justify-self-center sm:justify-self-start">
          社名
        </p>
        <p className="col-span-3">まるふく産商株式会社</p>
        <p className="sm:col-start-2 justify-self-center sm:justify-self-start">
          住所
        </p>
        <p className="col-span-3">
          〒629-3101
          <br />
          京都府京丹後市網野町網野747番地
        </p>
        <p className="sm:col-start-2 justify-self-center sm:justify-self-start">
          創業
        </p>
        <p className="col-span-3">昭和23年4月10日</p>
        <p className="sm:col-start-2 justify-self-center sm:justify-self-start">
          代表者
        </p>
        <p className="col-span-3">福島 和彦</p>
        <p className="sm:col-start-2 justify-self-center sm:justify-self-start">
          資本金
        </p>
        <p className="col-span-3">28,000,000円</p>
        <p className="sm:col-start-2 justify-self-center sm:justify-self-start">
          事業内容
        </p>
        <p className="col-span-3">
          建築資材販売
          <br />
          鋼製・木製建具・住宅設備機器等の販売及び施工
          <br />
          内装仕上げ工事 リフォーム等建築業
          <br />
          宅地建物取引業
          <br />
          赤外線カメラによる、雨漏り建物診断
          <br />
          インテリア・家具販売 他
        </p>
        <p className="sm:col-start-2 justify-self-center sm:justify-self-start">
          取引銀行
        </p>
        <p className="col-span-3">
          京都北都信用金庫・網野支店
          <br />
          京都銀行・網野支店 他
        </p>
      </div>
      <img src={AboutImage} alt="会社概要画像" className="mx-auto" />
      <h2 className="font-bold lg:text-3xl md:text-2xl text-xl py-16 text-center text-gray-500">
        沿革
      </h2>
      <div className="lg:w-3/4 xl:w-3/5 border border-black grid gap-4 grid-cols-1 md:grid-cols-12 mx-auto mb-12 xl:p-8 lg:p-6 p-4 justify-items-start md:justify-items-center">
        <p className="lg:col-span-6 md:col-span-5 text-sm sm:text-base">
          昭和23年 福島木工開設
          <br />
          昭和40年 家具・建築資材の販売
          <br />
          昭和43年 株式会社へ組織変更
          <br />
          昭和47年 サッシ 販売開始
        </p>
        <p className="lg:col-span-6 md:col-span-7 text-sm sm:text-base">
          昭和50年 ＳＳパネル工場総築開始
          <br />
          平成13年 デコスドライ事業 開始
          <br />
          平成18年12月 東京南長崎マンション 経営開始
          <br />
          平成30年9月 ホテル丸福京都東山 オープン
        </p>
      </div>
      <h2 className="font-bold lg:text-3xl md:text-2xl text-xl py-16 text-center text-gray-500">
        ACCESS
      </h2>
      <iframe
        className="aspect-video max-w-full mx-auto mb-8"
        width="1000"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7042953218997!2d135.02418461525883!3d35.68428248019363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fffa537d7c66399%3A0x879f6faeb8f45ef!2z44CSNjI5LTMxMDEg5Lqs6YO95bqc5Lqs5Li55b6M5biC57ay6YeO55S657ay6YeO77yX77yU77yX!5e0!3m2!1sja!2sjp!4v1645427744469!5m2!1sja!2sjp"
        title="Google map"
      />
      <p className="text-left md:text-center text-sm sm:text-base mb-24">
        本社 〒629-3101 京都府京丹後市網野町網野747番地&ensp;
        <br className="md:hidden" />
        駐車場：あり&ensp;TEL：0120-029-150
      </p>
    </div>
  </div>
);

export default About;
