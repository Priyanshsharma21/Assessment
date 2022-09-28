import React, { useEffect, useState } from 'react'
import { Progress } from 'antd';
import Result from './Result'

const ResultCountdown = ({result}) => {
  const [resultCount, setResultCount] = useState(5)
  const [showResult, setShowResult] = useState(false)

  useEffect(()=>{
    resultCount > 0 ? setTimeout(() => setResultCount(resultCount - 1), 1000) : setShowResult(true);
  },[resultCount])


  return (
    <>
      {!showResult ?(
      <div className="container-fluid">
          <div className="row">
            <div className="col sc_main_col mmc">

            <div className="sc_message mmc">
              <h4 className="cr_message_text">
              Calculating results
              </h4>
            </div>
      <Progress
          type="circle"
          strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
          }}
          percent={resultCount*20}
        width={90}
        format={percent => `${percent/20}`}
      />

      </div>
    </div>
    </div>
    ):(
      <Result resultNumber={result}/>
    )}
    </>
  )
}

export default ResultCountdown