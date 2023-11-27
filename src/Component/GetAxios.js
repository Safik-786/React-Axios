import React from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios'
// const baseUrl= "https://jsonplaceholder.typicode.com/posts/1";
const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

function GetAxios() {
    const [mydata, setdata] = useState([])
    useEffect(() => {
        Axios.get(baseUrl).then((response) => {
            console.log(response.data)
            setdata(response.data)
        })

    }, [])
    return (
        <>
            {
                // console.log(Array.isArray(mydata))

                mydata.map((item,key) => {
                    const { id, title, body } = item;
                    return (
                        <div key={key} className='data'>
                            <h2>id: {id}</h2>
                            <h3>title: {title}</h3>
                            <h4>body: {body}</h4>
                            <h4>body Slice: {body.slice(0,50).toUpperCase()}</h4>
                        </div>
                    )
                })
            }


            {/* <h2>id:      {mydata.id}</h2>
      <h2>title:  {mydata.title}</h2>
      <h2>body:    {mydata.body}</h2> */}

        </>
    )
}

export default GetAxios
