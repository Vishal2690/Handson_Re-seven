import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { studentAdded } from '../Features/StudentSlice';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';

const AddNewStudents = () => {
    const data = useSelector((state) => state.student);
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Course, setCourse] = useState("");
    const [Batch, setBatch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cancelAddStudent = () => {
        navigate("/Students");

    }

    const SubmitNewStudent = () => {
        if (Name && Age && Course && Batch) {
            dispatch(studentAdded({
                "id": data.length,
                "Name": Name,
                "Age": Age,
                "Course": Course,
                "Batch": Batch
            }))
            navigate("/Students")

        }

    }
    return (
        <div>
            <Navbar />
            <div className='Main'>
                <div className='sub-main'>
                    <fieldset>
                        <label>Name</label>
                        <input type='text' name='Name' placeholder='Enter name' value={Name} onChange={(e) => setName(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <label>Age</label>
                        <input type='text' name='Age' placeholder='Enter Age' value={Age} onChange={(e) => setAge(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <label>Course</label>
                        <input type='text' name='Course' placeholder='Enter Course' value={Course} onChange={(e) => setCourse(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <label>Batch</label>
                        <input type='text' name='Batch' placeholder='Enter Batch' value={Batch} onChange={(e) => setBatch(e.target.value)} />
                    </fieldset>
                </div>
            </div>
            <div className='btn'>
                <button onClick={cancelAddStudent} style={{ backgroundColor: 'gray' }}>Cancel</button>
                <button  onClick={SubmitNewStudent}>Submit</button>
            </div>
        </div>
    )
}

export default AddNewStudents