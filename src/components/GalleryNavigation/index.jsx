import { NavLink } from 'react-router-dom';
import harvardArt from '../../data/harvardArt';
import './GalleryNavigation.css'

const GalleryNavigation = () => {
  const galleries = harvardArt.records;
  return (
    <nav>
      <div>
        <h1>Galleries</h1>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div id='nav-galleries'>
        {galleries.map((gallery) => {
          return (
            <div key={gallery.id} className='gallery-link'>
              <NavLink to={`/galleries/${gallery.id}`}>
                {gallery.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default GalleryNavigation;
