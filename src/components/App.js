import React from 'react';

import '../styles/App.css';

function App({appName}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{appName}</h1>
      </header>
    </div>
  );
}

export default App;
