import React from 'react';
import './home.css';

import Navbar from '../../components/navBar/Navbar';
import SearchBar from '../../components/searchBar/SearchBar';
import CronList from '../../components/cronList/CronList';
import Signup from '../../components/siginup/Signup'



const Home = () => {
  return (
    <div>
      <Signup />
      <Navbar />
      <SearchBar />
      <CronList />
   
    </div>
  )
}

export default Home