import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Button from './components/Button';
import Input from './components/Input';

const Application = () => {

  // States
  const [name, setName] = useState('');

  // Events
  const onChange = (e) => {
    setName(e.target.value);
  };

  const reset = () => {
    setName('');
  };


  // Main App Render
  return (
    <main>
      <Input value={name} onChange={onChange} placeholder="Type your name"/>
      <Button onClick={reset}>Reset</Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));