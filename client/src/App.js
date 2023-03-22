import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home/Home';
import Cron from './pages/cron/Cron';
import Signin from './pages/signin/Siginin';


function App() {
  return (
    <Router>
      <Link to='/'> Home </Link>
      <Link to='/Cron'> Cron </Link>
      <Link to='/Signin'> Sign in </Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/cron" element={<Cron/>} />
      </Routes>
    </Router>
  );
}

export default App;
