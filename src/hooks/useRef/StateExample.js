import { useState } from "react";

const LoginStateButton =()=>{

  const [count,setCount] = useState(0);
  const handlerClick =() =>{
      setCount(prev=> prev+1);
      console.log(count);
  }

  console.log('state render...');
  return <>
   <button onClick={handlerClick}>StateClick</button>
    </>

}

export default LoginStateButton;