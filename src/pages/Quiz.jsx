import React, { useState } from 'react'
import { Typography, Row, Col, Statistic, Image, Radio, Space,Select  } from 'antd';
import ResultCountdown from './ResultCountdown';
import Result from './Result';
import { Alert } from 'antd';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import {questions} from '../constants/constants'
import { useEffect } from 'react';

const {Group} = Radio;
const { Countdown } = Statistic;


const Quiz = () => {
  const [valueMcq, setValueMcq] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showEndCount, setShowEndCount] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [alterType, setAlertType] = useState("")
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(0)


  const handleQuestionClick = async()=>{
    if(currentQuestion<questions.length-1){
      setCurrentQuestion(prev=>prev+1)
    }else{
      setShowEndCount(true)
    }
  }
  

  

  const handleMcq = (e) => {
    setValueMcq(e.target.value);
  };

  const onFinish = () => {
    const nextQuestion = currentQuestion + 1;
    if(currentQuestion<questions.length-1){
      setCurrentQuestion(nextQuestion)
    }else{
      setShowEndCount(true)
    }
  };



  const handleAnswers = async(is_correct)=>{


        if(is_correct===true){
          setScore(score+1)
        }

        if(currentQuestion<questions.length-1){
          setCurrentQuestion(prevValue=>prevValue+1)
        }else{
          const totalQuestions = questions.length-1
          const total = score/totalQuestions
          setResult(total*100)
          setShowEndCount(true)
        }
  }




  return (
    <>
      {showEndCount ? (
        <>
          <ResultCountdown result={result} />
        </>
      ):(
        <>
      <div className="container-fluid quiz_main_container">
        {/* <Alert message="Success Text" type={`${alterType}`} /> */}
        <div className="result_header">
          <div className="quiz_timer_box mt-2">
              <Countdown className="quiz_timer_text" onFinish={onFinish} format={"mm:ss"} value={Date.now() + 120 * 1000} />
          </div>
      </div>
      <div className="row mt-4">
        <div className="col quiz_col_main mmc">
           <div className="question_number mmc">
                <h4 className="question_num_text">
                    {currentQuestion + 1}/{questions.length}
                </h4>
           </div>
           <div className="question_text mmc">
           {questions[currentQuestion]?.questions[0]?.body.length>=62 ? (
            <h4 className="question_text_main mt-4 mb-5">
                    {questions[currentQuestion]?.questions[0]?.body}
            </h4>
           ):(
            <h4 className="question_text_main">
                    {questions[currentQuestion]?.questions[0]?.body}
            </h4>
           )}
            
           </div>
        </div>
      </div>
      {questions[currentQuestion]?.questions[0]?.question_type==="image" ? (
        <>
        <Row gutter={[10,10]} className="mmc img_question_row">
        {questions[currentQuestion]?.questions[0]?.answers?.map((answer)=>(
          <Col xs={24} sm={24} lg={6} key={answer?._id} className={`image_question_col ${questions[currentQuestion]?.questions[0]?.body.length>=80 && 'mt-5'}`}>
            <motion.div className="image_question_img mmc"
             whileHover={{ scale: 1.04 }}
             whileTap={{ scale: 0.9 }}
            >
               <Image
                 width={498}
                 src={answer?.answer}
                 className="image_quest_real_img"
                 preview={false}
                 onClick={()=>handleAnswers(answer?.is_correct)}
               />
            </motion.div>
          </Col>
        ))}
      </Row>

        </>
      ):questions[currentQuestion]?.questions[0]?.question_type==="text" ?(
        <>
        <Row gutter={[10,10]} className="mmc img_question_row">
        {questions[currentQuestion]?.questions[0]?.answers?.map(answer=>(
          <Col xs={24} sm={24} lg={24} key={answer?._id} className="image_question_col">
            <div className="mcq_questions mmc">
            <Group onChange={handleMcq} value={valueMcq}>
              <Space direction="vertical">
                <Radio onClick={()=>handleAnswers(answer?.is_correct)} value={answer?.answer} className="mcq_btn">
                  <h4 className="radio_mcq_text">
                    {answer?.answer}
                  </h4>
                </Radio>
              </Space>
            </Group>
            </div>
          </Col>
          ))}
        </Row>

        </>
      ):(
        <>
        <Row gutter={[10,10]} className="mmc img_question_row">
        {questions[currentQuestion]?.questions[0]?.answers?.map(answer=>(
          <Col xs={24} sm={24} lg={24} xl={6} key={answer?._id} className="image_question_col mmc gutter-row">
            <motion.div className="code_question_box"
             whileHover={{ scale: 1.04 }}
             whileTap={{ scale: 0.9 }}
             onClick={()=>handleAnswers(answer?.is_correct)}
            >
            <pre>
              <code className="code_style">
                  {answer?.answer}
              </code>
            </pre>

            </motion.div>
          </Col>
          ))}
        </Row>

        </>
      )}
      

      <Row gutter={[10,10]} className="mmc skip_this_question_row mt-16">
          <Col xs={24} sm={24} lg={6} className="skip_this_question_col">
            <div className="skip_quest mmc" >
               <Link onClick={()=>handleQuestionClick()} to={`/`} className="skip_me">
                  Skip this question
               </Link>
            </div>
          </Col>
      </Row>
    </div>
        </>
      )}
    </>
  )
}

export default Quiz