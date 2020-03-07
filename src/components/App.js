import React from 'react';
import LocationSearchForm from './LocationSearchForm';

import '../styles/App.css';

const App = ({appName}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{appName}</h1>
        <LocationSearchForm/>
      </header>
    </div>
  );
}

export default App;
