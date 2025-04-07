import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
        <h1>Pagina de home</h1>
        <div>Ola mundo</div>
        

        <Link to="/sobre">Sobre</Link><br/>
        <Link to="/login">login</Link><br/>
        <Link to="/contatos">contatos</Link>
        
        </div>
    )
}

export default Home