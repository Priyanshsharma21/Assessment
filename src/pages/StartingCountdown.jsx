import React, { useState } from 'react'
import { Progress } from 'antd';

const StartingCountdown = ({startCount}) => {

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col sc_main_col mmc">

      <div className="sc_message mmc">
        <h4 className="sc_message_text">
            Starting in
        </h4>
    </div>


    <Progress
        type="circle"
        strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
        }}
        percent={startCount*20}
        width={90}
        format={percent => `${percent/20}`}
      />

      </div>
    </div>
    </div>
  )
}

export default StartingCountdown