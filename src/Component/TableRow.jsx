import React from 'react'
import { Link } from 'react-router-dom'

const TableRow = ({ student, student: { id, Name, Age, Course, Batch, }, }) => {
  return (
    <div className='table'>
      <table className='table1'>
        <tbody>
        <tr>
          <td className='head1'>{Name}</td>
          <td className='head1'>{Age}</td>
          <td className='head1'>{Course}</td>
          <td className='head1'>{Batch}</td>
          <td className='head1'>
            <Link to='/EditDetails' state={{ id }}>Edit</Link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableRow