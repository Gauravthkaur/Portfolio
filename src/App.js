import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Loader from './Components/Loader';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
