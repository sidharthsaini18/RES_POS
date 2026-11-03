
import Login from "./components/login"
import Signup from "./components/signup"
import Home from "./pages/home"
import{BrowserRouter,Routes,Route} from "react-router-dom"


const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route  path="signup" element={<Signup/>}/>
     </Routes>
    </BrowserRouter>
     
    </>
  )
}
export default App