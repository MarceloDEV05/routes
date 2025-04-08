import { Link } from "react-router-dom"
import './style.css'
function Header() {
    return(
        <header>
            <h2>Marcelo DEV</h2>

            <div className="menu">
                <Link to='/'>home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contatos'>Contatos</Link>
            </div>
        </header>
    )
}

export default Header