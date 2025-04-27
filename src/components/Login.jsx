import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  

const validCredentials = {  
  username: "admin",  
  password: "7410",  
};  

function Login() {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const navigate = useNavigate();  

  const handleLogin = (e) => {  
    e.preventDefault();  

    if (username === validCredentials.username && password === validCredentials.password) {  
      navigate('/dashboard');  
    }  
  };  

  return (  
    <div className="auth-container">  
      <h2>ورود</h2>  
      {error && <p className="error">{error}</p>}  
      <form onSubmit={handleLogin}>  
        <input  
          type="text"  
          placeholder="نام کاربری"  
          value={username}  
          onChange={(e) => setUsername(e.target.value)}  
          required  
        />  
        <input  
          type="password"  
          placeholder="رمز عبور"  
          value={password}  
          onChange={(e) => setPassword(e.target.value)}  
          required  
        />  
        <button type="submit">ورود</button>  
      </form>  
    </div>  
  );  
}  

export default Login;  