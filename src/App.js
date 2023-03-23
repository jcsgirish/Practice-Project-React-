import React ,{useState}from 'react';
import User from './components/Users/User';
import UserList from './components/Users/UserList';

function App() {
  const [userList,setuserlist]=useState([])

  const AddUserhandler=(uName,uage)=>{
    setuserlist((prevuserlist)=>{
      return[...prevuserlist,{name:uName,age:uage,id:Math.random().toString()}]

    })};
  return (
  
    <div>
    <User onadduser={AddUserhandler}></User>
    <UserList users={userList}></UserList>

    </div>
  );
}

export default App;
