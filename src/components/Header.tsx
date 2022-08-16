import { useAppSelector } from '../store/hooks';

const Header: React.FC = () => {

    const userName = useAppSelector((state) => state.auth.value);

    return (
        <div className="App-header">
            <header>VER - BAN</header>
            { (userName) &&
                <div className="user-name">{ userName }</div>
            }
        </div>
    )

}

export default Header;