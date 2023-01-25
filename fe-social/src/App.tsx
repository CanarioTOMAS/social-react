import React from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/formRegister/formRegister.tsx';
import { FormRegister } from './pages/formRegister/formRegister';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormRegister/>
      </header>
    </div>
  );
}

export default App;
