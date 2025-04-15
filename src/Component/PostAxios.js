import React, { useState } from 'react'
import Axios from 'axios'
const baseUrl = "https://jsonplaceholder.typicode.com/posts/";


function PostAxios() {
    const [myTitle, setTitle] = useState('')
    const [myBody, setBody] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post(baseUrl, {
            title: myTitle,
            body: myBody
        })
            .then((resp) => {
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <div style={{textAlign:'center', margin:'50px 50px'}}>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Enter title:</label>
                    <input type="text" name='title' value={myTitle} onChange={(e) => setTitle(e.target.value)} />
                    <br /><br />
                    <label htmlFor="">Enter name:</label>
                    <input type="text" name='name' value={myBody} onChange={(e) => setBody(e.target.value)} />
                    <br /><br />
                    <input type="submit" value="Post" />
                </form>
            </div>
        </>
    )
}

export default PostAxios
