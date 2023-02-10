import { useParams, Route, Link } from 'react-router-dom';
import harvardArt from '../../data/harvardArt';

const GalleryView = () => {
  // return (<h1>Hello from GalleryView</h1>)
  const { galleryId } = useParams();
  const galleries = harvardArt.records;
};

export default GalleryView;
