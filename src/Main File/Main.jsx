import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Students from '../Pages/Student'
import ContactUs from '../Pages/ContactUs'
import AddNewStudents from '../Component/AddNewStudent'
import EditDetails from '../Component/EditDetails'

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Students' element={<Students/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/AddnewStudent' element={<AddNewStudents/>}/>
      <Route path='/EditDetails' element={<EditDetails/>}/>
    </Routes>
  )
}

export default Main