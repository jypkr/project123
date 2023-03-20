import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cron from './pages/cron/Cron';
import Signin from './pages/signin/Siginin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/cron" element={<Cron/>} />
      </Routes>
    </Router>
  );
}

export default App;
