import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  const [ctime,setCtime] = useState()
  const [cdate,setCdate] = useState()

const   updateTime=()=> {
  time = new Date().toLocaleTimeString();
  setCtime(time);
  date = new Date().toLocaleDateString();
  setCdate(date);

} 

  return (
    <div className="App">
     <h1>{ctime}</h1>
     <h1>{cdate}</h1>
     <button onClick={updateTime}>Click to update</button>
    </div>
  );
}

export default App;
