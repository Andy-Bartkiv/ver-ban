import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/authSlice';
import { register } from '../store/userSlice';
import { useAppSelector } from '../store/hooks';
import ModalMsg from '../components/UI/modal/ModalMsg';

interface Props {
};

const Register: React.FC<Props> = () => {

    const users = useAppSelector((state) => state.user.value);

    const [user, setUser] = useState<User>({name: '', pass: ''});
    const [otherStuff, setOtherStuff] = useState<string>('');
    const [modal, setModal] = useState<false | string >(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        const userIndex = users.findIndex(u => u.name === user.name);
        if (userIndex >= 0) {
            setModal(`Error: User ${user.name} already exist`);
            setUser({name: '', pass: ''});
            setOtherStuff('');
        } else if (user.name.length < 1) {
            setModal(`Error: Invalid email address`);
            setUser({...user, pass: ''});
            setOtherStuff('');
        } else if (user.pass.length < 1) {
            setModal(`Error: Password does not meet criteria`);
            setUser({...user, pass: ''});
            setOtherStuff('');
        } else {
            dispatch(register(user));
            dispatch(login(user.name));
            navigate('/app-store', {state: {newUser: true}});
        }
    }

    return (
        <div className="page">
            <ModalMsg msg={modal} setVisible={setModal}/>
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
                <input type='text' placeholder='Other stuff'
                    value={ otherStuff }
                    onChange= { e => setOtherStuff(e.target.value)}
                />
            </div>
            {/* <div>{user.name + ': ' + user.pass}</div> */}
            <button onClick={ handleSubmit }>Submit</button>
            <button onClick={() => navigate(('/'))}>Cancel</button>
        </div>
    )
};

export default Register;