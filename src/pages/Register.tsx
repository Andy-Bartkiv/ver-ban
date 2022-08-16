import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/authSlice';
import { register } from '../store/userSlice';
import { useAppSelector } from '../store/hooks';

interface Props {
    
};

const Register: React.FC<Props> = () => {

    const users = useAppSelector((state) => state.user.value);

    const [user, setUser] = useState({name: '', pass: ''});

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(register(user));
        dispatch(login(user.name));
        navigate('/app-store', {state: {registered: true}});
    }

    return (
        <div className="page">
            <h2>Registration Screen</h2>
            <div className='custom-input'>
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

export default Register;