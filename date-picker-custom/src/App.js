import './App.css';
import { useState } from 'react';
import DatePicker from './components/DatePicker/index.js';

function App() {
  return (
    <div className="App">
      <DatePicker minDate={new Date(2022, 5, 22)} maxDate={new Date(2022, 10, 22)} />
    </div>
  );
}

export default App;
