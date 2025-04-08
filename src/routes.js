import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contatos from './pages/Contatos'
import Login from './pages/Login'
import Erro from './pages/Erro'

import Header from './Components/Header'

function RoutesApp() {
    return(

    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/sobre" element={ <Sobre/> } />
            <Route path='/contatos' element={ <Contatos/> }/>
            <Route path='/login' element={ <Login/> }/>

            <Route path='*' element={<Erro/>}/>
        </Routes>
    </BrowserRouter>

    )
}

export default RoutesApp;