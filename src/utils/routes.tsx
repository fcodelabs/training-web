import Home from '../../src/pages/DiaryHome/home';
import { Routes, Route} from 'react-router-dom';
import Login from '../../src/pages/SignInPage/Login';

export default function Routings() {
    return (
        <div>
            <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='home' element={<Home/>}>
                <Route path=':userName' element={<Home/>}/>
            </Route>
            </Routes>
        </div>
    );
}