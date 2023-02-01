import React from 'react';
import logo from './logo.svg';
import './App.css';
import './pages/formRegister/formRegister.tsx';
import { FormRegister } from './pages/formRegister/formRegister';
import { FormForgotPassword } from './pages/forgot-password/form-forgotpassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormForgotPassword/>
        <FormRegister/>
      </header>
    </div>
  );
}

export default App;
