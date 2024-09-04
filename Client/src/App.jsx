import { Route, Routes } from "react-router-dom";

// Components
import Login from '../src/Auth/Login'
import Signup from '../src/Auth/Signup'
import Home from "./components/pages/Home";
import { Toaster } from 'react-hot-toast';
import MyAccount from "./components/MyAccount";

function App() {


  return (
    <>
      <Toaster />
      <Routes>
        <Route path="myaccount/*" element={<MyAccount />} />
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>

    </>
  )
}

export default App
