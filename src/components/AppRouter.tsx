import { Route, Routes, Navigate } from "react-router-dom";
import FlowSelection from "../pages/FlowSelection";
import Login from "../pages/Login";
import AppStore from "../pages/AppStore";
import Register from "../pages/Register";
import { useAppSelector } from '../store/hooks';

const AppRouter: React.FC = () => {

  const isAuth = useAppSelector((state) => state.auth.value);
  console.log(isAuth);
  

  return (
    <div className="App-body">
        <Routes >
            <Route path="/" element = { <FlowSelection /> }/>
            <Route path="/register" element = { <Register /> }/>
            <Route path="/login" element = { <Login /> }/>
            { (isAuth) &&
              <Route path="/app-store" element = { <AppStore /> }/>
            }
            <Route path="/*" element = { <Navigate replace to="/" /> }/>
        </Routes>
    </div>
  )
}

export default AppRouter;