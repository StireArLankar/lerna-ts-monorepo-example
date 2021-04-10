import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { multiply } from '@test-org/utils';
import { Bold } from '@test-org/react';
import { Test } from '~/components/Test';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount(count => count + 3)}>
            count is: {count}
          </button>
        </p>
        <Test />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React {multiply(2, 3)}
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <Bold message="bold" />
      </header>
    </div>
  );
}

export default App;
