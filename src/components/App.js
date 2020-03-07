import React from 'react';
import LocationSearchInput from './LocationSearchInput';

import '../styles/App.css';

function App({appName}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{appName}</h1>
        <LocationSearchInput/>
      </header>
    </div>
  );
}

export default App;
