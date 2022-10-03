import './App.css';
import { useEffect, useState } from 'react';
import {Routes,Route,useNavigate  } from "react-router-dom";
import {StartingCountdown,Quiz} from './pages/index'


function App() {
  const [startCount, setStartCount] = useState(5)
  const navigate = useNavigate()

  useEffect(()=>{
    startCount > 0 && setTimeout(() => setStartCount(startCount - 1), 1000);
  },[startCount])



  return (
    <div className="app container-fluid">
    <Routes>
      {startCount===0 ?(
        <Route exact path="/" element={<Quiz />} />
      ):(
        <Route exact path="/" element={<StartingCountdown startCount={startCount} />} />
      )}
    </Routes>
    </div>
  );
}

export default App;
