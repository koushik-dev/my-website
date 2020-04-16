import React from 'react';
import Header from './components/header/header';
import './App.scss';
import CreateRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <CreateRoutes />
    </div>
  );
}

export default App;
