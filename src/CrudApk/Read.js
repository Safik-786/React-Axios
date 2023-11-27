import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

function Read() {
    const [apiData, setApiData] = useState([])
    const navigate = useNavigate()

    const getData = () => {
        axios.get('https://65622c26dcd355c08324a2cb.mockapi.io/Crud')
            .then((Response) => {
                console.log(Response.data)
                setApiData(Response.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://65622c26dcd355c08324a2cb.mockapi.io/Crud/${id}`)
            .then(() => {
                getData()       //    updated data wil be retrive here
            })
    }

    
    const setDataToStorage = (id,name,age,email)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("age",age)
        localStorage.setItem("email",email)
    }


    return (
        <div className='row my-4 '>


            <div className='col-md-12'>
                <table className='table table-bordered table-striped table-danger table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>Age</th>
                            <th>E-MAIL</th>
                            <th>Edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {



                            apiData.map((items, key) => {
                                const { id, Emp_name, Emp_age, Emp_email } = items;             // destructure
                                return (
                                    <tr key={key}>
                                        <td>{id}</td>
                                        <td>{Emp_name}</td>
                                        <td>{Emp_age}</td>
                                        <td>{Emp_email}</td>
                                        <td>
                                            <Link to="/edit">
                                            <button className='btn btn-success' onClick={()=>setDataToStorage(id,Emp_name, Emp_age,Emp_email )}>
                                                Edit
                                            </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => {
                                                if (window.confirm('Are you sure to delete data ?')) {
                                                    handleDelete(id)
                                                }
                                            }

                                            }>

                                                DELETE
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>

                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary mb-3 ' onClick={() => navigate('/create')}>Insert Data</button>
                </div>

            </div>
        </div>
    )
}

export default Read
