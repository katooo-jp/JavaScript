import logo from './logo.svg';
import './App.css';
// import Basic1 from './components/Basic1';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
// import TimeContainer from './components/TimerContainer';
import ApiFatch from './components/ApiFetch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic1 /> */}
        {/* <Basic2 /> */}
        {/* <BasicUseEffect /> */}
        {/* <TimeContainer /> */}
        <ApiFatch />
      </header>
    </div>
  );
}

export default App;
