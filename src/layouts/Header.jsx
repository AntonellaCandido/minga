import React from 'react'
import "../styles/Header.css"

const Header = () => {
    return (
        <header>
            <nav>
                <a href=" ">Home (con Logo)</a>
                <a href="./comics.html">Comics</a>
                <a className='login-button' href=" ">Iniciar Sesión</a>
            </nav>
            <div className='section'>
            <span>
                Anunciamos nuestra próxima ronda de financiación. <a href=" ">Leer más →</a>
            </span>
            <h1>Tu tienda de comics favorita</h1>
            <p className='center'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <a className='button-started'href=" ">Empezar → </a>
        </div>
        </header>
    
    )
}

export default Header
