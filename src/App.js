import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Hooks Examples</p>
        <a className="App-link" href="/without-memo">
          Without Memo
        </a>
        <a className="App-link" href="/with-memo">
          With Memo
        </a>
        <a className="App-link" href="/without-callback">
          Without Callback
        </a>
        <a className="App-link" href="/with-callback">
          With Callback
        </a>
      </header>
    </div>
  );
}

export default App;
