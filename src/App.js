import logo from './logo.svg';
import './App.css';
import Form_control from './components/Form_control';
import Mail_velidation from './components/Mail_velidation/Mail_velidation';
import Labb_lo from './components/Labb_lo/Labb_lo';

function App() {
  return (
    <div className="App">
      <Mail_velidation/>
      <Form_control/>
      <Labb_lo/>
    </div>
  );
}

export default App;
