import React from "react";
import {Routes,Route
} from "react-router-dom";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import Signup from "./Component/Signup";
import Account from "./Pages/Account";
import Home from "./Pages/Home";




function App() {
  return(
    <>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/account' element={<Account />} />
        </Routes>
    </>
  )
}

export default App;
