import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Home from "./Components/Home";
import AllFarmer from "./Components/AllFarmer";
import CustomerSignup from "./Components/CustomerSignup";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import AdminOption from "./Components/AdminOption";


function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/Form" element={<Form/>}/> 
        <Route path="/customer_login" element={<CustomerSignup></CustomerSignup>}/>
        <Route path="/admin_login"  element={<AdminLogin></AdminLogin>}/>
        <Route path="/AdminOption"  element={<AdminOption></AdminOption>}/>

      </Routes>
    </BrowserRouter>
    
   {/* <AllFarmer></AllFarmer>
   <CustomerSignup></CustomerSignup> 
   <Form></Form> */}
    </>
  );
}

export default App;
