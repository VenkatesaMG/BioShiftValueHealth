import Medical from "../components/medical";
 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import App from "./App";
 function App2(){
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route index element={<Medical/>}></Route>
    <Route path="/home" element={<App />}></Route>
  </Routes>
  </BrowserRouter>
</div>
  )
 }
 export default App2