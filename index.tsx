import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { IteratorTest } from './IteratorTest';

const App = () => {
  return (
    <div>
      <ul>
        <li>Addressing problems 04, 06, 08</li>
        <li>Implementing challenge goal, not required by interviewer.</li>
      </ul>
      <div>
        <h1>Welcome to Live coding interview </h1>
        <div />
        <h4>Question: </h4>
        <p style={{ fontSize: '16px' }}>
          1 - Create a Custom ReactHook to manipulate a string to display one
          character at the time of a string
        </p>
        <p style={{ fontSize: '16px' }}>
          2 - The Custom ReactHook will receive a string as a param
        </p>
        <p style={{ fontSize: '16px' }}>
          3 - It must return the current character, a function to move to the
          next character and a function to move back to the previous character
        </p>
        <p style={{ fontSize: '16px' }}>
          4 - Test the Custom ReactHook in the [index.tsx]
        </p>
        <IteratorTest />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
