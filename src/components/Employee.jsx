import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Employee = ({employee, deleteEmployee}) => {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`)
    };

  return (
    <tr>
    <td className="text-left px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-800">{employee.firstName}</div>
    </td>
    <td className="text-left px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-800">{employee.lastName}</div>
    </td>
    <td className="text-left px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-800">{employee.emailId}</div>
    </td>
    <td className="text-left px-6 py-4 whitespace-nowrap font-medium text-sm">
      <div className="text-sm text-gray-800">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-white bg-sky-500 py-1 px-3 mr-2 hover:bg-sky-700 px-4 hover:cursor-pointer inline-flex items-center"
        >
        <FiEdit className='inline-block mr-0.5'/> Edit
        </a>
        <a
          onClick = {(e, id) => deleteEmployee(e, employee.id)}
          className="text-white px-4 hover:cursor-pointer bg-red-500 py-1 px-3 hover:bg-red-700 inline-flex items-center"
        >
        <RiDeleteBinLine className='inline-block mr-0.5'/>  Delete
        </a>
      </div>
    </td>
  </tr>
  )
}

export default Employee