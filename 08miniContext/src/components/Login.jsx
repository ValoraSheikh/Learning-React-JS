import React, {useState, useContext} from 'react';
import UserContext from '../context/userContext';

function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const {setuser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setuser({username, password})
    }

return (
    <div>
        <h2>Login</h2>
        <input
        onChange={(e) => setusername(e.target.value)}
        type="text" placeholder='username' />
        <input
        onChange={(e) => setpassword(e.target.value)}
        type="text" placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
)
}

export default Login