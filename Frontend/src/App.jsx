import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import SingleBlog from "./pages/SingleBlog"
import BlogFrom from "./components/BlogForm"

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/single-blog/:id' element={<SingleBlog/>}/>
    <Route path='/create-blog' element={<BlogFrom/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
