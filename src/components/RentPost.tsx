import useEstate from '../hook/useEstate';

const RentPost = () => {
  const { PostResults } = useEstate(
    'https://marufukusansyou.com/wp-json/wp/v2/rent?figure=26',
  );

  return (
    <a href={PostResults.postLink} className="w-full">
      <img
        src={PostResults.postImage}
        alt="賃貸サムネイル"
        className="w-full"
      />
      <p>{PostResults.postTitle}</p>
    </a>
  );
};

export default RentPost;
