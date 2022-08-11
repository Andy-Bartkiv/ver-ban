import { useNavigate } from 'react-router-dom';

interface Props {
    
};

const Login: React.FC<Props> = () => {

    const navigate = useNavigate();

    return (
        <div className="page">
            <h2>Login Screen</h2>
            <div>
                <input type='text' placeholder='User name'/>
                <input type='text' placeholder='Password'/>
            </div>
            <button onClick={() => navigate(('/app-store'))}>Submit</button>
            <button onClick={() => navigate(('/'))}>Cancel</button>
        </div>
    )
};

export default Login;