import { useEffect, useState } from "react";

export default function Toast({condition,conditionToast}) {
    const [state,setState] = useState(100);

    useEffect(()=>{
      if(state>0){
        setTimeout(()=>{
          setState(prev=> prev -= 2)
        },50)
      }
    },[state])

    setTimeout(()=>{
      conditionToast(false);
      setState(100)
    },2000)

  return (
    <>
        <div className="toast toast-end bottom-0 top-[50%] translate-y-[-50%] translate-x-[0]">
        <div className="alert shadow-2xl relative">
          <span>Already Existed</span>
          <span className="h-[10px] bg-red-500 rounded-lg absolute bottom-0" style={{width:`${state}%`}}></span>
        </div>
      </div>
    </>
  );
}
