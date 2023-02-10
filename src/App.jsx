import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from './data/harvardArt';
import { Route } from "react-router-dom";
import { Switch } from 'react-router-dom'

function App() {
  // return <h1>Hello from App</h1>;
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} />
    </div>
  )
}

export default App;
