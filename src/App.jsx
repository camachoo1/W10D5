import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import harvardArt from './data/harvardArt';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  // return <h1>Hello from App</h1>;
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path='/error' render={() => <h1>Page Not Found</h1>} />
        <Route path='/galleries/:galleryId' component={GalleryView} />
        <Route exact path='/'>
          <h2>Harvard Art Museum</h2>
          <p>Look, but dont touch</p>
        </Route>
        <Redirect to='/error/' />
      </Switch>
    </div>
  );
}

export default App;
