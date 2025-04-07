function Login() {
    return( 
        <div className="container">
            <form>
                <label>Nome Completo:</label>
                <input placeholder="Digite seu nome Completo"/>
                <br/><br/>

                <label>Email:</label>
                <input placeholder="Digite seu Email"/>
                <br/><br/>

                <label>Password:</label>
                <input type="password" placeholder="Digite sua senha"/>
                <br/><br/>

                <input type="submit" value='Cadastrar'/>
            
            </form>
        </div>
    )
}

export default Login