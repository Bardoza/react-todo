import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Todos from './components/Todos'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <Todos title="Juegos" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
