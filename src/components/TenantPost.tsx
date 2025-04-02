import useEstate from '../hook/useEstate';

const TenantPost = () => {
  const { PostResults } = useEstate(
    'https://marufukusansyou.com/wp-json/wp/v2/rent_tenant?figure=27',
  );

  return (
    <a href={PostResults.postLink} className="w-full">
      <img
        src={PostResults.postImage}
        alt="テナントサムネイル"
        className="w-full"
      />
      <p>{PostResults.postTitle}</p>
    </a>
  );
};

export default TenantPost;
