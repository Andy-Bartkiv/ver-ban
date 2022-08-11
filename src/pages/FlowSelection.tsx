import { useNavigate } from 'react-router-dom';

interface Props {
    
};

const FlowSelection: React.FC<Props> = () => {

    const navigate = useNavigate();

    return (
        <div className="page">
            <h2>Screen 1 - Flow selection screen</h2>
            <ul>
                <li>As a user I want to be presented with 2 buttons: “Login with Existing User” and “Register New User”</li>
                <li>As a user I want to be navigated to Screen 2 - Registration screen upon pressing “Register New User” button</li>
                <li>As a user I want to be navigated to Screen 3 - Login screen upon pressing “Login with Existing User”</li>
            </ul>
            <button onClick={() => navigate(('/login'))}>Login with Existing User</button>
            <button onClick={() => navigate(('/register'))}>Register New User</button>
        </div>
    )
};

export default FlowSelection;