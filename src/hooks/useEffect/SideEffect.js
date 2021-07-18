import { useEffect, useState } from "react";

const SideEffect =() =>{
    
    const message = 'Swapnil';
    const [count, setCount]= useState(0);
    useEffect(()=>{
        console.log('use effect running');
        document.title= `hello ${message} ${count}`; 
    },[]);
    const handlerClick =()=>{
        console.log('check side effect');
        setCount(prev=> prev+1);
    }
    
    return <>
    <span>use effect run only inital rendering due to empty dependency- component did mount</span>
    <div><button onClick={handlerClick}>update title</button></div>
    </>
}
export default SideEffect;