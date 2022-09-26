import React, { useState } from 'react'
import { Typography, Row, Col, Statistic, Image, Card,Input, Avatar, Radio, Space,Select  } from 'antd';
import moment from 'moment'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import {questions} from '../constants/constants'

const {Group} = Radio;
const { Countdown } = Statistic;
const { Option } = Select;


const Quiz = () => {
  const [imageAnswer,setImageAnswer] = useState(false)
  const [codeAnswer,setCodeAnswer] = useState(false)
  const [valueMcq, setValueMcq] = useState(false);
  const [mcqAnswer, setMcqAnswer] = useState(false);

  console.log(codeAnswer)


  const handleMcq = (e) => {
    console.log('radio checked', e.target.value);
    setValueMcq(e.target.value);
  };

  const onFinish = () => {
    console.log('finished!');
  };

  const onChange = (val) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  }
  

  return (
    <>
      {questions[0]?.map((question)=>(
        <div className="container-fluid quiz_main_container">
    <div className="result_header">
          <div className="quiz_timer_box mt-2">
              <Countdown className="quiz_timer_text" format={"mm:ss"} value={Date.now() + 120 * 1000} onChange={onChange} />
          </div>
      </div>
      <div className="row mt-4">
        <div className="col quiz_col_main mmc">
           <div className="question_number mmc">
                <h4 className="question_num_text">
                    {question?.questionNumber}/{questions.length}
                </h4>
           </div>
           <div className="question_text mmc">
               <h4 className="question_text_main">
                    {question?.questions[0]?.body}
                </h4>
           </div>
        </div>
      </div>
      {question?.questions[0]?.question_type==="image" ? (
        <>
        <Row gutter={[10,10]} className="mmc img_question_row">
        {question?.questions[0]?.answers?.map((answer)=>(
          <Col xs={24} sm={24} lg={6} key={answer?._id} className="image_question_col"  style={{padding:'20px',paddingLeft:'25px'}}>
            <motion.div className="image_question_img mmc"
             whileHover={{ scale: 1.04 }}
             whileTap={{ scale: 0.9 }}
            >
               <Image
                 width={498}
                 src={answer?.answer}
                 className="image_quest_real_img"
                 preview={false}
                 onClick={()=>setImageAnswer(answer?.is_correct)}
               />
            </motion.div>
          </Col>
        ))}
      </Row>

        </>
      ):question?.questions[0]?.question_type==="text" ?(
        <>
        <Row gutter={[10,10]} className="mmc img_question_row">
        {question?.questions[0]?.answers?.map(answer=>(
          <Col xs={24} sm={24} lg={24} key={answer?._id} className="image_question_col ">
            <div className="mcq_questions mmc">
            <Group onChange={handleMcq} value={valueMcq} className="">
              <Space direction="vertical" className="">
                <Radio onClick={()=>setMcqAnswer(answer?.is_correct)} value={answer?.answer} className="mcq_btn">
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
        {question?.questions[0]?.answers?.map(answer=>(
          <Col xs={24} sm={24} lg={24} xl={6} key={answer?._id} className="image_question_col mmc gutter-row"  style={{padding:'20px',paddingLeft:'25px'}}>
            <motion.div className="code_question_box"
             whileHover={{ scale: 1.04 }}
             whileTap={{ scale: 0.9 }}
             onClick={()=>setCodeAnswer(answer?.is_correct)}
            >
              <h4 className="code_text">
                {answer?.answer}
              </h4>
            </motion.div>
          </Col>
          ))}
        </Row>

        </>
      )}
      

      <Row gutter={[10,10]} className="mmc skip_this_question_row mt-16">
          <Col xs={24} sm={24} lg={6} className="skip_this_question_col"  style={{padding:'20px',paddingLeft:'25px'}}>
            <div className="skip_quest mmc">
               <Link to={`/`} className="skip_me">
                  Skip this question
               </Link>
            </div>
          </Col>
      </Row>
    </div>
      ))}
    </>
  )
}

export default Quiz