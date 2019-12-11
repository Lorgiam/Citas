import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: [],
  };

  componentDidMount() {
    const citas = JSON.parse(localStorage.getItem('citas'));
    if (citas) {
      this.setState({
        citas,
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = (datos) => {
    const citas = [...this.state.citas, datos];

    this.setState({
      citas,
    });
  };

  eliminarCita = (id) => {
    const citasCopy = [...this.state.citas];
    const citas = citasCopy.filter((cita) => cita.id !== id);
    this.setState({
      citas,
    });
  };
  render() {
    return (
      <div className='container'>
        <Header titulo='Administrador Pacientes Veterinaria'></Header>
        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <NuevaCita crearNuevaCita={this.crearNuevaCita}></NuevaCita>
          </div>
          <div className='mt-5 col-md-10 mx-auto'>
            <ListaCitas
              eliminarCita={this.eliminarCita}
              citas={this.state.citas}
            ></ListaCitas>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
