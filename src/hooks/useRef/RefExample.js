import { useRef } from "react";

const LoginRefButton =()=>{

    const ref = useRef(0);
    const handleClick =()=>{
        ref.current ++;
        console.log(ref.current);
    }
    console.log('render....');
    return <>
        <button onClick={handleClick}>Ref Click</button>
    
    </>


}

export default LoginRefButton;