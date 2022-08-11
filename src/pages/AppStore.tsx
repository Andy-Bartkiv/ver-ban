import { useNavigate } from 'react-router-dom';

interface Props {
    
};

const AppStore: React.FC<Props> = () => {

    const navigate = useNavigate();

    return (
        <div className="page">
            <button onClick={() => navigate(('/'))}>Log Out</button>
            <h2>App Store Screen</h2>
            <div className="apps">
                <button onClick={() => console.log('App 1')}>App 1</button>
                <button onClick={() => console.log('App 2')}>App 2</button>
                <button onClick={() => console.log('App 3')}>App 3</button>
                <button onClick={() => console.log('App 4')}>App 4</button>
                <button onClick={() => console.log('App 5')}>App 5</button>
            </div>
        </div>
    )
};

export default AppStore;