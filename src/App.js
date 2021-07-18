import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import List from './List';
import RefMainExample from './hooks/useRef/RefMain';
import EffectMain from './hooks/useEffect/EffectMain';

function App() {
  const [users, setUsers] = useState([]);
  const [userItem, setUserItem]= useState('');
  const handleText = (e)=>{
      setUserItem(e.target.value);
  }
  const addClick=()=>{
    setUsers((prev)=> prev.concat(userItem));
    setUserItem('');
  }
  const removeClick = useCallback(
    (item)=>{
      setUsers(()=> users.filter(data => data != item))
    }
  ,[users]);
  
 
  return (
     <>
        <input type="text"  value={userItem} onChange={handleText}/>
        <button onClick={addClick}>Add</button>
         <List  users={users} removeHandler={removeClick}/>
         <RefMainExample />
         <EffectMain />
     </>
  );
}

export default App;
