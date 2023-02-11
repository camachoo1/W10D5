const ArtImageTile = ({ art }) => {
  return (
    <div>
      {art.images.map((image) => {
        return (
          <div key={image.idsid} className='image-wrap'>
            <img
              alt={image.copyright}
              src={`${image.baseimageurl}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ArtImageTile;
