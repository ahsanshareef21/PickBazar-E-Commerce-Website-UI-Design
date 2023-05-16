import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Header, Main, Registor, Silder } from './component/Index';
import Join from "./component/Join/Join";
import Faq from "./component/Fqa/Faq";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/registor" element={<Registor/>}/>
    <Route path="/join" element={<Join/>}/>
    <Route path="/fqa" element={<Faq/>}/>


    
    </Routes>
    
    {/* <Silder/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
