import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormForgotPassword } from './pages/forgot-password/form-forgotpassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormForgotPassword/>
      </header>
    </div>
  );
}

export default App;
