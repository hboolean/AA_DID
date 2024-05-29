import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理注册逻辑，例如发送请求到服务器进行用户创建
    console.log('Registering with:', email, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button onClick={handleSubmit} className='login-button'>
            Login
        </Button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
