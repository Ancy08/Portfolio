import Navbar from "./components/common/Navbar"
import Home from "./components/Home"
import Blogs from "./components/Blogs"
import Login from "./components/Login"
import Signup from "./components/Signup"
import About from "./components/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="px-10 bg-gray border rounded-md">
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/login" element={  <Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App