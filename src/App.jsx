import './App.css'
import { Home } from './pages/Home';
import { SmartPhoneList } from './pages/SmartPhoneList';
import { BudsList } from './pages/BudsList';
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/smartphones" element={<SmartPhoneList/>}/>
        <Route path='/earbuds' element={<BudsList/>}/>
      </Routes>
    </>
  )
}

export default App
