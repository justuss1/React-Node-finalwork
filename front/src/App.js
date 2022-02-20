import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import MainContext from "./context/MainContext";
import Navigation from './components/Nav'
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage"
import CreateUserPage from "./Pages/CreateUserPage"
import OrderPage from "./Pages/OrderPage"

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div>

      <BrowserRouter>
      <Navigation/>
  
      
      <Routes>
        <Route path={'/'} element={<MainPage/>} />

        <Route path={'/registerUser'} element={<CreateUserPage/>}/>
      
        <Route path={'/login'} element={<LoginPage/>}/>

        <Route path={'/createorder'} element={<OrderPage/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
