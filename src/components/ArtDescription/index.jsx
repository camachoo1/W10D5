import { Link, useParams } from 'react-router-dom';

const ArtDescription = ({ gallery }) => {
  const { galleryId, artId } = useParams();

  let currentArt = gallery.objects.find((obj) => obj.id === +artId);
  return (
    <>
      <h2>
        <Link to={`/galleries/${galleryId}`}>
          Back to the {gallery.name} Gallery
        </Link>
      </h2>
      {currentArt.images.map((photo) => {
        return (
          <div className='img-div' key={photo.idsid}>
            <img
              alt={`${photo.description}`}
              src={`${photo.baseimageurl}`}
            />
            <p>{`${currentArt.title}, ${currentArt.dated}`}</p>
            <p>{`${currentArt.period}`}</p>
            <p>Provenance: {currentArt.provenance}</p>
            <p>{currentArt.medium}</p>
            {currentArt.commentary ? (
              <p>{currentArt.commentary}</p>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default ArtDescription;
