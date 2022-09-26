import './App.css';
import { useEffect, useState } from 'react';
import {Routes,Route,useNavigate  } from "react-router-dom";
import {motion} from 'framer-motion'
import {questions} from './constants/constants'
import {StartingCountdown,Quiz,Result,ResultCountdown} from './pages/index'


function App() {
  const [startCount, setStartCount] = useState(5)
  const [resultCount, setResultCount] = useState(5)
  const navigate = useNavigate()

  useEffect(()=>{
    startCount > 0 && setTimeout(() => setStartCount(startCount - 1), 1000);
  },[startCount])

  useEffect(()=>{
    resultCount > 0 && setTimeout(() => setResultCount(resultCount - 1), 1000);
  },[resultCount])

  // console.log(startCount)


  return (
    <div className="app container-fluid">
    <Routes>
      {startCount===0 ?(
        <>attempts_allowed
        {/* {navigate('/quiz')} */}
        <Route exact path="/" element={
          <>
              <Quiz />
          </>
        } />
        </>
      ):(
        <Route exact path="/" element={<StartingCountdown startCount={startCount} />} />
      )}

        {/* <ResultCountdown resultCount={resultCount}/> */}

        {/* <Result resultNumber={70}/> */}

    </Routes>
    </div>
  );
}

export default App;
