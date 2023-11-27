import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const [id, setId] = useState(0);
    const [age, setAge] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem('id'))  // key name of set and get (local Storage ) should be same
        setName(localStorage.getItem('name'))  
        setAge(localStorage.getItem('age'))  
        setEmail(localStorage.getItem('email'))  
    }, [])

    const handleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`https://65622c26dcd355c08324a2cb.mockapi.io/Crud/${id}`, {  // ye "id" id wala state me se aa rahi hai 
        Emp_name: name,
        Emp_age: age,
        Emp_email: email,
        })  
        .then(()=>{
            navigate('/read')
        }) 
    }
    return (
        <>
            <div className='row d-flex justify-content-center my-5 no-gutters'>

                <div className='col-md-4  border-danger p-0 shadow'>
                    <div className='bg-danger p-3  text-center border '>
                        <h2>Update Data</h2>
                    </div>
                    <form className=' py-4 px-5 ' onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label>Enter name:</label>
                            <input type="text" placeholder='Name' value={name} onChange={ (e)=> setName(e.target.value)} className='form-control' />
                        </div><br />
                        <div className='form-group'>
                            <label>Enter age:</label>
                            <input type="number" placeholder='Age' value={age} onChange={(e)=> setAge(e.target.value)} className='form-control' />
                        </div><br />
                        <div className='form-group'>
                            <label>Enter Email:</label>
                            <input type="email" placeholder='e-mail'value={email} onChange={ (e)=> setEmail(e.target.value)} className='form-control' />
                        </div><br />
                        <div className='d-grid'>

                            <input type="submit" value="Update" className='btn btn-danger' />
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

export default Edit
