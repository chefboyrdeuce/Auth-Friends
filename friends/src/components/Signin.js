import React, { useState }from 'react';
// import { Route } from 'react-router-dom';

import axios from 'axios';

function Signin(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post("http://localhost:5000/api/login", data)
            .then(result => {
                console.log(result.data)
                localStorage.setItem("token", result.data.payload)
                console.log(localStorage)
            })
            .catch(error => {
                setError(error.response.data)
            })
    }

    return (



        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}

            <input type="text" name="username" placeholder="Username" value={data.username} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange}/>

            <button type="submit">Sign In</button>


        </form>
    )
}

export default Signin
