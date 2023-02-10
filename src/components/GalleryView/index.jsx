import { useParams, Route } from 'react-router-dom';
import harvardArt from '../../data/harvardArt';

const GalleryView = () => {
  // return (<h1>Hello from GalleryView</h1>)
  const { galleryId } = useParams();
  const galleries = harvardArt.records;
  const currentGallery = galleries.find(
    (el) => el.gallerynumber === galleryId
  );
  return (
    <Route exact path={`/galleries/${currentGallery.id}`}>
      <h2>{`${currentGallery.name}: ${currentGallery.theme}`}</h2>
      <p>{`${currentGallery.labeltext}`}</p>
    </Route>
  );
};

export default GalleryView;
