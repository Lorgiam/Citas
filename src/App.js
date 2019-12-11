import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <Header titulo='Administrador Pacientes Veterinaria'></Header>
        <row className='row'>
          <div className='col-md-10 mx-auto'>
            <NuevaCita></NuevaCita>
          </div>
        </row>
      </div>
    );
  }
}

export default App;
