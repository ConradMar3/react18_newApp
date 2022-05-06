import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo1" alt="logo" />
        <img src={logo} className="App-logo2" alt="logo" />
        <p>
          ReactJS.V.18.0.1<code> Application Version_New </code> JSX.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.18
        </a>
        <p>New Features</p>
      </header>
    </div>
  );
}

export default App;
