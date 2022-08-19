import useEstate from '../hook/useEstate';

const LandPost = () => {
  const { PostResults } = useEstate(
    'https://marufukusansyou.com/wp-json/wp/v2/property?figure=15',
  );

  return (
    <a href={PostResults.postLink} className="w-full">
      <img
        src={PostResults.postImage}
        alt="売り土地サムネイル"
        className="w-full"
      />
      <p>{PostResults.postTitle}</p>
    </a>
  );
};

export default LandPost;
