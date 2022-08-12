import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/features/auth/authSlice';

interface User {
    name: string,
    pass: string
};

const Login: React.FC = () => {

    const [user, setUser] = useState({name: '', pass: ''});

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(login());
        navigate(('/app-store'));
    }

    return (
        <div className="page">
            <h2>Login Screen</h2>
            <div>
                <input type='text' placeholder='User name' 
                    value={ user.name } 
                    onChange= { e => setUser({...user, name: e.target.value})}
                />
                <input type='text' placeholder='Password'
                    value={ user.pass } 
                    onChange= { e => setUser({...user, pass: e.target.value})}
                />
            </div>
            <div>{user.name + ': ' + user.pass}</div>
            <button onClick={ handleSubmit }>Submit</button>
            <button onClick={() => navigate(('/'))}>Cancel</button>
        </div>
    )
};

export default Login;