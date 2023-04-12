import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from '../Component/TableRow';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';
const Students = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.student);
  const AddNewStudent = () => {
    navigate('/AddnewStudent')

  }


  return (
    <div>
      <Navbar />
      <header className='first-FlexContainer'>
        <h1>Student Details</h1>
        <button className='butn' onClick={AddNewStudent}>Add New Student</button>
      </header>
      <div id='all'>
      <div className='table'>
        <table  className='tableone'>
          <thead>
            <tr>
              <th className='head'>Name</th>
              <th className='head'>Age</th>
              <th className='head'>Course</th>
              <th className='head'>Batch</th>
              <th className='head'>Change</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((student) => {
                return (
                  <tr key={student.id}>
                    <TableRow student={student} />
                  </tr>
                )
              })
            }
          </tbody>
          </table>
          </div>
      </div>
    </div>
  )
}

export default Students