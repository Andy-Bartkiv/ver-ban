import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/authSlice';

interface Props {
};

const AppStore: React.FC<Props> = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const state = useLocation().state as Reg;

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div className="page">
            <button onClick={ handleLogout }>Log Out</button>
            <h2>App Store Screen</h2>
            <h4>Congrats! You have successfully {(state.registered) ? 'register' : 'login' } to Ver-Ban </h4>
            <div className="apps">{
                [1,2,3,4,5].map(app => {
                    const text = `App ${app}`;
                    return (
                        <button key={app}
                            onClick={() => console.log(text)}
                        >{ text }
                        </button>)
                })
            }
            </div>
        </div>
    )
};

export default AppStore;