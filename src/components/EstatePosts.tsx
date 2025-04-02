import BuildingPost from './BuildingPost';
import LandPost from './LandPost';
import RentPost from './RentPost';
import TenantPost from './TenantPost';

const EstatePosts = () => (
  <div className="bg-[#e7e7e6] py-12">
    <div className="container mx-auto p-4">
      <h2 className="font-black text-xl mb-8">
        WHAT&apos;S NEW
        <span className="pl-2 font-black text-xs">-新着物件情報-</span>
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mb-4">
        <BuildingPost />
        <LandPost />
        <RentPost />
        <TenantPost />
      </div>
      <p className="text-right">
        <a href="https://marufukusansyou.com/">&gt;More</a>
      </p>
    </div>
  </div>
);

export default EstatePosts;
