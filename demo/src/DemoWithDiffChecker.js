import React, { useState } from 'react'
import axios from 'axios'
import './DemoWithDiffChecker.css'

const DemoWithDiffChecker = () => {
  const [res,setRes] = useState("");
    const callApi = async() => {
      setRes(await axios.get("http://localhost:9000/diffchecker"));
      if(res)
      {
        console.log("RES : ",res.data.Response)
      }
    }
  return (
    <div >

{ res ? <div dangerouslySetInnerHTML={{__html:res?.data?.Response}}/> : "No Data"}
<br/>
        <button onClick={() => callApi()}> Compare </button>
    </div>

  )
}

export default DemoWithDiffChecker