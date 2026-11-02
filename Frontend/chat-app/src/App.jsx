import {BrowserRouter,Routes,Route} from "react-router-dom"
import Left from "./leftPart/Left";
import Right from "./Rightpart/Right";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import { useState } from "react";

function App(){
  //return<div className="flex h-screen overflow-hidden">
  //<Left/>
  //<Right/>
  //return <Signup/>
  //</div>
const [selectedUser, setSelectedUser] = useState(null);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={
        <div className="flex h-screen overflow-hidden">
<Left onSelectUser={setSelectedUser} />   
       <Right selectedUser={selectedUser}/>
        </div>

      }/>
            <Route path="/login" element={<Login/>}/>


    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App;
