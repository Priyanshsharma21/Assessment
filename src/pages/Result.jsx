import React, { useEffect, useState } from 'react'
import { Progress } from 'antd';
import {advices} from '../constants/constants'
import { Link } from 'react-router-dom';


const Result = ({resultNumber}) => {
  const [advice,setAdvice] = useState('')
  const [subAdvice,setSubAdvice] = useState('')

  useEffect(()=>{
    if(resultNumber>=90 && resultNumber<=100){
      setAdvice(advices[0].advice)
      setSubAdvice(advices[0].subAdvice)
    }else if(resultNumber>=80 && resultNumber<90){
      setAdvice(advices[1].advice)
      setSubAdvice(advices[1].subAdvice)
    }else if(resultNumber>=70 && resultNumber<80){
      setAdvice(advices[2].advice)
      setSubAdvice(advices[2].subAdvice)
    }else if(resultNumber>=60 && resultNumber<70){
      setAdvice(advices[3].advice)
      setSubAdvice(advices[3].subAdvice)
    }else if(resultNumber>=50 && resultNumber<60){
      setAdvice(advices[4].advice)
      setSubAdvice(advices[4].subAdvice)
    }else{
      setAdvice(advices[5].advice)
      setSubAdvice(advices[5].subAdvice)
    }  
  },[resultNumber])


  return (
    <div className="container-fluid sc_main_col mmc">
      <div className="result_header">
          <div className="retake_btn_box">
               <Link to={`/`} className="retake_btn_text">
                  Retake
                </Link>
          </div>
      </div>
      <div className="row">
        <div className="result col mmc">
          <div className="result_progress mmc">
          <Progress
            type="circle"
            strokeColor={{
                '0%': '#00B879',
                '100%': '#00B879',
            }}
            trailColor="#9FDFBE"
            strokeLinecap='round'
            percent={resultNumber}
            width={250}
            format={percent => `${`${percent}/100`}`}
          />

          <div className="adv mmc">
            <h4 className="adv_text mt-4">
              {advice && advice}
            </h4>
            <h4 className="sub_adv_text">
              {subAdvice && subAdvice}
            </h4>

            <div className="share_score_btn mt-5">
              <Link to={`/`} className="share_link ml-1">
                Share your score
              </Link>
            </div>
          </div>

          <div className="back_to_home mmc mt-3">
              <Link to={`/`} className="back_home_link">
                Back to home
              </Link>
          </div>

          <div className="message_to_user mmc mt-5">
              <h4 className="message_to_user_text mmc">
                We have already shared your score with the creator.
              </h4>
          </div>

          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Result