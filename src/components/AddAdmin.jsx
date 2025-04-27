import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import fachdata from './services/URL_api';

function AddAdmin() {  
    const [newAdmin, setNewAdmin] = useState({ user: '', password: '' });  
    const [admins, setAdmins] = useState([]);  

    useEffect(() => {  
        const getadd = async () => {  
            const res = await fachdata.get('/user');  
            setAdmins(res.data);  
        };  
        getadd();  
    }, []);  

    const upinput = (e) => {  
        setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });  
    };  
    const handleAddAdmin = async (e) => {  
        e.preventDefault();  

        await fachdata3.post('/user', newAdmin);  
        setAdmins([...admins, newAdmin]);   
        setNewAdmin({ user: '', password: '' });  
    };  

    return (  
        <div className="form-container">  
            <h2>اضافه کردن ادمین</h2>  
            <form onSubmit={handleAddAdmin}>  
                <input type="text" name="user" value={newAdmin.user} onChange={upinput}/>  
                <input type="password" name="password" value={newAdmin.password} onChange={upinput}                       />  
                <button type="submit">ok</button>  
            </form>  
            <div>   
                <ul>  
                    {admins.map((admin) =>   
                        <li>user :  {admin.user} : pass : *********</li>  
                    )}  
                </ul>  
            </div>  
        </div>  
    );  
}  
export default AddAdmin;  