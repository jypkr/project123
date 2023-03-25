import './signup.css';
import React, { useState } from 'react';
import UserAPI from '../../utils/UserAPI'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent form submission from reloading the page
        console.log(username, password, confirm_password);
        try { 
            await UserAPI.createUsers({username, password, confirm_password}).then((res) => {
            console.log(res.data);
        });
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div >
        Sign up
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input 
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input 
                type='text'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />  
          </div>
          <div>
            <label htmlFor='confirm_password'>Confirm password</label>
                <input 
                    type='text'
                    id='confirm_password'
                    value={confirm_password}
                    onChange={(e) => setConfirm_password(e.target.value)}
                />  
          </div>
          <button type='submit'>Sign up</button>
        </form>
    </div>
  )
}

export default Signup