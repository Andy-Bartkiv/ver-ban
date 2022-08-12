import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/features/auth/authSlice';

interface Props {
    
};

const AppStore: React.FC<Props> = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div className="page">
            <button onClick={ handleLogout }>Log Out</button>
            <h2>App Store Screen</h2>
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