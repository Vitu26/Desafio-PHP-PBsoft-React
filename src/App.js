import React, {  } from "react";
import "./App.css";
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Header from './Component/Header';
import Home from './Component/Home';
import Addproduct from './Component/Addproduct';
import Productlist from './Component/Productlist';
import EditProduct from './Component/Editproduct';
function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/addproduct" element={<Addproduct/>}/>
              <Route exact path="/productlist" element={<Productlist/>}/> 
              <Route path="editproduct/:id/edit" element={<EditProduct />} />
            </Routes>
        </Router>
        
 </div>
  );
}
 
export default App;