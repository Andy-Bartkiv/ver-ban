import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/authSlice';
import { useAppSelector } from '../store/hooks';
import ModalMsg from '../components/UI/modal/ModalMsg';

const Login: React.FC = () => {

    const users = useAppSelector((state) => state.user.value);
    const [user, setUser] = useState<User>({name: '', pass: ''});
    const [modal, setModal] = useState<false | string >(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        const userIndex = users.findIndex(u => u.name === user.name);
        if (userIndex < 0) {
            setModal(`Error: User ${user.name} does not exist`);
            setUser({name: '', pass: ''});
        } else if (users[userIndex].pass !== user.pass) {
            setModal(`Error: Incorrect password`);
            setUser({...user, pass: ''});
        } else {
            dispatch(login(user.name));
            navigate('/app-store', {state: {newUser: false}});
        }
    }

    return (
        <div className="page">
            <ModalMsg msg={modal} setVisible={setModal}/>
            <h2>Login Screen</h2>
            <div className='custom-input'>
                <input type='text' placeholder='User email' 
                    value={ user.name } 
                    onChange= { e => setUser({...user, name: e.target.value})}
                />
                <input type='text' placeholder='Password'
                    value={ user.pass } 
                    onChange= { e => setUser({...user, pass: e.target.value})}
                />
            </div>
            {/* <div>{user.name + ': ' + user.pass}</div> */}
            <button onClick={ handleSubmit }>Submit</button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
    )
};

export default Login;