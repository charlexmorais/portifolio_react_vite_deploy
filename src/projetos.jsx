import React from "react";
import {  Link } from "react-router-dom";

function Project() {
    return (
        <div>
            <h1>Projetos</h1>
            <ul>
                <li>
                    <Link to="/controle-despesas">Controle de Despesas</Link>
                </li>
                <li>
                    <Link to="/tempo-hoje">Tempo Hoje</Link>
                </li>
                <li>
                    <Link to="/login-usuarios">Login de Usuários</Link>
                </li>
                <li>
                    <Link to="/login-usuarios">pagina inicial</Link>
                </li>
            </ul>
        </div>
    );
}

export default Project;
