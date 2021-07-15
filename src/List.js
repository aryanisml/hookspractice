import React from 'react';
const List =React.memo(({users, removeHandler})=>{
    console.log(`render child`);
    return <>
        {users && users.length > 0 ? 
        users.map((item , index)=>(
            <>
            <div key={index}>{item}</div>
            <button onClick={()=> removeHandler(item)}>Remove</button>
            </>
        )):''
    }
   
    </>
})

export default List;