import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Loader from './Components/Loader';
import ValentinesExperience from './Components/ValentinesExperience.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/valentines" element={<ValentinesExperience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
