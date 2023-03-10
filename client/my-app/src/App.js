import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Form from "./Components/Farmer/Form";
import Home from "./Components/Home";
import AllFarmer from "./Components/Admin/AllFarmer";
import CustomerSignup from "./Components/Customer/CustomerSignup";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminOption from "./Components/Admin/AdminOption";
import AllCustomer from "./Components/Admin/AllCustomer";
import CreateAdmin from "./Components/Admin/CreateAdmin";
import ProductInsert from "./Components/Product/ProductInsert";
import ProductDisplay from "./Components/Product/ProductDisplay";
import CustomerLogin from "./Components/Customer/CustomerLogin";
import FarmerLoginPage from "./Components/Farmer/FarmerLoginPage";
import CustomerOption from "./Components/Customer/CustomerOption";
import FarmerOption from "./Components/Farmer/FarmerOption.";
import AllContact from "./Components/Admin/AllContact";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import ProductDetailedDisplay from "./Components/Product/ProductDetailedDisplay";
import Payment from "./Components/Product/Payment";
import StripeContainer from "./Components/Product/StripeContainer";

// import Trying from "./Components/Trying";

function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/About"  element={<About/>}/>
        <Route path="/Form" element={<Form/>}/> 
        <Route path="/customer_login" element={<CustomerSignup></CustomerSignup>}/>
        <Route path="/admin_login"  element={<AdminLogin></AdminLogin>}/>
        <Route path="/AdminOption"  element={<AdminOption></AdminOption>}/>
        <Route path="/AllFarmer" element={<AllFarmer></AllFarmer>}/>
        <Route path="/AllCustomer" element={<AllCustomer></AllCustomer>}></Route>
        <Route path="/CreateAdmin" element={<CreateAdmin></CreateAdmin>}/>
        <Route path="/ProductInsert" element={<ProductInsert></ProductInsert>}/>
        <Route path="/ProductDisplay" element={<ProductDisplay></ProductDisplay>}/>
        <Route path="/CustomerLogin" element={<CustomerLogin></CustomerLogin>}/>
        <Route path="/FarmerLoginPage" element={<FarmerLoginPage></FarmerLoginPage>}/>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/CustomerOption/customer_id/:customer_id" element={<CustomerOption></CustomerOption>}/>
        <Route path="/FarmerOption/farmer_id/:farmer_id" element={<FarmerOption></FarmerOption>}/>    
        <Route path="/AllContact"  element={<AllContact></AllContact>}/>
        <Route path="/ProductDetailedDisplay/product_id/:product_id" element={<ProductDetailedDisplay></ProductDetailedDisplay>}/>
        <Route path="/Payment" element={<StripeContainer></StripeContainer>}/>
        {/* <Route path="/trying" element={<Trying></Trying>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    
   {/* <AllFarmer></AllFarmer>
   <CustomerSignup></CustomerSignup> 
   <Form></Form> */}
    </>
  );
}

export default App;
