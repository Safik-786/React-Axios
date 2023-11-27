import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
    const navigate = useNavigate()
    const [myname, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://65622c26dcd355c08324a2cb.mockapi.io/Crud', {
            Emp_name: myname,
            Emp_age: age,
            Emp_email: email,

        })
            .then((Response) => {
                navigate('/read')

            })
    }
    
    return (
        <>
            <div className='row d-flex justify-content-center my-5 no-gutters'>

                <div className='col-md-4  border-danger p-0 shadow'>
                    <div className='bg-danger p-3  text-center border '>
                        <h2>Create Data</h2>
                    </div>
                    <form className=' py-4 px-5 ' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Enter name:</label>
                            <input type="text" placeholder='Name' className='form-control' value={myname} onChange={(e) => setName(e.target.value)} />
                        </div><br />
                        <div className='form-group'>
                            <label>Enter age:</label>
                            <input type="number" placeholder='Age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)} />
                        </div><br />
                        <div className='form-group'>
                            <label>Enter Email:</label>
                            <input type="email" placeholder='e-mail' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div><br />
                        <div className='d-grid'>

                            <input type="submit" value="Submit" className='btn btn-danger' />
                        </div>
                    </form>

                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary' onClick={() => navigate('/read')}>Go To Read Page</button>
                </div>
            </div>
        </>
    )
}

export default Create
