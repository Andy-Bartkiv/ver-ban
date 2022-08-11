import { useNavigate } from 'react-router-dom';

interface Props {
    
};

const Register: React.FC<Props> = () => {

    const navigate = useNavigate();

    return (
        <div className="page">
            <h2>Registration Screen</h2>
            <button onClick={() => navigate(('/app-store'))}>Submit</button>
            <button onClick={() => navigate(('/'))}>Cancel</button>
        </div>
    )
};

export default Register;