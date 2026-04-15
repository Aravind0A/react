import logo from './logo.svg';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  let students = ["arv", "zor", "gok"];
  let navigate = useNavigate();
  
  let handleClick =()=>{
    navigate('/riya')
  }
  return (
    <div className="App">
      <ul>
        {students.map((names)=>{
          return <li key={names}><Link to={`/student/${names}`}>{names}</Link></li>
        })}
      </ul>
      <button onClick={handleClick}>redirect</button>
    </div>
  );
}

export default App;
