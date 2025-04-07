import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contatos from './pages/Contatos'
import Login from './pages/Login'


function RoutesApp() {
    return(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/sobre" element={ <Sobre/> } />
            <Route path='/contatos' element={ <Contatos/> }/>
            <Route path='/login' element={ <Login/> }/>
        </Routes>
    </BrowserRouter>

    )
}

export default RoutesApp;