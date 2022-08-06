import { infomatGet, infomatPost } from './api';
import './App.css';

function App() {
  //Using infomat fetch
  const data = {}
  const dataFromGet =  infomatGet("http://localhost", data)
  const dataFromPost = infomatPost("http://localhost", data)
  console.log(dataFromGet, dataFromPost);
  return (
    <div className="App">
       
    </div>
  );
}

export default App;
