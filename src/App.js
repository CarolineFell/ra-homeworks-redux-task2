import React from 'react';
import Header from './components/Header/Header';
import ServiceAdd from './components/ServiceAdd/ServiceAdd';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceFilter from './components/ServiceFilter/ServiceFilter';
import './App.css';

function App() {
  return (<>
    <Header />
    <div className="services">
      <ServiceAdd />
      <ServiceList />
      <ServiceFilter />
    </div>
  </>);
}

export default App;