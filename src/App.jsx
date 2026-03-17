import './App.css'
import { Home } from './pages/Home';
import { SmartPhoneList } from './pages/SmartPhoneList';
import { BudsList } from './pages/BudsList';
import { FilterPage } from './components/Filters/FilterPage';
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/smartphones" element={<SmartPhoneList/>}/>
        <Route path='/earbuds' element={<BudsList/>}/>
        <Route path='/filter' element={<FilterPage/>}/>
      </Routes>
    </>
  )
}

export default App
