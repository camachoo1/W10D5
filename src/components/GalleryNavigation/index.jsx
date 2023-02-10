import { NavLink } from 'react-router-dom';
import harvardArt from '../../data/harvardArt';
import './GalleryNavigation.css';

const GalleryNavigation = (props) => {
  const galleries = harvardArt.records;
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <h1>Galleries</h1>
      <ul id='nav-galleries'>
        {galleries.map((gallery) => {
          return (
            <li key={gallery.id} className='gallery-link'>
              <NavLink to={`/galleries/${gallery.id}`}>
                {gallery.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default GalleryNavigation;
