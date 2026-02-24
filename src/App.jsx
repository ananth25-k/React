// import Autocomplet from "./Components/Concepts/Autocomplete"
// import Buttons from "./Components/Concepts/Buttons";
// import Clicks from "./Components/Concepts/Clicks";
// import Imagefun from "./Components/Concepts/Imagefun";
// import Search from "./Components/Concepts/Inputsearch";
// import Papercard from "./Components/Concepts/Papercard";
import Login from "./Components/Login/Login";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navmenu from "./Components/Navmenu";
import Signup from "./Components/Login/Signup";
import Forgotpassword from "./Components/Login/Forgotpassword";
import Resetpassword from "./Components/Login/Resetpassword";
import Mobiles from "./Components/Mobiles";
import Sidemenu from "./Components/Sidemenu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/inputsearch" element={<Search />} /> */}
          {/* <Route path="/button" element={<Buttons />} /> */}
          {/* <Route path="/dropdownsearch" element={<Autocomplet></Autocomplet>}/> */}
          {/* <Route path="/accordion" element={<Clicks></Clicks>}/> */}
          {/* <Route path="/img" element={<Imagefun></Imagefun>}></Route> */}
          {/* <Route path="/card" element={<Papercard></Papercard>}></Route> */}
          <Route path="/nav" element={<Navmenu/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
          <Route path="/resetpassword" element={<Resetpassword/>}></Route>
          <Route path="/Mobiles" element={<Mobiles/>}></Route>

         
         
          



        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;
