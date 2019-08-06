import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          todo
        </p>
      </header>
    </div>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

export default App;
