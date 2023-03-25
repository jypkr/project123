import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cron from './pages/cron/Cron';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Cron/>} />
      </Routes>
    </Router>
  );
}

export default App;
