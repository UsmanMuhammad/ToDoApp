import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './add.png';
  
  class App extends React.Component {
    render() {
      return (
        <div className="app">
          <header className="app-header">
            <h1>todo</h1>
          </header>

          <div className="input">
            <input type="text" className="inputElement" />
            <button className="add">
                <img src={logo} />
            </button>
          </div>
        </div>
      );
    }
  }

  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );