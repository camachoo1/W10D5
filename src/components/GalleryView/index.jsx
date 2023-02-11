import { useParams, Route, Link } from 'react-router-dom';
import harvardArt from '../../data/harvardArt';
import ArtImageTile from '../ArtImageTile';
import './GalleryView.css';

const GalleryView = () => {
  // return (<h1>Hello from GalleryView</h1>)
  const { galleryId } = useParams();
  const galleries = harvardArt.records;
  const currentGallery = galleries.find(
    (el) => el.gallerynumber === galleryId
  );
  return (
    <>
      <Route exact path={`/galleries/${currentGallery.id}`}>
        <h2>{`${currentGallery.name}: ${currentGallery.theme}`}</h2>
        <p>{`${currentGallery.labeltext}`}</p>
        <div className='art-container'>
          {currentGallery.objects.map((obj) => {
            return (
              <Link
                key={obj.id}
                to={`/galleries/${currentGallery.id}/art/${obj.id}`}
              >
                <ArtImageTile art={obj} />
              </Link>
            );
          })}
        </div>
      </Route>
    </>
  );
};

export default GalleryView;
