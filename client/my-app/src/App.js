import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Home from "./Components/Home";
import AllFarmer from './Components/AllFarmer';

function App() {
  return (
   <>
   <Navbar></Navbar>
   {/* <Home></Home> */}
   <Form></Form>
   <AllFarmer></AllFarmer>
   </>
  );
}

export default App;
