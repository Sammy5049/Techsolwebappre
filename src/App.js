import Footer from "./Component/Footer";
import Header from "./Header";
import Homepage from "./Homepage";
import { BrowserRouter as Router,Routes, Route  } from "react-router-dom";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Work from "./Work";
import About from "./Component/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<Homepage />}  />
            <Route exact path='/about' element={<About />}  />
            <Route exact path='/work' element={<Work />}  />
            <Route exact path='/pricing' element={<Pricing />}  />
            <Route exact path='/contact' element={<Contact />}  />


        </Routes>
  
           
       
   

        <Footer />
      </Router>
    </>
  );
}

export default App;
