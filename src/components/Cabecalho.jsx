import { useState } from "react";
import { Link } from "react-router-dom";
import '../SASS/Cabecalho.scss'

export default function Cabecalho(){

    const[userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))

    const handleLogout = ()=>{
        sessionStorage.removeItem("usuarioLogado")
        window.location.reload();
    }

    return(
        <>
        <section className="cabecalho_geral"> 
            <div className="titulo_cabecalho"> 
                <h1> MedSearch </h1>

                <div className="cliente"> 
                    <p> {userLogado !=null ? `Usuario: ${userLogado.nome}`:""} </p>
                    <p> {userLogado !=null ? `Email: ${userLogado.email}`:""} </p>
                </div>
            </div>

            <div className="rotas"> 
                <Link to="/" className="Home"> Home </Link>
                <Link to="/login" className="Login"> Login </Link>
                <button onClick={handleLogout} className="deslogar"> Logout </button>
            </div>
        </section>

        </>
    )
}