import { BrowserRouter} from 'react-router-dom';
import './styles/index.css';
import Routing from './route/routes.jsx';
import LandingPage from './components/pages/LandingPage.jsx';

function App() {
  return (
    <BrowserRouter>
       <Routing/>
       {/* <div className="App">
          <LandingPage/>
       </div> */}
    </BrowserRouter>
  );
}

export default App;