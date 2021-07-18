import { useEffect, useRef } from "react";

const InputRef = ()=>{

 const elementRef = useRef();

 useEffect(()=>{
     console.log(elementRef);
    elementRef.current.focus();

 },[])
 
    return <>
    <input  ref={elementRef} type="text"/>
    </>
}
export default InputRef;