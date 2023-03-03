import axios from "axios";
import { useState } from "react";

const DemoWithDiffPackage = () => {
    const [res,setRes] = useState("");
      const callApi = async() => {
   setRes(await axios.get("http://localhost:9000/diffpackage"));
      }
    return (
      <div>
           { 
          res?.data?.Response?.map((part,index) => {
              let color = part.added ? 'green' :
              part.removed ? 'red' : 'grey';
              return(
                  <span style={{color : color}} key={index}>{part.value}  <br/> </span>
          )  
          })
      } 
      <br/>
          <button onClick={() => callApi()}> Compare</button>
      </div>
    )
  }

  export default DemoWithDiffPackage