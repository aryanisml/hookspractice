import InputRef from "./InputExample"
import LoginRefButton from "./RefExample"
import LoginStateButton from "./StateExample"

const RefMainExample = ()=>{
    return <>
     <hr />
      <br />
      <h2>Use Ref Examples</h2>
       <div>
           <LoginRefButton />
           <LoginStateButton />
           <InputRef />
       </div>
    </>
    
}

export default RefMainExample;